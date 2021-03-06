/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str;
};

function addTextTo(elem, str) {
    elem.append(str);
};

function moreBears() {
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
};

function setId(elem, str) {
    elem.id = str;
    return elem;
};

function setClass(elem, str) {
    elem.className = str;
    return elem;
};

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
};

function removeAClass(elem, str) {
    elem.classList.remove(str);
};

function newElement(name) {
    const x = document.createElement(name);
    return x;
};

function findElementById(id) {
    const x = document.querySelector(`#${id}`);
    return x;
}

function findElementsByQuery(query) {
    const x = document.querySelectorAll(query);
    return x;
}

function reverseList(query) {
    const list = document.querySelector(query);
    const items = list.children;

    for (let i = items.length - 1; i >= 0; i--) {
        list.append(items[i]);
    }

    return list;
}

function mover(moveThis, appendToThis) {
    const item = document.querySelector(moveThis);
    const dest1 = document.querySelector(appendToThis);
    dest1.appendChild(item);
}

function filler(list, candidates) {
    for (const x of candidates) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(x);
        node.appendChild(textnode);
        list.appendChild(node);
    }
}

function dupe(selector) {
    const item = document.querySelector(selector);
    const parent = item.parentElement;
    const clone = item.cloneNode(true);
    parent.appendChild(clone);
}

function removeAll(selector) {
    const item = document.querySelectorAll(selector);

    for (const x of item) {
        const parent = x.parentElement;
        parent.removeChild(x);
    }
}

function getUserData() {
    const username = document.querySelector("#username").value;
    const speed = document.querySelector("#speed").value;
    const student = document.querySelector("#student").checked;
    const speedNumber = Number(speed);
    return {
        name: username,
        speed: speedNumber,
        student: student,
    };

}