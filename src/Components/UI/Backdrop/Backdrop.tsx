import classes from "./Backdrop.module.css";
import { FC } from "react";

const Backdrop: FC<{ isShown: boolean; onClick: () => void; className?: string }> = ({
	isShown,
	onClick,
	className,
}) => {
	return (
		<div
			className={`${classes.backdrop} ${isShown ? classes.active : ""} ${className}`}
			onClick={() => onClick()}
		></div>
	);
};

export default Backdrop;
