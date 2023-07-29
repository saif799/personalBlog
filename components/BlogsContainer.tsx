interface props {
  children: React.ReactNode;
}
function BlogsContainer({ children }: props) {
  return <main className=" p-3 flex flex-col gap-y-3 mb-10"> {children} </main>;
}

export default BlogsContainer;
