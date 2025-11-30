let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sommePairs += i;
    } else {
        sommeImpairs += i;
    }
}

alert("Somme des nombres pairs entre 1 et 50 :", sommePairs);
alert("Somme des nombres impairs entre 1 et 50 :", sommeImpairs);
