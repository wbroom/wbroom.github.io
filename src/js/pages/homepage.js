import Header from '../components/header'
import Footer from '../components/footer'
import common from '../common/'

const h2 = '最终选择了生活……'
const h3 = '宁愿向着远方哭泣，不愿望着当下诧异。'
let contentImgs = ['Bitmap1.png', 'Bitmap2.png', 'Bitmap3.png', 'Bitmap4.png']
let arts = [
  {
    img: 'Bitmap5.png',
    main: '经历',
    desc: '我在东方等你，不济那远去的夕阳。',
  },
  {
    img: 'Bitmap6.png',
    main: '兴趣',
    desc: '给个游戏，能躺半年。',
  },
  {
    img: 'Bitmap7.png',
    main: '性格',
    desc: '热辣似火，妖娆弄人？不不不，就是呆萌。',
  },
  {
    img: 'Bitmap8.png',
    main: '态度',
    desc: '你到底准备用什么态度和姑奶奶说话？',
  },
]

const Content = {
  onbeforeremove(v) {
    v.dom.classList.add("exit")
    return new Promise(function(resolve) {
        setTimeout(resolve, 500)
    })
  },
  view() {
    return m('main#homepage.fancy',
      m('section.content-center', [
        m('h2', h2),
        m('h3', h3),
        contentImgs.map((contentImg, index) => m('img', {class: 'img' + index, src: common.assetsPath + contentImg, alt: 'content-img'}))
      ])
    )
  }
}

export default {
  view(v) {
    return [
      m(Header, {selectedIndex: 0}),
      m(Content),
      m(Footer),
    ]
  }
}