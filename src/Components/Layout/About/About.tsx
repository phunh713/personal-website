import classes from "./About.module.css";
import { FC } from "react";
import Container from "Components/UI/Container/Container";
import { FaLaptopCode } from "react-icons/fa";
import { RiUserVoiceLine } from "react-icons/ri";
import Card from "Components/UI/Card/Card";
import Title from "Components/UI/Section/Title/Title";

const About: FC = () => {
	let months;
	const difYears = new Date().getFullYear() - 2021;
	const difMonths = new Date().getMonth() + 1 - 3;
	months = difYears * 12 + difMonths;
	return (
		<>
			<div className={classes["about-wrapper"]}>
				<Container fluid>
					<div className={classes["about-text-wrapper"]}>
						<h2>Nice to meet you</h2>
						<p>
							After 4 years working in digital marketing, I decided to quit and started learning coding{" "}
							{months} months ago. Since then, I've been trying to sharpen my skills by building my
							personal porfolio with Reactjs and Angular.
						</p>
					</div>
				</Container>
				<Container>
					<div className={classes["skills-table"]}>
						<Card className={classes["technical"]} dataAos="fade-down" dataAosOffset={300} dataAosDelay={50}>
							<FaLaptopCode size={63} color="#1d3557" />
							<h2>Technical Skills</h2>
							<p>I've learnt to code from CyberSoft, Udemy, Codecademy and of course Google</p>
							<h4>Languages I've learnt so far</h4>
							<ul>
								<li>HTML, CSS, SASS</li>
								<li>Javascript, Typescript</li>
							</ul>
							<h4>Libraries/Frameworks</h4>
							<ul>
								<li>ReactJS, Angular</li>
								<li>Bootstrap</li>
							</ul>
							<h4>Others</h4>
							<ul>
								<li>Git, GitHub</li>
								<li>SEO</li>
							</ul>
						</Card>
						<Card className={classes["soft"]} dataAos="fade-down" dataAosOffset={300} dataAosDelay={50}>
							<RiUserVoiceLine size={63} color="#1d3557" />
							<h2>Soft Skills</h2>
							<p>
								With 4 years of experience working in different professional environments, I've
								strengthened necessary soft skills
							</p>
							<h4>Communication</h4>
							<ul>
								<li>Fluent in English</li>
								<li>Customer service</li>
								<li>Teamwork</li>
							</ul>
							<h4>Others</h4>
							<ul>
								<li>Time management</li>
								<li>Adaptability</li>
							</ul>
						</Card>
					</div>
				</Container>
				<Title position="bottom-right" color="#f8f9fa" dataAos="fade-up">
					About Me
				</Title>
			</div>
		</>
	);
};

export default About;
