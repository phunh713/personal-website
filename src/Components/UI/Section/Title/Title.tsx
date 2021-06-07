import classes from "./Title.module.css";
import { FC } from "react";

const Title: FC<{
	position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	color: string;
	dataAos?: string;
	dataAosOffset?: number;
	dataAosDelay?: number;
}> = ({ position, children, color, dataAos, dataAosDelay, dataAosOffset }) => {
	return (
		<h2
			style={{ color }}
			className={`${classes.title} ${classes[position]}`}
			data-aos={dataAos}
			data-aos-delay={dataAosDelay}
			data-aos-offset={dataAosOffset}
		>
			{children}
		</h2>
	);
};

export default Title;
