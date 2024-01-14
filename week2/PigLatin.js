let sentence = prompt("Please enter your sentence: ");
let output;
if(sentence.trim() === "") {
    // alert( "You didn't enter anything!")
    output = "You didn't enter anything!"
} else {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();

        let char1 = word.charAt(0);
        if (char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u") {
            words[i] = word + "way";
        } else {
            let char2 = word.charAt(1);

            if (char2 === "a" || char2 === "e" || char2 === "i" || char2 === "o" || char2 === "u") {
                let partOfWord = word.substring(1);
                words[i] = partOfWord + char1 + "ay";
            } else {
                let partOfWord = word.substring(2);
                words[i] = partOfWord + char1 + char2 + "ay";
            }
        }
    }
    output = "Your sentence in Pig Latin Game is: " + words.join(" ");
}
console.log(output);


