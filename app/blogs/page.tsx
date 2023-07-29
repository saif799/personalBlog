import Blog from "@/components/Blog";
import BlogsContainer from "@/components/BlogsContainer";

function page() {
  return (
    <div className="mt-24">
      <h1 className="font-bold text-3xl text-gray-800 -tracking-tight mb-6">
        📰 Blog posts
      </h1>
      <BlogsContainer>
        <Blog />
        <Blog />
        <Blog />
      </BlogsContainer>
    </div>
  );
}

export default page;
