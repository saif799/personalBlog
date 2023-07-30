import { getAllPostIds, getPostData } from "../../lib/posts";

export async function generateStaticParams() {
  const paths = getAllPostIds();
  console.log(paths);
  return paths;
}
export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
