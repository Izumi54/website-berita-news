/**
 * Theme Toggle Logic for NewsPortal ID
 * Handles Dark/Light mode switching and persistence
 */

const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved user preference, if any, on load of the website
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    if(themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
    document.documentElement.classList.remove('dark');
    if(themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
}

// Function to attach listener (call this after DOM load)
function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    
    if (btn) {
        btn.addEventListener('click', function() {
            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    icon.classList.replace('fa-moon', 'fa-sun');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    icon.classList.replace('fa-sun', 'fa-moon');
                }
            } else {
                // if NOT set via local storage previously
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    icon.classList.replace('fa-sun', 'fa-moon');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    icon.classList.replace('fa-moon', 'fa-sun');
                }
            }
        });
    }
}

// Auto init if defer is used, otherwise call manually
document.addEventListener('DOMContentLoaded', initThemeToggle);
