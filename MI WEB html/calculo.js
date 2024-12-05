// Escucha el evento de clic en el botón "Calcular"
document.getElementById('calcular').addEventListener('click', () => {
    // Obtiene los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;

    let resultado;

    // Realiza la operación seleccionada
    switch (operacion) {
        case 'sumar':
            resultado = numero1 + numero2;
            break;
        case 'restar':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            resultado = numero2 !== 0 ? numero1 / numero2 : 'Error: División entre cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Muestra el resultado
    document.getElementById('resultado').textContent = resultado;
});