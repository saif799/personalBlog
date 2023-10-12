import Link from "next/link";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import {
//   darcula,
//   dracula,
// } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function generateStaticParams() {
  const paths = getAllPostIds();

  return paths;
}

interface postParams {
  params: { id: string };
}

export default async function Post({ params }: postParams) {
  const postData = await getPostData(params.id);
  return (
    <>
      <div className="mb-10">
        <h1 className=" mb-2">{postData.title}</h1>
        <h3> {postData.date}</h3>
      </div>

      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

      {postData.link && (
        <div className="mt-4 ">
          <Link className="hover:underline font-bold" href={postData.link}>
            {" "}
            {postData.linkTitle}{" "}
          </Link>
        </div>
      )}
    </>
  );
}
