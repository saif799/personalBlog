import Link from "next/link";

function NavBar() {
  return (
    <header className="   flex justify-between">
      <div className=" text-xl font-bold text-gray-800 ">B(≖_≖ ) Saif</div>
      <div className="flex justify-around leading-8 text-lg text-gray-500 ">
        {" "}
        <Link className="hover:border-b-2 border-orange-600" href="/">
          {" "}
          Blog{" "}
        </Link>{" "}
        <Link href="/" className="mx-4 border-b-2 border-transparent hover:border-orange-600">
          About
        </Link>{" "}
        <Link className="hover:border-b-2 border-orange-600" href="/">
          {" "}
          Contact{" "}
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
