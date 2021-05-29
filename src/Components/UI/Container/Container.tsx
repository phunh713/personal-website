import { FC } from "react";
import classes from "./Container.module.css";

const Container: FC<{ fluid?: boolean }> = ({ children, fluid }) => {
	return <div className={fluid ? classes["container-fluid"] : classes.container}>{children}</div>;
};

export default Container;
