import classes from "./Header.module.css";
import { FC, useState } from "react";
import Container from "../../UI/Container/Container";
import logo from "assets/images/logo-small.png";
import Backdrop from "Components/UI/Backdrop/Backdrop";
import resume from "assets/documents/Resume.pdf";
import Button from "Components/UI/Button/Button";
import { RiDownloadCloud2Line } from "react-icons/ri";

const Header: FC<{ activeId: string; onToggleMobileMenu: (arg: boolean) => void }> = ({
	activeId,
	onToggleMobileMenu,
}) => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

	const handleClickLogo = () => {
		window.scrollTo(0, 0);
	};

	const handleToggleMobileMenu = () => {
		setIsMobileMenuOpened(!isMobileMenuOpened);
		onToggleMobileMenu(!isMobileMenuOpened);
	};

	const handleClickNavItem = () => {
		console.log("clicked");
		setIsMobileMenuOpened(false);
	};
	return (
		<nav>
			<Container>
				<div className={classes.navbar}>
					<div className={classes.logo} onClick={handleClickLogo}>
						<img src={logo} alt="a logo with my name PhuNH on it" />
					</div>
					<div className={classes["nav-wrapper"]}>
						<div
							className={`${classes["hamburger-menu"]} ${
								isMobileMenuOpened ? classes["hamburger-menu-active"] : ""
							}`}
							onClick={handleToggleMobileMenu}
						>
							<span className={classes["line-1"]}></span>
							<span className={classes["line-2"]}></span>
							<span className={classes["line-3"]}></span>
						</div>
						<ul className={`${classes.nav} ${isMobileMenuOpened ? classes.active : ""}`}>
							<li
								onClick={handleClickNavItem}
								className={`${classes["nav-item"]} text-hover-effect ${
									activeId === "about" ? classes.active : ""
								}`}
							>
								<a href="#about">about</a>
							</li>
							<li
								onClick={handleClickNavItem}
								className={`${classes["nav-item"]} text-hover-effect ${
									activeId === "projects" ? classes.active : ""
								}`}
							>
								<a href="#projects">projects</a>
							</li>
							<li
								onClick={handleClickNavItem}
								className={`${classes["nav-item"]} text-hover-effect ${
									activeId === "contact" ? classes.active : ""
								}`}
							>
								<a href="#contact">contact</a>
							</li>
							<li onClick={handleClickNavItem} className={`${classes["nav-item"]}`}>
								<Button href={resume} color="#e63946">
									My Resume <RiDownloadCloud2Line  size={20}/>
								</Button>
							</li>
						</ul>
						<Backdrop
							className={classes.backdrop}
							isShown={isMobileMenuOpened}
							onClick={handleClickNavItem}
						/>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default Header;
