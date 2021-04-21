export interface CharactorData {
  account: string;
  name: TextIsColored[];
  src: string;
  faceSrc: string;
  selif: TextWithColor;
  voices: {
    text: string
    src: string
  }[];
  cv: string;
  subColor: [number, number, number, number]
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
    subColor: [224, 224, 224, 1.0],
    voices: [
      {
        text: '兄さんはいっつもそうです、仕方ない人ですね。',
        src: '/assets/sisL01.mp3'
      },
      {
        text: '兄さん、そろそろ朝ごはんができますよ。起きてくださ...い！？',
        src: '/assets/sisL02.mp3'
      },
      {
        text: 'わかってるんです。おかしいですよね。気持ち悪いですよね。私は妹なのに。兄さん、ごめんなさい。',
        src: '/assets/sisL03.mp3'
      },
    ],
    cv: "ja-JP-Wavenet-A(pitch: 0.0)",
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
    subColor: [84, 84, 84, 1.0],
    voices: [
      {
        text: 'お兄ちゃんどうせ暇でしょ？明日は駅前で買い物だから。',
        src: '/assets/sisH01.mp3'
      },
      {
        text: 'お兄ちゃん、誰よその女！私たちだけじゃ不満なの？',
        src: '/assets/sisH02.mp3'
      },
      {
        text: 'お兄ちゃんはさ、わたしみたいなツンケンした妹より家事ができて優しい妹の方が好きなんでしょ？わたしもそうなれたらさ、好き、って言ってくれるのかな。',
        src: '/assets/sisH03.mp3'
      },
    ],
    cv: "ja-JP-Wavenet-A(pitch: 4.0)",
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
    subColor: [69, 214, 232, 1.0],
    voices: [
      {
        text: 'この宇宙船の燃料は愛だよ。君、私と愛で交信しよう。',
        src: '/assets/a01.mp3'
      },
      {
        text: '私の何が不満なんだ？肉眼でわかるような現地人との違いはないと思うのだが。',
        src: '/assets/a02.mp3'
      },
      {
        text: '君といると分からなくなってくる、愛ってなんなんだろう。体が引き裂かれそうなんだ。',
        src: '/assets/a03.mp3'
      },
    ],
    cv: "ja-JP-Wavenet-B(pitch: 0.4)",
    detail: [
      "ケプラー452bからの旅行中、地球には燃料補給のため立ち寄った。",
      "当然地球に滞在する場所はなく、主人公の家に居候している。",
      "愛を得るためには手段を選ばず主人公とのスキンシップが激しい。",
      "いつもおいしい料理を作ってくれる@ryohaには頭が上がらない。",
    ],
    url: "https://glovety.product.co.jp/",
  },
  {
    account: "https://twitter.com/ryoha000",
    name: "ryoha".split("").map((v) => ({ text: v, colored: false })),
    src: "/assets/shinku_back_white.webp",
    faceSrc: "/assets/shinku_face.webp",
    selif: {
      text: "未来で地球は人類の手から失われた。",
      color: [255, 230, 140, 1.0],
    },
    subColor: [189, 18, 36, 1.0],
    voices: [
      {
        text: '未来で地球は人類の手から失われた。私はそれを阻止するためにここにいる。',
        src: '/assets/f01.mp3'
      },
      {
        text: 'な、な、な、、、、、何をするんだ。嫁入り前の娘と自室で二人きりになろうとするとは、ふ、不埒だぞ。',
        src: '/assets/f02.mp3'
      },
      {
        text: 'お前は未来と今、どっちの方が大切だと思う？私はもう、決めたよ。',
        src: '/assets/f03.mp3'
      },
    ],
    cv: "ja-JP-Wavenet-B(pitch: 3.6)",
    detail: [
      "id: ryoha000と出会った翌日現れた自称未来人。",
      "滅びの運命を避けるため、id: ryoha000から主人公への一方的な愛になるよう画策する。",
      "主人公家居候その2として家事見習いを始めているが、成果は見受けられない。",
      "ものすごい恋愛脳で空回りすることが多い。",
    ],
    url: "http://www.favo-soft.jp/soft/product/world/character.htm",
  },
  {
    account: "https://infinity.ryoha.moe/",
    name: "りょは".split("").map((v) => ({ text: v, colored: false })),
    src: "/assets/ryoha_back_white.webp",
    faceSrc: "/assets/ryoha_back_white.webp",
    selif: {
      text: "空から女の子って...いつからここはゼロ年代になったんだ。",
      color: [51, 51, 51, 1.0],
    },
    subColor: [189, 18, 36, 1.0],
    voices: [],
    cv: "？？？",
    detail: [
      "プログラミングとか恋愛ADVゲームが趣味の地球人。",
      "本作の主人公で妄想力がたくましい。",
      "あまり頭がよくなく中学生の妹によく大学の勉強を教えてもらっていて、本人は妹から呆れられていると思っている。",
      "毎日幼馴染が欲しかったと人生を憂いている。",
    ],
    url: "https://infinity.ryoha.moe/",
  },
];
