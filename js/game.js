const avestaDict = {
    1: "a",
    2: "A",
    3: "i",
    4: "I",
    5: "u",
    6: "U",
    7: "k",
    8: "x",
    9: "F",
    10: "X",
    11: "g",
    12: "G",
    13: "o",
    14: "O",
    15: "e",
    16: "E",
    17: "q",
    18: "d",
    19: "D",
    20: "r",
    21: "f",
    22: "b",
    23: "t",
    24: "T",
    25: "v",
    26: "V",
    27: "vrv",
    28: "c",
    29: "j",
    30: "n",
    31: "N",
    32: "m",
    33: "M",
    34: "?",
    35: "p",
    36: "h",
    37: "B",
    38: "l",
    39: "&",
    40: "y",
    41: "Y",
    42: "s",
    43: "S",
    44: "C",
    45: "‚",
    46: "z",
    47: "Z",
    48: "w",
    49: "W",
    50: "!",
    51: "√-",
    52: "-"
}

const tests = {
    "1":{"englishQ":"body","avestaAns":[["t","a","n","u"]]},
    "2":{"englishQ":"then","avestaAns":[["A","a","T"]]},
    "3":{"englishQ":"righteousness","avestaAns":[["a","C","a"]]},
    "4":{"englishQ":"Ahurem","avestaAns":[["a","h","u","r","v","m"]]},
    "5":{"englishQ":"Dātré","avestaAns":[["d","A","t","a","r","v"]]},
    "6":{"englishQ":"my","avestaAns":[["m","V"]]},
    "7":{"englishQ":"toe / finger","avestaAns":[["a","N","g","u","S","t","a"]]},
    "8":{"englishQ":"How many?","avestaAns":[["c","w","a","N","T"]]},
    "9":{"englishQ":"timely","avestaAns":[["r","a","q","B","y","a"]]},
    "10":{"englishQ":"best","avestaAns":[["W","a","h","i","S","t","a"]]},
    "11":{"englishQ":"dawn","avestaAns":[["u","C","a"]]},
    "12":{"englishQ":"blessed","avestaAns":[["a","‚","y","a"]]},
    "13":{"englishQ":"driving away","avestaAns":[["u","p","A","z","a","n","a"]]},
    "14":{"englishQ":"having healthy horses","avestaAns":[["d","r","a","w","A","s","p","a"]]},
    "15":{"englishQ":"healthy","avestaAns":[["d","r","a","w","a"]]},
    "16":{"englishQ":"horse","avestaAns":[["a","s","p","a"]]},
    "17":{"englishQ":"we gave","avestaAns":[["n","i","d","a","q","A","m","a"]]},
    "18":{"englishQ":"field","avestaAns":[["c","a","r","A","n","i"]]},
    "19":{"englishQ":"tree","avestaAns":[["W","a","n","&","m"]]},
    "20":{"englishQ":"I poured down.","avestaAns":[["n","I","r","e"]]},
    "21":{"englishQ":"good","avestaAns":[["h","u"],["V","a","h","u"],["V","o","h","u"],["V","a","M","h","u"]]},
    "22":{"englishQ":"word","avestaAns":[["u","x","t","a"]]},
    "23":{"englishQ":"good word","avestaAns":[["h","U","x","t","a"]]},
    "24":{"englishQ":"here","avestaAns":[["i","D","a"]]},
    "25":{"englishQ":"not here / neither","avestaAns":[["n","a","E","D","a"]]},
    "26":{"englishQ":"together","avestaAns":[["h","a","D","a"]]},
    "27":{"englishQ":"Hadokht (Nask)","avestaAns":[["h","a","D","a","o","x","t","a"]]},
    "28":{"englishQ":"to go towards","avestaAns":[["a","r"]]},
    "29":{"englishQ":"for Mazda","avestaAns":[["m","a","z","d","A","i"]]},
    "30":{"englishQ":"for Ahura","avestaAns":[["a","h","u","r","A","i"]]},
    "31":{"englishQ":"comes","avestaAns":[["A"]]},
    "32":{"englishQ":"comes towards","avestaAns":[["A","i","t","E"]]},
    "33":{"englishQ":"thus","avestaAns":[["u","i","t","i"]]},
    "34":{"englishQ":"speaking thus","avestaAns":[["u","i","t","y","a","o","j","a","n","a"]]},
    "35":{"englishQ":"against","avestaAns":[["p","a","i","t","i"]]},
    "36":{"englishQ":"opposition","avestaAns":[["p","a","i","t","y","A","r","a"]]},
    "37":{"englishQ":"Spityura","avestaAns":[["s","p","i","t","y","u","r","a"]]},
    "38":{"englishQ":"For the holy lady.","avestaAns":[["a","C","a","o","n","y","A","i"]]},
    "39":{"englishQ":"from the body","avestaAns":[["t","a","n","w","a","T"]]},
    "40":{"englishQ":"greatly beloved","avestaAns":[["h","w","A","f","r","i","t","a"]]},
    "41":{"englishQ":"wide","avestaAns":[["u","r","u"],["p","vrv","q","u"]]},
    "42":{"englishQ":"water","avestaAns":[["A","p","a"]]},
    "43":{"englishQ":"widely flowing water","avestaAns":[["u","r","w","A","p","a"]]},
    "44":{"englishQ":"very small","avestaAns":[["k","a","s","u"]]},
    "45":{"englishQ":"small","avestaAns":[["k","a","s","w","i"]]},
    "46":{"englishQ":"time","avestaAns":[["z","r","w","A","n","a"]]},
    "47":{"englishQ":"cow / bull","avestaAns":[["g","a","o"]]},
    "48":{"englishQ":"with the cow / bull","avestaAns":[["g","a","w","a"]]},
    "49":{"englishQ":"of the cow's / bull's","avestaAns":[["g","a","w","&","m"]]},
    "50":{"englishQ":"affliction","avestaAns":[["d","r","i","t","a"]]},
    "51":{"englishQ":"indeed / surely","avestaAns":[["z","I","T"]]},
    "52":{"englishQ":"speaking in accordance","avestaAns":[["a","n","U","x","t","a"]]},
    "53":{"englishQ":"approached","avestaAns":[["u","p","a","E","t","a"]]},
    "54":{"englishQ":"and the women","avestaAns":[["n","A","i","r","y","a","s","c","a"]]},
    "55":{"englishQ":"for the world","avestaAns":[["a","M","h","w","e"]]},
    "56":{"englishQ":"to be old","avestaAns":[["z","r","u"]]},
    "57":{"englishQ":"for Gathas","avestaAns":[["g","A","q","A","i"]]},
    "58":{"englishQ":"spoke forth","avestaAns":[["f","r","a","o","x","t","a"]]},
    "59":{"englishQ":"poured","avestaAns":[["i","r","i","x","t","a"]]},
    "60":{"englishQ":"divided / approportioned","avestaAns":[["b","a","x","t","a"]]},
    "61":{"englishQ":"dead","avestaAns":[["i","r","i","s","t","a"]]},
    "62":{"englishQ":"truth","avestaAns":[["r","A","s","t","i"]]},
    "63":{"englishQ":"offering","avestaAns":[["m","y","a","z","d","a"]]},
    "64":{"englishQ":"gift","avestaAns":[["d","a","z","d","a"]]},
    "65":{"englishQ":"we gave","avestaAns":[["n","i","d","a","q","A","m","a"]]},
    "66":{"englishQ":"angry","avestaAns":[["g","r","a","N","t","a"]]},
    "67":{"englishQ":"venerated / attuned","avestaAns":[["Y","a","S","t","a"]]},
    "68":{"englishQ":"asked / question","avestaAns":[["p","a","r","S","t","a"]]},
    "69":{"englishQ":"he is / she is / it is","avestaAns":[["a","s","t","i"]]},
    "70":{"englishQ":"he wears / she wears","avestaAns":[["W","a","s","t","e"]]},
    "71":{"englishQ":"veneration","avestaAns":[["Y","a","s","n","a"]]},
    "72":{"englishQ":"arrangement","avestaAns":[["r","a","C","n","u"]]},
    "73":{"englishQ":"carrying","avestaAns":[["W","a","s","m","a"]]},
    "74":{"englishQ":"man","avestaAns":[["m","a","‚","y","a"],["n","a","r"],["W","i","r","a"]]},
    "75":{"englishQ":"Guardian Spirit / Fravashi","avestaAns":[["f","r","a","w","a","C","i"]]},
    "76":{"englishQ":"seed","avestaAns":[["t","a","x","m","a","n"]]},
    "77":{"englishQ":"fever / heat","avestaAns":[["t","a","f","n","u"]]},
    "78":{"englishQ":"exhilaration","avestaAns":[["m","a","s","t","i"]]},
    "79":{"englishQ":"knowledge","avestaAns":[["c","i","s","t","i"]]},
    "80":{"englishQ":"vomited","avestaAns":[["W","a","N","t","a"]]},
    "81":{"englishQ":"rubbed","avestaAns":[["m","a","r","S","t","a"]]},
    "82":{"englishQ":"country","avestaAns":[["d","a","F","y","u"],["d","a","i","?","h","u"]]},
    "83":{"englishQ":"mountain","avestaAns":[["g","a","i","r","i","S"],["b","a","r","v","z","a","M","h"]]},
    "84":{"englishQ":"pain","avestaAns":[["d","vrv"],["d","r","i","t","a"]]},
    "85":{"englishQ":"teaching","avestaAns":[["T","k","a","E","C","a"],["s","a","s","t","i"]]},
    "86":{"englishQ":"courage","avestaAns":[["a","m","a"]]},
    "87":{"englishQ":"flow","avestaAns":[["t","a","c","a","r","v"]]},
    "88":{"englishQ":"food","avestaAns":[["p","i","t","u"]]},
    "89":{"englishQ":"Time of pounding / Havan Geh","avestaAns":[["h","A","w","a","n","a"]]},
    "90":{"englishQ":"arrow","avestaAns":[["i","C","u"]]},
    "91":{"englishQ":"existence / life / world","avestaAns":[["a","h","u"]]},
    "92":{"englishQ":"truth","avestaAns":[["r","a","C","n","u"]]},
    "93":{"englishQ":"one who pours libations / chief priest","avestaAns":[["z","a","o","t","a","r"]]},
    "94":{"englishQ":"one who nourishes / father","avestaAns":[["p","i","t","a","r"]]},
    "95":{"englishQ":"a mat","avestaAns":[["s","t","a","i","r","i","S"]]},
    "96":{"englishQ":"weapon","avestaAns":[["s","n","a","i","q","i","S"]]},
    "97":{"englishQ":"a thought","avestaAns":[["m","a","n","a","M","h"]]},
    "98":{"englishQ":"thrown","avestaAns":[["a","s","a","M","h"]]},
    "99":{"englishQ":"immortality / Amardad","avestaAns":[["a","m","vrv","t","A","T"]]},
    "100":{"englishQ":"all / entire","avestaAns":[["h","a","u","r","w","a"]]},
    "101":{"englishQ":"Khordad / perfection","avestaAns":[["h","a","u","r","w","a","t","A","T"]]},
    "102":{"englishQ":"Lord of Existence / Lord","avestaAns":[["a","h","u","r","a"]]},
    "103":{"englishQ":"mankind","avestaAns":[["m","a","‚","y","A","k","a"]]},
    "104":{"englishQ":"beautiful","avestaAns":[["s","r","i","r","a"]]},
    "105":{"englishQ":"swift","avestaAns":[["A","s","u"]]},
    "106":{"englishQ":"bone / matter","avestaAns":[["a","s","T"]]},
    "107":{"englishQ":"material / corporeal","avestaAns":[["a","s","t","w","a","T"]]},
    "108":{"englishQ":"manly","avestaAns":[["n","a","i","r","y","a"]]},
    "109":{"englishQ":"courageous / strong","avestaAns":[["a","m","a","w","a","N","T"]]},
    "110":{"englishQ":"dirt / filth","avestaAns":[["n","a","s","u"]]},
    "111":{"englishQ":"filthy / polluted","avestaAns":[["n","a","s","u","m","a","T"]]},
    "112":{"englishQ":"vigorous","avestaAns":[["u","G","r","a"]]},
    "113":{"englishQ":"victorious","avestaAns":[["W","vrv","q","a","w","a","T"]]},
    "114":{"englishQ":"better","avestaAns":[["W","a","h","y","a","M","h"]]},
    "115":{"englishQ":"best","avestaAns":[["W","a","h","i","S","t","a"]]},
    "116":{"englishQ":"great","avestaAns":[["m","a","z"]]},
    "117":{"englishQ":"law","avestaAns":[["d","A","t","a"]]},
    "118":{"englishQ":"legal","avestaAns":[["d","A","i","t","y","a"]]},
    "119":{"englishQ":"righteous","avestaAns":[["a","C","a","w","a","n"]]},
    "120":{"englishQ":"holy","avestaAns":[["a","C","a","w","a","T"]]},
    "121":{"englishQ":"near","avestaAns":[["n","a","z","d"]]},
    "122":{"englishQ":"son","avestaAns":[["p","u","q","r","a"]]},
    "123":{"englishQ":"daughter","avestaAns":[["d","u","G","D","a","r"]]},
    "124":{"englishQ":"mother","avestaAns":[["m","A","t","a","r"]]},
    "125":{"englishQ":"brother","avestaAns":[["b","r","A","t","a","r"]]},
    "126":{"englishQ":"sister","avestaAns":[["X","a","M","h","a","r"]]},
    "127":{"englishQ":"woman","avestaAns":[["n","A","i","r","I"]]},
    "128":{"englishQ":"grandfather","avestaAns":[["n","y","A","k","a"]]},
    "129":{"englishQ":"grandmother","avestaAns":[["n","y","A","k","A"]]},
    "130":{"englishQ":"demon","avestaAns":[["d","a","E","w","a"]]},
    "131":{"englishQ":"demoness","avestaAns":[["d","a","E","w","I"]]},
    "132":{"englishQ":"a ram","avestaAns":[["m","a","E","C","a"]]},
    "133":{"englishQ":"an ewe","avestaAns":[["m","a","E","C","I"]]},
    "134":{"englishQ":"youthful","avestaAns":[["Y","a","z","u"]]},
    "135":{"englishQ":"nourisher","avestaAns":[["q","r","A","t","a","r"]]},
    "136":{"englishQ":"mare","avestaAns":[["a","s","p","A"]]},
    "137":{"englishQ":"Hoama","avestaAns":[["h","a","o","m","a"]]},
    "138":{"englishQ":"hand","avestaAns":[["z","a","s","t","a"]]},
    "139":{"englishQ":"Mithra","avestaAns":[["m","i","q","r","a"]]},
    "140":{"englishQ":"bliss","avestaAns":[["u","S","t","a"]]},
    "141":{"englishQ":"wolf","avestaAns":[["W","v","h","r","k","a"]]},
    "142":{"englishQ":"immortal","avestaAns":[["a","m","v","C","a"]]},
    "143":{"englishQ":"Mazdayasna","avestaAns":[["m","a","z","d","a","y","a","s","n","a"]]},
    "144":{"englishQ":"beneficient","avestaAns":[["s","p","v","N","t","a"]]},
    "145":{"englishQ":"kingdom","avestaAns":[["x","C","a","q","r","a"]]},
    "146":{"englishQ":"friendship","avestaAns":[["h","a","x","v","D","r","a"]]},
    "147":{"englishQ":"propitiation","avestaAns":[["x","C","n","a","o","q","r","a"]]},
    "148":{"englishQ":"house","avestaAns":[["n","m","A","n","a"]]},
    "149":{"englishQ":"action","avestaAns":[["‚","y","a","o","q","n","a"]]},
    "150":{"englishQ":"evil","avestaAns":[["a","G","a"],["a","k","a"]]},
    "151":{"englishQ":"untimely","avestaAns":[["a","r","a","q","B","y","a"]]},
    "152":{"englishQ":"All-Knowing","avestaAns":[["m","a","z","d","A"]]},
    "153":{"englishQ":"evil giving","avestaAns":[["d","u","Z","d","A"]]},
    "154":{"englishQ":"intellect-giving","avestaAns":[["u","C","i","-","d","A"]]},
    "155":{"englishQ":"promise-breaker","avestaAns":[["m","i","q","r","O","-","z","y","A"]]},
    "156":{"englishQ":"righteousness-giving","avestaAns":[["a","C","a","-","d","A"]]},
    "157":{"englishQ":"good giving","avestaAns":[["W","a","M","h","u","d","A"]]},
    "158":{"englishQ":"warrior","avestaAns":[["r","a","q","a","E","S","t","A"]]},
    "159":{"englishQ":"to give / to know / to create","avestaAns":[["d","a","√-"]]},
    "160":{"englishQ":"to create","avestaAns":[["d","A","q","√-"]]},
    "161":{"englishQ":"to venerate / to worship","avestaAns":[["Y","a","z","√-"]]},
    "162":{"englishQ":"to ask","avestaAns":[["p","a","r","s","√-"]]},
    "163":{"englishQ":"to be / is / to exist","avestaAns":[["a","h","√-"]]},
    "164":{"englishQ":"to wear","avestaAns":[["W","a","h","√-"]]},
    "165":{"englishQ":"to die","avestaAns":[["m","a","r","√-"],["i","r","i","q","√-"]]},
    "166":{"englishQ":"to heat","avestaAns":[["t","a","p","√-"]]},
    "167":{"englishQ":"to think","avestaAns":[["c","i","T","√-"],["m","a","n","√-"]]},
    "168":{"englishQ":"to wish / to desire / to throw","avestaAns":[["i","C","√-"]]},
    "169":{"englishQ":"to burn / to shine","avestaAns":[["u","C","√-"]]},
    "170":{"englishQ":"to do","avestaAns":[["k","vrv","√-"]]},
    "171":{"englishQ":"to rule / to shine","avestaAns":[["x","C","i","√-"]]},
    "172":{"englishQ":"to love","avestaAns":[["f","r","I","√-"]]},
    "173":{"englishQ":"to hear","avestaAns":[["g","u","C","√-"],["s","r","u","√-"]]},
    "174":{"englishQ":"to tear","avestaAns":[["d","vrv","√-"]]},
    "175":{"englishQ":"to lie / to hurt / to decieve","avestaAns":[["d","r","u","j","√-"]]},
    "176":{"englishQ":"to protect","avestaAns":[["p","A","√-"]]},
    "177":{"englishQ":"to go","avestaAns":[["g","a","m","√-"],["i","√-"],["a","r","√-"]]},
    "178":{"englishQ":"to pour","avestaAns":[["i","r","i","c","√-"],["z","u","√-"]]},
    "179":{"englishQ":"to divide","avestaAns":[["b","a","j","√-"]]},
    "180":{"englishQ":"to arrange","avestaAns":[["r","a","z","√-"]]},
    "181":{"englishQ":"to rub","avestaAns":[["m","a","r","z","√-"],["m","vrv","z","√-"]]},
    "182":{"englishQ":"to vomit","avestaAns":[["W","a","m","√-"]]},
    "183":{"englishQ":"to teach","avestaAns":[["s","a","h","√-"]]},
    "184":{"englishQ":"to enquire / to ask","avestaAns":[["p","vrv","s","√-"]]},
    "185":{"englishQ":"to join","avestaAns":[["‚","u","√-"]]},
    "186":{"englishQ":"to exalt","avestaAns":[["b","vrv","z","√-"]]},
    "187":{"englishQ":"to lie down","avestaAns":[["s","i","√-"]]},
    "188":{"englishQ":"to pound","avestaAns":[["h","u","√-"]]},
    "189":{"englishQ":"to praise","avestaAns":[["s","t","u","√-"]]},
    "190":{"englishQ":"to stretch","avestaAns":[["t","a","n","√-"]]},
    "191":{"englishQ":"to spread","avestaAns":[["s","t","vrv","√-"]]},
    "192":{"englishQ":"to lead","avestaAns":[["n","i","√-"]]},
    "193":{"englishQ":"to speak","avestaAns":[["W","a","c","√-"],["m","r","u","√-"]]},
    "194":{"englishQ":"to nourish","avestaAns":[["p","i","√-"]]},
    "195":{"englishQ":"to cross","avestaAns":[["p","vrv","√-"]]},
    "196":{"englishQ":"to be courageous","avestaAns":[["a","m","√-"]]},
    "197":{"englishQ":"to flow","avestaAns":[["t","a","c","√-"]]},
    "198":{"englishQ":"to age","avestaAns":[["z","r","u","√-"]]},
    "199":{"englishQ":"to cut","avestaAns":[["s","n","a","q","√-"]]},
    "200":{"englishQ":"to sit","avestaAns":[["a","s","√-"]]},
    "201":{"englishQ":"to be immortal","avestaAns":[["a","m","vrv","√-"]]},
    "202":{"englishQ":"to be beautiful","avestaAns":[["s","r","i","√-"]]},
    "203":{"englishQ":"to be good","avestaAns":[["W","a","h","√-"]]},
    "204":{"englishQ":"to hasten","avestaAns":[["a","s","√-"]]}
}

function restartTest() {
    document.getElementById("checkButton").text = "Check" // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    document.getElementById('showAnswerButton').classList.remove("disabled") // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    
    setTimeout(function() {
        avestaLetters = document.querySelectorAll(".AvestaLetters"); // nodeList of all the avestaLetters in the origin. since it is not declared, it becomes a global variable. Capturing this after sometime as the app.js insertavestaLetters() function is generating these html img elements firstly.
	    avestaLetters.forEach((avestaLetter) => {
		const event = () => {
            let buttonStatus = document.getElementById("checkButton").text
			if (isAnimating || buttonStatus == "Next" || buttonStatus == "Correct!")  return; // if we already have an animation playing, don't let the user start a new one. Also if already correct answer has been given, don't animate naymore.
			avestaLetter.closest(".thirdSectionElements") ? move(avestaLetter) : putback(avestaLetter); // decide if we should use the move() or putback() functions based on the avestaLetter's current location
		};
	
		avestaLetter.addEventListener("mouseup", event);
        avestaLetter.addEventListener("touchend", event);
    })

    // jumperInput = document.querySelector("#jumperInput") // giving the deelopment stage input test number field enter functionality
    // jumperInput.addEventListener("keyup", function(event) {
    //     // Number 13 is the "Enter" key on the keyboard
    //     if (event.keyCode === 13) {
    //       // Cancel the default action, if needed
    //       event.preventDefault();
    //       // Trigger the button element with a click
    //       document.getElementById("jumperButton").click();
    //     }
    //   });

    }, 300)

    // changing page so getting rid of stuff from the page
    try {
        document.getElementById("heading").remove()
        let secondSection = document.querySelector("#secondSection")
        for (let index = secondSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from second section
            secondSection.children[index].remove()            
        }
        let thirdSection = document.querySelector("#thirdSection")
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        thirdSection.style.display = "flex"
    } catch (e) {
        if (e instanceof TypeError) {
            // continuing since it must be first time opening page and can't find the elements it is trying to delete
        }
    }

    if (squareRootWordMode) {
        let testNumberWhereSqRootWordsAreStarting = 86; // sq root words are in the end of the tests array, so test length is the ending point for the same
        while(true){ // generating random no but ensuring i pick only Sq Root Word
            randomNo = Math.floor(Math.random() * (lengthOfTests-testNumberWhereSqRootWordsAreStarting+1))+testNumberWhereSqRootWordsAreStarting; // basically this gets the random number exactly in the range where the sq root words are present in the tests array. Even i don't understand the math here, stole the logic off SO.
            if(oldRandomNosOfSqRootWords.length === amountOfSqRootWordsInTestArray){oldRandomNosOfSqRootWords = []};
            if(oldRandomNosOfSqRootWords.indexOf(randomNo) === -1){ // This check in place to ensure same random number is not repeated in 1 run.
                oldRandomNosOfSqRootWords.push(randomNo);
                break;
            }
        }
    } else {
        while(true){ //generating the random number which will be the Test Number
            randomNo = Math.floor(Math.random() * lengthOfTests)+1;
            if(oldRandomNos.length === lengthOfTests){oldRandomNos = []};
            if(oldRandomNos.indexOf(randomNo) === -1){ // This check in place to ensure same random number is not repeated in 1 run.
                oldRandomNos.push(randomNo);
                break;
            }
        }
    }

    
    console.log("Random/Test No: ", randomNo)    
    let tempStr1 = ""
    tests[randomNo]['avestaAns'][0].forEach(element => {
        let theKey = Object.keys(avestaDict).find(key => avestaDict[key] === element);
        tempStr1 += `${theKey},`
    });

    console.log("Correct Ans: ", tempStr1)
    console.log("Correct Ans: ", tests[randomNo]['avestaAns'][0])
    tempList = [];
    repeatingLetters = [];
    tests[randomNo]["avestaAns"].forEach(element => { //extracting correct answers from tests dict & putting them in tempList for further processing. 
        element.forEach(elem => {
            if (tempList.indexOf(elem) == -1){ //check if letter is already in list
                tempList.push(elem)
            } else { // if letter is already in list i also need to check if orig answer contains multiple same letters.If it does, then push appropriate number of duplicate letters to the list.
                console.log("enterd duplicate checker")
                let countOfElemInOrigArray = element.filter(x => x === elem).length;
                let countOfElemInTempArray = tempList.filter(x => x === elem).length;
                console.log(elem, countOfElemInOrigArray)
                console.log(elem, countOfElemInTempArray)
                if (countOfElemInOrigArray - countOfElemInTempArray > 0) {
                    tempList.push(elem)
                }
            }
        });
    });

    let totalUniqueAvestaLettersInTest = tempList.length //capturing the correct Avesta unique letters length as later on will generate elements on its basis. Minimum i will show 10 & max the number of this variable.
    console.log("Min no of Avesta letter options to be shown: ", totalUniqueAvestaLettersInTest)
    thirdSection = document.getElementById("thirdSection")
    for (let index = 0; index < 10 || index < totalUniqueAvestaLettersInTest; index++) { // generating number of containers basis totalUniqueAve... var.
        let divTemp = document.createElement('div');
        divTemp.className = "thirdSectionElements fade-in";
        thirdSection.appendChild(divTemp);
    }

    thirdSectionElements = document.querySelectorAll(".thirdSectionElements")

    while (tempList.length < thirdSectionElements.length) { //using the Random No generated above, that specific test no being filled up with random nos from 1 to 50.
        tempList.push(avestaDict[Math.floor(Math.random()*51)+1])
    }

    shuffle(tempList)
    // console.log(tempList)

    let heading = document.createElement("h4")
    heading.textContent = tests[randomNo]["englishQ"]
    heading.id = "heading"
    heading.className = "fade-in"
    firstSection.appendChild(heading)

    tempList.forEach((elem,index) => {
        let p = document.createElement('p');
        p.className = "AvestaLetters noselect";
        p.textContent = elem;
        thirdSectionElements[index].appendChild(p);
    });
}

function buttonPressed() { //this gets fired everytime the #checkButton is pressed
    testPassed = false;
    let button = document.getElementById("checkButton")
    if (button.text == "Next") {
        button.text = "Check" // need to do this immediately to prevent multiple page loads if user taps Next like crazy. EDIT - no succ, still user can bypass.
        console.log("next page")
        // restartTest();
        restartStraightTest();
        return;
    }
    // Below section checks the answer given by user.
    let userAns = ""
    let userAnsRaw = document.querySelectorAll("div#secondSection > p")
    userAnsRaw.forEach(elem => {
        userAns += elem.textContent
    });
    console.log(userAns)
    
    tests[randomNo]["avestaAns"].forEach(element => {
            correctAns = ""
            element.forEach(elem => {
                correctAns+=elem
            });
        if (userAns==correctAns) {
            testPassed = true;
            console.log("Correcto!")
            checkButton = document.getElementById("checkButton")
            checkButton.text = "Correct!"
            checkButton.classList.add("pulse")
            checkButton.classList.remove("teal")
            checkButton.classList.add("blue")
            setTimeout(function() {
                checkButton.classList.remove("pulse")
                checkButton.classList.remove("blue")
                checkButton.classList.add("teal")
                checkButton.text = "Next"
            }, 1000) 
            return;
        }
    });
    
    if (testPassed == true) {
        showSynonymsIfPresent();
        return;
    }
    else {
        console.log("wrong :(")
        checkButton = document.getElementById("checkButton")
        checkButton.text = "Try Again!"
        checkButton.classList.add("pulse")
        checkButton.classList.remove("teal")
        checkButton.classList.add("red")
        setTimeout(function() {
            checkButton.classList.remove("pulse")
            checkButton.classList.remove("red")
            checkButton.classList.add("teal")
            checkButton.text = "Check"
        }, 1000) 
        return;
    }
}

function restartStraightTest() {
    setTimeout(function() {
        avestaLetters = document.querySelectorAll(".AvestaLetters"); // nodeList of all the avestaLetters in the origin. since it is not declared, it becomes a global variable. Capturing this after sometime as the app.js insertavestaLetters() function is generating these html img elements firstly.
	    avestaLetters.forEach((avestaLetter) => {
            const event = () => {
                let buttonStatus = document.getElementById("checkButton").text
                if (isAnimating || buttonStatus == "Next" || buttonStatus == "Correct!")  return; // if we already have an animation playing, don't let the user start a new one. Also if already correct answer has been given, don't animate naymore.
                avestaLetter.closest(".thirdSectionElements") ? move(avestaLetter) : putback(avestaLetter); // decide if we should use the move() or putback() functions based on the avestaLetter's current location
            };
	
            avestaLetter.addEventListener("mouseup", event);
            avestaLetter.addEventListener("touchend", event);
        })

    }, 300)

    // changing page so getting rid of stuff from the previous time from the page
    try {
        document.getElementById("heading").remove()
        let secondSection = document.querySelector("#secondSection")
        for (let index = secondSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from second section
            secondSection.children[index].remove()            
        }
        let thirdSection = document.querySelector("#thirdSection")
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        thirdSection.style.display = "flex"
    } catch (e) {
        if (e instanceof TypeError) {
            // continuing since it must be first time opening page and can't find the elements it is trying to delete
        }
    }

    document.getElementById("checkButton").text = "Check" // need this to run when in development i type in a new test no immediately after clicking on showAnswer
    document.getElementById('showAnswerButton').classList.remove("disabled") // need this to run when in development i type in a new test no immediately after clicking on showAnswer

    if (oldRandomNos === lengthOfTests) { // this resets the number back to starting in case user reaches end of test.
        if (squareRootWordMode) oldRandomNos = 85; // If SqRootWord Mode is on then reset to: put the test number here where sq root words are starting minus 1
        else oldRandomNos = 0; // if SqRootWord Mode is off then reset to 0
    }
    oldRandomNos += 1
    randomNo = oldRandomNos
    console.log("Random/Test No: ", randomNo)
    
    // document.getElementById("jumperInput").value = ""
    // document.getElementById("jumperInput").value = randomNo

    let tempStr1 = ""
    tests[randomNo]['avestaAns'][0].forEach(element => {
        let theKey = Object.keys(avestaDict).find(key => avestaDict[key] === element);
        tempStr1 += `${theKey},`
    });
    console.log("Correct Ans: ", tempStr1)
    console.log("Correct Ans: ", tests[randomNo]['avestaAns'][0])
    tempList = [];
    repeatingLetters = [];
    tests[randomNo]["avestaAns"].forEach(element => { //extracting correct answers from tests dict & putting them in tempList for further processing. 
        element.forEach(elem => {
            if (tempList.indexOf(elem) == -1){ //check if letter is already in list
                tempList.push(elem)
            } else { // if letter is already in list i also need to check if orig answer contains multiple same letters.If it does, then push appropriate number of duplicate letters to the list.
                console.log("enterd duplicate checker")
                let countOfElemInOrigArray = element.filter(x => x === elem).length;
                let countOfElemInTempArray = tempList.filter(x => x === elem).length;
                console.log(elem, countOfElemInOrigArray)
                console.log(elem, countOfElemInTempArray)
                if (countOfElemInOrigArray - countOfElemInTempArray > 0) {
                    tempList.push(elem)
                }
            }
        });
    });

    let totalUniqueAvestaLettersInTest = tempList.length //capturing the correct Avesta unique letters length as later on will generate elements on its basis. Minimum i will show 10 & max the number of this variable.
    console.log("Tot Unique Avesta Letters in Test answer: ", totalUniqueAvestaLettersInTest)
    thirdSection = document.getElementById("thirdSection")
    for (let index = 0; index < 10 || index < totalUniqueAvestaLettersInTest; index++) { // generating number of containers basis totalUniqueAve... var.
        let divTemp = document.createElement('div');
        divTemp.className = "thirdSectionElements fade-in";
        thirdSection.appendChild(divTemp);
    }

    thirdSectionElements = document.querySelectorAll(".thirdSectionElements")

    while (tempList.length < thirdSectionElements.length) { //using the Random No generated above, that specific test no being filled up with random nos from 1 to 50.
        tempList.push(avestaDict[Math.floor(Math.random()*51)+1])
    }

    shuffle(tempList)
    // console.log(tempList)

    let heading = document.createElement("h4")
    heading.textContent = tests[randomNo]["englishQ"]
    heading.id = "heading"
    heading.className = "fade-in"
    firstSection.appendChild(heading)

    tempList.forEach((elem,index) => {
        let p = document.createElement('p');
        p.className = "AvestaLetters noselect";
        p.textContent = elem;
        thirdSectionElements[index].appendChild(p);
    });
}

function showCorrectAnswer() {
    animationInitiatedByShowCorrectAnswer = true; // if this is true, then i'm disabling sibling animation in game2.js as it glitches if all move together
    document.getElementById("checkButton").text = "Next"

    let lettersInSecondSection = document.getElementById("secondSection") // select the second section
    for (let index = lettersInSecondSection.childElementCount-1; index >= 0; index--) {
        putback(lettersInSecondSection.children[index]) // then run all the child elements of second section (letters submitted by user) through the putback() function to send back to 3rd section

    }

    document.getElementById('showAnswerButton').classList.add("disabled")
    // document.getElementById('jumperButton').classList.add("disabled")
    
    tests[randomNo]['avestaAns'][0].forEach(element => { // sending the correct answers to the second section
        for (let i = 0; i < document.getElementsByClassName("thirdSectionElements").length; i++) {
            avlbleLetters = document.querySelectorAll(".thirdSectionElements > .AvestaLetters");
            if (avlbleLetters[i].textContent === element) {
                if (avlbleLetters[i] != null) move(avlbleLetters[i],animationInitiatedByShowCorrectAnswer);
                break
            }
        }
    });
    showSynonymsIfPresent();
}

const jumpToTest = () => {
    let testNo = document.getElementById("jumperInput").value;
    oldRandomNos = testNo -1;

    restartStraightTest();
}

const installHelpModal = () => {
        // Get the modal
    var modal = document.getElementById("helpModal");

    // Get the button that opens the modal
    var btn = document.getElementById("helpButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var modalContent = document.getElementsByClassName("modal-content")[0]; // need this to apply the exit animation on on pressing cross or outside.

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalContent.style.animationName = "animateExit"
        modalContent.style.webkitAnimationName = "animateExit"
        modal.style.animationName = "bgExit"
        modal.style.webkitAnimationName = "bgExit"
        setTimeout(() => {
            modal.style.display = "none"; // need to set to none again otherwise it becomes visible again at orig position
            modalContent.style.animationName = "animateEntry"
            modalContent.style.webkitAnimationName = "animateEntry"
            modal.style.animationName = "bgEntry"
            modal.style.webkitAnimationName = "bgEntry"
        }, 470); // my animation is x, so this is 470 ms jic js gets delayed somehow, atleast it doesn't flicker back
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modalContent.style.animationName = "animateExit"
            modalContent.style.webkitAnimationName = "animateExit"
            modal.style.animationName = "bgExit"
            modal.style.webkitAnimationName = "bgExit"
            setTimeout(() => {
                modal.style.display = "none"; // need to set to none again otherwise it becomes visible again at orig position
                modalContent.style.animationName = "animateEntry"
                modalContent.style.webkitAnimationName = "animateEntry"
                modal.style.animationName = "bgEntry"
                modal.style.webkitAnimationName = "bgEntry"
            }, 470); // my animation is x, so this is 470 ms jic js gets delayed somehow, atleast it doesn't flicker back
    }}
}
installHelpModal();

async function showSynonymsIfPresent() {  // deleting everything from third section to show the multiple synonyms in Avesta in case synonyms are there.
    if (tests[randomNo]['avestaAns'].length > 1) { 
        // await sleep(1000);
        console.log("Note: This word has multiple Avesta translations, as .");
        let thirdSection = document.querySelector("#thirdSection");
        for (let index = thirdSection.childElementCount-1; index >= 0; index--) { //getting rid of everything from third section
            thirdSection.children[index].remove()            
        }
        
        thirdSection.style.display = "block";

        h4Temp = document.createElement('h4'); // headingof "Note!"
        h4Temp.className = "fade-in";
        h4Temp.textContent = "Note!";
        h4Temp.style.color = "darkred"
        h4Temp.align = "center"
        thirdSection.appendChild(h4Temp);
        
        pTemp = document.createElement('p'); // slight para
        pTemp.className = "fade-in";
        pTemp.textContent = "This word can also be spelt as:"
        pTemp.align = "center"
        pTemp.style.fontSize = "18px"
        thirdSection.appendChild(pTemp);

        let userAns = "" // when user submits correct answer then i need to show only OTHER synonyms. So grabbing user answer here to exclude it from getting displayed as a synonym again. And will avoid the 0 index Avesta word answer user clicked on Help Me.
        let userAnsRaw = document.querySelectorAll("div#secondSection > p")
        userAnsRaw.forEach(elem => {
            userAns = elem.textContent + userAns
        });    

        for (let index = 0; index < tests[randomNo]["avestaAns"].length; index++) { // displaying the synonyms
            let tempStr = ""
            tests[randomNo]["avestaAns"][index].forEach(elem => {
                tempStr = elem + tempStr // add like this to autoly reverse the Avesta chars
            });
            console.log(tempStr, userAns)
            if (tempStr === userAns) continue;
            pTemp2 = document.createElement('p');
            pTemp2.className = "AvestaLetters fade-in";
            pTemp2.align = "center"
            pTemp2.textContent = tempStr
            pTemp2.style.fontSize = "50px"
            thirdSection.appendChild(pTemp2);
        }
    }
}

const input = document.getElementsByTagName('input')[0];

input.addEventListener('change', () => {
  if (input.checked) {
    console.log('All words mode enabled.');
    squareRootWordMode = false;
    oldRandomNos = []
    // restartTest();
    oldRandomNos = 0
    restartStraightTest();    
} else {
    console.log('Square Root words mode enabled.');
    squareRootWordMode = true;
    oldRandomNosOfSqRootWords = []
    if (amountOfSqRootWordsInTestArray === 0) {// the next bit of for loop inception generates this variable. Also, wisely it runs only the first time the toggle button is pressed thanks to if condition.
        for (let theTestNo = 1; theTestNo < (lengthOfTests+1); theTestNo++) { // iterating over the testNo
            for (let outerLoop = 0; outerLoop < tests[theTestNo]['avestaAns'].length; outerLoop++) { // iterating over multiple answers of a word (in case of multi answer words)
                for (let innerLoop = 0; innerLoop < tests[theTestNo]['avestaAns'][outerLoop].length; innerLoop++) { // iterating over each alphabet in the answer
                    if(tests[theTestNo]['avestaAns'][outerLoop][innerLoop] === "√-"){
                        amountOfSqRootWordsInTestArray++
                        outerLoop = tests[theTestNo]['avestaAns'].length
                        break;
                    }
                }
            }
        }
    }
    // restartTest();
    oldRandomNos = 158 // set this to the test number where sq root words are starting, minus 1.
    restartStraightTest();
  }  
});

let squareRootWordMode = true;

let firstSection = document.getElementById('firstSection');

const lengthOfTests = 131;
// let oldRandomNos = []
let oldRandomNosOfSqRootWords = []
let amountOfSqRootWordsInTestArray = 0 
let oldRandomNos = 158 // restartStraightTest() needed for that. Put the number here of where Sq Root Words are starting minus 1 so that by defualt square root words are shown to user in begng

// restartTest(); // if you switch between this & straight test, need to change quite a few things between each. Mainly noOfOldTests becomes a 0 in other & also change which function gets called in buttonPressed function.
restartStraightTest();

//The below code use when Mummy asks to feed in new words. Simply enter data in feedingInPointWithMummy array, update starting & ending numbers variables threasfter. Starting number should be 1 more than the final number in tests array existing. Then just run the code then type in console the last commented line & then the new array will be pasted in clipboard. Then paste it in VS Code, multiselect cursor on the ending commas between each item & press enter to format correctly.

// feedingInPointWithMummy = {
//     170: ['', []],  jsdlfjsl
//     171: ['', []], 
//     172: ['', []], 
//     173: ['', []], 
//     174: ['', []], 
//     175: ['', []], 
//     176: ['', []], 
//     177: ['', []], 
//     178: ['', []], 
//     179: ['', []], 
// }


  
// let startingNumberOfFeedingInPointWithMummyArray = 86;
// let endingNumberOfFeedingInPointWithMummyArray = 158;

  
// for (let index = startingNumberOfFeedingInPointWithMummyArray; index < (endingNumberOfFeedingInPointWithMummyArray+1); index++) {
//     let tempOuterList = []
//     feedingInPointWithMummy[index].forEach((element,i) => {
//         let tempInnerList = []
//         if(i===0){
//             theQuesInEngl = feedingInPointWithMummy[index][i]
//             tests[index] = {englishQ: theQuesInEngl, avestaAns: []}
//         }
//         else if(i>0){
//             feedingInPointWithMummy[index][i].forEach(e => {
//                 tempInnerList.push(avestaDict[e])
//             });
//             tempOuterList.push(tempInnerList)
//         }
//     });
//     tests[index]['avestaAns'] = tempOuterList
// }

// let newListButInStringFormat = JSON.stringify(tests);
// // copy(newListButInStringFormat)