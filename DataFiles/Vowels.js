let countVowels = 0;
function Vowels (myString) {
     for(let x of myString) {
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
            countVowels++;
        }
     }
     console.log ("Number of Vowels in a string are: ", countVowels)
}

Vowels ("This is me Khizar Hayat Khan")