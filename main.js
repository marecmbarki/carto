
const mapCont = new Map();
const nameForm = document.getElementById("form_name").value;
const firstNameForm = document.getElementById("form_first_name").value;
const sendForm = document.querySelector('input[type="submit"]');


//Evenement clique formulire
sendForm.addEventListener("click", function() {
    localStorage.setItem("Name", nameForm);
    localStorage.setItem("First-Name", firstNameForm);
});

mapCont.load();
const slider = new Slider();
slider.start();

slider.load();






//CANVAS
/*let monCanvas = document.getElementById("signature");
let ctx = monCanvas.getContext('2d');

//Création du champs
ctx.fillStyle = "grey";
ctx.fillRect(0,0,200,50);*/

/*monCanvas.addEventListener("mousedown", function() {
    //beginpath()
});

monCanvas.addEventListener("mousemove" function(e) {
    //dessine jusque à la position de la souris
})

monCanvas.addEventListener("mouseup", function() {
    //si j'arrete le click, je peux valider si j'ai écrit quelque chose(ex: si mousedown = true)
});
//console.log(localStorage.getItem("test"));*/