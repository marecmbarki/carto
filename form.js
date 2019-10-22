class Form {
    constructor() {
        this.sendForm = document.querySelector('input[type="submit"]');
        this.canvas = document.getElementById("signature");
        this.nameForm = document.getElementById("form_name").value;
        this.firstNameForm = document.getElementById("form_first_name").value;
    }
    
    load() {
        //Evenement clique formulaire
        this.sendForm.addEventListener("click", ()=> {
            if (this.nameForm != "" && this.firstNameForm != "") {
                this.nameForm = document.getElementById("form_name").value;
                this.firstNameForm = document.getElementById("form_first_name").value;

                localStorage.setItem("Name", this.nameForm);
                localStorage.setItem("First-Name", this.firstNameForm);
                
                this.canvas.style.display = "block";
                
                const signature = new Sign();
                
                signature.canvasCreate();
            }
        });
    }
}