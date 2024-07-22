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
  if (touchendX + 70 < touchstartX) showNext()
  if (touchendX > 70 + touchstartX) showPrev()
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function quiz(){
    var quizTerminated = false;
    const quizButton = document.getElementById("quizButton");
    const quizBox = document.getElementById("quizBox");
    quizBox.className = "lockScroll";
    quizBox.style.display = 'inline-block';
    quizBox.style.height = '100vh';
    quizBox.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    const question = document.createElement('p');
    question.className = 'normText';
    question.id = 'question';
    const pointDisplay = document.createElement('p');
    pointDisplay.className = 'normText';
    pointDisplay.id = "pointsDisplay";
    var points = 0;
    var numOfQuestions = 0;
    const finishButton = document.createElement('button');
    finishButton.id = "finishButton";
    finishButton.textContent = "Finish";
    finishButton.onclick = function(){
        quizTerminated = true;
        quizBox.className = "";
        quizBox.innerHTML = "";
        quizBox.appendChild(quizButton);
        quizBox.style.height = "auto";
        return;
    }
    const lastThreeQs = [];
    questionGenerator()
    function questionGenerator(){
        if(quizTerminated){
            return;
        }
        function randomInt(minInclusive,maxInclusive){
            return Math.floor(Math.random() * (maxInclusive - minInclusive + 1) ) + minInclusive;
        }
        function repeats(i){
            for (let j = 0; j < 4; j++) {
                if(j == i){continue;}
                try{
                    if(buttons[i].textContent === buttons[j].textContent){
                        return true
                    }   
                }catch(err){
                    continue;
                }
            }
            return false
        }
        const buttons = [];
        document.getElementById("quizBox").innerHTML = ""; //Clear quizBox before starting quiz
        for (let i = 0; i < 4; i++) {
        buttons[i] = document.createElement('button');
        buttons[i].className = 'multipleChoiceButton';
        buttons[i].onclick = function(){
                console.log("Checking the answer")
                document.getElementById("correctAnswer").style.backgroundColor = "#158515";
                points++;
                if(i != chosenButtonIndex){
                    document.getElementsByClassName("multipleChoiceButton")[i].style.backgroundColor = "#9b1414";
                    points--;
                }
                for (let j = 0; j < 4; j++) {
                    buttons[j].onclick = null;
                }
                window.setTimeout(questionGenerator,1724)
        }
        }
        var questionVocab;
        do{
            questionVocab = vocabulary[randomInt(0,vocabulary.length - 1)]
        }while(lastThreeQs.includes(questionVocab))
        lastThreeQs.push(questionVocab);
        if(lastThreeQs.length > 3){
            lastThreeQs.shift()
        }
        if(Math.random()>0.5){ //Arabic to English question
            if(questionVocab.transliteration){
                question.textContent = `What does ${questionVocab.arabic}(${questionVocab.transliteration})  mean?`;
            }else{
                question.textContent = `What does ${questionVocab.arabic} mean?`;
            }
            var chosenButtonIndex = randomInt(0,3);
            buttons[chosenButtonIndex].textContent = questionVocab.name;
            buttons[chosenButtonIndex].id = 'correctAnswer';
            for (let i = 0; i < 4; i++) {
                if(i !== chosenButtonIndex){
                    do{
                        buttons[i].textContent = vocabulary[randomInt(0,vocabulary.length - 1)].name;
                    }while(repeats(i));
                }
            }
        }else{ //English to Arabic question
            question.textContent = `What is ${questionVocab.name} in Arabic?`;
            var chosenButtonIndex = randomInt(0,3);
            buttons[chosenButtonIndex].textContent = questionVocab.arabic;
            buttons[chosenButtonIndex].id = 'correctAnswer';
            for (let i = 0; i < 4; i++) {
                if(i !== chosenButtonIndex){
                    do{
                        buttons[i].textContent = vocabulary[randomInt(0,vocabulary.length - 1)].arabic;
                    }while(repeats(i));
                }
            }
        }
        quizBox.appendChild(question)
        for (let i = 0; i < 4; i++) {
            quizBox.appendChild(buttons[i]);
        }
        pointDisplay.textContent = `${points}/${numOfQuestions}`
        quizBox.appendChild(pointDisplay)
        quizBox.appendChild(finishButton)
        numOfQuestions++;
    }
}



