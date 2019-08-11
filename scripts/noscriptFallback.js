// 如果瀏覽器有開啟 JavaScript 的話，就移除 document 的 'no-js' class
const { documentElement } = document
documentElement.classList.length > 1
    ? documentElement.classList.remove('no-js')
    : documentElement.removeAttribute('class')
