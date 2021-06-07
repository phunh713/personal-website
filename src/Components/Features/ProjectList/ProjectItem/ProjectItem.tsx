import React, { FC } from "react";
import classes from "./ProjectItem.module.css";
import { _ProjectItem } from "../ProjectList";
import Button from "Components/UI/Button/Button";
import Card from "Components/UI/Card/Card";

interface ProjectItemProps extends _ProjectItem {
	className: string;
}

const ProjectItem: FC<ProjectItemProps> = (props) => {
	return (
		<Card className={`${classes["project-item"]} ${props.className}`} dataAos="fade-in">
			<div className={classes["project-thumbnail"]}>
				<img src={props.thumbnail} alt={props.description} />
				<div className={classes["pc-buttons"]}>
					<Button solid color="#e63946" href={props.website}>
						Live Demo
					</Button>
					<Button color="#e63946" href={props.github}>
						GitHub
					</Button>
				</div>
			</div>
			<div className={classes["project-info"]}>
				<h2 className={`text-hover-effect ${classes["project-name"]}`}>{props.name}</h2>
				<div className={classes["mb-buttons"]}>
					<Button solid color="#e63946" href={props.website}>
						Live Demo
					</Button>
					<Button color="#e63946" href={props.github}>
						GitHub
					</Button>
				</div>
				<p>{props.description}</p>
				<h3>Technologies Used</h3>
				<div className={classes.technologies}>
					{props.technologies.map((techObj) => {
						const name = Object.keys(techObj)[0];
						const techItems = techObj[name];

						return (
							<React.Fragment key={name}>
								<h4>{name}</h4>
								<ul>
									{techItems.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</Card>
	);
};

export default ProjectItem;
