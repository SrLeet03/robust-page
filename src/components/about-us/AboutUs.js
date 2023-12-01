// AboutUs.jsx

import React, { useState } from "react";
import stl from "./AboutUs.module.scss";
import { Button, Grid } from "@mui/material";
import EmailUs from "./../email-us";

const AboutUs = () => {
	const [showEmailUs, setShowEmailUs] = useState(false);

	return (
		<div className={stl.container}>
			<div className={stl.header}>
				<h1>Welcome to Robust Solutions</h1>
				<p>Where Innovation Meets Execution</p>
			</div>

			<div className={stl.intro}>
				<p>
					Elevate your digital ventures with Robust Solutions, the
					convergence point of cutting-edge technology and visionary
					innovation. Our team, comprising IIT graduates, specializes
					in backend development, frontend development, and data
					science. Together, we turn your concepts into digital
					masterpieces that drive success.
				</p>
			</div>

			<Grid container className={stl.mission}>
				<Grid item xs={12} md={0.1}></Grid>
				<Grid item xs={12} md={2}>
					<img src="mission-icon.png" alt="mission" />
				</Grid>
				<Grid item xs={12} md={9}>
					<p>
						<span>Our mission :</span> To be your partners in
						success. We thrive on challenges and are committed to
						transforming your concepts into tangible solutions.
					</p>
				</Grid>
			</Grid>

			<div className={stl.whyChoose}>
				<h1>
					The <span>"Robust"</span> Edge
				</h1>
				<Grid container spacing={3} className={stl.gridContainer}>
					<Grid item xs={12} sm={6} md={3}>
						<img src="/college.png" alt="college" />
						<h3>IIT Expertise</h3>
						<p>
							With our roots in the IITs, our team embodies
							precision, innovation, and analytical thinking.
						</p>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<img src="/focus.png" alt="Focus" />
						<h3>Focused Services</h3>
						<p>
							We specialize in backend development, frontend
							development, and blockchain.
						</p>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<img src="/coding.png" alt="Coding" />
						<h3>Holistic Approach</h3>
						<p>
							Our holistic approach integrates backend, frontend,
							and blockchain seamlessly.
						</p>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<img src="/collaboration.png" alt="Collab" />
						<h3>Collaboration</h3>
						<p>
							Your project is more than just code to us, it's a
							shared endeavor.
						</p>
					</Grid>
				</Grid>
			</div>

			<div className={stl.getStarted}>
				<h1>Ready to Get Started?</h1>
				<p>
					Elevate your projects with our focused expertise. Let's
					embark on a journey to enhance your digital footprint and
					achieve success. We're excited to learn about your project
					and explore how we can turn your ideas into digital reality.
					Reach out to us to start a conversation today.
				</p>

				<Button
					variant="contained"
					onClick={() => {
						setShowEmailUs(true);
					}}>
					Talk to Us
				</Button>
			</div>
			{showEmailUs && <EmailUs />}
		</div>
	);
};

export default AboutUs;
