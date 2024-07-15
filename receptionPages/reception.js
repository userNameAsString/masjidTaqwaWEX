
const yearPages = [
    { name: 'Pets', url: '/receptionPages/pets/pets.html' },
    { name: 'Islamic Months', url: '/receptionPages/islamicMonths/islamicMonths.html' },
    { name: 'Colours', url: '/receptionPages/colours/colours.html' },
    { name: 'Numbers', url: '/receptionPages/numbers/numbers.html' }
];
function getCurrentPageIndex() {
    const currentUrl = window.location.href;
    const pageIndex = yearPages.findIndex(page => currentUrl.toLowerCase().includes(page.url.slice(0,page.url.length - 5).toLowerCase()));
    return pageIndex === -1 ? 0 : pageIndex; // Default to first page if not found
}
function navigateToPage(direction) {
    console.log("called" + direction)
    const currentPageIndex = getCurrentPageIndex();
    let targetPageIndex;

    if (direction === 'next') {
        targetPageIndex = (currentPageIndex + 1) % yearPages.length;
    } else if (direction === 'back') {
        targetPageIndex = (currentPageIndex - 1 + yearPages.length) % yearPages.length;
    } else if (direction === 'home') {
        window.location.href = '/';
        sessionStorage.setItem('showYearPages', 'reception');  // Set the appropriate year identifier
        return;
    } 
    window.location.href = yearPages[targetPageIndex].url;
}

