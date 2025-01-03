import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { colorLibrary } from "../../color-library";

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
