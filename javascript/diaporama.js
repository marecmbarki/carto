class Slider {
    constructor() {
        this.slides = document.querySelectorAll("#slides > LI");
        this.i = 0;
        this.slideInterval = null;
        this.play = document.getElementById("play");
        this.pause = document.getElementById("pause");
        this.leftScroll = document.getElementById("left_arrow");
        this.rightScroll = document.getElementById("right_arrow");
    }
    
    start() {
        this.slideInterval = setInterval(this.nextSlide.bind(this),5000);
    }

    stop() {
        clearInterval(this.slideInterval);
    }
    
    //Deffiler le Diaporama
    nextSlide() {
        this.slides[this.i].className = 'slide';
        this.i = (this.i + 1) % this.slides.length;
        this.slides[this.i].className = 'slide_showing';

    }

    //Boutons du Diaporama
    load() {
        this.play.addEventListener("click", ()=> { //play
            this.start();
            this.play.style.display = "none";
            this.pause.style.display = "block";
        });
        
        this.pause.addEventListener("click", ()=> { //pause
            this.stop();
            this.play.style.display = "block";
            this.pause.style.display = "none";
        });
    
        this.leftScroll.addEventListener("click", ()=> { //image qui précéde
            this.slides[this.i].className = 'slide';
            if (this.i === 0)
            {
                this.i = 3;
            }
            else {
                this.i -= 1;
            }
            this.slides[this.i].className = 'slide_showing';
        });
    
        this.rightScroll.addEventListener("click", ()=> { //imge qui suit
            this.nextSlide();
        })
    }
}