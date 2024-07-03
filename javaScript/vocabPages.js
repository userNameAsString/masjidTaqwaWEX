let currentVocabularyIndex = 0;
const problemWords = ['كَلْبٌ','أِسْمِىْ','مُسْتَطِيْل','وَرَقَةٌ','اُمٌّ','اَبٌ','اَخٌ','اُخْتٌ','ذِكْرَى','عَمَل','طالب','عَلَى','إِلَى','شاي','تِلْكَ','مُسْتَشْفَى','أَلْمَانِيَا','شَابٌّ','غُرُوْب','قِطَار','مَتَى؟','انَّى؟'];

function showVocabulary(index) {
    const vocabularyItem = vocabulary[index];
    const vocabularyText = document.getElementById('vocabularyText');
    const vocabularyImage = document.getElementById('vocabularyImage');
    const imageContainer = document.querySelector('.imageContainer');

    const capitalizedTitle = `${vocabularyItem.name.charAt(0).toUpperCase()}${vocabularyItem.name.slice(1)}`;
    
    if (vocabularyItem.transliteration) {
        const capitalizedTransliteration = `${vocabularyItem.transliteration.charAt(0).toUpperCase()}${vocabularyItem.transliteration.slice(1)}`;
        vocabularyText.innerHTML = `${currentVocabularyIndex + 1}.${capitalizedTitle} - ${vocabularyItem.arabic}<br>(${capitalizedTransliteration})`;
    } else {
        vocabularyText.textContent = `${currentVocabularyIndex + 1}.${capitalizedTitle} - ${vocabularyItem.arabic}`;
    }

    if (vocabularyItem.image) {
        vocabularyImage.src = vocabularyItem.image;
        vocabularyImage.alt = vocabularyItem.name;
        imageContainer.style.display = 'flex';
    } else {
        imageContainer.style.display = 'none';
    }
}

function showNext() {
    currentVocabularyIndex = (currentVocabularyIndex + 1) % vocabulary.length;
    showVocabulary(currentVocabularyIndex);
}

function showPrev() {
    currentVocabularyIndex = (currentVocabularyIndex - 1 + vocabulary.length) % vocabulary.length;
    showVocabulary(currentVocabularyIndex);
}

function showHelp(){
    window.location.href = "/help/help.html"
}

function speakText() {
    const item = vocabulary[currentVocabularyIndex];
    var text = item.arabic;
    if(problemWords.includes(text) == true){ // Special case where Saudi Arabian pronunciation is not accurate
        console.log("Special voice case for this word (" + text + ")");
        const audioFile = new Audio('/specialCaseAudioFiles/' + item.transliteration + '.mp3');
        audioFile.play();
    } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ar-SA'; // Set the language to Saudi Arabian Arabic
        utterance.rate = 0.8;
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Speech synthesis not supported in this browser.");
        }
    }
}


// Initial display
showVocabulary(currentVocabularyIndex);



let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX + 100 < touchstartX) showNext()
  if (touchendX > 100 + touchstartX) showPrev()
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})
