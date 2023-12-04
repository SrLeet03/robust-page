// App.js

import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HighRes from "./components/high-res";
import Footer from "./components/footer";
import EmailUs from "./components/email-us";
import ProjectList from "./components/projects";
import Landing from "./components/landing/Landing";
import AboutUs from "./components/about-us/AboutUs";
import PrivacyPolicy from "./components/privacy_policy";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/our-work" element={<ProjectList />} />
					<Route
						path="/"
						element={
							<React.Fragment>
								<HighRes />
								<Landing />
								<EmailUs />
							</React.Fragment>
						}
					/>
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
