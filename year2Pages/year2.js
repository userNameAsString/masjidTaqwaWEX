const yearPages = [
    { name: 'Face', url: '/year2Pages/face/face.html' },
    { name: 'Family', url: '/year2Pages/family/family.html' },
    { name: 'Meeting and Greeting Phrases', url: '/year2Pages/meetingAndGreeting/meetingAndGreeting.html' },
    { name: 'Phrases', url: '/year2Pages/phrases/phrases.html' },
    { name: 'Professions', url: '/year2Pages/professions/professions.html' },
    { name: 'Quran', url: '/year2Pages/quran/quran.html' },
    { name: 'Rooms', url: '/year2Pages/rooms/rooms.html' },
    { name: 'The World', url: '/year2Pages/theWorld/theWorld.html' },
    { name: 'Toys', url: '/year2Pages/toys/toys.html' }
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
        localStorage.setItem('showYearPages', 'year2');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
