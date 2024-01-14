/*
Author: Yajuan Zeng
Date: January 13, 2024
Purpose: 
Pig Latin game:
- 1. if a word begins with a vowel, append 'way' to the end of the word
- 2. if a word begins with one consonant, move that letter to the end and append 'ay'
- 3. if a word begins with two consonants, move both letters to the end and append 'ay'
- don't worry about handling special cases such as: numbers, commas or other punctuation, non-latin characters
*/

let sentence = prompt("Please enter your sentence: "); // prompt the user to enter some words
let output;
if(sentence.trim() === "") { // check if the user enters nothing
    output = "You didn't enter anything!"
} else {
    let words = sentence.split(" "); // change the sentence to an array which contains all the words entered
    for (let i = 0; i < words.length; i++) { // loop throuth the array
        let word = words[i].toLowerCase();

        let char1 = word.charAt(0); // check if the first letter of the word is vowel, if it is, follow rule 1
        if (char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u") {
            words[i] = word + "way";
        } else { // if not, check the second letter
            let char2 = word.charAt(1);
            if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") {
                let partOfWord = word.substring(1);
                words[i] = partOfWord + char1 + "ay"; // if the second letter is vowel, follow rule 2
            } else { // means the first two letters are both consonants, follow rule 3
                let partOfWord = word.substring(2); 
                words[i] = partOfWord + char1 + char2 + "ay"; 
            }
        }
    }
    output = "Your sentence in Pig Latin Game is: " + words.join(" ");
}
console.log(output); // return the rusult


