const heading = document.getElementsByTagName('h1');

const para = document.getElementsByClassName('para')

console.log(heading)

console.log(para)


// Create html heading

const heading1 = document.createElement('h1');

const heading_text = document.createTextNode('This is created by Javascript');

heading1.appendChild(heading_text);

const div = document.getElementById('welcome');

div.appendChild(heading1);


// Create a paragraph

const para1 = document.createElement('p');

const para_text = document.createTextNode('This is also created by Javascript');

para1.appendChild(para_text);


// const div = document.getElementById('welcome2')
div.appendChild(para1);

heading1.style.color = "blue";

heading1.style.background = "rgb(255,0,0)";

// Create Image
const img = document.createElement('img');
img.src = "https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png";

const image_div = document.getElementById('welcome2');
image_div.appendChild(img);
img.style.width = "500px";

function myFunction(){
    let paragraph = document.getElementById('hidden_para');
    paragraph.style.display = "block";
}

// JS DOM

// Creating DOM Elements

// const content = document.getElementById("content");
// const heading = document.createElement("h1");
// const text = document.createTextNode("Hello Kishore");
// text.style.color = "blue";
// heading.appendChild(text);
// content.appendChild(heading);


// JS small functions

const div_element = document.getElementById('heading')

const heading = document.getElementsByTagName('h1');

console.log(heading)


// Create Element

let paragraph = document.createElement('p');

let para_content = document.createTextNode('This is a paragraph created using JS');

let result = paragraph.appendChild(para_content);


div_element.appendChild(paragraph);




// Anchor tag

const anchor = document.createElement('a');
anchor.href = 'https://getbootstrap.com/docs/4.0/getting-started/introduction/';

anchor.style.textDecoration = "none";

anchor.style.fontSize = "30px";
const anchor_text = document.createTextNode('Click here');

anchor.appendChild(anchor_text);

div_element.appendChild(anchor);

let h1 = document.getElementById('heading-text');

function hideText(){
   

    h1.style.display = "none";
}

function showText(){
    h1.style.display = "block";
    h1.innerText = "I am Back"
}

function myFunction(){
    h1.innerHTML = "This is a heading";
    h1.style.color = "red";
    h1.style.background = "black";
    document.getElementById('para1').innerText = "Lorem Ipsum"
}

setTimeout(myFunction, 4000)








