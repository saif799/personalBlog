import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="mt-24">
      <h1 className="font-bold text-3xl text-gray-800 -tracking-tight mb-6">
        Hi, I&quot;m Saif. I am never sleepless.
      </h1>
      <p className="pb-3  text-gray-800 leading-6  ">
        This is where I write stuff. Abandon all hope. Leave all uncertainty of
        my future. And dump all multimillion imaginary ideas.
      </p>
      <p className="pb-3  text-gray-800 leading-6  ">
        This blog is a jamstack. And yes, this is following those tacky web
        developer who think that instead of making a stupid LinkedIn bullshit,
        it is more efficient to waste 2 weeks building a &quot;from
        scratch&quot; portfolio blog that has no visitor except the author.{" "}
      </p>
      <p className="pb-3  text-gray-800 leading-6  ">
        This blog is open-source and is made using Next.js. The doc teaches
        everything!
      </p>

      <div className="mt-14">
        <h2 className="font-bold text-3xl text-gray-800 -tracking-tight mb-6">
          Latest Blog posts
        </h2>
        <main className=" p-3 flex flex-col gap-y-2 mb-10">
          <Blog href="/firstPost" />
          <Blog href="/secondPost" />
        </main>
      </div>
    </div>
  );
}
