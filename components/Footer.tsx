import Link from "next/link";

function Footer() {
  return (
    <div className=" h-3 border-t-2 px-4 mt-14  ">
      <div className="flex justify-between leading-6 text-md  text-gray-500 w-32 p-8 gap-4">
        {" "}
        <Link href="/"> Blog </Link>{" "}
        <Link href="/">
          About
        </Link>{" "}
        <Link href="/"> Contact </Link>
      </div>{" "}
      {/* <p className="mb-8">
        📜 handcrafted by me and the internet, use it freely. no need to be
        wise. fork on GitHub.
      </p> */}
    </div>
  );
}

export default Footer;
