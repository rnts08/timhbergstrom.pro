document.addEventListener('DOMContentLoaded', () => {
    // Handle job entry toggles
    const jobEntries = document.querySelectorAll('.job-entry');
    
    jobEntries.forEach(entry => {
        const header = entry.querySelector('.job-header');
        const details = entry.querySelector('.job-details');
        const toggleBtn = entry.querySelector('.toggle-btn');
        
        header.addEventListener('click', function(e) {
            // Prevent click from triggering if clicking on links
            if (e.target.tagName === 'A') return;
            
            const isActive = details.classList.contains('active');
            
            // Close all other sections
            jobEntries.forEach(otherEntry => {
                if (otherEntry !== entry) {
                    otherEntry.querySelector('.job-details').classList.remove('active');
                    otherEntry.querySelector('.toggle-btn').textContent = '+';
                }
            });

            // Toggle current section
            details.classList.toggle('active');
            toggleBtn.textContent = isActive ? '+' : '−';
        });
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});