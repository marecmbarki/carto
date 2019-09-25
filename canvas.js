
class Sign {
    constructor() {
        // Variables :
        this.color = "#000";
        this.painting = false;
        this.started = false;
        this.width_brush = 1;
        this.canvas = document.getElementById("signature");
        this.cursorX, this.cursorY;
        this.context = this.canvas.getContext('2d');
        // Trait arrondi :
        this.context.lineJoin = 'round';
        this.context.lineCap = 'round';
        this.mousedown();
        this.mouseup();
        this.mousemove();
        this.drawLine();
    }
    canvasCreate() {
        this.context.fillRect(0,0,200,50);
    }
    
    mousedown() {
        let that = this;
        
        // Click souris enfoncé sur le canvas, je dessine :
        this.canvas.mousedown(function (e) {
            that.painting = true;

            // Coordonnées de la souris :
            that.cursorX = (e.pageX - this.offsetLeft);
            that.cursorY = (e.pageY - this.offsetTop);

        });

    }

    mouseup() {
        let that = this.

        // Relachement du Click sur tout le document, j'arrête de dessiner :
        this.canvas.mouseup(function () {
            that.painting = false;
            that.started = false;
        });
    }

    mousemove() {
        let that = this;
        
        // Mouvement de la souris sur le canvas :
        this.canvas.mousemove(function (e) {
            // Si je suis en train de dessiner (click souris enfoncé) :
            if (that.painting) {
                // Set Coordonnées de la souris :
                that.cursorX = (e.pageX - this.offsetLeft) - 2; // 10 = décalage du curseur
                that.cursorY = (e.pageY - this.offsetTop) - 2;
                that.drawLine()
            }
        });
    }
    // Fonction qui dessine une ligne :
    drawLine() {
        // Si c'est le début, j'initialise
        if (!this.started) {
            // Je place mon curseur pour la première fois :
            this.context.beginPath();
            this.context.moveTo(this.cursorX, this.cursorY);
            this.started = true;
        }
        // Sinon je dessine
        else {
            this.context.lineTo(this.cursorX, this.cursorY);
            this.context.strokeStyle = this.color;
            this.context.lineWidth = this.width_brush;
            this.context.stroke();
        }

    }
}
