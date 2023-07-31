import Link from "next/link";

interface BlogProps {
  href: string;
  title: string;
  date: string;
}
function Blog({ href, title, date }: BlogProps) {
  return (
    <Link href={href}>
      <div className="flex hover:bg-gray-100  w-full h-20 rounded-md ">
        {/* <div className="w-20 bg-gray-200">image here </div>{" "} */}
        <div className=" px-4 flex items-center ">
          <div>
            <div className="text-xl  text-gray-800 -tracking-tight font-bold">
              {" "}
             {title}
            </div>
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
