import Link from "next/link";

interface BlogProps {
  href: string;
}
function Blog({ href }: BlogProps) {
  return (
    <Link href={href}>
      <div className="flex hover:bg-gray-100  w-full h-20 rounded-md ">
        {/* <div className="w-20 bg-gray-200">image here </div>{" "} */}
        <div className=" px-4 flex items-center ">
          <div>
            <div className="text-xl  text-gray-800 -tracking-tight font-bold">
              {" "}
              the first blog i have{" "}
            </div>
            <h3>2023-07-31</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
