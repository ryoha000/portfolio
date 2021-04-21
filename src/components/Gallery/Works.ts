export interface Work {
  title: string
  subtitle: string
  description: string[]
  thumbnails: string[]
  imgURLs: string[]
  refLinks: RefLink[]
}

export interface RefLink {
  title: string
  url: string
}

export const works: Work[] = [
  {
    title: 'りょはインフィニティ',
    subtitle: '架空ADVゲーム公式サイト',
    description: [
      '架空ADVゲーム「りょはインフィニティ」の公式サイト風ポートフォリオです。',
      '個人プロジェクトです。',
      'クライアントは svelte + rollup + TypeScript で作成しています。',
      'Azure Static Web App で自動デプロイされています。',
    ],
    thumbnails: [
      '/assets/portfolio01thumbnail.webp',
      '/assets/portfolio02thumbnail.webp'
    ],
    imgURLs: [
      '/assets/portfolio01.webp',
      '/assets/portfolio02.webp'
    ],
    refLinks: [
      {
        title: 'ソースコード',
        url: 'https://github.com/ryoha000/portfolio'
      }
    ]
  },
  {
    title: 'エロゲランチャー',
    subtitle: 'エロゲ界のSteamを目指して',
    description: [
      '自動でインストールしたエロゲを探索して、自分で設定することなく起動やプレイ時間の管理ができるエロゲランチャーです。',
      '個人プロジェクトです。',
      'デスクトップWebアプリケーションとして作っていて electron + Vue2.0 + composition api + TypeScript で作成しています。',
      'サーバーサイドは GCP(GCE) + Rust (+ Actix web + Diesel) を使用しています。',
    ],
    thumbnails: [
      '/assets/es-client-header-thumbnail.webp',
      '/assets/es-client-home-activity-thumbnail.webp'
    ],
    imgURLs: [
      '/assets/es-client-header.webp',
      '/assets/es-client-home-activity.webp'
    ],
    refLinks: [
      {
        title: 'ユーザードキュメント',
        url: 'https://ryoha000.hatenablog.com/entry/2020/08/02/215327'
      },
      {
        title: 'Tweet',
        url: 'https://twitter.com/ryoha000/status/1269247713213706242?s=20'
      },
      {
        title: 'クライアント(ソースコード)',
        url: 'https://github.com/ryoha000/es-client'
      },
      {
        title: 'サーバー(ソースコード)',
        url: 'https://github.com/ryoha000/esc_server'
      }
    ]
  },
  {
    title: 'ポケモン対戦補助ツール',
    subtitle: '第8世代の暇ツール',
    description: [
      'ポケモン剣盾発売一週間後に公開した対戦補助ツールです。',
      'ダメージ計算や所持ポケモン、対戦成績の管理を容易にします。',
      '個人プロジェクトです。',
      '発売直後の公開だったためGoogle検索上位にきてユーザー数一万人を超えました。',
      '現状(2020/09/06)メンテナンスやサーバーの都合上運用していません。',
      'クライアントは React + TypeScript で作成しています。',
      'サーバーサイドは GCP(Cloud Functions + Cloud SQL) + Python (+ Flask + SQLAlchemy) を使用しています',
    ],
    thumbnails: [
      '/assets/tool4pokemon8th01thumbnail.webp',
      '/assets/tool4pokemon8th02thumbnail.webp'
    ],
    imgURLs: [
      '/assets/tool4pokemon8th01.webp',
      '/assets/tool4pokemon8th02.webp'
    ],
    refLinks: [
      {
        title: '紹介記事',
        url: 'https://trap.jp/post/880/'
      },
      {
        title: 'クライアント(ソースコード)',
        url: 'https://github.com/ryoha000/tool4pokemon8th'
      },
    ]
  },
  {
    title: 'booQ',
    subtitle: '備品・書籍管理サービス',
    description: [
      'サークル内で備品・書籍を管理するニーズがあったため作成されました。',
      'サークル内の複数人プロジェクトです。',
      'クライアントは Vue + JavaScript で作成しています。',
      'サーバーサイドは VPS + Go (+ echo + GORM) を使用しています',
    ],
    thumbnails: [
      '/assets/booQ01thumbnail.webp',
      '/assets/booQ02thumbnail.webp'
    ],
    imgURLs: [
      '/assets/booQ01.webp',
      '/assets/booQ02.webp'
    ],
    refLinks: [
      {
        title: '紹介記事',
        url: 'https://trap.jp/post/643/'
      },
      {
        title: 'ソースコード(クライアント、サーバー共通)',
        url: 'https://github.com/traPtitech/booQ'
      },
    ]
  },
  {
    title: 'エロゲ中古価格アプリ',
    subtitle: '中古エロゲの価格.com',
    description: [
      '批評空間様のエロゲの評価を見れ、Sofmap, Amazon, 駿河屋での中古エロゲの通販価格を見れます。',
      '個人プロジェクトです。',
      '現状公開していません。',
      '画像が荒いのは資料が残ってなくて発表の動画からキャプチャしてきたからです。',
      'はじめてのプロダクトです。',
      'スマホWebアプリケーションとして作っていて React Native + Expo + TypeScript(一部) で作成しています。',
      'サーバーサイドは AWS(EC2) + Go (+ echo + sqlx) を使用しています',
    ],
    thumbnails: [
      '/assets/t01thumbnail.webp',
      '/assets/t02thumbnail.webp',
      '/assets/t03thumbnail.webp'
    ],
    imgURLs: [
      '/assets/t01.webp',
      '/assets/t02.webp',
      '/assets/t03.webp'
    ],
    refLinks: [
      {
        title: 'クライアント(ソースコード)',
        url: 'https://github.com/ryoha000/t-client'
      },
      {
        title: 'サーバー(ソースコード)',
        url: 'https://github.com/ryoha000/t-cloud'
      },
    ]
  }
]
