export interface CharactorData {
  account: string;
  name: TextIsColored[];
  src: string;
  faceSrc: string;
  selif: TextWithColor;
  voices: string[];
  cv: string;
  detail: string[];
  url: string;
}

interface Account {
  url: string;
  text: string;
}

interface TextWithColor {
  text: string;
  color: [number, number, number, number];
}

interface TextIsColored {
  text: string;
  colored: boolean;
}

const getTextIsColored = (
  target: string,
  coloredStr: string[]
): TextIsColored[] => {
  return target
    .split("")
    .map((v) => ({ text: v, colored: coloredStr.includes(v) }));
};

export const charactorDatas: CharactorData[] = [
  {
    account: "https://trap.jp/author/ryoha/",
    name: getTextIsColored("@ryoha", ["@"]),
    src: "/assets/sui_right_back_white.webp",
    faceSrc: "/assets/sui_gray_face.webp",
    selif: {
      text: "兄さんはいっつもそうです、仕方ない人ですね。",
      color: [84, 84, 84, 1.0],
    },
    voices: [],
    cv: "Text-to-Speech",
    detail: [
      "双子の姉として@ryoha000をもち、りょは家の家事を全て取り仕切っている。",
      "特に主人公の世話を甲斐甲斐しく焼いていて、お兄ちゃん観察を趣味と称している。",
      "頭のよくない主人公によく勉強を教えていて勉強も家事も何でもできるハイスペック妹。",
    ],
    url: "https://www.makura-soft.com/sakuranouta/index.html",
  },
  {
    account: "https://github.com/ryoha000",
    name: getTextIsColored("@ryoha000", ["@"]),
    src: "/assets/sui_right_back_white.webp",
    faceSrc: "/assets/sui_silver_face.webp",
    selif: {
      text: "お兄ちゃんどうせ暇でしょ？明日は駅前で買い物だから。",
      color: [224, 224, 224, 1.0],
    },
    voices: [],
    cv: "Text-to-Speech",
    detail: [
      "双子の妹である@ryohaの立派なお姉ちゃんであるよう心掛けているがよくミスをカバーされている。",
      "お兄ちゃんっ子だったが中学入学を境に急に高圧的な態度をとるようになった。",
      "どういうわけか休日は主人公を良く連れまわしてショッピングに行ったり一緒にゲームをしている。",
    ],
    url: "https://www.makura-soft.com/sakuranouta/index.html",
  },
  {
    account: "https://ryoha000.hatenablog.com/",
    name: getTextIsColored("id: ryoha000", ["i", "d"]),
    src: "/assets/romi_back_white.webp",
    faceSrc: "/assets/romi_face.webp",
    selif: {
      text: "この宇宙船の燃料は愛だよ。君、私と愛で交信しよう。",
      color: [191, 87, 130, 1.0],
    },
    voices: [],
    cv: "Text-to-Speech",
    detail: [
      "ケプラー452bからの旅行中、地球には燃料補給のため立ち寄った。",
      "当然地球に滞在する場所はなく、主人公の家に居候している。",
      "愛を得るためには手段を選ばず主人公とのスキンシップが激しい。",
      "いつもおいしい料理を作ってくれる@ryohaには頭が上がらない。",
    ],
    url: "https://www.makura-soft.com/sakuranouta/index.html",
  },
  {
    account: "https://trap.jp/author/ryoha/",
    name: "ryoha".split("").map((v) => ({ text: v, colored: v === "o" })),
    src: "/assets/shinku_back_white.webp",
    faceSrc: "/assets/shinku_face.webp",
    selif: {
      text: "兄さんはいっつもそうです、仕方ない人ですね。",
      color: [255, 230, 140, 1.0],
    },
    voices: [],
    cv: "Text-to-Speech",
    detail: [
      "りょは家長女で双子の妹である@ryohaの立派なお姉ちゃんであるよう心掛けているがよくミスをカバーされている。",
      "お兄ちゃんっ子だったが中学入学を境に急に高圧的な態度をとるようになった。",
      "どういうわけか休日はりょはを良く連れまわしてショッピングに行ったり一緒にゲームをしている。",
    ],
    url: "https://www.makura-soft.com/sakuranouta/index.html",
  },
];
