const mapCont = new Map();
const nameForm = document.getElementById("form_name").value;
const firstNameForm = document.getElementById("form_first_name").value;
const sendForm = document.querySelector('input[type="submit"]');

mapCont.load();
//Evenement clique formulire
sendForm.addEventListener("click", function() {
    localStorage.setItem("Name", nameForm);
    localStorage.setItem("First-Name", firstNameForm);
});

    let slides = document.querySelectorAll('#slides .slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide_showing';
    }

    let slideInterval = setInterval(nextSlide,5000);












//CANVAS
/*let monCanvas = document.getElementById("signature");
let ctx = monCanvas.getContext('2d');

//Création du champs
ctx.fillStyle = "grey";
ctx.fillRect(0,0,200,50);*/

monCanvas.addEventListener("mousedown", function() {
    //si je clique, tant que la souris est appuyée ça dessine
});

monCanvas.addEventListener("mouseup", function() {
    //si j'arrete le click, je peux valider si j'ai écrit quelque chose(ex: si mousedown = true)
});
//console.log(localStorage.getItem("test"));