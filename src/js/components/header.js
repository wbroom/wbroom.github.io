export default {
  view(v) {
    const titles = ['首页', '分享', '设计', '绘画', '摄影']
    const hrefs = ['#!/', '#!/share']
    const selectedIndex = v.attrs.selectedIndex

    return m("header", [
      m("h1", "KOOJEE"),
      m('section.titles',
        titles.map((title, index) => m('a', {class: 'title' + (selectedIndex === index ? ' selected' : ''), href: hrefs[index] || '#'}, titles[index])
        )
      ),
    ])
  }
}