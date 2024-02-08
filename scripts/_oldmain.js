const section_el = document.getElementById('my-container');
const article_el = document.createElement('article');
const newContent = document.createTextNode('Hi there from the DOM!!');
article_el.appendChild(newContent);
// document.body.insertBefore(article_el, section_el);  // newNode, referenceNode
document.body.insertBefore(article_el, null);  // newNode, referenceNode