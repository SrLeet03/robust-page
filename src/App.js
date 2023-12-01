// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HighRes from "./components/high-res";
import Footer from "./components/footer";
import EmailUs from "./components/email-us";
import ProjectList from "./components/projects";
import Landing from "./components/landing/Landing";

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
                <Landing/>
								<EmailUs />
							</React.Fragment>
						}/>
            <Route path="/about-us"/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
