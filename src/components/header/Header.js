import { useState } from "react";
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
import { scrollTo } from "../../hooks";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const navigate = useNavigate();
	const location = useLocation();

	const toggleDrawer = (item) => {
		setDrawerOpen(!drawerOpen);
		if (item === "Who We Are") {
			navigate("/about-us");
		} else if (item === "What We Do") {
			navigate("/our-work");
		} else if (item === "Connect With Us") {
			scrollTo("connect-with-us",navigate , location);
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
								<Link to="/about-us">Who We Are</Link>
							</h4>
							<h4 className={stl.appBarLink}>
								<Link to="/our-work">What We Do</Link>
							</h4>
							<h4
								className={stl.appBarLink}
								onClick={() => scrollTo("connect-with-us" , navigate , location)}>
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
