const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número: ', (numero1) => {
    rl.question('Ingrese el segundo número: ', (numero2) => {
        const suma = parseFloat(numero1) + parseFloat(numero2);
        console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
        rl.close();
    });
});