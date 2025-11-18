console.log("chrome extension is ready to go"); 

let words = document.getElementsByTagName('p');


for (elt of words) {
    elt.style['fontSize'] = '12em';
    elt.style['color'] = "blue";

    let text = elt.textContent;
    let newText = text.replace(/[A-Za-z]/g, 'e');
    elt.textContent = newText;
}


let body = document.body; 
body.style.backgroundColor = '#FFFFFF';

