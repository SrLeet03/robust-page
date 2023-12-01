// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HighRes from "./components/high-res";
import Footer from "./components/footer";
import EmailUs from "./components/email-us";
import ProjectList from "./components/projects";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/what-we-do" element={<ProjectList />} />
					<Route
						path="/" 
						element={
							<React.Fragment>
								<HighRes />
								<EmailUs />
							</React.Fragment>
						}></Route>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
