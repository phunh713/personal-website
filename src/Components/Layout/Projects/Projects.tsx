import classes from "./Projects.module.css";
import ProjectList from "Components/Features/ProjectList/ProjectList";
import Container from "Components/UI/Container/Container";
import Title from "Components/UI/Section/Title/Title";
import { FC } from "react";

const Projects: FC = () => {
	return (
		<>
			<Container>
				<div className={classes["project-wrapper"]}>
					<h2>Selected Projects</h2>
					<ProjectList />
				</div>
			</Container>
			<Title position="bottom-left" color="#e9ecef" dataAos="fade-up">
				My Projects
			</Title>
		</>
	);
};

export default Projects;
