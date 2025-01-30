import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectsMetadata from "@/utils/getProjectsMetadata";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/FooterSection";
import Image from "next/image";

const getProjectsContent = (slug: string) => {
  const folder = "src/projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getProjectsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = getProjectsContent(slug);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="flex mt-20 items-center h-[30vh] relative">
        <div className="absolute inset-0 z-10 gradient-bg"></div>
        <Image
          src={`/images/${post.data.background_image}`}
          alt=""
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <article className="container mt-10 mx-auto px-12 py-4 prose prose-h1:text-3xl lg:prose-h1:text-4xl prose-h2:text-xl lg:prose-h2:text-2xl prose-h3:text-lg lg:prose-h3:text-xl prose-strong:text-indigo-500 prose-a:underline prose-a:text-gray-200 prose-p:text-sm lg:prose-p:text-base prose-pre:text-sm lg:prose-pre:text-base prose-pre:leading-6 lg:prose-xl dark:prose-invert">
        <h1>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </article>
      <Footer />
    </main>
  );
}

export default ProjectPage;