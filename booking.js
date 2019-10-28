class Booking {
    constructor() {
        this.button = document.getElementById("check");
        this.canvas = document.getElementById("signature");
        this.minute;
        this.seconde;
        this.i;
        this.bookChecked;
        this.startLocation;
    }


    load() {
        this.button.addEventListener("click", ()=> {
            this.bookChecked = true;
            sessionStorage.setItem("BookStatus", this.bookChecked);
            this.startLocation = sessionStorage.getItem("BookStatus");
            this.minute = 19;
            this.seconde = 59;
            this.i = 0;

            sessionStorage.setItem("Compteur", this.i);
            sessionStorage.setItem("Minute", this.minute);
            sessionStorage.setItem("Seconde", this.seconde);
            console.log("methode load ", this.i);
            this.check();
        });
    }
    
    check() {
            this.startLocation = sessionStorage.getItem("BookStatus");
            
            console.log("methode check", this.i);
            if (this.startLocation) {
                this.valid();
            }
    }

    valid() {
        //Cacher bouton et canvas
            this.button.style.display = "none";
            this.canvas.style.display = "none";
            //Afficher les détails
            document.getElementById("booking").style.display = "block";
            //Afficher timer
            this.minute = sessionStorage.getItem("Minute");
            this.seconde = sessionStorage.getItem("Seconde");
            this.i = sessionStorage.getItem("Compteur");
            let countdownInterval = setInterval(()=> {
                this.seconde--;
                if (this.seconde < 0 ) {
                    this.seconde = 59;
                    this.minute--;
                    this.i++;
                    console.log(this.i);
                    sessionStorage.setItem("Compteur", this.i);
                }

                if (this.seconde < 10) {
                    this.seconde = '0' + this.seconde;
                }
                    
                if (this.i > 19)
                {
                    console.log("i > 19 donc on a finit le decompte et on arrete", this.i);
                    clearInterval(countdownInterval);
                    this.bookChecked = false
                    this.startLocation = false;
                    sessionStorage.setItem("BookStatus", this.bookChecked);
                    document.getElementById("booking").style.display = "none";
                }
                else {
                    //Je les affiche
                    sessionStorage.setItem("Minute", this.minute);
                    sessionStorage.setItem("Seconde", this.seconde);
                    this.displayCounter();
                }
            }, 1);
            
            this.displayDetails();
        }

    displayCounter() {
        this.minute = sessionStorage.getItem("Minute");
        this.seconde = sessionStorage.getItem("Seconde");
        document.getElementById("bookingTimer").textContent = " " + this.minute + "min " + this.seconde + "s";
    }
    
    displayDetails() {
        //Afficher informtions de l'utilisateur
        let name = localStorage.getItem("Name");
        let firstName = localStorage.getItem("First-Name");
        let address = sessionStorage.getItem("Adresse");
        
        document.getElementById("bookingAddress").textContent = address;
        document.getElementById("bookingName").textContent = name + " " + firstName;
    }

}