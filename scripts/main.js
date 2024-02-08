// HTML elements.
const random_btn = document.getElementById('random-bg-colour');
const flip_btn = document.getElementById('flip-bg-colour');
const insert_btns = document.querySelectorAll('.insert-text');
const form = document.getElementById('input-form');
let input_text = document.getElementById('input-text');
const article_el = document.getElementById('new-entries');
const confirm = document.querySelector('#confirm');
const display_hide_global_btn = document.querySelector('.display-hide');
const display_hide_local_btn = document.querySelector('hide-local');
// const body_classes = document.body.classList;
const child_node = document.getElementById('child-node').parentNode;
// let toggle = false;
console.log(child_node);

const flip_label_hide_display = function () {
  /**
   * Flip 'Hide this' to 'Display this' and vice versa.
   */
  display_hide_local_btn.textContent =
    display_hide_local_btn.textContent === 'Hide this' ? 'Display this' : 'Hide this';
};

// How to check if a button exist?
// how to flip button's label??
if (display_hide_local_btn) {
  display_hide_local_btn.addEventListener('click', flip_label_hide_display);
}

const generate_random_bg_colour = function () {
  /**
   * Generates a pseudo-random color in hexadecimal and assigns it to `body` selector.
   */
  let rand_colour = Math.floor(Math.random() * 2 ** 24).toString(16);
  // if (document.body.classList.contains('whitesmoke') || document.body.classList.contains('black')) {
  //   document.body.removeAttribute('class');
  // }
  // Define a randomly generated colour after having removed class from `Colour` associated function.
  document.body.setAttribute('style', `background-color: #${rand_colour};`);
};

const flip_black_white_bg_colour = function () {
  /**
   * Flip `background-color`'s and font's color values between black and white.
   */
  // let new_colour = document.body.style.backgroundColor === ('smokewhite' || '') ? 'black' : 'white';
  // document.body.setAttribute('style', `background-color: ${new_colour};`);
  // document.body.setAttribute('style', `color: ${new_colour_font}`);

  // Both boolean expressions returns false, therefore function can not trigger class black or white smoke any more.
  // toggle = false;
  // document.body.style.backgroundColor = toggle ? 'whitesmoke' : 'black';
  // toggle = !toggle;

  // let current_bg_colour = document.body.className;
document.body.removeAttribute('style')
document.body.classList.toggle('black');
  // switch (current_bg_colour) {
  //   case 'whitesmoke':
  //     document.body.classList.toggle('black');
  //     break;
  //   case 'black':
  //     document.body.classList.toggle('black');
  //     break;
  //   case '':
  //     document.body.classList.add('black');
  //   default:
  //     // document.body.classList.add('whitesmoke');
  //     console.log(current_bg_colour);
  //     // document.body.removeAttribute('class');
  //     document.body.removeAttribute('style')
  //     console.log(current_bg_colour);
  // }
  // if (document.body.classList.contains('whitesmoke')) {
  //   console.log(document.body.classList);
  //   document.body.classList.replace('whitesmoke', 'black');
  //   console.log(document.body.classList);
  // } else if (document.body.classList.contains('black')) {
  //   console.log(document.body.classList);
  //   // 'black' is not found: DomTokenList [] is empty so the replace fails because class 'black' is not found.
  //   // Try classList.add / remove() in stead of `replace().`
  //   document.body.classList.replace('black', 'whitesmoke');
  //   console.log(document.body.classList);
  // }
};

const insert_local_hide_btn = function (local_article) {
  /**
   * Programmatically append a button to hide/display a specific `p` node.
   */
  let display_hide_local_btn = document.createElement('button');
  display_hide_local_btn.classList.add('hide-local');
  const hide_this_text = document.createTextNode('Hide this');
  display_hide_local_btn.appendChild(hide_this_text);
  // document.body.insertBefore(display_hide_local_btn, null);
  // new_node.insertBefore(display_hide_local_btn, null);
  // new_node.appendChild(display_hide_local_btn);
  local_article.insertBefore(display_hide_local_btn, null);
};

const insert_into_dom = function (event) {
  /**
   * Prompt the user to insert some text which is appended to the DOM, either into a `p` or `h1` tag according to the clicked button.
   * Then programmatically append a button to hide this specific node.
   */
  if (input_text.value !== '') {
    const local_article_el = document.createElement('article');
    local_article_el.classList.add('entry');

    const new_textual_node = document.createTextNode(input_text.value);
    let new_msg = document.createElement(event.target.value);

    // Check either the newly created node is a paragraphe and add it a HTML class to target them with ease for later use (e.g. using `display_hide_all_entries()`).
    if (new_msg instanceof HTMLParagraphElement) {
      new_msg.classList.add('entry-msg');
    }

    // Feed the DOM from the more recent to last one entry.
    new_msg.appendChild(new_textual_node);
    // insert_local_hide_btn(local_article_el);
    article_el.prepend(local_article_el);
    local_article_el.appendChild(new_msg);
  }

  // Reset textbox to prevent awkwardnesses.
  input_text.value = '';

  // Insert a button to hide this new node.
  insert_local_hide_btn();
};

const display_hide_form = function (event) {
  /**
   * Display/hide the form composed of a textbox to insert some text.
   */
  form.classList.toggle('hidden');
  confirm.value = event.target.value; // // Retrieve value's button herited
  // confirm.textContent=confirm.value; // Print value's button herited (`h1` / `p`)
};

insert_btns.forEach(insert_btn => {
  insert_btn.addEventListener('click', display_hide_form);
});

const prevent_form_submission = function (event) {
  /**
   * Prevent the form's submission to reload the page.
   */
  event.preventDefault();
};

const display_hide_all_entries = function () {
  /**
   * Display or hide all articles created with `insert_into_dom` function,
   * holding `entries` class.
   */
  let all_articles = document.querySelectorAll('.entry');
  if (all_articles.length !== 0) {
    all_articles.forEach(article => {
      article.classList.toggle('hidden');
    });
  }
};

// Business rule's handling events.
random_btn.addEventListener('click', generate_random_bg_colour);
flip_btn.addEventListener('click', flip_black_white_bg_colour);
form.addEventListener('submit', prevent_form_submission);
confirm.addEventListener('click', insert_into_dom);
display_hide_global_btn.addEventListener('click', display_hide_all_entries);

// TODO: add date and time for every new message and ensure proper printing.