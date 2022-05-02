// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
for (let i = 1; i <= 100; i++) {
    const element = i;
    const div = document.createElement(`div`);
    const container = document.querySelector(`div.container`)
    div.classList.add(`box`);

    if (element % 3 == 0 && element % 5 == 0) {
        div.append(`FizzBuzz`)
        container.append(div)
    } else if (element % 3 == 0) {
        div.append(`Fizz`)
        container.append(div)
    } else if (element % 5 == 0) {
        div.append(`Buzz`)
        container.append(div)
    } else {
        div.append(element)
        container.append(div)
    }
}


// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.