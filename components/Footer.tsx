import Link from "next/link";

function Footer() {
  return (
    <div className="border-t-gray-300 h-3 border-t-2 px-4">
      <div className="flex justify-between leading-6 text-md text-gray-500 w-32 p-8">
        {" "}
        <Link className="hover:border-b-2 border-orange-600" href="/">
          {" "}
          Blog{" "}
        </Link>{" "}
        <Link
          href="/"
          className="mx-4 border-b-2 border-transparent hover:border-orange-600"
        >
          About
        </Link>{" "}
        <Link className="hover:border-b-2 border-orange-600" href="/">
          {" "}
          Contact{" "}
        </Link>
      </div>{" "}
      <p>
        📜 handcrafted by me and internet, use it freely as your freedom. no
        need to be wise. fork on GitHub.
      </p>
    </div>
  );
}

export default Footer;
