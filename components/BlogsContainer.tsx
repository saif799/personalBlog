import { getSortedPostsData } from "@/lib/posts";
import Blog from "./Blog";

async function BlogsContainer() {
  const allBlogs = getSortedPostsData();
  return (
    <main className=" px-8 py-1 flex flex-col">
      {allBlogs.map((post) => (
        <Blog
          href={post.id}
          key={post.id}
          title={post.title}
          date={post.date}
        />
      ))}
    </main>
  );
}

export default BlogsContainer;
