const mapCont = new Map();

mapCont.load();
const nameForm = document.getElementById("form_name").value;
const firstNameForm = document.getElementById("form_first_name").value;

if (nameForm != "" && firstNameForm != "") {
    console.log(`Ton nom est ${nameForm} et ton prénom est ${firstNameForm}`);
    document.querySelector('input[type="submit"]').removeAttribute("disabled");
}

localStorage.setItem("test", "bonjour");
console.log(localStorage.getItem("test"));