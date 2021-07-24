"use strict";
function greet(name) {
    const greeting = document.createElement("h1");
    greeting.textContent = `Hello ${name}`;
    document.body.appendChild(greeting);
}
greet("Typescript");
