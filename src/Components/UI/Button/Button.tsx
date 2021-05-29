import classes from "./Button.module.css";
import { FC } from "react";

const Button: FC<{ solid?: boolean; color: string; href?: string; onClick?: () => {} }> = ({
	children,
	solid = false,
	color,
	href,
}) => {
	let style: {} = {
		borderColor: color,
	};

	if (solid) {
		style = {
			...style,
			backgroundColor: color,
			color: "#fff",
		};
	} else {
		style = {
			...style,
			color: color,
		};
	}
	return (
		<a href={href} rel="noreferrer" target="_blank" style={style} className={classes.button}>
			{children}
		</a>
	);
};

export default Button;
