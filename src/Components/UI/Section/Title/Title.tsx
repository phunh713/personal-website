import classes from "./Title.module.css";
import { FC } from "react";

const Title: FC<{ position: "top-left" | "top-right" | "bottom-left" | "bottom-right"; color: string }> = ({
	position,
	children,
	color,
}) => {
	let positionStyle = {};
	switch (position) {
		case "top-left":
			positionStyle = {
				top: "-1rem",
				left: "-3rem",
				textAlign: "left",
			};
			break;

		case "top-right":
			positionStyle = {
				top: "-1rem",
				right: "-3rem",
				textAlign: "right",
			};
			break;

		case "bottom-left":
			positionStyle = {
				bottom: "-1rem",
				left: "-3rem",
				textAlign: "left",
			};
			break;

		case "bottom-right":
			positionStyle = {
				bottom: "-1rem",
				right: "-3rem",
				textAlign: "right",
			};
			break;
	}
	return (
		<h2 style={{ ...positionStyle, color }} className={classes.title}>
			{children}
		</h2>
	);
};

export default Title;
