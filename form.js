class Form {
    constructor() {
        this.sendForm = document.querySelector('input[type="submit"]');
        this.canvas = document.getElementById("signature");
    }
    
    load() {
        //Evenement clique formulaire
        this.sendForm.addEventListener("click", ()=> {
            const nameForm = document.getElementById("form_name").value;
            const firstNameForm = document.getElementById("form_first_name").value;
    
            if(nameForm != "" && firstNameForm != "") {
                localStorage.setItem("Name", nameForm);
                localStorage.setItem("First-Name", firstNameForm);
                this.canvas.style.display = "block";
                
                const signature = new Sign();
                
                signature.canvasCreate();
            }
        });
    }
}