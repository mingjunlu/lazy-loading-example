const { documentElement } = document
documentElement.classList.length > 1
    ? documentElement.classList.remove('no-js')
    : documentElement.removeAttribute('class')
