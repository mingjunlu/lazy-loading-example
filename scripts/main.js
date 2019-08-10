window.addEventListener('load', () => {
    const removeMockup = async (event) => {
        const mockup = event.target.previousElementSibling
        const delay = parseFloat(window.getComputedStyle(mockup).transitionDuration) * 1000
        mockup.classList.remove('loading')
        mockup.classList.add('fade-out')
        await new Promise((resolve) => { setTimeout(resolve, delay) })
        mockup.remove()
    }

    const loadImage = (img) => {
        img.previousElementSibling.classList.add('loading')
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
        img.addEventListener('load', removeMockup)
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
