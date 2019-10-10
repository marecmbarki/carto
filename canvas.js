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
        this.mousedown();
        this.mouseup();
        this.mousemove();
        this.drawLine();
    }
    canvasCreate() {
        this.context.fillStyle = "rgb(179,200,158)";
        this.context.fillRect(0,0,600,300);
    }
    
    mousedown() {
        
        this.canvas.addEventListener("touchstart", (e)=> {
            this.painting = true;
            let rectangle = this.canvas.getBoundingClientRect(e);

            // Coordonnées de la souris :
            console.log(e.touches[0]);
            this.cursorX = (e.touches[0].pageX - rectangle.left);
            this.cursorY = (e.touches[0].pageY - rectangle.top);
        });
        
        // Click souris enfoncé sur le canvas, je dessine :
        this.canvas.addEventListener("mousedown", (e)=> {
            this.painting = true;
            let rectangle = this.canvas.getBoundingClientRect(e);

            // Coordonnées de la souris :
            this.cursorX = (e.pageX - rectangle.left);
            this.cursorY = (e.pageY - rectangle.top);
        });

    }

    mouseup() {

        this.canvas.addEventListener("touchend", ()=> {
            this.painting = false;
            this.started = false;
        });

        // Relachement du Click sur tout le document, j'arrête de dessiner :
        this.canvas.addEventListener("mouseup", ()=> {
            this.painting = false;
            this.started = false;
        });
    }

    mousemove() {
        
        this.canvas.addEventListener("touchmove", (e)=> {
            
            let rectangle = this.canvas.getBoundingClientRect(e);

            // Si je suis en train de dessiner (click souris enfoncé) :
            if (this.painting) {
                // Set Coordonnées de la souris :
                this.cursorX = (e.touches[0].pageX - rectangle.left) - 2; // 10 = décalage du curseur
                this.cursorY = (e.touches[0].pageY - rectangle.top) - 2;
                this.drawLine(e)
            
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
    drawLine(e) {
        
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width_brush;

        // Si c'est le début, j'initialise
        if (!this.started) {
            // Je place mon curseur pour la première fois :
            this.context.moveTo(this.cursorX, this.cursorY);
            this.context.beginPath();
            this.started = true;
        }
        // Sinon je dessine
        else {
            this.context.lineTo(e.offsetX, e.offsetY);
            this.context.stroke();
        }

    }
}
