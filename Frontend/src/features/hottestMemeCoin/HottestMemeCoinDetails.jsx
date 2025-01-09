import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { useHomeContext } from "../../context/HomePageProvider";
import { colorLibrary } from "../../color-library";
import MemeCoinIMHT from "../../ui/MemeCoinIMHT";
import { useNavigate } from "react-router-dom";

export default function HottestMemeCoinDetails() {
  const { allMemeCoin } = useHomeContext();

  const { tokenId, tokenName, mcap, holders, txns } = allMemeCoin?.at(0);

  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/meme-coin-details/${tokenId}/trade`);
  }

  return (
    <Card
      sx={{
        bgcolor: colorLibrary.boxBgLightest,
        borderRadius: "0.5rem",
      }}
      onClick={handleNavigate}
    >
      <CardActionArea>
        <CardContent>
          <Box
            component="section"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
          >
            {/* //*title */}
            <Typography textTransform={"uppercase"} fontWeight={400}>
              {tokenName} is skyrocketing 🚀
            </Typography>

            <Box
              component="div"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"90%"}
            >
              {/* //*details: Image , Mcap , Holders , Txs*/}
              <Box component="div" textAlign={"center"} width={"45%"}>
                <MemeCoinIMHT
                  mcap={mcap}
                  holders={holders}
                  txns={txns}
                  showImg={true}
                  fontWeight={500}
                />
              </Box>

              {/* //*duck gif */}
              <Box
                component="img"
                src="/hottestDuck.webp"
                width={80}
                height={130}
                loading="lazy"
              />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
