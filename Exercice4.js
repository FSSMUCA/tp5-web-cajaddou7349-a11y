let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
        alert("Three");
    } else {
       alert(i);
    }
}
