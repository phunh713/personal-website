import classes from "./Title.module.css";
import { FC } from "react";

const Title: FC<{ position: "top-left" | "top-right" | "bottom-left" | "bottom-right"; color: string }> = ({
	position,
	children,
	color,
}) => {
	return (
		<h2 style={{ color }} className={`${classes.title} ${classes[position]}`}>
			{children}
		</h2>
	);
};

export default Title;
