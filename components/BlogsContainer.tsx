interface props {
  children: React.ReactNode;
}
function BlogsContainer({ children }: props) {
  return <main className=" px-8 py-1 flex flex-col"> {children} </main>;
}

export default BlogsContainer;
