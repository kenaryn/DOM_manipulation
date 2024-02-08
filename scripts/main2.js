const newNode = document.createElement('span');
const parentDiv = document.getElementById('childElement').parentNode;

let span2 = document.getElementById('childElement');
// let span2 = undefined;
// let span2 = 'undefined';

const new_text = document.createTextNode('baz quux');
newNode.appendChild(new_text);
parentDiv.insertBefore(newNode, span2);