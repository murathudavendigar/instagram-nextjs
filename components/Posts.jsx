import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "murathoncu",
    userImg:
      "https://pbs.twimg.com/profile_images/1589564512599932929/JuGsRJNz_400x400.jpg",
    img: "https://img.freepik.com/free-photo/portrait-young-cheerful-girl-listening-music-headphones-isolated-gradient-pink-background-blue-neon-light_155003-45720.jpg?w=360",
    caption: "This is FAKE",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
