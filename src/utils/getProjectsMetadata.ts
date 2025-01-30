import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "./ProjectMetadata";

const getProjectsMetadata = (): ProjectMetadata[] => {
  const folder = "../projects";
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith(".md"));

  const projects = markdownProjects.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      order: matterResult.data.order,
      title: matterResult.data.title,
      short_description: matterResult.data.short_description,
      background_image: matterResult.data.background_image,
      github_link: matterResult.data.github_link,
      tags: matterResult.data.tags,
      slug: fileName.replace(".md", ""),
    };
  });

  return projects;
};

export default getProjectsMetadata;
