import React from "react";
import ViewAllDrawer from "../ViewAllDrawer";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import { colorLibrary } from "../../../color-library";

const conversation = [
  {
    id: 1,
    res: "Hey Duckie! What's quacking? Need Some info on the Token, a deep dive into the analytics, or Something else entirely?",
    ques: "Can You give me quick overview of the currecnt market data for $DuckCoin?",
  },
  {
    id: 2,
    res: "Here's a quick look at $DUCK: The price is $0.0000012, up a strong 65% over the last 24 hours (though down 5% in the last hour). We've seen $12k in trading volume, with market cap of $1,420. There are more buyers(52) than sell(21), and the buy volume($4k). Overall, there's is double buting interest, especially over the last day, but a small correction is ongoing.",
    ques: "Can you help me buying 2 TON of $DUCK ?",
  },
  {
    id: 3,
    res: "Sure Duckie! 2 TON equals approximately 24,000 $DUCK. Are you sure want to proceed?",
    transaction: { value: 2, token: 24000 },
    ques: "yes, please buy it",
  },
  {
    id: 4,
    res: "Sending the transaction! please confirm it in your wallet and wait for your precious $DUCK to arrive.",
  },
];

export default function AskAiAbout() {
  const { selectedMemeCoinData } = useSelectedMemeCoinContext();

  return (
    <ViewAllDrawer
      btnContent={`✨Ask DuckAI About ${selectedMemeCoinData?.tokenName}`}
      btnStyles={{
        width: "100%",
        color: colorLibrary.title,
        backgroundColor: colorLibrary.boxBgLighter,
        padding: "0.6rem",
        borderRadius: "0.5rem",
        fontSize: "0.8rem",
        letterSpacing: "0.1rem",
        fontWeight: 400,
        textTransform: "capitalize",
      }}
      content={conversation}
      type={"ai"}
    />
  );
}
