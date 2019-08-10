// Use the polyfill if Intersection Observer is not supported
if (!window.IntersectionObserver) {
    const polyfillUrl = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'
    const polyfillScript = document.createElement('script')
    polyfillScript.setAttribute('src', polyfillUrl)
    document.body.appendChild(polyfillScript)
}
