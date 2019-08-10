window.addEventListener('DOMContentLoaded', () => {
    const triggerFadeInEffect = (event) => {
        const picture = event.target.parentElement
        picture.classList.remove('fade-in')
    }

    const loadImage = (img) => {
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
        img.addEventListener('load', triggerFadeInEffect)
    }

    const onEnterView = (entries, observer) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        }
    }

    const watcher = new IntersectionObserver(onEnterView)
    const lazyImages = document.querySelectorAll('.img.lazy')
    for (let image of lazyImages) {
        watcher.observe(image)
    }
})
