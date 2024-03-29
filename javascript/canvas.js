class Sign {
    constructor() {
        // Variables :
        this.color = "#000000";
        this.painting = false;
        this.started = false;
        this.width_brush = 2;
        this.canvas = document.getElementById("signature");
        this.cursorX, this.cursorY;
        this.context = this.canvas.getContext('2d');
        this.button = document.getElementById("check");
        // Trait arrondi :
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.startSigning();
        this.stopSigning();
        this.signing();
    }
    canvasCreate() {
        this.context.fillStyle = "rgb(179,200,158)";
        this.context.fillRect(0,0,600,300);
    }
    
    startSigning() {
        
        this.canvas.addEventListener("touchstart", (e)=> {
            this.firstTouch();
            // Coordonnées du touch :
            this.cursorX = (e.touches[0].pageX - rectangle.left);
            this.cursorY = (e.touches[0].pageY - rectangle.top);
        });
        
        // Click souris enfoncé sur le canvas, je dessine :
        this.canvas.addEventListener("mousedown", (e)=> {
            this.firstTouch();
            // Coordonnées de la souris :
            this.cursorX = (e.pageX - rectangle.left);
            this.cursorY = (e.pageY - rectangle.top);
        });

    }

    stopSigning() {

        this.canvas.addEventListener("touchend", ()=> {
            this.stopTouching();
        });

        // Relachement du Click sur tout le document, j'arrête de dessiner :
        this.canvas.addEventListener("mouseup", ()=> {
            this.stopTouching();
        });
    }

    signing() {
        
        this.canvas.addEventListener("touchmove", (e)=> {
            
            let rectangle = this.canvas.getBoundingClientRect(e);

            // Si je suis en train de dessiner (click souris enfoncé) :
            if (this.painting) {
                // Set Coordonnées de la souris :
                this.cursorX = (e.touches[0].pageX - rectangle.left) - 2; // 10 = décalage du curseur
                this.cursorY = (e.touches[0].pageY - rectangle.top) - 2;
                this.drawLineTouch(e)
            
                //Apparition bouton valider
                this.button.style.display = "block";
            }
        });
       
        // Mouvement de la souris sur le canvas :
        this.canvas.addEventListener("mousemove", (e)=> {
            
            let rectangle = this.canvas.getBoundingClientRect(e);

            // Si je suis en train de dessiner (click souris enfoncé) :
            if (this.painting) {
                // Set Coordonnées de la souris :
                this.cursorX = (e.pageX - rectangle.left) - 2; // 10 = décalage du curseur
                this.cursorY = (e.pageY - rectangle.top) - 2;
                this.drawLine(e)
            
                //Apparition bouton valider
                this.button.style.display = "block";
            }
        });
    }
    
    // Fonction qui dessine une ligne :
    
    drawLineTouch(e) {
        
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width_brush;

        // Si c'est le début, j'initialise
        if (!this.started) {
            this.drawlineInit();
        }
        // Sinon je dessine
        else {
            const rect = this.canvas.getBoundingClientRect(e);

            const x = (e.touches[0].clientX - rect.left) * (this.canvas.width / rect.width);
            const y = (e.touches[0].clientY - rect.top) * (this.canvas.height / rect.height);

            
            console.log(x, y);
            this.context.lineTo(x, y);
            this.context.stroke();
        }

    }

    drawLine(e) {
        
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width_brush;

        // Si c'est le début, j'initialise
        if (!this.started) {
            this.drawlineInit();
        }
        // Sinon je dessine
        else {
            this.context.lineTo(e.offsetX, e.offsetY);
            this.context.stroke();
        }

    }

    firstTouch() {
        this.painting = true;
        let rectangle = this.canvas.getBoundingClientRect(e);
    }

    stopTouching() {
        this.painting = false;
        this.started = false;
    }

    drawlineInit() {
        // Je place mon curseur pour la première fois :
        this.context.moveTo(this.cursorX, this.cursorY);
        this.context.beginPath();
        this.started = true;
    }
}
