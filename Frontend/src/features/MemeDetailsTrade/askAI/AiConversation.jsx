import { Avatar, Box, Divider, Typography } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../../color-library";
import { ArrowDownwardRounded } from "@mui/icons-material";

export default function AiConversation({ content }) {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {content?.map((data) => (
        <>
          <Box display={"flex"} gap={"0.5rem"}>
            <Avatar src="/duck.jpg" alt="duck.jpg" />
            <Typography variant="body2" color={colorLibrary.title}>
              {data.res}
            </Typography>
          </Box>
          {data.transaction && (
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={2}
              width={"60%"}
              marginLeft={"3rem"}
              padding={"0.4rem 0.6rem"}
              borderRadius={"1rem"}
              bgcolor={colorLibrary.boxBg}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Avatar
                  src="/duck.jpg"
                  alt="duck.jpg"
                  sx={{ width: 25, height: 25 }}
                />
                <Typography variant="body1" color={colorLibrary.boxBgLightest}>
                  {data.transaction.value} TON
                </Typography>
              </Box>

              <Box position="relative">
                <Divider
                  variant="fullWidth"
                  sx={{
                    borderColor: colorLibrary.boxBgLightest,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: colorLibrary.boxBgLightest,
                    backgroundColor: colorLibrary.boxBg,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowDownwardRounded fontSize="small" />
                </Box>
              </Box>

              <Box display={"flex"} justifyContent={"space-between"}>
                <Avatar
                  src="/duck.jpg"
                  alt="duck.jpg"
                  sx={{ width: 25, height: 25 }}
                />
                <Typography variant="body1" color={colorLibrary.boxBgLightest}>
                  {data.transaction.token.toLocaleString("en-US")} $DUCK
                </Typography>
              </Box>
            </Box>
          )}
          {data.ques && (
            <Typography
              variant="body2"
              alignSelf={"end"}
              color={colorLibrary.text}
              bgcolor={colorLibrary.bgLight2}
              textAlign={"right"}
              padding={"0.4rem 0.6rem"}
              borderRadius={"1rem"}
            >
              {data.ques}
            </Typography>
          )}
        </>
      ))}
    </Box>
  );
}
