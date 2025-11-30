let nombre = Number(prompt("Entrez un nombre :"));

if (nombre < 0) {
    alert("Nombre négatif");
} else {
    if (nombre <= 10) {
        alert("Petit");
    } else {
        if (nombre <= 50) {
          alert("Moyen");
        } else {
            if (nombre > 100) {
               alert("Très grand");
            } else {
            alert("Grand");
            }
        }
    }
}
