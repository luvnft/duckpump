import moment from "moment";

export const data = [
  {
    tokenId: crypto.randomUUID(),
    tokenName: "FoxCoin",
    symbol: "Fox",
    logo: "/quackyCoin.webp",
    tokenAddress: "EQCvxJy4eG8hyHBFsZ7eePxrRsUQSFE_jpptRAYBmcG_DOGS",
    mcap: 27050,
    isHot: true,
    holders: 250,
    priceHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:36 hour`,
        price: 0.000000025,
      },
      {
        time: `05:35 hour`,
        price: 0.000000059,
      },
      {
        time: `04:48 hour`,
        price: 0.00000005,
      },
      {
        time: `03:25 hour`,
        price: 0.00000045,
      },
      {
        time: `02:15 hour`,
        price: 0.00000056,
      },

      {
        time: `01:01 hour`,
        price: 0.00000055,
      },
      {
        time: `06:14 min`,
        price: 0.00000105,
      },
      {
        time: `5:14 min`,
        price: 0.0000055,
      },
      {
        time: `04:15 min`,
        price: 0.0000005,
      },
      {
        time: `03:19 min`,
        price: 0.0000035,
      },
      {
        time: `02:18 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 min`,
        price: 0.0000025,
      },
    ],
    fiveMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.0000059,
      },
      {
        time: `04:26 hour`,
        price: 0.0000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000445,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:26 hour`,
        price: 0.00000055,
      },
      {
        time: `26:12 min`,
        price: 0.00000105,
      },
      {
        time: `21:14 min`,
        price: 0.0000055,
      },
      {
        time: `16:11 min`,
        price: 0.0000005,
      },
      {
        time: `11:10 min`,
        price: 0.0000035,
      },
      {
        time: `06:20 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 sec`,
        price: 0.0000025,
      },
    ],
    fifteenMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.000000059,
      },
      {
        time: `04:26 hour`,
        price: 0.00000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000045,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:05 hour`,
        price: 0.0000005,
      },
      {
        time: `45:10 min`,
        price: 0.0000035,
      },
      {
        time: `30:14 min`,
        price: 0.0000029,
      },
      {
        time: `15:01 min`,
        price: 0.0000025,
      },
    ],
    txns: [
      {
        amount: 15,
        timeStamp: "2025-01-02T09:45:00.000Z",
      },
      {
        amount: 5,
        timeStamp: "2025-01-02T09:47:30.000Z",
      },
      {
        amount: 5,
        timeStamp: "2025-01-02T09:50:15.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T09:52:45.000Z",
      },
      {
        amount: 7,
        timeStamp: "2025-01-02T09:55:10.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T09:57:35.000Z",
      },
      {
        amount: 4,
        timeStamp: "2025-01-02T10:00:05.000Z",
      },
      {
        amount: 3,
        timeStamp: "2025-01-02T10:02:25.000Z",
      },
      {
        amount: 8,
        timeStamp: "2025-01-02T10:04:50.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T10:07:15.000Z",
      },
    ],
    created_At: new Date().toString(),
    creator: {
      name: "DuckMaster",
      address: "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai",
    },
    bondingCurve: 500,
    bondingCurveRatio: 1000,
    boughtAmount: 400,

    isListed: false,
    volume: 1200,

    price: 0.012,
    buyers: [
      {
        ts: new Date().toString(),
        walletAddress: "UQDdKWfGpaaY6x7yhkJNDSvQSaHDEuyVVlLMbi6oWM2iba1z",
        amount: 2,

        tokenAmount: 5000000,
        tradType: "buy",
        telegramId: "QuakHolder",
        img: "/duck1.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQAI75sQMdQNFLVYI1b413lGsBv701-8qwCOIWPKR5mcHzDW",
        amount: 1,
        tokenAmount: 20000000,
        tradType: "buy",
        telegramId: "SmartInvestor",
        img: "/duck5.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQCXKpag80kcf4zFucmH65pX2g02Q7AQw_oNZxTvoTjsXeWj",
        amount: 3,
        tokenAmount: 10000,
        tradType: "sell",
        telegramId: "DuckLover4Life",
        img: "/duck2.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBgXY9R-ew3O9qhx2ZntRyKyHUqRkcr8j7wtl-rxmWUmgcG",
        amount: 1.5,
        tokenAmount: 1200,
        tradType: "sell",
        telegramId: "CryptoQuacker",
        img: "/duck6.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBEfRmWqOqFufybHQ5qrnzgX-MuhM3pnPeOOmPMYG06VsBa",
        amount: 0.1,
        tokenAmount: 52800000,
        tradType: "buy",
        telegramId: "MarketWathcer",
        img: "/duck7.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQA58oWnswtUGDNp6lG07zG1vZpH467EhzyUZaXAMvnjO0Cx",
        amount: 3,
        tokenAmount: 855800000,
        tradType: "sell",
        telegramId: "GoodDuck",
        img: "/duck3.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQDL2z2klq7iRPk903mUzWaxGm4b1klxicQ90ivj9wOqkmva",
        amount: 7,
        tokenAmount: 588200000,
        tradType: "buy",
        telegramId: "SnowDuck",
        img: "/duck4.webp",
      },
    ],
    comments: [
      {
        id: 1,
        telegramId: "QuakHolder",
        userName: "QuakHolder",
        comment:
          "This is the most quacktastic coin ever! So glad i found this gem. LFG!",
        timeStamp: new Date().toString(),
        img: "/duck1.webp",
      },
      {
        id: 2,
        telegramId: "DuckLoverFor",
        userName: "DuckLoverFor",
        comment:
          "Love the community around $QUACK! Everyone's so supportive and the vibes are great. This is going to be huge!",
        timeStamp: new Date().toString(),
        img: "/duck2.webp",
      },
      {
        id: 3,
        telegramId: "CryptoQuacker",
        userName: "CryptoQuacker",
        comment:
          "Just bought some $QUACK. Looking forward to seeing how this project develop.",
        timeStamp: new Date().toString(),
        img: "/duck3.webp",
      },
    ],
  },
  {
    tokenId: crypto.randomUUID(),

    tokenName: "LootBox Larry",
    symbol: "LootBL",
    logo: "/lootbox.webp",
    tokenAddress: "EQBZ_cafPyDr5KUTs0aNxh0ZTDhkpEZONmLJA2SNGlLm4Cko",
    mcap: 10000,
    holders: 157,
    priceHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.0000000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:36 hour`,
        price: 0.000000025,
      },
      {
        time: `05:35 hour`,
        price: 0.000000059,
      },
      {
        time: `04:48 hour`,
        price: 0.00000005,
      },
      {
        time: `03:25 hour`,
        price: 0.00000045,
      },
      {
        time: `02:15 hour`,
        price: 0.00000056,
      },

      {
        time: `01:01 hour`,
        price: 0.00000055,
      },
      {
        time: `06:14 min`,
        price: 0.0000000105,
      },
      {
        time: `5:14 min`,
        price: 0.00055,
      },
      {
        time: `04:15 min`,
        price: 0.000005,
      },
      {
        time: `03:19 min`,
        price: 0.00035,
      },
      {
        time: `02:18 min`,
        price: 0.000029,
      },
      {
        time: `01:15 min`,
        price: 0.000025,
      },
    ],
    fiveMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.0000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.00000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.0000059,
      },
      {
        time: `04:26 hour`,
        price: 0.0000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000445,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:26 hour`,
        price: 0.00000055,
      },
      {
        time: `26:12 min`,
        price: 0.00000105,
      },
      {
        time: `21:14 min`,
        price: 0.0000055,
      },
      {
        time: `16:11 min`,
        price: 0.0000005,
      },
      {
        time: `11:10 min`,
        price: 0.0000035,
      },
      {
        time: `06:20 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 sec`,
        price: 0.0000025,
      },
    ],
    fifteenMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.000000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.00000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.00005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.000000059,
      },
      {
        time: `04:26 hour`,
        price: 0.00000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000045,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:05 hour`,
        price: 0.0000005,
      },
      {
        time: `45:10 min`,
        price: 0.0000035,
      },
      {
        time: `30:14 min`,
        price: 0.0000029,
      },
      {
        time: `15:01 min`,
        price: 0.0000025,
      },
    ],
    txns: [
      {
        amount: 5,
        timeStamp: "2025-01-02T09:45:00.000Z",
      },
      {
        amount: 1,
        timeStamp: "2025-01-02T09:47:30.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T09:50:15.000Z",
      },
      {
        amount: 20,
        timeStamp: "2025-01-02T09:52:45.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T09:55:10.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T09:57:35.000Z",
      },
      {
        amount: 4,
        timeStamp: "2025-01-02T10:00:05.000Z",
      },
      {
        amount: 3,
        timeStamp: "2025-01-02T10:02:25.000Z",
      },
      {
        amount: 8,
        timeStamp: "2025-01-02T10:04:50.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T10:07:15.000Z",
      },
    ],
    created_At: new Date().toString(),
    creator: {
      name: "LootLord",
      address: "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai",
    },
    bondingCurve: 900,
    bondingCurveRatio: 1000,
    boughtAmount: 300,

    isListed: false,
    volume: 800,

    price: 0.00012,
    buyers: [
      {
        ts: new Date().toString(),
        walletAddress: "UQDdKWfGpaaY6x7yhkJNDSvQSaHDEuyVVlLMbi6oWM2iba1z",
        amount: 2,

        tokenAmount: 5000000,
        tradType: "buy",
        telegramId: "QuakHolder",
        img: "/duck1.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQAI75sQMdQNFLVYI1b413lGsBv701-8qwCOIWPKR5mcHzDW",
        amount: 1,
        tokenAmount: 20000000,
        tradType: "buy",
        telegramId: "SmartInvestor",
        img: "/duck5.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQCXKpag80kcf4zFucmH65pX2g02Q7AQw_oNZxTvoTjsXeWj",
        amount: 3,
        tokenAmount: 10000,
        tradType: "sell",
        telegramId: "DuckLover4Life",
        img: "/duck2.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBgXY9R-ew3O9qhx2ZntRyKyHUqRkcr8j7wtl-rxmWUmgcG",
        amount: 1.5,
        tokenAmount: 1200,
        tradType: "sell",
        telegramId: "CryptoQuacker",
        img: "/duck6.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBEfRmWqOqFufybHQ5qrnzgX-MuhM3pnPeOOmPMYG06VsBa",
        amount: 0.1,
        tokenAmount: 52800000,
        tradType: "buy",
        telegramId: "MarketWathcer",
        img: "/duck7.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQA58oWnswtUGDNp6lG07zG1vZpH467EhzyUZaXAMvnjO0Cx",
        amount: 3,
        tokenAmount: 855800000,
        tradType: "sell",
        telegramId: "GoodDuck",
        img: "/duck3.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQDL2z2klq7iRPk903mUzWaxGm4b1klxicQ90ivj9wOqkmva",
        amount: 7,
        tokenAmount: 588200000,
        tradType: "buy",
        telegramId: "SnowDuck",
        img: "/duck4.webp",
      },
    ],
    comments: [
      {
        id: 1,
        telegramId: "QuakHolder",
        userName: "QuakHolder",
        comment:
          "This is the most quacktastic coin ever! So glad i found this gem. LFG!",
        timeStamp: new Date().toString(),
        img: "/duck1.webp",
      },
      {
        id: 2,
        telegramId: "DuckLoverFor",
        userName: "DuckLoverFor",
        comment:
          "Love the community around $QUACK! Everyone's so supportive and the vibes are great. This is going to be huge!",
        timeStamp: new Date().toString(),
        img: "/duck2.webp",
      },
      {
        id: 3,
        telegramId: "CryptoQuacker",
        userName: "CryptoQuacker",
        comment:
          "Just bought some $QUACK. Looking forward to seeing how this project develop.",
        timeStamp: new Date().toString(),
        img: "/duck3.webp",
      },
    ],
  },
  {
    tokenId: crypto.randomUUID(),
    tokenName: "Popcorn Planet",
    symbol: "PopcornPT",
    logo: "/popcorn.webp",
    tokenAddress: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    mcap: 41000,
    holders: 227,
    priceHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.0000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:36 hour`,
        price: 0.0000025,
      },
      {
        time: `05:35 hour`,
        price: 0.0000059,
      },
      {
        time: `04:48 hour`,
        price: 0.00000005,
      },
      {
        time: `03:25 hour`,
        price: 0.00000045,
      },
      {
        time: `02:15 hour`,
        price: 0.00000056,
      },

      {
        time: `01:01 hour`,
        price: 0.00000055,
      },
      {
        time: `06:14 min`,
        price: 0.0000000105,
      },
      {
        time: `5:14 min`,
        price: 0.00055,
      },
      {
        time: `04:15 min`,
        price: 0.000005,
      },
      {
        time: `03:19 min`,
        price: 0.00035,
      },
      {
        time: `02:18 min`,
        price: 0.000029,
      },
      {
        time: `01:15 min`,
        price: 0.000025,
      },
    ],
    fiveMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.0000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.00000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.0000059,
      },
      {
        time: `04:26 hour`,
        price: 0.0000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000445,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:26 hour`,
        price: 0.00000055,
      },
      {
        time: `26:12 min`,
        price: 0.00000105,
      },
      {
        time: `21:14 min`,
        price: 0.0000055,
      },
      {
        time: `16:11 min`,
        price: 0.0000005,
      },
      {
        time: `11:10 min`,
        price: 0.0000035,
      },
      {
        time: `06:20 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 sec`,
        price: 0.0000025,
      },
    ],
    fifteenMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.000000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.00000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.00005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.000000059,
      },
      {
        time: `04:26 hour`,
        price: 0.00000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000045,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:05 hour`,
        price: 0.0000005,
      },
      {
        time: `45:10 min`,
        price: 0.0000035,
      },
      {
        time: `30:14 min`,
        price: 0.0000029,
      },
      {
        time: `15:01 min`,
        price: 0.0000025,
      },
    ],
    txns: [
      {
        amount: 5,
        timeStamp: "2025-01-02T09:45:00.000Z",
      },
      {
        amount: 1,
        timeStamp: "2025-01-02T09:47:30.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T09:50:15.000Z",
      },
      {
        amount: 20,
        timeStamp: "2025-01-02T09:52:45.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T09:55:10.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T09:57:35.000Z",
      },
      {
        amount: 4,
        timeStamp: "2025-01-02T10:00:05.000Z",
      },
      {
        amount: 3,
        timeStamp: "2025-01-02T10:02:25.000Z",
      },
      {
        amount: 8,
        timeStamp: "2025-01-02T10:04:50.000Z",
      },
      {
        amount: 2,
        timeStamp: "2025-01-02T10:07:15.000Z",
      },
    ],
    created_At: new Date().toString(),
    creator: {
      name: "MovieBuff",
      address: "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai",
    },
    bondingCurve: 800,
    bondingCurveRatio: 1500,
    boughtAmount: 300,

    isListed: false,
    volume: 800,

    price: 0.00012,
    buyers: [
      {
        ts: new Date().toString(),
        walletAddress: "UQDdKWfGpaaY6x7yhkJNDSvQSaHDEuyVVlLMbi6oWM2iba1z",
        amount: 2,

        tokenAmount: 5000000,
        tradType: "buy",
        telegramId: "QuakHolder",
        img: "/duck1.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQAI75sQMdQNFLVYI1b413lGsBv701-8qwCOIWPKR5mcHzDW",
        amount: 1,
        tokenAmount: 20000000,
        tradType: "buy",
        telegramId: "SmartInvestor",
        img: "/duck5.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQCXKpag80kcf4zFucmH65pX2g02Q7AQw_oNZxTvoTjsXeWj",
        amount: 3,
        tokenAmount: 10000,
        tradType: "sell",
        telegramId: "DuckLover4Life",
        img: "/duck2.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBgXY9R-ew3O9qhx2ZntRyKyHUqRkcr8j7wtl-rxmWUmgcG",
        amount: 1.5,
        tokenAmount: 1200,
        tradType: "sell",
        telegramId: "CryptoQuacker",
        img: "/duck6.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBEfRmWqOqFufybHQ5qrnzgX-MuhM3pnPeOOmPMYG06VsBa",
        amount: 0.1,
        tokenAmount: 52800000,
        tradType: "buy",
        telegramId: "MarketWathcer",
        img: "/duck7.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQA58oWnswtUGDNp6lG07zG1vZpH467EhzyUZaXAMvnjO0Cx",
        amount: 3,
        tokenAmount: 855800000,
        tradType: "sell",
        telegramId: "GoodDuck",
        img: "/duck3.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQDL2z2klq7iRPk903mUzWaxGm4b1klxicQ90ivj9wOqkmva",
        amount: 7,
        tokenAmount: 588200000,
        tradType: "buy",
        telegramId: "SnowDuck",
        img: "/duck4.webp",
      },
    ],
    comments: [
      {
        id: 1,
        telegramId: "QuakHolder",
        userName: "QuakHolder",
        comment:
          "This is the most quacktastic coin ever! So glad i found this gem. LFG!",
        timeStamp: new Date().toString(),
        img: "/duck1.webp",
      },
      {
        id: 2,
        telegramId: "DuckLoverFor",
        userName: "DuckLoverFor",
        comment:
          "Love the community around $QUACK! Everyone's so supportive and the vibes are great. This is going to be huge!",
        timeStamp: new Date().toString(),
        img: "/duck2.webp",
      },
      {
        id: 3,
        telegramId: "CryptoQuacker",
        userName: "CryptoQuacker",
        comment:
          "Just bought some $QUACK. Looking forward to seeing how this project develop.",
        timeStamp: new Date().toString(),
        img: "/duck3.webp",
      },
    ],
  },
  {
    tokenId: crypto.randomUUID(),
    tokenName: "Blockbuster Bunny",
    symbol: "BBB",
    logo: "/blockbuster.webp",
    tokenAddress: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
    mcap: 70200,
    holders: 156,
    priceHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:36 hour`,
        price: 0.000000025,
      },
      {
        time: `05:35 hour`,
        price: 0.000000059,
      },
      {
        time: `04:48 hour`,
        price: 0.00000005,
      },
      {
        time: `03:25 hour`,
        price: 0.00000045,
      },
      {
        time: `02:15 hour`,
        price: 0.00000056,
      },

      {
        time: `01:01 hour`,
        price: 0.00000055,
      },
      {
        time: `06:14 min`,
        price: 0.00000105,
      },
      {
        time: `5:14 min`,
        price: 0.0000055,
      },
      {
        time: `04:15 min`,
        price: 0.0000005,
      },
      {
        time: `03:19 min`,
        price: 0.0000035,
      },
      {
        time: `02:18 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 min`,
        price: 0.0000025,
      },
    ],
    fiveMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.0000059,
      },
      {
        time: `04:26 hour`,
        price: 0.0000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000445,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:26 hour`,
        price: 0.00000055,
      },
      {
        time: `26:12 min`,
        price: 0.00000105,
      },
      {
        time: `21:14 min`,
        price: 0.0000055,
      },
      {
        time: `16:11 min`,
        price: 0.0000005,
      },
      {
        time: `11:10 min`,
        price: 0.0000035,
      },
      {
        time: `06:20 min`,
        price: 0.0000029,
      },
      {
        time: `01:15 sec`,
        price: 0.0000025,
      },
    ],
    fifteenMinuteHistory: [
      {
        time: `${moment().subtract(1, "days").format("D MMM")} `,
        price: 0.00000105,
      },
      {
        time: `${moment().subtract(2, "days").format("D MMM")} `,
        price: 0.0000055,
      },
      {
        time: `${moment().subtract(3, "days").format("D MMM")} `,
        price: 0.0000005,
      },
      {
        time: `${moment().subtract(4, "days").format("D MMM")} `,
        price: 0.00000035,
      },
      {
        time: `${moment().subtract(5, "days").format("D MMM")} `,
        price: 0.00000029,
      },
      {
        time: `06:26 hour`,
        price: 0.000000025,
      },
      {
        time: `05:26 hour`,
        price: 0.000000059,
      },
      {
        time: `04:26 hour`,
        price: 0.00000005,
      },
      {
        time: `03:26 hour`,
        price: 0.00000045,
      },
      {
        time: `02:26 hour`,
        price: 0.00000056,
      },

      {
        time: `01:05 hour`,
        price: 0.0000005,
      },
      {
        time: `45:10 min`,
        price: 0.0000035,
      },
      {
        time: `30:14 min`,
        price: 0.0000029,
      },
      {
        time: `15:01 min`,
        price: 0.0000025,
      },
    ],
    txns: [
      {
        amount: 15,
        timeStamp: "2025-01-02T09:45:00.000Z",
      },
      {
        amount: 35,
        timeStamp: "2025-01-02T09:47:30.000Z",
      },
      {
        amount: 100,
        timeStamp: "2025-01-02T09:50:15.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T09:52:45.000Z",
      },
      {
        amount: 750,
        timeStamp: "2025-01-02T09:55:10.000Z",
      },
      {
        amount: 20,
        timeStamp: "2025-01-02T09:57:35.000Z",
      },
      {
        amount: 100,
        timeStamp: "2025-01-02T10:00:05.000Z",
      },
      {
        amount: 10,
        timeStamp: "2025-01-02T10:02:25.000Z",
      },
      {
        amount: 20,
        timeStamp: "2025-01-02T10:04:50.000Z",
      },
      {
        amount: 205,
        timeStamp: "2025-01-02T10:07:15.000Z",
      },
    ],
    created_At: new Date().toString(),
    creator: {
      name: "FilmFanatic",
      address: "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai",
    },
    bondingCurve: 499,
    bondingCurveRatio: 1000,

    boughtAmount: 900,

    isListed: false,
    volume: 800,

    price: 0.00000125,
    buyers: [
      {
        ts: new Date().toString(),
        walletAddress: "UQDdKWfGpaaY6x7yhkJNDSvQSaHDEuyVVlLMbi6oWM2iba1z",
        amount: 2,

        tokenAmount: 5000000,
        tradType: "buy",
        telegramId: "QuakHolder",
        img: "/duck1.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQAI75sQMdQNFLVYI1b413lGsBv701-8qwCOIWPKR5mcHzDW",
        amount: 1,
        tokenAmount: 20000000,
        tradType: "buy",
        telegramId: "SmartInvestor",
        img: "/duck5.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQCXKpag80kcf4zFucmH65pX2g02Q7AQw_oNZxTvoTjsXeWj",
        amount: 3,
        tokenAmount: 10000,
        tradType: "sell",
        telegramId: "DuckLover4Life",
        img: "/duck2.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBgXY9R-ew3O9qhx2ZntRyKyHUqRkcr8j7wtl-rxmWUmgcG",
        amount: 1.5,
        tokenAmount: 1200,
        tradType: "sell",
        telegramId: "CryptoQuacker",
        img: "/duck6.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQBEfRmWqOqFufybHQ5qrnzgX-MuhM3pnPeOOmPMYG06VsBa",
        amount: 0.1,
        tokenAmount: 52800000,
        tradType: "buy",
        telegramId: "MarketWathcer",
        img: "/duck7.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQA58oWnswtUGDNp6lG07zG1vZpH467EhzyUZaXAMvnjO0Cx",
        amount: 3,
        tokenAmount: 855800000,
        tradType: "sell",
        telegramId: "GoodDuck",
        img: "/duck3.webp",
      },
      {
        ts: new Date().toString(),
        walletAddress: "UQDL2z2klq7iRPk903mUzWaxGm4b1klxicQ90ivj9wOqkmva",
        amount: 7,
        tokenAmount: 588200000,
        tradType: "buy",
        telegramId: "SnowDuck",
        img: "/duck4.webp",
      },
    ],
    comments: [
      {
        id: 1,
        telegramId: "QuakHolder",
        userName: "QuakHolder",
        comment:
          "This is the most quacktastic coin ever! So glad i found this gem. LFG!",
        timeStamp: new Date().toString(),
        img: "/duck1.webp",
      },
      {
        id: 2,
        telegramId: "DuckLoverFor",
        userName: "DuckLoverFor",
        comment:
          "Love the community around $QUACK! Everyone's so supportive and the vibes are great. This is going to be huge!",
        timeStamp: new Date().toString(),
        img: "/duck2.webp",
      },
      {
        id: 3,
        telegramId: "CryptoQuacker",
        userName: "CryptoQuacker",
        comment:
          "Just bought some $QUACK. Looking forward to seeing how this project develop.",
        timeStamp: new Date().toString(),
        img: "/duck3.webp",
      },
    ],
  },
];

export const lastboughtCoin = {
  walletAddress: "UQC9wxWwLbAAJNi1fhe2xPSaxKesLbEbiC4ml1UXPk3HMCai",
  boughtAmount: 2,
  coinName: "DuckCoin",
  timeStamp: new Date().toString(),
};
