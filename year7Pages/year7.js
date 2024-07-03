const yearPages = [
    { name: 'Duroos Lesson 10', url: '/year7Pages/duroos10/duroos10.html' },
    { name: 'Duroos Lesson 12', url: '/year7Pages/duroos12/duroos12.html' }
];

function getCurrentPageIndex() {
    const currentUrl = window.location.href;
    const pageIndex = yearPages.findIndex(page => currentUrl.toLowerCase().includes(page.url.slice(0,page.url.length - 5).toLowerCase()));
    return pageIndex === -1 ? 0 : pageIndex; // Default to first page if not found
}

function navigateToPage(direction) {
    console.log("called " + direction);
    const currentPageIndex = getCurrentPageIndex();
    let targetPageIndex;

    if (direction === 'next') {
        targetPageIndex = (currentPageIndex + 1) % yearPages.length;
    } else if (direction === 'back') {
        targetPageIndex = (currentPageIndex - 1 + yearPages.length) % yearPages.length;
    } else if (direction === 'home') {
        window.location.href = '/index.html';
        localStorage.setItem('showYearPages', 'year7');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
