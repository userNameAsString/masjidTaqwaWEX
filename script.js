const isMobile = /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent);
function playAudio(number) {
     var audioFiles = document.getElementsByClassName("noiseButton");
    audioFiles[number].play();
}
function mobileMode() {
    if (document.getElementById("mainTitle") !=null){ 
    document.getElementById("mainTitle").style.fontSize = "130%";
    document.getElementById("mainTitle").style.wordSpacing = "3000px";
    }
    for (let i = 0; i < document.getElementsByClassName("selector").length ; i++){
        document.getElementsByClassName("selector")[i].style.width = "10%";
        document.getElementsByClassName("selector")[i].style.height = "300%";
        document.getElementsByClassName("selector")[i].style.fontSize = "125%";
    }
    if (document.getElementById("selectorOn")!= null){
        document.getElementById("selectorOn").style.width = "10%";
        document.getElementById("selectorOn").style.height = "300%";
        document.getElementById("selectorOn").style.fontSize = "125%";
    }
    if (document.getElementsByTagName("h1")[0]!= null){
        document.getElementsByTagName("h1")[0].style.fontSize = "90px";
        document.getElementsByTagName("h1")[0].style.marginBottom = "0px";
    }
    for (let i = 0; i < document.getElementsByClassName("subtitle").length ; i++){
        document.getElementsByClassName("subtitle")[i].style.textAlign = "center";
        document.getElementsByClassName("subtitle")[i].style.fontSize = "200%";
    }
    document.getElementsByTagName("body")[0].style.marginTop = "0px";
    for (let i = 0; i < document.getElementsByClassName("td3").length ; i++){
        document.getElementsByClassName("td3")[i].style.width = "30%";
        document.getElementsByClassName("td3")[i].style.fontSize = "100%";
    }
    for (let i = 0; i < document.getElementsByClassName("th3").length ; i++){
        document.getElementsByClassName("th3")[i].style.width = "30%";
        document.getElementsByClassName("th3")[i].style.fontSize = "300%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton2").length ; i++){
        document.getElementsByClassName("endPageButton2")[i].style.width = "41.7%";
        document.getElementsByClassName("endPageButton2")[i].style.marginLeft = "5%";
        document.getElementsByClassName("endPageButton2")[i].style.fontSize = "200%";
        document.getElementsByClassName("endPageButton2")[i].style.textAlign = "center";
        document.getElementsByClassName("endPageButton2")[i].style.verticalAlign = "middle";
        document.getElementsByClassName("endPageButton2")[i].style.height = "100px";
    }
    for (let i = 0; i < document.getElementsByClassName("td2").length ; i++){
        document.getElementsByClassName("td2")[i].style.width = "47%";
        document.getElementsByClassName("td2")[i].style.fontSize = "100%";
    }
    for (let i = 0; i < document.getElementsByClassName("th3").length ; i++){
        document.getElementsByClassName("th2")[i].style.width = "47%";
        document.getElementsByClassName("th2")[i].style.fontSize = "100%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton3").length ; i++){
        document.getElementsByClassName("endPageButton3")[i].style.width = "25.7%";
        document.getElementsByClassName("endPageButton3")[i].style.marginLeft = "5%";
        document.getElementsByClassName("endPageButton3")[i].style.fontSize = "200%";
        document.getElementsByClassName("endPageButton3")[i].style.padding = "0%";
        document.getElementsByClassName("endPageButton3")[i].style.textAlign = "center";
        document.getElementsByClassName("endPageButton3")[i].style.verticalAlign = "middle";
        document.getElementsByClassName("endPageButton3")[i].style.height = "100px";
    }
}
console.log("Is the device considered mobile: " + isMobile)
if (isMobile == true) {
   console.log("Mobile mode activated");
   mobileMode();
}
