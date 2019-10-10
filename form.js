class Form {
    constructor() {
        this.sendForm = document.querySelector('input[type="submit"]');
        this.nameForm = document.getElementById("form_name").value;
        this.firstNameForm = document.getElementById("form_first_name").value;
        this.canvas = document.getElementById("signature");
    }
    
    load() {
        //Evenement clique formulire
        this.sendForm.addEventListener("click", ()=> {    
                localStorage.setItem("Name", this.nameForm);
                localStorage.setItem("First-Name", this.firstNameForm);
                this.canvas.style.display = "block";

                const signature = new Sign();

                signature.canvasCreate();
        });
    }
}