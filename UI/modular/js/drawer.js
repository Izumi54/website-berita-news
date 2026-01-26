/**
 * Drawer Toggle Logic
 */
function toggleDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    
    if (drawer.classList.contains('-translate-x-full')) {
        // Open
        drawer.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
        setTimeout(() => backdrop.classList.remove('opacity-0'), 10); // Fade in
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
        // Close
        closeDrawer();
    }
}

function closeDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('opacity-0');
    setTimeout(() => {
        backdrop.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }, 300);
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
    const backdrop = document.getElementById('drawer-backdrop');
    if(backdrop) {
        backdrop.addEventListener('click', closeDrawer);
    }
});
