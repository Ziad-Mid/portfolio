import React from "react";
import { Box } from "@chakra-ui/layout";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AppRouter from "../component/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function Layout() {
  return (
    <>
      <Router>
        <Navbar />
        <Box
          textAlign="center"
          fontSize="xl"
          w={["90%", "85%", "80%"]}
          maxW={800}
          mx="auto"
        >
          <Box pt={10} pb={10}>
            <AppRouter />
          </Box>
        </Box>

        <Footer />
      </Router>
    </>
  );
}

export default Layout;
