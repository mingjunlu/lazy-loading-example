window.addEventListener('load', () => {
    const onImgLoad = (event) => {
        const picture = event.target.parentElement
        picture.classList.remove('transparent')
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
                const image = entry.target.firstElementChild
                startLoadingImg(image)
            }
        }
    }

    const picturesToLoad = document.querySelectorAll('.picture.transparent')
    const watcher = new IntersectionObserver(onEnterView)
    for (let picture of picturesToLoad) {
        watcher.observe(picture)
    }
})
