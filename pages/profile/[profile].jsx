import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MiniProfile from "../../components/MiniProfile";
import Post from "../../components/Post";
import { db } from "../../firebase/firebase";

const profile = () => {
  const [postByUser, setPostByUser] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  const { profile: username } = router.query;

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPostByUser(
            snapshot.docs
              .map((post) => post)
              .filter((post) => post.data().username === username)
          );
        }
      ),
    [username]
  );

  useEffect(() => {
    if (!session) {
      router.push("/auth/signin");
    }
  }, []);

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-2 mx-auto md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl">
        <section className="col-span-2">
          {postByUser.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.data().username}
              userImg={post.data().profileImg}
              img={post.data().image}
              caption={post.data().caption}
              timestamp={post.data().timestamp}
            />
          ))}
        </section>
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <div className="flex items-center justify-between mt-14 ml-10">
              <img
                src={postByUser[0]?.data().profileImg}
                className="w-16 h-16 rounded-full p-[2px]"
              />

              <div className="flex-1 mx-4">
                <h2 className="font-bold">{postByUser[0]?.data().username}</h2>
                <h3 className="text-sm text-gray-400">
                  Posts : {postByUser.length}
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default profile;
