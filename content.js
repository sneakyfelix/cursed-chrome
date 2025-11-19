console.log("chrome extension is ready to go"); 

// let paragraph = document.getElementsByTagName('p');
let words = document.querySelectorAll(
    'p, h1, h2, h3, h4, h5, h6, span, a, li, blockquote, figcaption, div, section, article, button, label, strong, em, code'
  );
  


for ( let elt of words) {

    elt.style['color'] = "orange";
    elt.style['text-shadow'] = "1px 1px 2px red, 0 0 25px orange, 0 0 5px yellow";
    elt.style['display'] = "inline-block";

    setInterval(function() {
        let randomx = Math.floor(Math.random() * 5) - 2;
        let randomy = Math.floor(Math.random() * 10) - 3;
        elt.style.transform = `translate(${randomx}px, ${randomy}px)`;
    }, 80);

    setInterval(function() {
        let randomfont = Math.floor(Math.random() * 300) - 2;
        elt.style['fontSize'] = `${randomfont}px`;
    }, 2080);

}



let body = document.body; 
body.style.backgroundColor = '#000000';


