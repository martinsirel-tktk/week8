const fNameSpan = document.querySelector("#fName");
const lNameSpan = document.querySelector("#lName");
const ageSpan = document.querySelector("#age");
const emailSpan = document.querySelector("#email");

window.onload = () => {

    fetch("profile.json")
        .then(response => response.json())
        .then(data => {

            fNameSpan.textContent = data.nimi;
            lNameSpan.textContent = data.perekonnanimi;
            ageSpan.textContent = data.vanus;
            emailSpan.textContent = data.email;

        })

};