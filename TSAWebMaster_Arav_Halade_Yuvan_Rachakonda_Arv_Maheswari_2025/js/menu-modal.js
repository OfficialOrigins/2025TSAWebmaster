// Menu Modal Functionality
function initializeMenuModal() {
    const modal = document.getElementById('jobModal');
    const modalTitle = document.getElementById('modalTitle');
    const closeBtn = document.querySelector('.close-modal');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    // Show modal when View Details button is clicked
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const card = this.closest('.card');
            const title = card.querySelector('h2').textContent;
            const contentId = title.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '') + '-content';
            
            // Hide all content divs
            document.querySelectorAll('.menu-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the selected content
            const contentDiv = document.getElementById(contentId);
            if (contentDiv) {
                contentDiv.style.display = 'block';
                modalTitle.textContent = title;
                modal.style.display = 'block';
            } else {
                console.error('Content not found for:', contentId);
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize when the script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenuModal);
} else {
    initializeMenuModal();
} 