import classes from "./ProjectList.module.css";
import { FC } from "react";
import foodMapThumb from "assets/images/food-map.png";
import todoListThumb from "assets/images/todo-list.png";
import personalWebsiteThumb from "assets/images/personal-website.png";
import ProjectItem from "./ProjectItem/ProjectItem";

export interface _ProjectItem {
	name: string;
	website: string;
	github: string;
	description: string;
	thumbnail: string;
	technologies: { [name: string]: string[] }[];
}

const projects: _ProjectItem[] = [
	{
		name: "VN Food Map",
		website: "https://foodmap.phunh.com/",
		github: "https://github.com/phunh713/food-map",
		description: "Save, Share, Rate and leave a comment for your favorite eating places",
		thumbnail: foodMapThumb,
		technologies: [
			{ ReactJS: ["Functional Component", "Hooks/Custom Hooks", "Router", "HTTP requests", "Redux"] },
			{
				Others: ["Google Map/Places API", "Firebase Authentication, Realtime Database API"],
			},
		],
	},
	{
		name: "My Personal Website",
		website: "https://www.phunh.com/",
		github: "https://github.com/phunh713/personal-website",
		description: "A Website that shares my personal skills, projects and contact info",
		thumbnail: personalWebsiteThumb,
		technologies: [
			{ ReactJS: ["Functional Component", "Hooks/Custom Hooks"] },
			{ Others: ["Typescript", "React Icons"] },
		],
	},
	{
		name: "Todo List",
		website: "https://todolist.phunh.com/",
		github: "https://github.com/phunh713/todo-list",
		description: "Create and Save a To-do list with a unique name",
		thumbnail: todoListThumb,
		technologies: [
			{ ReactJS: ["Functional Component", "Hooks/Custom Hooks", "Context API", "Axios"] },
			{ Others: ["Typescript", "React Icons", "Firebase Authentication, Realtime Database API"] },
		],
	},
];

const ProjectList: FC = () => {
	return (
		<div className={classes["project-list"]}>
			{projects.map((project) => (
				<ProjectItem {...project} key={project.github} className={classes["project-item"]} />
			))}
		</div>
	);
};

export default ProjectList;
