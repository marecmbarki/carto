
const mapCont = new Map();
const sendForm = document.querySelector('input[type="submit"]');


mapCont.load();
const slider = new Slider();
slider.start();

slider.load();

const canvas = document.getElementById("signature");

//Evenement clique formulire
sendForm.addEventListener("click", function() {
    const nameForm = document.getElementById("form_name").value;
    const firstNameForm = document.getElementById("form_first_name").value;

    localStorage.setItem("Name", nameForm);
    localStorage.setItem("First-Name", firstNameForm);
    canvas.style.display = "block";

    const signature = new Sign();

    signature.canvasCreate();
});

//Timer

let timer = document.getElementById("bookingTimer");
let minute = 19;
let seconde = 59;
let i = 0;
let countdownInterval = setInterval(()=> {        
    seconde--;
    if (seconde < 0 ) {
        seconde=59;
        minute--;
        i++;
    }

    if (seconde < 10) {
        seconde = '0' + seconde;
    }
        
    if (i > 19)
    {
        clearInterval(countdownInterval);
    }
    else {
        console.log(minute +"et" + seconde);
    }
}, 10);
