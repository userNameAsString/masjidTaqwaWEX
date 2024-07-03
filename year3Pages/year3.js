const yearPages = [
    { name: 'Duroos Lesson 1', url: '/year3Pages/duroos1/duroos1.html' },
    { name: 'Duroos Lesson 2', url: '/year3Pages/duroos2/duroos2.html' },
    { name: 'Duroos Lesson 3', url: '/year3Pages/duroos3/duroos3.html' },
    { name: 'Duroos Lesson 4', url: '/year3Pages/duroos4/duroos4.html' },
    { name: 'Face', url: '/year3Pages/face/face.html' },
    { name: 'Family', url: '/year3Pages/family/family.html' },
    { name: 'Meeting and Greeting Phrases', url: '/year3Pages/meetingAndGreeting/meetingAndGreeting.html' },
    { name: 'Phrases', url: 'year3Pages/phrases/phrases.html' },
    { name: 'Professions', url: '/year3Pages/professions/professions.html' },
    { name: 'Quran', url: '/year3Pages/quran/quran.html' },
    { name: 'Rooms', url: '/year3Pages/rooms/rooms.html' },
    { name: 'The World', url: '/year3Pages/theWorld/theWorld.html' },
    { name: 'Toys', url: '/year3Pages/toys/toys.html' }
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
        localStorage.setItem('showYearPages', 'year3');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
