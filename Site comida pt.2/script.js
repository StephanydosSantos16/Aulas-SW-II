const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
