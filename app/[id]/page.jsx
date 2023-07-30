import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
// import { getStaticProps } from "next";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  console.log(postData.title);
  return (
    <>
      {/* <Head>
        <title>{params.id}</title>
      </Head> */}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
