import Link from "next/link";

interface BlogProps {
  href: string;
  title: string;
  date: string;
}
function Blog({ href, title, date }: BlogProps) {
  return (
    <Link href={href} className="py-3 hover:bg-secondary rounded-md ">
      <div className="flex   w-full  rounded-md   ">
        <div className=" px-3 flex items-center ">
          <div>
            <div className="text-xl -tracking-tight font-bold"> {title}</div>
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Blog;
