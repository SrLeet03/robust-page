import stl from "./EmailUs.module.scss";
import React, { useState } from "react";
import { TextField, Button, Container } from "@mui/material";

const EmailUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();  //to be removed
		console.log(formData);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<Container
			style={{ borderRadius: "10px" }}
			maxWidth="md"
			className={stl.formContainer}>
			<h2 className={stl.heading}>
				Contact Us
			</h2>
			<p style={{ color: "#333333" }}>
				Have questions or need assistance? Drop us an email, and we'll
				get back to you!
			</p>

			{/* Email Us Form */}
			<form onSubmit={handleSubmit}>
				<TextField
					name="name"
					label="Your Name"
					value={formData.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					name="email"
					type="email"
					label="Your Email"
					value={formData.email}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					name="message"
					label="Your Message"
					multiline
					rows={4}
					value={formData.message}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>

				<Button
					type="submit"
					variant="contained"
					color="primary"
					className={stl.button}>
					Send Email
				</Button>
			</form>
		</Container>
	);
};

export default EmailUs;
