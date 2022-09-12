let isMenuVisible = false;

const showMenu = () => {
    const nav = document.getElementById('mobile-nav')
    if (!isMenuVisible) {
        nav.style.height = 'max-content'
        isMenuVisible = true
    } else {
        nav.style.height = '0'
        isMenuVisible = false
    }
}
