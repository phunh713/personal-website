import classes from "./Contact.module.css";
import { FC } from "react";
import Container from "Components/UI/Container/Container";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import Card from "Components/UI/Card/Card";
import logo from "assets/images/logo.png";
import Title from "Components/UI/Section/Title/Title";

const Contact: FC = () => {
	return (
		<>
			<Container>
				<div className={classes["contact-wrapper"]}>
					<p>
						I'm currently looking for an entry-level Front End Developer position. If you're looking for a
						hard-working and responsible employee, kindly contact me at:
					</p>
					<Card className={classes["contact-card"]} dataAos="zoom-in">
						<div className={classes["contact-card-logo"]}>
							<img src={logo} alt="PhuNH logo" />
						</div>
						<div className={classes["contact-card-info"]}>
							<span className={classes.name}>
								<HiOutlineUser size={25} />
								Nguyễn Hồng Phú
							</span>

							<span className={classes.email}>
								<HiOutlineMail size={25} />
								phunh@gmail.com
							</span>

							<a href="tel:0971233919" className={classes.phone}>
								<HiOutlinePhone size={25} />
								097 123 3919
							</a>

							<a
								href="https://github.com/phunh713"
								target="_blank"
								rel="noreferrer"
								className={classes.github}
							>
								<VscGithub size={25} />
								github.com/phunh713
							</a>
						</div>
					</Card>
				</div>
			</Container>
			<Title position="bottom-right" color="#dee2e6" dataAos="fade-up">
				Contact Me
			</Title>
		</>
	);
};

export default Contact;
