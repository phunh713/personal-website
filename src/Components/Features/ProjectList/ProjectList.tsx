import classes from "./ProjectList.module.css";
import { FC } from "react";
import foodMapThumb from "assets/images/food-map.png";
import todoListThumb from "assets/images/todo-list.png";
import personalWebsiteThumb from "assets/images/personal-website.png";
import burgerBuilderThumb from "assets/images/burger-builder.png";
import recipeBookThumb from "assets/images/recipe-book.png";
import transactionThumb from "assets/images/transactions.png";
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
		description: "Save, Share, Rate and Leave a comment for your favorite eating places",
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
	{
		name: "Burger Builder",
		website: "https://burgerbuilder.phunh.com/",
		github: "https://github.com/phunh713/burger-builder",
		description: "Add All Ingredients with a beautifull 3D visualization",
		thumbnail: burgerBuilderThumb,
		technologies: [{ ReactJS: ["Functional Component"] }, { Others: ["React Icons"] }],
	},
	{
		name: "Recipe Book",
		website: "https://recipes.phunh.com/",
		github: "https://github.com/phunh713/recipes-book",
		description: "Save and share your favorite recipes and list down all ingredients before shopping",
		thumbnail: recipeBookThumb,
		technologies: [
			{ Angular: ["Service, Observable, Router, Guard, Interceptor, Pipe"] },
			{ Others: ["RxJS, Firebase Authentication, Realtime Database API"] },
		],
	},
	{
		name: "Transaction Records",
		website: "https://transactions.phunh.com/",
		github: "https://github.com/phunh713/transaction-record",
		description: "Keep track of your income and spending daily with simple, clean and engaging charts",
		thumbnail: transactionThumb,
		technologies: [
			{ Angular: ["Service, Observable, Router, Guard, Interceptor, Pipe"] },
			{ Others: ["RxJS, NgRx, Firebase Authentication, Realtime Database API"] },
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
