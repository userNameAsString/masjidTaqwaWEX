if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('/javaScript/sw.js')
}


function showPages(year) {
    console.log("Showing pages for: " + year)
    if(document.getElementsByClassName("selectorOn")[0]){
        document.getElementsByClassName("selectorOn")[0].className = "selector";
    }
    const selectors = document.getElementsByClassName('selector');
    // Set the background color of the clicked selector button
    const selectedButton = document.getElementById(`selector${year.charAt(0).toUpperCase()}${year.slice(1)}`);
    if (selectedButton) {
        selectedButton.className = "selectorOn";
    }
  
    // Update subtitle text with proper formatting
    const subtitle = document.getElementById('yearSubtitle');
    if (year === 'reception') {
        subtitle.textContent = 'Reception';
    } else {
        subtitle.textContent = `Year ${year.slice(4)}`;
    }
  
    // Define page data for each year
    const yearPages = {
        reception: [
            { name: 'Pets', url: 'receptionPages/pets/pets.html' },
            { name: 'Islamic Months', url: 'receptionPages/islamicMonths/islamicMonths.html' },
            { name: 'Colours', url: 'receptionPages/colours/colours.html' },
            { name: 'Numbers', url: 'receptionPages/numbers/numbers.html' }
        ],
        year1: [
            { name: 'Greeting Phrases', url: 'year1Pages/greetingPhrases/greetingPhrases.html' },
            { name: 'Shapes', url: 'year1Pages/shapes/shapes.html' },
            { name: 'Stationery', url: 'year1Pages/stationery/stationery.html' },
            { name: 'Wild Animals', url: 'year1Pages/wildAnimals/wildAnimals.html' }
        ],
        year2: [
            { name: 'Face', url: 'year2Pages/face/face.html' },
            { name: 'Family', url: 'year2Pages/family/family.html' },
            { name: 'Meeting and Greeting', url: 'year2Pages/meetingAndGreeting/meetingAndGreeting.html' },
            { name: 'Phrases', url: 'year2Pages/phrases/phrases.html' },
            { name: 'Professions', url: 'year2Pages/professions/professions.html' },
            { name: 'Quranic Vocabulary', url: 'year2Pages/quran/quran.html' },
            { name: 'Rooms', url: 'year2Pages/rooms/rooms.html' },
            { name: 'The World', url: 'year2Pages/theWorld/theWorld.html' },
            { name: 'Toys', url: 'year2Pages/toys/toys.html' }
        ],
        year3: [
            { name: 'Duroos Lesson 1', url: 'year3Pages/duroos1/duroos1.html' },
            { name: 'Duroos Lesson 2', url: 'year3Pages/duroos2/duroos2.html' },
            { name: 'Duroos Lesson 3', url: 'year3Pages/duroos3/duroos3.html' },
            { name: 'Duroos Lesson 4', url: 'year3Pages/duroos4/duroos4.html' },
            { name: 'Face', url: 'year3Pages/face/face.html' },
            { name: 'Family', url: 'year3Pages/family/family.html' },
            { name: 'Meeting and Greeting', url: 'year3Pages/meetingAndGreeting/meetingAndGreeting.html' },
            { name: 'Phrases', url: 'year3Pages/phrases/phrases.html' },
            { name: 'Professions', url: 'year3Pages/professions/professions.html' },
            { name: 'Quran', url: 'year3Pages/quran/quran.html' },
            { name: 'Rooms', url: 'year3Pages/rooms/rooms.html' },
            { name: 'The World', url: 'year3Pages/theWorld/theWorld.html' },
            { name: 'Toys', url: 'year3Pages/toys/toys.html' }
        ],
        year4: [
          { name: 'Duroos Lesson 2', url: 'year4Pages/duroos2/duroos2.html' },
          { name: 'Duroos Lesson 3', url: 'year4Pages/duroos3/duroos3.html' },
          { name: 'Duroos Lesson 4', url: 'year4Pages/duroos4/duroos4.html' },
          { name: 'Duroos Lesson 5', url: 'year4Pages/duroos5/duroos5.html' },
          { name: 'Bedroom', url: 'year4Pages/bedroom/bedroom.html' },
          { name: 'Living Room', url: 'year4Pages/livingRoom/livingRoom.html' },
          { name: 'Bathroom', url: 'year4Pages/bathroom/bathroom.html' },
          { name: 'Kitchen', url: 'year4Pages/kitchen/kitchen.html' },
          { name: 'Quranic Vocabulary', url: 'year4Pages/quran/quran.html' },
          { name: 'Food', url: 'year4Pages/food/food.html' },
          { name: 'Fruits', url: 'year4Pages/fruits/fruits.html' },
          { name: 'Vegetables', url: 'year4Pages/vegetables/vegetables.html' },
          { name: 'Feelings and Emotions', url: 'year4Pages/feelings/feelings.html' },
          { name: 'Body', url: 'year4Pages/body/body.html' },
          { name: 'Extended Family', url: 'year4Pages/extendedFamily/extendedFamily.html' },
          { name: 'Places', url: 'year4Pages/places/places.html' },
          { name: 'Countries', url: 'year4Pages/countries/countries.html' },
          { name: 'Days of the Week', url: 'year4Pages/days/days.html' }
        ],
        year5: [
          { name: 'Duroos Lesson 4', url: 'year5Pages/duroos4/duroos4.html' },
          { name: 'Duroos Lesson 5', url: 'year5Pages/duroos5/duroos5.html' },
          { name: 'Duroos Lesson 6', url: 'year5Pages/duroos6/duroos6.html' },
          { name: 'Adjectives', url: 'year5Pages/adjectives/adjectives.html' },
          { name: 'Quran', url: 'year5Pages/quran/quran.html' },
          { name: 'Transport', url: 'year5Pages/transport/transport.html' },
          { name: 'Weather', url: 'year5Pages/weather/weather.html' },
          { name: 'Directions', url: 'year5Pages/directions/directions.html' },
          { name: 'Seasons', url: 'year5Pages/seasons/seasons.html' },
          { name: 'Time', url: 'year5Pages/time/time.html' }
        ],
        year6: [
          { name: 'Duroos Lesson 7', url: 'year6Pages/duroos7/duroos7.html' },
          { name: 'Duroos Lesson 8', url: 'year6Pages/duroos8/duroos8.html' },
          { name: 'Duroos Lesson 9', url: 'year6Pages/duroos9/duroos9.html' },
          { name: 'Clothes and Fashion', url: 'year6Pages/clothes/clothes.html' },
          { name: 'Commands', url: 'year6Pages/commands/commands.html' },
          { name: 'Prepositions', url: 'year6Pages/prepositions/prepositions.html' },
          { name: 'Hobbies and Interests', url: 'year6Pages/hobbies/hobbies.html' },
          { name: 'This, that', url: 'year6Pages/thisThat/thisThat.html' },
          { name: 'Questions', url: 'year6Pages/questions/questions.html' }
        ],
        year7: [
          { name: 'Duroos Lesson 10', url: 'year7Pages/duroos10/duroos10.html' },
          { name: 'Duroos Lesson 12', url: 'year7Pages/duroos12/duroos12.html' }
        ]
    };
  
    // Update page buttons based on selected year
    const pageButtonsContainer = document.getElementById('pageButtons');
    pageButtonsContainer.innerHTML = ''; // Clear existing buttons
    
    if (yearPages.hasOwnProperty(year)) {
        yearPages[year].forEach(page => {
            const button = document.createElement('button');
            button.className = 'normal';
            button.textContent = page.name;
            button.onclick = function() {
                window.location.href = page.url;
            };
            pageButtonsContainer.appendChild(button);
        });
    }
}

const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
const isDarkSchemePreferred = checkIsDarkSchemePreferred();
if(localStorage.getItem("darkModeSelected") == null){
    console.log("Previous dark mode preference has not been found")
    localStorage.setItem("darkModeSelected",isDarkSchemePreferred);
    console.log(`Set to system preference (${localStorage.darkModeSelected})`)
}

function switchDarkMode() {
    if(localStorage.darkModeSelected == "true"){
        localStorage.darkModeSelected = false;
    }else{
        localStorage.darkModeSelected = true;
    }
    console.log(`Switched dark mode preference to: ${localStorage.darkModeSelected}`)
    handleColourMode();
}


const darkLightModeLink = document.getElementById("darkLightMode");
var buttonOuterContainer = document.getElementById("darkModeOuterContainer");
var buttonInnerContainer = document.getElementById("darkModeInnerContainer");
var buttonSwitch = document.getElementById("darkModeSwitch");
function handleColourMode(){
    if(localStorage.darkModeSelected == "true"){
        darkLightModeLink.href = "/css/dark.css";
        console.log("selecting dark stylesheet")
        if(document.getElementById("lightModeOuterContainer")){
            document.getElementById("lightModeOuterContainer").id = "darkModeOuterContainer";
            document.getElementById("lightModeInnerContainer").id = "darkModeInnerContainer";
            document.getElementById("lightModeSwitch").id = "darkModeSwitch";
        }
    }else{
        darkLightModeLink.href = "/css/light.css"
        console.log("selecting light stylesheet")
        if(document.getElementById("darkModeOuterContainer")){
            document.getElementById("darkModeOuterContainer").id = "lightModeOuterContainer";
            document.getElementById("darkModeInnerContainer").id = "lightModeInnerContainer";
            document.getElementById("darkModeSwitch").id = "lightModeSwitch";
        }
    }
}

handleColourMode();
const isMobile = /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent);
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent.toLowerCase());

console.log("Is the device considered mobile: " + isMobile);
console.log("Is the device a tablet: " + isTablet);

if(isMobile){
console.log("mobile.css used as stylesheet")
  document.getElementById("css").href = "/css/mobile.css";
  if(document.getElementById("nextArrowButton")){
    document.getElementById("prevArrowButton").remove();
    document.getElementById("nextArrowButton").remove();
    document.getElementById("prompt").innerHTML="Click on the words to play a sound<br> Swipe to cycle through the vocabulary";
  }
}else{
    console.log("desktop.css used as stylesheet")
}
