import { getAllPostIds, getPostData } from "@/lib/posts";

interface PostData {
id: string;
title: string;
date: string;
contentHtml: string;
}
interface yoru {
postData: PostData;
}
interface StaticProps {
params: {
id: string;
};
}

export async function getStaticPaths() {
const paths = getAllPostIds();
const postData: PostData = await getPostData("firstPost");
console.log(postData)
return {
paths,
fallback: false,
};
}

export async function getStaticProps({ params }: StaticProps) {
const postData: PostData = await getPostData("firstPost");

return {
props: {
postData,
},
};
}

const Page: React.FC<yoru> = async ({ postData }) => {
console.log(postData);
return <div> </div>;
};

export default Page;

//

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

interface Postdata {
id: string;
title: string;
date: string;
contentHtml: string;
}

interface sortedPostData {
id: string;
title: string;
date: string;
// Add any other properties you have in the frontmatter
}

export function getSortedPostsData() {
// Get file names under /posts
const fileNames = fs.readdirSync(postsDirectory);
const allPostsData: sortedPostData[] = fileNames.map((fileName) => {
// Remove ".md" from file name to get id
const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    } as sortedPostData;

});
// Sort posts by date
return allPostsData.sort((a, b) => {
if (a.date < b.date) {
return 1;
} else {
return -1;
}
});
}

export function getAllPostIds() {
const fileNames = fs.readdirSync(postsDirectory);
// Returns an array that looks like this:
// [
// {
// params: {
// id: 'ssg-ssr'
// }
// },
// {
// params: {
// id: 'pre-rendering'
// }
// }
// ]
return fileNames.map((fileName) => {
return {
params: {
id: fileName.replace(/\.md$/, ""),
},
};
});
}

export async function getPostData(id: string) {
const fullPath = path.join(postsDirectory, `${id}.md`);
console.log(fullPath);

const fileContents = fs.readFileSync(fullPath, "utf8");

// Use gray-matter to parse the post metadata section
const matterResult = matter(fileContents);

// Use remark to convert markdown into HTML string
const processedContent = await remark()
.use(html)
.process(matterResult.content);
const contentHtml = processedContent.toString();
// Combine the data with the id and contentHtml
return {
id,
contentHtml,
...matterResult.data,
} as Postdata;
}
