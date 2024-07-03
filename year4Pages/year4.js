const yearPages = [
    { name: 'Duroos Lesson 2', url: '/year4Pages/duroos2/duroos2.html' },
    { name: 'Duroos Lesson 3', url: '/year4Pages/duroos3/duroos3.html' },
    { name: 'Duroos Lesson 4', url: '/year4Pages/duroos4/duroos4.html' },
    { name: 'Duroos Lesson 5', url: '/year4Pages/duroos5/duroos5.html' },
    { name: 'Bedroom', url: '/year4Pages/bedroom/bedroom.html' },
    { name: 'Living Room', url: '/year4Pages/livingRoom/livingRoom.html' },
    { name: 'Bathroom', url: '/year4Pages/bathroom/bathroom.html' },
    { name: 'Kitchen', url: '/year4Pages/kitchen/kitchen.html' },
    { name: 'Quran', url: '/year4Pages/quran/quran.html' },
    { name: 'Food', url: '/year4Pages/food/food.html' },
    { name: 'Fruits', url: '/year4Pages/fruits/fruits.html' },
    { name: 'Vegetables', url: '/year4Pages/vegetables/vegetables.html' },
    { name: 'Feelings', url: '/year4Pages/feelings/feelings.html' },
    { name: 'Body', url: '/year4Pages/body/body.html' },
    { name: 'Extended Family', url: '/year4Pages/extendedFamily/extendedFamily.html' },
    { name: 'Places', url: '/year4Pages/places/places.html' },
    { name: 'Countries', url: '/year4Pages/countries/countries.html' },
    { name: 'Days', url: '/year4Pages/days/days.html' }
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
        localStorage.setItem('showYearPages', 'year4');  // Set the appropriate year identifier
        return;
    }
    window.location.href = yearPages[targetPageIndex].url;
}
