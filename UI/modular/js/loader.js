/**
 * Skeleton Loader Logic
 * Simulates data fetching and swaps skeleton UI with real content
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const skeleton = document.getElementById('skeleton-loader');
    const content = document.getElementById('real-content');

    // Simulate Network Delay (1.5 seconds)
    setTimeout(() => {
        if (skeleton && content) {
            // Fade out skeleton
            skeleton.style.opacity = '0';
            skeleton.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                // Hide skeleton completely
                skeleton.classList.add('hidden');
                
                // Show content
                content.classList.remove('hidden');
                
                // Trigger fade in for content
                // Small delay to ensure display:block is applied before opacity transition
                requestAnimationFrame(() => {
                    content.classList.remove('opacity-0');
                    content.classList.add('opacity-100');
                });
                
            }, 500); // Wait for fade out to finish
        }
    }, 1500);
});
