import React from "react";
import { Grid } from "@mui/material";
import stl from "./Landing.module.scss";

export default function Landing() {
	return (
		<div className={stl.container}>
			<Grid container className={stl.desc}>
				<Grid item xs={12} md={0.5}></Grid>
				<Grid item xs={12} md={6}>
					<h1>Our Approach</h1>
					<br />
					<div className={stl.text}>
						<p>
							We embrace the philosophy of <br />
							<span>"First-Principles Thinking"</span> <br />
							in our approach to solution design. By transcending
							conventional norms and questioning assumptions, we
							diligently concentrate on the fundamental elements,
							enabling us to make optimal choices for solutions
							that seamlessly align with our objectives. This
							commitment to discerning simplicity is at the core
							of our craftsmanship in developing innovative
							solutions.
						</p>
					</div>
				</Grid>

				{/* Image Section */}
				<Grid item xs={12} md={5}>
					<div className={stl.image}>
						<img
							src="svg/thought-icon.svg"
							alt="Puzzle"
							className={stl.icon}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
