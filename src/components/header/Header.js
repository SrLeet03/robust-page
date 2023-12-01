import { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
	useMediaQuery,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/system";
import stl from "./Header.module.scss";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const navigate = useNavigate();
	const location = useLocation();

	const toggleDrawer = (item) => {
		setDrawerOpen(!drawerOpen);
		if (item === "Who We Are") {
			navigate("/who-we-are");
		} else if (item === "What We Do") {
			navigate("/what-we-do");
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
				</>
			)}
		</List>
	);

	const scrollTo = (id) => {
		if (location.pathname !== "/") {
			navigate("/");
		}
		setTimeout(() => {
			const element = document.getElementById(id);
			if (element) {
				const offset = 85;
				const elementPosition = element.offsetTop - offset;

				window.scrollTo({
					top: elementPosition,
					behavior: "smooth",
				});
			}
		}, 0);
	};
	
	return (
		<div className={stl.root}>
			<AppBar position="fixed" className={stl.appBar}>
				<Toolbar>
					<img src="logo.png" alt="Robust" className={stl.logo} />

					<Link to="/">
						<p className={stl.title}>Robust Solutions</p>
					</Link>

					<div style={{ flexGrow: "1" }}></div>
					{!isSmallScreen && (
						<div className={stl.middleSection}>
							<h4 className={stl.appBarLink}>
								<Link to="/who-we-are">Who We Are</Link>
							</h4>
							<h4 className={stl.appBarLink}>
								<Link to="/what-we-do">What We Do</Link>
							</h4>
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
