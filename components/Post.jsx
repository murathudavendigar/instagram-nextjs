import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartFillIcon } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import Moment from "react-moment";
import InputEmoji from "react-input-emoji";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Post = ({ id, username, userImg, img, caption, timestamp }) => {
  const { data: session } = useSession();
  const { theme } = useTheme();
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  //? For Comments
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  //? For Likes
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  //? For isLiked ??
  useEffect(() => {
    setIsLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (isLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white dark:border-black my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        {session ? (
          <p
            className="flex-1 font-bold cursor-pointer"
            onClick={() => router.push(`/profile/${username}`)}>
            {username} •{" "}
            <Moment fromNow className="pl-1 font-semibold text-sm">
              {timestamp?.toDate()}
            </Moment>
          </p>
        ) : (
          <p className="flex-1 font-bold">
            {username} •{" "}
            <Moment fromNow className="pl-1 font-semibold text-sm">
              {timestamp?.toDate()}
            </Moment>
          </p>
        )}
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img
        src={img}
        className="object-cover w-full"
        alt={`${username}'s post`}
      />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 ">
            {isLiked ? (
              <HeartFillIcon
                onClick={likePost}
                className="postButton text-red-400"
              />
            ) : (
              <HeartIcon onClick={likePost} className="postButton" />
            )}
            <ChatIcon className="postButton" />
            <PaperAirplaneIcon className="postButton rotate-45" />
          </div>
          <BookmarkIcon className="postButton" />
        </div>
      )}
      {/* Caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && (
        <form onSubmit={sendComment} className="flex items-center p-4">
          {/* <EmojiHappyIcon className="h-7" /> */}
          <InputEmoji
            value={comment}
            onChange={setComment}
            placeholder="Add a comment"
            borderColor={`${theme === "dark" ? "#000" : "#fff"}`}
            theme={`${theme === "dark" ? "dark" : "light"}`}
            className="border-none flex-1 focus:ring-0 outline-none bg-white text-black dark:bg-black dark:text-white"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400">
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
