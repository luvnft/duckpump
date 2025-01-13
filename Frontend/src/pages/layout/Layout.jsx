import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { colorLibrary } from "../../color-library";
import DuckLoading from "../../ui/DuckLoading";

const Layout = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={2}
      bgcolor={colorLibrary.bg}
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
