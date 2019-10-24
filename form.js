class Form {
    constructor() {
        this.sendForm = document.querySelector('input[type="submit"]');
        this.canvas = document.getElementById("signature");
        this.nameForm;
        this.firstNameForm;
    }
    
    load() {
        //Evenement clique formulaire
        this.sendForm.addEventListener("click", ()=> {
            if (document.getElementById("form_name").value != "" && document.getElementById("form_first_name").value != "") {
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