"use strict";

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/questions.json')
        .then(response => response.json())
        .then(questions => {
            const id = Math.floor(Math.random() * questions.length);
            document.getElementById('question').innerText = questions[id];
        });
}, false);