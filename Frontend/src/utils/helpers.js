import moment from "moment";
import { colorLibrary } from "../color-library";

//*return the 4 first and last 4 characters of a wallet address
export function convertWalletAddress(address) {
  return `${String(address).slice(0, 4)}...${String(address).slice(-4)}`;
}

//*display percentage in green if positive and red if negative
export function colorPercentage(percentage) {
  if (percentage > 0) {
    return colorLibrary.bgBuy;
  } else if (percentage < 0) {
    return colorLibrary.bgSell;
  } else {
    return colorLibrary.text;
  }
}

//*formatting time for memeCoin or transactions created at
export function getCustomRelativeTime(createdAt) {
  const now = moment();
  const duration = moment.duration(now.diff(createdAt));

  if (duration.asHours() < 1) {
    // Less than an hour: display minutes:seconds (e.g., "52:15s")
    const minutes = Math.floor(duration.asMinutes());
    const seconds = Math.floor(duration.asSeconds() % 60);
    return `${minutes}:${seconds}s`;
  } else if (duration.asDays() < 30) {
    // Less than a month: display days (e.g., "5 days")
    const days = Math.floor(duration.asDays());
    return `${days} ${days === 1 ? "day" : "days"}`;
  } else if (duration.asYears() < 1) {
    // Less than a year: display months and days (e.g., "1 M and 10 days")
    const months = Math.floor(duration.asMonths());
    const remainingDays = Math.floor(duration.asDays() % 30);
    return `${months} M${
      remainingDays > 0
        ? ` and ${remainingDays} ${remainingDays === 1 ? "day" : "days"}`
        : ""
    }`;
  } else {
    // More than a year: display years and months (e.g., "1 Y and 1 M")
    const years = Math.floor(duration.asYears());
    const remainingMonths = Math.floor(duration.asMonths() % 12);
    return `${years} Y${
      remainingMonths > 0 ? ` and ${remainingMonths} M` : ""
    }`;
  }
}

//*formatting price for Mcap
export function formatBigPrice(value) {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B"; // Billions
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M"; // Millions
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(2) + "K"; // Thousands
  }
  return value?.toString(); // Smaller values
}

//*calc bonding curve
export function calcBondingCurve(value, ratio) {
  //its mean the coin is listed
  if (value > ratio) return 100;

  //or calculate the bonding curve
  return ((value / ratio) * 100)?.toFixed(1);
}

//*one of use case are in the chart price
export const formatSmallNumber = (num) => {
  if (num === 0) return "$0";

  // Convert to string and remove leading "0."
  const str = num.toString();
  if (!str.includes("e")) {
    const match = str.match(/^0\.([0]*)([1-9]\d*)$/);
    if (match) {
      const zeroCount = match[1].length;
      const significantDigits = match[2];
      return `$0.(${zeroCount})${significantDigits}`;
    }
  }

  // Handle scientific notation
  const [coefficient, exponent] = str.split("e");
  if (exponent) {
    const zeroCount = Math.abs(parseInt(exponent)) - 1;
    const significantDigits = coefficient.replace("0.", "");
    return `$0.(${zeroCount})${significantDigits}`;
  }

  // Fallback to regular formatting
  return `$${num}`;
};

//its return the Mcap object include time from price history
// export function calcMcapHistory(priceHistory, mcap) {
//   if (!priceHistory || !mcap) return;
//   const mcapResults = priceHistory?.map((data) => {
//     const calcMcap = mcap * data.price;
//     console.log(calcMcap);
//     return { time: data.time, price: +formatBigPrice(calcMcap) };
//   });

//   return mcapResults;
// }

// Function to clean and convert input values to numbers
export function cleanNumbers({ value, buy, sell }) {
  // Remove "$" or "k" and convert strings to numbers
  const clean = (num) => {
    if (typeof num === "string") {
      num = num.replace(/[^\d.]/g, ""); // Remove non-numeric characters except "."
      return parseFloat(num); // Convert to number
    }
    return num; // Return as is if already a number
  };

  return {
    value: clean(value),
    buy: clean(buy),
    sell: clean(sell),
  };
}
