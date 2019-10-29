class Booking {
    constructor() {
        this.button = document.getElementById("check");
        this.canvas = document.getElementById("signature");
        this.minute;
        this.second;
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
            this.second = 59;
            this.i = 0;

            sessionStorage.setItem("Counter", this.i);
            sessionStorage.setItem("Minute", this.minute);
            sessionStorage.setItem("Second", this.second);
            this.checkBookingStatus();
        });
    }
    
    checkBookingStatus() {
        this.startLocation = sessionStorage.getItem("BookStatus");    
        
        if (this.startLocation) {
            this.managingBooking();
        }
    }

    managingBooking() {
        this.minute = sessionStorage.getItem("Minute");
        this.second = sessionStorage.getItem("Second");
        this.i = sessionStorage.getItem("Counter");
        
        //Cacher bouton et canvas
        this.button.style.display = "none";
        this.canvas.style.display = "none";
        
        //Afficher la réservation
        document.getElementById("booking").style.display = "block";
        
        //Gérer la réservation
        this.managingTimer();
        this.displayDetails();
    }

    managingTimer() {
        let countdownInterval = setInterval(()=> {
            this.second--;
            if (this.second < 0 ) { //Quand une minute s'écoule
                this.second = 59;
                this.minute--;
                this.i++;
                sessionStorage.setItem("Counter", this.i);
            }

            if (this.second < 10) { //Gerer le bon affichage des secondes 
                this.second = '0' + this.second;
            }
                    
            if (this.i > 19) { //Quand 20minutes se sont écoulées
                //Fin de la reservation
                this.bookChecked = false
                this.startLocation = false;
                
                clearInterval(countdownInterval);
                sessionStorage.setItem("BookStatus", this.bookChecked);
                document.getElementById("booking").style.display = "none";
            } else {
                //J'affiche le Timer
                sessionStorage.setItem("Minute", this.minute);
                sessionStorage.setItem("Second", this.second);
                this.displayCounter();
            }
        }, 1000);
    }
    
    displayCounter() {
        this.minute = sessionStorage.getItem("Minute");
        this.second = sessionStorage.getItem("Second");
        document.getElementById("bookingTimer").textContent = " " + this.minute + "min " + this.second + "s";
    }
    
    displayDetails() {
        //Afficher informations de l'utilisateur
        let name = localStorage.getItem("Name");
        let firstName = localStorage.getItem("First-Name");
        let address = sessionStorage.getItem("Address");
        
        document.getElementById("bookingAddress").textContent = address;
        document.getElementById("bookingName").textContent = name + " " + firstName;
    }
}