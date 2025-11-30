function totalAvecRemise(total, remise) {
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}

let totalHT = parseFloat(prompt("Entrez le total HT :"));
let remise = parseFloat(prompt("Entrez la remise en % :"));

let resultat = totalAvecRemise(totalHT, remise);
alert("Le total final est : " + resultat);
