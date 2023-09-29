import Link from "next/link";
import { GithubIcon } from "lucide-react";
function Footer() {
  return (
    <div className=" border-t-2  mt-14   ">
      <div className="flex justify-between leading-6 text-md  text-slate-400  p-6 gap-4">
        {" "}
        <Link
          target={"_blank"}
          className="hover:text-primary"
          href="https://github.com/saif799"
        >
          {" "}
          <div className="flex items-center">
            <GithubIcon size={18} />
            <span className="px-1"> Github</span>
          </div>
        </Link>{" "}
        <div>
          <div>All rights reserved </div>
          <div>Saif B &copy; 2023</div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Footer;
