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
            //Verfier si les champs du formulaire sont remplis
            if (document.getElementById("form_name").value != "" && document.getElementById("form_first_name").value != "") {
                this.nameForm = document.getElementById("form_name").value;
                this.firstNameForm = document.getElementById("form_first_name").value;

                localStorage.setItem("Name", this.nameForm);
                localStorage.setItem("First-Name", this.firstNameForm);
                
                //Afficher le canvas si le le formulaire est soumis correctement
                this.canvas.style.display = "block";
                
                const signature = new Sign();
                
                signature.canvasCreate();
            }
        });
    }
}