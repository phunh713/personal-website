import { FC, useEffect } from "react";
import classes from "./Section.module.css";

const Section: FC<{ style?: {}; id?: string; checkInView?: (inViewId: string) => void }> = ({
	children,
	style,
	id,
	checkInView,
}) => {
	useEffect(() => {
		let inView = false;

		if (id && checkInView) {
			const handleScroll = () => {
				const ele = document.getElementById(id);
				const fromTop = ele!.getBoundingClientRect().top;
				const fromBottom = ele!.getBoundingClientRect().bottom;
				if (fromTop <= 0 + 90 && fromBottom >= 0 + 90 && inView === false) {
					inView = true;
					checkInView(id);
				} else if ((fromTop > 0 + 90 || fromBottom < 0 + 90) && inView === true) {
					inView = false;
				}
			};

			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [id, checkInView]);
	return (
		<div style={style} className={classes.section} id={id}>
			{children}
		</div>
	);
};

export default Section;
