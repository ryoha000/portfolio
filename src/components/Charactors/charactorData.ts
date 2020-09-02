export interface CharactorData {
  account: string
  name: string
  src: string
  selif: string
  voice: string[]
  cv: string
  detail: string
  url: string
}

export const charactorDatas: CharactorData[] = [
  {
    account: 'https://trap.jp/author/ryoha/',
    name: 'ryoha',
    src: '/assets/sui_gray.png',
    selif: '兄さんはいっつもそうです、仕方ない人ですね。',
    voice: [],
    cv: 'Text-to-Speech',
    detail: '兄思いの妹',
    url: 'https://www.makura-soft.com/sakuranouta/index.html'
  }
]
