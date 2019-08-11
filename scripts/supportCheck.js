// 如果瀏覽器不支援 Intersection Observer 的話就引入 polyfill
if (!window.IntersectionObserver) {
    const polyfillUrl = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'
    const polyfillScript = document.createElement('script')
    polyfillScript.setAttribute('src', polyfillUrl)
    document.body.appendChild(polyfillScript)
}
