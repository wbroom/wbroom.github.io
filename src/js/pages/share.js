import Header from '../components/header'
import Footer from '../components/footer'

let bannerSrc = 'https://wbroom-blog.oss-cn-hangzhou.aliyuncs.com/public/assets/share-bannre.png'

const Content = {
  onbeforeremove(v) {
    v.dom.classList.add("exit")
    return new Promise(function(resolve) {
        setTimeout(resolve, 500)
    })
  },
  view() {
    return m('main#share.fancy', [
      m(`img.share-banner[src=${bannerSrc}]`),
      m('section.arts',
        [1,1,1,1,1,1].map((item, index) => m('figure.art', [
          m(`img.head[alt=${index}]`, {src: 'https://wbroom-blog.oss-cn-hangzhou.aliyuncs.com/public/assets/Bitmap1.png'}),
          m('figcaption.main', '别看，看也没博文。'),
          m('span.time', '耶稣生日的那天'),
          m('section.ctrl', [
            m('span', '点赞（1000）'),
            m('span', '评论（1000）'),
            m('span', '浏览（100000）')
          ])
        ]))
      ),
      m('section.pagination', '页码（待处理）'),
    ])
  }
}

export default {
  view(v) {
    return[
      m(Header, {selectedIndex: 1}),
      m(Content),
      m(Footer),
    ]
  }
}