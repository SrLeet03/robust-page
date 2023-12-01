import { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
	Link,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import stl from "./Header.module.scss";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	const toggleDrawer = (item) => {
		setDrawerOpen(!drawerOpen);

		// Add specific functionality for each item if needed
		if (item === "Who We Are") {
			// Handle "Who We Are" click
		} else if (item === "What We Do") {
			// Handle "What We Do" click
		} else if (item === "Connect With Us") {
			scrollTo("connect-with-us");
		}
	};

	const drawerContent = (
		<List>
			{isSmallScreen && (
				<>
					<ListItem onClick={() => toggleDrawer("Who We Are")}>
						<ListItemText primary="Who We Are" />
					</ListItem>
					<ListItem onClick={() => toggleDrawer("What We Do")}>
						<ListItemText primary="What We Do" />
					</ListItem>
					<ListItem onClick={() => toggleDrawer("Connect With Us")}>
						<ListItemText primary="Connect With Us" />
					</ListItem>
					{/* Add more items as needed */}
				</>
			)}
		</List>
	);

	const scrollTo = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = 85;
			const elementPosition = element.offsetTop - offset;

			window.scrollTo({
				top: elementPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className={stl.root}>
			<AppBar position="fixed" className={stl.appBar}>
				<Toolbar >
					<img src="logo.png" alt="Robust" className={stl.logo} />

					<Link className={stl.title} underline="none" href="/">
						Robust Solutions
					</Link>

					<div style={{ flexGrow: "1" }}></div>
					{!isSmallScreen && (
						<div className={stl.middleSection}>
							<h4 className={stl.appBarLink}>Who We Are</h4>
							<h4 className={stl.appBarLink}>What We Do</h4>
							<h4
								className={stl.appBarLink}
								onClick={() => scrollTo("connect-with-us")}>
								Connect With Us
							</h4>
						</div>
					)}
					<IconButton
						disabled={!isSmallScreen}
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={toggleDrawer}
						className={stl.menuButton}>
						<img
							src="menu-icon.png"
							alt="menu-icon"
							className={stl.menuIcon}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Responsive Drawer */}
			<Drawer
				className={stl.drawer}
				variant="temporary"
				anchor="right"
				open={drawerOpen}
				onClose={toggleDrawer}
				classes={{
					paper: stl.drawerPaper,
				}}>
				{drawerContent}
			</Drawer>
		</div>
	);
};

export default Header;
