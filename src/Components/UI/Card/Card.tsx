import classes from "./Card.module.css";
import { FC } from "react";

const Card: FC<{ className?: string; dataAos?: string; dataAosOffset?: number; dataAosDelay?: number }> = ({
	children,
	className,
	dataAos,
	dataAosOffset,
	dataAosDelay,
}) => {
	return (
		<div
			className={`${classes.card} ${className}`}
			data-aos={dataAos}
			data-aos-offset={dataAosOffset}
			data-aos-delay={dataAosDelay}
		>
			{children}
		</div>
	);
};

export default Card;
