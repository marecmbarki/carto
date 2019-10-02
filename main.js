
const mapCont = new Map();
const sendForm = document.querySelector('input[type="submit"]');


mapCont.load();
const slider = new Slider();
slider.start();

slider.load();

const canvas = document.getElementById("signature");

//Evenement clique formulire
sendForm.addEventListener("click", ()=> {
    const nameForm = document.getElementById("form_name").value;
    const firstNameForm = document.getElementById("form_first_name").value;
      
    localStorage.setItem("Name", nameForm);
    localStorage.setItem("First-Name", firstNameForm);
    canvas.style.display = "block";


    const signature = new Sign();

    signature.canvasCreate();
});

//Infos
const button = document.getElementById("check");
button.addEventListener("click", ()=> {
    //Afficher les détails
    document.getElementById("booking").style.display = "block";
    //Afficher timer
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
           document.getElementById("bookingTimer").textContent = " " + minute + "min " + seconde + "s"; 
        }
        
    }, 10);
    
    //Afficher infos
    const address = localStorage.getItem("Adresse");
    const name = localStorage.getItem("Name");
    const firstName = localStorage.getItem("First-Name");

    document.getElementById("bookingAddress").textContent = address;
    document.getElementById("bookingName").textContent = name + " " + firstName;
});

