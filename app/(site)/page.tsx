import BlogsContainer from "@/components/BlogsContainer";

export default function Home() {
  return (
    <div>
      <h1>Hi, I&apos;m Saif. I am never sleepless.</h1>
      <p className="pb-3   leading-6  ">
        This is where I write stuff. Abandon all hope. Leave all uncertainty of
        my future. And dump all multimillion imaginary ideas.
      </p>
      <p className="pb-3   leading-6  ">
        This blog is a jamstack. And yes, this is following those tacky web
        developer who think that instead of making a stupid LinkedIn bullshit,
        it is more efficient to waste 2 weeks building a &quot;from
        scratch&quot; portfolio blog that has no visitor except the author.{" "}
      </p>
      <p className="pb-3   leading-6  ">
        This blog is open-source and is made using Next.js. The doc teaches
        everything!
      </p>

      <div className="mt-14">
        <h2 className="font-bold text-3xl  -tracking-tight mb-6">
          Latest Writing
        </h2>
        <BlogsContainer />
      </div>
    </div>
  );
}
