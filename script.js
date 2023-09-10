const isMobile = /android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent);
const userAgent = navigator.userAgent.toLowerCase(); 
const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
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
        document.getElementsByClassName("selector")[i].style.fontSize = "105%";
        document.getElementsByClassName("selector")[i].style.padding = "5px";
        document.getElementsByClassName("selector")[i].style.paddingBottom = "0px";
        document.getElementsByClassName("selector")[i].style.paddingTop = "10px";
    }
    if (document.getElementById("selectorOn")!= null){
        document.getElementById("selectorOn").style.width = "10%";
        document.getElementById("selectorOn").style.height = "300%";
        document.getElementById("selectorOn").style.fontSize = "105%";
        document.getElementById("selectorOn").style.padding = "5px";
        document.getElementById("selectorOn").style.paddingBottom = "0px";
        document.getElementById("selectorOn").style.paddingTop = "10px";
    }
    if (document.getElementsByTagName("h1")[0]!= null){
        document.getElementsByTagName("h1")[0].style.fontSize = "70px";
        document.getElementsByTagName("h1")[0].style.marginBottom = "0px";
    }
    for (let i = 0; i < document.getElementsByClassName("subtitle").length ; i++){
        document.getElementsByClassName("subtitle")[i].style.textAlign = "center";
        document.getElementsByClassName("subtitle")[i].style.fontSize = "200%";
    }
    document.getElementsByTagName("body")[0].style.marginTop = "0px";
    document.getElementsByTagName("body")[0].style.backgroundSize = "40%";
    for (let i = 0; i < document.getElementsByClassName("td3").length ; i++){
        document.getElementsByClassName("td3")[i].style.width = "30%";
        document.getElementsByClassName("td3")[i].style.fontSize = "85%";
    }
    for (let i = 0; i < document.getElementsByClassName("th3").length ; i++){
        document.getElementsByClassName("th3")[i].style.width = "30%";
        document.getElementsByClassName("th3")[i].style.fontSize = "85%";
    }
    for (let i = 0; i < document.getElementsByClassName("endPageButton2").length ; i++){
        document.getElementsByClassName("endPageButton2")[i].style.width = "48.4%";
        document.getElementsByClassName("endPageButton2")[i].style.marginLeft = "0.2%";
        document.getElementsByClassName("endPageButton2")[i].style.fontSize = "200%";
        document.getElementsByClassName("endPageButton2")[i].style.textAlign = "center";
        document.getElementsByClassName("endPageButton2")[i].style.verticalAlign = "middle";
        document.getElementsByClassName("endPageButton2")[i].style.height = "100px";
        document.getElementsByClassName("endPageButton2")[i].style.backgroundColor = "#05203b";
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
        document.getElementsByClassName("endPageButton3")[i].style.width = "31.7%";
        document.getElementsByClassName("endPageButton3")[i].style.marginLeft = "0.2%";
        document.getElementsByClassName("endPageButton3")[i].style.fontSize = "200%";
        document.getElementsByClassName("endPageButton3")[i].style.padding = "0%";
        document.getElementsByClassName("endPageButton3")[i].style.textAlign = "center";
        document.getElementsByClassName("endPageButton3")[i].style.verticalAlign = "middle";
        document.getElementsByClassName("endPageButton3")[i].style.height = "100px";
        document.getElementsByClassName("endPageButton3")[i].style.backgroundColor = "#05203b";
    }
    if (document.getElementsByTagName("table")[0]!= null){
        document.getElementsByTagName("table")[0].style.margin = "0px";
        document.getElementsByTagName("table")[0].style.width = "100%";              
    }
}
console.log("Is the device considered mobile: " + isMobile)
console.log("Is the device a tablet: " + isTablet)
if (isMobile == true || isTablet == true ) {
   console.log("Mobile/Tablet mode activated");
   mobileMode();
}
