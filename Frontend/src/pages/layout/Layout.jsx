import { Outlet } from "react-router-dom";
import { colorLibrary } from "../../color-library";
import { Box, Button, Container } from "@mui/material";
import Header from "../../ui/Header";

const Layout = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={2}
      bgcolor={colorLibrary.bg}
    >
      {/* //*this must be just in home page */}
      {/* <Box component="header" marginBottom={1}>
        <Header />
      </Box> */}

      {/* <Box component="main"> */}
      <Outlet />
      {/* </Box> */}
    </Box>
  );
};

export default Layout;
