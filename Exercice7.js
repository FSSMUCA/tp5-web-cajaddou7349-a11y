function verifierMotDePasse(mdp) {
    
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else {
        return false;
    }
}

let motDePasse = prompt("Entrez votre mot de passe :");

if (verifierMotDePasse(motDePasse)) {
   aleart("Mot de passe valide");
} else {
   aleart("Mot de passe non valide");
}
