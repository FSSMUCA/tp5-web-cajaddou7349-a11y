function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

function sommeRecursive(n) {
    if (n === 0) {
        return 0;  
    } else {
        return n + sommeRecursive(n - 1); 
    }
}
let n = parseInt(prompt("Entrez une valeur pour n :"));
alert("Somme (version boucle) = " + sommeIterative(n));
alert("Somme (version récursive) = " + sommeRecursive(n));

