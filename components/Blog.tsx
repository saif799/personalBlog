import Link from "next/link";
import { useRouter } from "next/router";

interface BlogProps {
  href: string;
}
function Blog({ href }: BlogProps) {
  return (
    <Link href={href}>
      <div className="flex hover:bg-gray-100 bg-gray-50 w-full h-24 rounded-md p-3">
        <div className="w-20 bg-gray-200">image here </div>{" "}
        <div className=" px-5 flex items-center text-xl  text-gray-800 -tracking-tight font-bold">
          the first blog i have{" "}
        </div>
      </div>
    </Link>
  );
}

export default Blog;
