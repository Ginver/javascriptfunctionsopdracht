/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23

function add3Numbers(getal1, getal2, getal3){ //parameters
    console.log(getal1, getal2, getal3);
    const totaal = getal1 + getal2 + getal3
    return totaal
}
const totaal = add3Numbers(3, 4, 5);
console.log(totaal);



/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"
function magic(word1, word2) {
    console.log(word1 + word2);
}
magic("abra", "cadabra");


/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"
function double(word, character) {
   console.log(character + word + character);
}
double("bril", "*");
double("beep", "_");
double("kaas", "Q");

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function magicWord(letter1, letter2) {
   const magical = letter1 + letter2;
   return [magical];
}
    const hudini = magicWord("abra", "cadabra");
    console.log(hudini);

function alphabet(betu1, betu2, betu3){
    const abece = betu1 + betu2 + betu3;
    return [abece];
}
    const beginAbece = alphabet("a", "b", "c");
    console.log(beginAbece);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

let names = ["Nick", "Nova", "Michel", "Arjan"]
function greetings(par1) {
console.log("hoi " + par1[0] + ", " + par1[1] + ", " + par1[2] + " en " + par1[3]);
}
greetings(names);


const recipe = {
    name: 'Spinazie lasagne',
    cookingTime: 45,
    isGlutenFree: false,
    ingredients: ['Lasagne bladen', 'Spinazie', 'Kaas'],
    printInfo: () => {
        console.log('Dit recept is niet glutenvrij.');
    }
};