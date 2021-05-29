import classes from "./Hero.module.css";
import Container from "Components/UI/Container/Container";
import { FC, useMemo } from "react";
import useTypingText from "hooks/useTypingText";
import heroImg from "assets/images/hero-image.png";

const Hero: FC = () => {
	const words: string[] = useMemo(() => ["Phu Nguyen", "a Front End Developer"], []);
	const { displayedText, finished } = useTypingText(words);
	return (
		<Container>
			<div className={classes["hero-wrapper"]}>
				<div className={classes["hero-text"]}>
					<h1>
						Hi, I'm
						<br />
						<strong className={classes["typing-text"]}>
							{displayedText}
							<span className={finished ? classes["typing-caret"] : ""}>|</span>
						</strong>
					</h1>
					<p>I love to build simple but beautiful and intuitive websites!</p>
					<div className={classes["button-wrapper"]}>
						<a href="#about">My Skills</a>
						<a href="#projects">My Projects</a>
					</div>
				</div>
				<div className={classes["hero-image"]}>
					<img src={heroImg} alt="a male developer sitting and coding" />
				</div>
			</div>
		</Container>
	);
};

export default Hero;
