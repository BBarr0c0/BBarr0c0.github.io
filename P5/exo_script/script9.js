function checkAge(age) {

    if (age < 18) {
        console.log("Vous êtes mineur")

    } else if (age >= 18 && age <= 65) {
        console.log("Vous êtes majeur")

    } else {
        console.log("Vous êtes senior")
    }

};

checkAge(15); // Affiche "Vous êtes mineur."
checkAge(30); // Affiche "Vous êtes majeur."
checkAge(75); // Affiche "Vous êtes senior."