import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section>
        <Stories />
        <Posts />
      </section>

      <section></section>
    </main>
  );
};

export default Feed;
