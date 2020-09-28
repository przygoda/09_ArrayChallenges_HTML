/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

let controls = {open_o:"<", open_cl:"</", close:">"};
let tags = ["html","head","head","body","h1","h1","p","p","ul","li","li","ul","body","html"];
let stack = [];
let tabCount = 0;

 // Ziel --> "<html><head></head><body><p></p></body></html>"; 
ausgabe(getHTML());
function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTagStack(i)) {// ???
            htmlStr += getTabs() + getTag(tags[i],"open") + "\n";
        } else {
            htmlStr += getTabs() + getTag(tags[i],"close") + "\n";;
        }
    }
    
    return htmlStr;
}

/* // Modul: Anzahle der Tabs: |Tests: */
function getTabs() {
    let tabStr = "";
    for (let i = 0; i < tabCount; i++) {
       tabStr += "\t";
    }
    return tabStr;
}

/* // Modul: Zusammenbau: <tagStr> --> Tests:
ausgabe(getTag("p","open"));
ausgabe(getTag("p","close"));
ausgabe(getTag("p","jkjlkjlkjl")); */
function getTag(tagName,flag) { // <p> | </p> 
    switch (flag) {
        case "open":
            return controls.open_o + tagName + controls.close;     
        case "close":
            return controls.open_cl + tagName + controls.close;
            default:
            return "#";
    }
}

/* // Modul: // Stack :: erscheint das tag zum ersten mal ? --> true/false/
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
        //ausgabe(stack.length);
        tabCount = stack.length
        stack.push(element);
        return true;
    } else { // Element nicht neu --> raus, close(false)
        stack.pop();
        //ausgabe(stack.length);
        tabCount = stack.length
        return false;
    }
}

/* // Modul: // Index :: erscheint das tag zum ersten mal ? --> true/false
ausgabe(isOpenTag(0));
ausgabe(isOpenTag(1));
ausgabe(isOpenTag(2));*/
function isOpenTagIndex(index) {
   //return index + " : " + tags.indexOf(tags[index]); // Vorüberlegung
   return tags.indexOf(tags[index]) == index;
}

//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}