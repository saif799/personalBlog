import Link from "next/link";

interface BlogProps {
  href: string;
  title: string;
  date: string;
}
function Blog({ href, title, date }: BlogProps) {
  return (
    <div className="py-3 hover:bg-secondary rounded-md ">
      <Link href={href}>
        <div className="flex   w-full  rounded-md   ">
          {/* <div className="w-20 bg-gray-200">image here </div>{" "} */}
          <div className=" px-4 flex items-center ">
            <div>
              <div className="text-xl -tracking-tight font-bold"> {title}</div>
              <h3>{date}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Blog;
