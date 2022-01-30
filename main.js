// Select DOM elements:
let submit_btn = document.getElementById("input-btn");
let lower_range_num = Number(document.getElementById("lowest-number").value);
let upper_range_num = Number(document.getElementById("highest-number").value);  
let answer_num = GenerateNumber(lower_range_num, upper_range_num);

// Initialize text to speech engine.
let voice_text;
let utterance = new SpeechSynthesisUtterance();
utterance.volume = "1.0";
speechSynthesis.speak(utterance);


// Button event listeners.
submit_btn.addEventListener("click", function(event) {
    lower_range_num = Number(document.getElementById("lowest-number").value);
    upper_range_num = Number(document.getElementById("highest-number").value);
    answer_num = GenerateNumber(lower_range_num, upper_range_num);
    number_displayer.textContent = answer_num;
    textToSpeech(answer_num);
})

console.log(speechSynthesis.getVoices());

// Text to speech function.
function textToSpeech(number) {
    let utterance = new SpeechSynthesisUtterance(number);
    utterance.lang = "es";
    utterance.voice = SpeechSynthesisVoice[57];
    speechSynthesis.speak(utterance);
}

// Random Number generation.
let number_displayer = document.getElementById("audio-box");


function GenerateNumber(lower_range_num, upper_range_num) {
    return Math.floor(Math.random() * (upper_range_num - lower_range_num + 1) + lower_range_num);
}

number_displayer.textContent = GenerateNumber(lower_range_num, upper_range_num);

