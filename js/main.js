for (let i = 1; i <= 100; i++) {
    const element = i;
    const box = document.createElement(`div`);
    const container = document.querySelector(`div.container`);
    box.classList.add(`box`)
    if (element % 3 == 0 && element % 5 == 0) {
        box.append(`FizzBuzz`)
        box.classList.add(`bg_red`)
        container.append(box)
    } else if (element % 3 == 0) {
        box.append(`Fizz`)
        box.classList.add(`bg_green`)
        container.append(box)
    } else if (element % 5 == 0) {
        box.append(`Buzz`)
        box.classList.add(`bg_yellow`)
        container.append(box)
    } else {
        box.append(element)
        box.classList.add(`bg_blu`)
        container.append(box)
    }
}