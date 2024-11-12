// Theme Toggle Functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');

// Check for saved user preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
} else {
    toggleIcon.textContent = '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
