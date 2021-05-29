import classes from "./Layout.module.css";
import Section from "Components/UI/Section/Section";
import { FC, useCallback, useState } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const Layout: FC = () => {
	const [inViewId, setInViewId] = useState("");
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
	const handleCheckInview = useCallback((id: string) => {
		setInViewId(id);
		console.log(id + " is in View");
	}, []);

	const handleOpenMobileMenu = (isOponed: boolean) => {
		setIsMobileMenuOpened(isOponed);
		console.log(isOponed);
	};
	return (
		<div className={`${classes.layout}`}>
			<Header activeId={inViewId} onToggleMobileMenu={handleOpenMobileMenu} />
			<Section id="hero" checkInView={handleCheckInview}>
				<Hero />
			</Section>
			<Section id="about" checkInView={handleCheckInview}>
				<About />
			</Section>
			<Section
				id="projects"
				checkInView={handleCheckInview}
				style={{ backgroundColor: "#f8f9fa", height: "auto", minHeight: "100vh" }}
			>
				<Projects />
			</Section>
			<Section id="contact" checkInView={handleCheckInview} style={{ backgroundColor: "#e9ecef" }}>
				<Contact />
			</Section>
		</div>
	);
};

export default Layout;
