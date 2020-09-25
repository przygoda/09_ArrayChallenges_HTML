/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

let controls = ["<",">","/"];
let tags = ["html","head","head","body","h1","h1","p","p","p","p","body","html"];
let stack = [];


 // Ziel --> "<html><head></head><body><p></p></body></html>"; 
ausgabe(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTagStack(i)) {// ???
            htmlStr += getTag(tags[i],"open");
        } else {
            htmlStr += getTag(tags[i],"close");
        }
    }
    
    return htmlStr;
}

/*
ausgabe(isOpenTagStack(0));
ausgabe(isOpenTagStack(1));
ausgabe(isOpenTagStack(2));*/
function isOpenTagStack(index) {

    // Ist das Element neu ?? // dann open und in den Stack
    // Wenn nicht // dann close und raus aus dem Stack

    let element = tags[index];
    
   // ausgabe(element + " : " + stack.indexOf(element));
    
    let cond    = (stack.indexOf(element) == -1); // element neu??

    if (cond) {  // Element neu ... --> rein, open(true)
        stack.push(element);
        ausgabe(stack);
        return true;
    } else { // Element nicht neu --> raus, close(false)
        stack.pop();
        ausgabe(stack);
        return false;
    }
}


// Modul: // erscheint das tag zum ersten mal ? --> true/false
/*ausgabe(isOpenTag(0));
ausgabe(isOpenTag(1));
ausgabe(isOpenTag(2));*/
function isOpenTagIndex(index) {
   //return index + " : " + tags.indexOf(tags[index]); // Vorüberlegung
   return tags.indexOf(tags[index]) == index;
}

// Modul: Zusammenbau: <tagStr> --> Tests:
/* ausgabe(getTag("p","open"));
ausgabe(getTag("p","close"));
ausgabe(getTag("p","jkjlkjlkjl")); */
function getTag(tagName,flag) { // <p> | </p> 
    switch (flag) {
        case "open":
            return controls[0] + tagName + controls[1];     
        case "close":
            return controls[0] + controls[2] + tagName + controls[1];
            default:
            return "#";
    }
}

//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}