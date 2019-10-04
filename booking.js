class Booking {
    constructor() {
        this.button = document.getElementById("check");
        this.canvas = document.getElementById("signature");
        this.minute = 19;
        this.seconde = 59;
        this.i = 0;
        this.address = localStorage.getItem("Adresse");
        this.name = localStorage.getItem("Name");
        this.firstName = localStorage.getItem("First-Name");
    }
    
    load() {
            this.button.addEventListener("click", ()=> {
            //Cacher bouton et canvas
            this.button.style.display = "none";
            this.canvas.style.display = "none";
            //Afficher les détails
            document.getElementById("booking").style.display = "block";
            //Afficher timer
            let countdownInterval = setInterval(()=> {        
                this.seconde--;
                if (this.seconde < 0 ) {
                    this.seconde=59;
                    this.minute--;
                    this.i++;
                }

                if (this.seconde < 10) {
                    this.seconde = '0' + this.seconde;
                }
                    
                if (this.i > 19)
                {
                    clearInterval(countdownInterval);
                }
                else {
                document.getElementById("bookingTimer").textContent = " " + this.minute + "min " + this.seconde + "s"; 
                }
                
            }, 1000);
        
            //Afficher infos
            document.getElementById("bookingAddress").textContent = this.address;
            document.getElementById("bookingName").textContent = this.name + " " + this.firstName;
        });
    }
}