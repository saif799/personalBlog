import Link from "next/link";

function Footer() {
  return (
    <div className=" h-3 border-t-2  mt-14   ">
      <div className="flex justify-between leading-6 text-md  text-slate-400  w-32 p-8 gap-4">
        {" "}
        <Link className="hover:text-primary" href="/">
          {" "}
          Blog{" "}
        </Link>{" "}
        <Link className="hover:text-primary" href="/">
          About
        </Link>{" "}
        <Link className="hover:text-primary" href="/">
          {" "}
          Contact{" "}
        </Link>
      </div>{" "}
      {/* <p className="mb-8">
        📜 handcrafted by me and the internet, use it freely. no need to be
        wise. fork on GitHub.
      </p> */}
    </div>
  );
}

export default Footer;
