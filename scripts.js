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

document.addEventListener('DOMContentLoaded', function() {
    const nameHeader = document.getElementById('nameHeader');
    let clickCount = 0;
    let lastClickTime = 0;
    const clickResetTime = 2000;

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.style.cssText = `
        position: absolute;
        background: rgba(255, 153, 0, 0.1);
        color: #ff9900;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
        border: 1px solid rgba(255, 153, 0, 0.2);
    `;
    document.body.appendChild(tooltip);

    nameHeader.addEventListener('mouseover', () => {
        const clicks = 3 - clickCount;
        tooltip.textContent = clicks > 0 ? 
            `${clicks} more click${clicks !== 1 ? 's' : ''} for a surprise` : 
            'Click for a surprise';
        
        const rect = nameHeader.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 5}px`;
        tooltip.style.opacity = '1';
    });

    nameHeader.addEventListener('mouseout', () => {
        tooltip.style.opacity = '0';
    });

    nameHeader.addEventListener('click', function(e) {
        const currentTime = new Date().getTime();
        
        if (currentTime - lastClickTime > clickResetTime) {
            clickCount = 0;
        }
        
        clickCount++;
        lastClickTime = currentTime;

        // Update tooltip immediately after click
        const clicks = 3 - clickCount;
        tooltip.textContent = clicks > 0 ? 
            `${clicks} more click${clicks !== 1 ? 's' : ''} for a surprise` : 
            'Click for a surprise';

        if (clickCount === 3) {
            window.location.href = 'why-become-a-goat-farmer.html';
        }
    });

    nameHeader.style.cursor = 'pointer';
});