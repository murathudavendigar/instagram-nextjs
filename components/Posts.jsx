import { useEffect, useState } from "react";
import { createRandomUser, RANDOM_POST } from "../utils/faker";
import Post from "./Post";

const posts = [
  {
    userId: "123",
    username: "murathoncu",
    avatar:
      "https://pbs.twimg.com/profile_images/1589564512599932929/JuGsRJNz_400x400.jpg",
    postImg:
      "https://img.freepik.com/free-photo/portrait-young-cheerful-girl-listening-music-headphones-isolated-gradient-pink-background-blue-neon-light_155003-45720.jpg?w=360",
    caption: "This is FAKE",
  },
];

const Posts = () => {
  const [postArr, setPostArr] = useState([]);
  useEffect(() => {
    Array.from({ length: 10 }).forEach(() => {
      posts.push(createRandomUser());
    });
    setPostArr(posts);
  }, []);

  return (
    <div>
      {postArr.map((post) => (
        <Post
          key={post.userId}
          id={post.userId}
          username={post.username}
          userImg={post.avatar}
          img={post.postImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
