import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // For the menu button on smaller screens
import { motion } from "framer-motion";
import { useTheme } from "@emotion/react";
import { useColorMode } from "../../contexts/ColorModeContext";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const pages = [
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Contact", path: "/contact" },
  {
    text: "GitHub Profile",
    path: "https://github.com/JayateerthDambal",
    external: true,
  },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { mode, toggleColorMode } = useColorMode();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const appBarStyles = {
    backgroundColor: theme.palette.background,
    backdropFilter: "blur(20px)",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    color: theme.palette.text.primary,
    // borderBottom: `1px solid rgba(255, 255, 255, 0.3)`,
    position: "fixed",
    borderBottom:
      theme.palette.mode === "dark"
        ? "1px solid rgba(0, 0, 0, 0.7)"
        : "1px solid rgba(255, 255, 255, 0.3)",
  };
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        mass: 1,
        damping: 12,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const drawerVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        mass: 2,
        damping: 12,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const handleNavigation = (item) => {
    if (item.external) {
      window.open(item.path, "_blank");
    } else {
      console.log(`Navigating to ${item.path}`);
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={navbarVariants}>
        <AppBar position="fixed" sx={appBarStyles}>
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Jayateerth Dambal
              </Typography>
              {isMobile
                ? null
                : pages.map((item) => (
                    <Button
                      key={item.text}
                      color="inherit"
                      onClick={() => handleNavigation(item)}
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {item.text}
                    </Button>
                  ))}
              <IconButton color="inherit" onClick={toggleColorMode}>
                {mode === "dark" ? <Brightness7Icon /> : <NightsStayIcon />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={drawerVariants}
          style={{ width: 250 }}
        >
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
            <List>
              {pages.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => handleNavigation(item)}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
