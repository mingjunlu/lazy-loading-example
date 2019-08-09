window.addEventListener('DOMContentLoaded', () => {
    const onImgLoad = (event) => {
        const picture = event.target.parentElement
        picture.classList.remove('fade-in')
    }

    const startLoadingImg = (img) => {
        img.setAttribute('src', img.dataset.src)
        img.addEventListener('load', onImgLoad)
        img.removeAttribute('data-src')
    }

    const onEnterView = (entries, observer) => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
                startLoadingImg(entry.target)
            }
        }
    }

    const imagesToLoad = document.querySelectorAll('.img.lazy')
    const watcher = new IntersectionObserver(onEnterView)
    for (let image of imagesToLoad) {
        watcher.observe(image)
    }
})
