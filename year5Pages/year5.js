const yearPages = [
    { name: 'Duroos Lesson 4', url: '/year5Pages/duroos4/duroos4.html' },
    { name: 'Duroos Lesson 5', url: '/year5Pages/duroos5/duroos5.html' },
    { name: 'Duroos Lesson 6', url: '/year5Pages/duroos6/duroos6.html' },
    { name: 'Adjectives', url: '/year5Pages/adjectives/adjectives.html' },
    { name: 'Quran', url: '/year5Pages/quran/quran.html' },
    { name: 'Transport', url: '/year5Pages/transport/transport.html' },
    { name: 'Weather', url: '/year5Pages/weather/weather.html' },
    { name: 'Directions', url: '/year5Pages/directions/directions.html' },
    { name: 'Seasons', url: '/year5Pages/seasons/seasons.html' },
    { name: 'Time', url: '/year5Pages/time/time.html' }
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
        localStorage.setItem('showYearPages', 'year5');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
