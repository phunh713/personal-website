import classes from "./Card.module.css";
import { FC } from "react";

const Card: FC<{ className?: string }> = ({ children, className }) => {
	return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
