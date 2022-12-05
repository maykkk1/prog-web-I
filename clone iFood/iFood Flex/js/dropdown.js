const dropdown = (e) => {
    e.classList.contains('open')
    ? e.classList.remove('open')
    : e.classList.add('open')
}