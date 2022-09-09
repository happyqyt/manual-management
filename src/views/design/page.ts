import store from '../../store'

const getSubPageItem = (data: any) => {
  const classes = data.classes?.join(' ') ?? ''
  const content = data?.data?.[0]?.cont ?? ''
  let result: string = ''
  if (data.type === 1) {
    result = `<h1 class="${classes}">${content}</h1>`
  } else if (data.type === 2) {
    result = `<p class="${classes}">${content}</p>`
  } else if (data.type === 3) {
    result = `<img class="${classes}" src="${content}" />`
  } else if (data.type === 4) {
    result = `<ol class="${classes}">${data?.data?.reduce((total: string, item: any) => total + `<li>${item.cont}</li>`, '') ?? ''}</ol>`
  } else if (data.type === 5) {
    result = `<ul class="${classes}">${data?.data?.reduce((total: string, item: any) => total + `<li>${item.cont}</li>`, '') ?? ''}</ul>`
  }
  return result
}

const getSubPageList = (list: Array<any>) => {
  return list.reduce((total: string, page: any, index) => {
    return total + `
      <div class="swiper-container m${index + 1}">
        <div class="swiper-wrapper">
          ${page.subPageList.reduce((total: string, subPage: any) => {
            // const subPageItemList = JSON.parse(subPage.jsonStr)
            let subPageItemList:Array<any>
            try {
              subPageItemList = JSON.parse(subPage.jsonStr)
            } catch {
              subPageItemList = []
            }
            return total + `
              <div class="swiper-slide">
                ${subPageItemList.reduce((total: string, subPageItemData: any) => total + getSubPageItem(subPageItemData), '')}
              </div>
            `
          }, '')}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `
  }, '')
}

const getPage = (list: Array<any>, isPreview: boolean = false) => `
  <!DOCTYPE html>
  <html lang="en" xmlns:th="http://www.thymeleaf.org">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <title>Product Manual</title>

      <link rel="stylesheet" type="text/css" href="https://unpkg.com/swiper@6/swiper-bundle.css" />
      <link rel="stylesheet" type="text/css" href="https://testonline-files.vesync.com/h5/manual/css/manual.css">

      <style>
        ${isPreview ? `
        body {
          max-width: 750px;
          margin: 0 auto;
        }
        .swiper-pagination {
          left: 0;
          right: 0;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }
        ` : ''}
        .swiper-container {
          display: none;
        }
        .swiper-slide.swiper-slide-next {
          overflow: hidden;
        }

        .mainWrap{
          display: none;
          position: relative;
        }

        .btn-back-menu {
          position: sticky;
          bottom: 1rem;
          left: 100vw;
          width: 0.5rem;
          height: 0.5rem;
          background: #F5F5F5;
          border-radius: 50%;
          box-shadow: 0 0 6px #F5F5F5;
          cursor: pointer;
          z-index: 10;
        }
        .btn-back-menu img {
          width: 0.24rem;
          height: 0.24rem;
          position: absolute;
          left: 0.13rem;
          top: 0.12rem;
        }

        .ulist1 {
          margin-left: 22px;
          text-align: left;
          list-style-position: outside;
          list-style-type: disc;
        }
        .ulist1 li {
          font-size: 16px;
          line-height: 22px;
          padding-left: 7px;
          margin-top: 12px;
        }
        .ulist1 li:first-child {
          margin-top: 16px;
        }
        
        .ulist2 {
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          list-style: none;
        }
        .ulist2 li {
          padding-left: 30px;
          background-size: 20px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAKAAAAAB65masAAAAUklEQVRYCe3RsQ0AIAgEQHUl9h+BmbSlJTYUR0XBB3KspQgQIECAAAECBAgMFtjd2yLidjN1PjNbO08NT+wd+PsVgr+C8gQIECBAgAABAgRGCzwgvgQMUuB7qAAAAABJRU5ErkJggg==);
          background-repeat: no-repeat;
          margin-top: 12px;
        }
        .ulist2 li:first-child {
          margin-top: 8px;
        }
        
        .ulist3 {
          list-style: none;
          font-size: 15px;
          font-family: PingFangSC-Regular, sans-serif;
          color: #666666;
          letter-spacing: 0;
          text-align: left;
        }
        .ulist3 li {
          padding-left: 16px;
          background-size: 9px;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEAAAAADgaeE1AAAAJ0lEQVQ4EWNgGAUjOAQYQX5PS0v7T0kYzJo1i5GJEgNG9Y6GADQEAMJ4BASeDm9ZAAAAAElFTkSuQmCC);
          background-repeat: no-repeat;
          background-position-y: 8px;
          margin-top: 8px;
        }
        .ulist3 li:first-child {
          margin-top: 12px;
        }

        .olist1 {
          font-size: 16px;
          line-height: 22px;
          text-align: left;
          list-style-type: none;
          counter-reset: sectioncounter;
        }
        .olist1 li {
          margin-top: 16px;
          padding-left: 30px;
          position: relative;
        }
        .olist1 li::before {
          content: counter(sectioncounter); 
          counter-increment: sectioncounter;
          position: absolute;
          left: 0;
          top: 1px;
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 30%;
          text-align: center;
          line-height: 20px;
          font-family: PingFangSC-Semibold, sans-serif;
          font-size: 14px;
          color: #00C1BC;
          background-color: #E6F9F8;
        }
        
        .olist2, .olist3 {
          list-style-type: none;
          counter-reset: sectioncounter;
        }
        .olist2 li, .olist3 li {
          font-family: PingFangSC-Regular, sans-serif;
          font-size: 15px;
          margin-bottom: 12px;
          text-align: left;
          padding-left: 25px;
          position: relative;
        }
        .olist2 li:last-child {
          margin-bottom: 0;
        }
        .olist2 > li::before, .olist3 > li::before{
          counter-increment: sectioncounter;
          content: counter(sectioncounter, upper-latin)".";
          position: absolute;
          left: 0;
          font-family: PingFangSC-Regular, sans-serif;
          font-size: 15px;
        }
        .olist3 {
          @apply grid grid-cols-2;
        }

        .ml-30 {
          margin-left: 30px;
        }
      </style>

      <script>
        var u = navigator.userAgent;
        var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
        var isiOS = !!u.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        var WIDTH = 750; //设计稿尺寸
        var setView = function () {
          var rem;
          if (isiOS) rem = 100;
          else rem = 94;

          if (screen.width <= 750)
            document.documentElement.style.fontSize =
              (rem * screen.width) / WIDTH + "px";
          else document.documentElement.style.fontSize = rem + "px";
        };
        window.onorientationchange = setView;
        setView()
      </script>
    </head>

    <body>
      <div class="menu">
        <h1 class="ptitle">${store.getters['manuals/curManual'].manualName}</h1>
        <ul class="list">
          ${list.reduce((total: string, page: any, index: number) => {
            return total + `
            <li><a href="javascript:void(0);" onclick="goPage(${index + 1})"><span>${page.pageTitle}</span><img src="https://testonline-files.vesync.com/h5/manual/images/icon_arrow_02.png" /></a></li>
            `
          }, '')}
          <li><a href="javascript:void(0);" onclick="faqClickHandler()"><span>Troubleshooting</span><img src="https://testonline-files.vesync.com/h5/manual/images/icon_arrow_02.png" /></a></li>
        </ul>
      </div>  
      <div class="mainWrap">
        ${getSubPageList(list)}

        <div class='btn-back-menu' onclick="goMenu()"><img src="data:image/png;base64,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"></div>
      </div>

      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="https://unpkg.com/swiper@6/swiper-bundle.js"></script>

      <script type="text/javascript">
        // 页面初始化
        var currentSwiper
        history.replaceState('menu', null, null) // 用replaceState已避免增加history记录

        // 返回菜单页
        window.addEventListener('popstate', function(e) {
          // e.state为返回后的页面状态
          if (e.state === 'menu') {
            goMenu()
          }
        })

        // 跳转子页的函数
        function goPage (pageNo) {
          history.pushState('subpage', null, null)
          currentSwiper = initSwiper(\`.m\${ pageNo }\`)
          $('.menu').hide()
          $('.mainWrap').show()
          $(\`.m\${ pageNo } \`).show()
        }
        function goMenu () {
          $('.menu').show()
          $('.mainWrap').hide()
          currentSwiper.destroy()
        }

        // 初始化swiper的函数
        function initSwiper (id) {
          return new Swiper(id, {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
            autoHeight: true,
            observer: true,
            observeParents: true,
            on: {
              slideChange: function () {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
              }
            }
          })
        }

        function myGoFAQ () {
          if (isiOS) window.webkit.messageHandlers.jumpFeedback.postMessage({})
          else if (isAndroid) window.AndroidOnlineManualMethods.jumpFeedback()
        }
        function throttle (fun, delay) {
            var lastExec = 0;
            function wrapper () {
                var now = new Date().getTime()
                var elapsed = now - lastExec;
                if (elapsed > delay) {
                    lastExec = now
                    fun()
                }
            }
            return wrapper
        }
        window.faqClickHandler = throttle(myGoFAQ, 2000)
      </script>
    </body>
  </html>
`
export { getPage }
