const yearPages = [
    { name: 'Duroos Lesson 7', url: '/year6Pages/duroos7/duroos7.html' },
    { name: 'Duroos Lesson 8', url: '/year6Pages/duroos8/duroos8.html' },
    { name: 'Duroos Lesson 9', url: '/year6Pages/duroos9/duroos9.html' },
    { name: 'Clothes and Fashion', url: '/year6Pages/clothes/clothes.html' },
    { name: 'Commands', url: '/year6Pages/commands/commands.html' },
    { name: 'Prepositions', url: '/year6Pages/prepositions/prepositions.html' },
    { name: 'Hobbies and Interests', url: '/year6Pages/hobbies/hobbies.html' },
    { name: 'This, that', url: '/year6Pages/thisThat/thisThat.html' },
    { name: 'Questions', url: '/year6Pages/questions/questions.html' }
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
        localStorage.setItem('showYearPages', 'year6');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
