// Show the specified page and hide others
    function showPage(pageId) {
        // Hide all sections
        let sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });
        
        // Show the selected page
        let activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.style.display = 'block';
        }
    }

    // Default to showing the first page when the page loads
    window.onload = function() {
        showPage('page1');
    };
