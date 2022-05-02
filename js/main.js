for (let i = 1; i <= 100; i++) {
    const element = i;
    const div = document.createElement(`div`);
    const container = document.querySelector(`div.container`)

    if (element % 3 == 0 && element % 5 == 0) {
        div.append(`FizzBuzz`)
        div.classList.add(`box`, `bg_red`)
        container.append(div)
    } else if (element % 3 == 0) {
        div.append(`Fizz`)
        div.classList.add(`box`, `bg_green`)
        container.append(div)
    } else if (element % 5 == 0) {
        div.append(`Buzz`)
        div.classList.add(`box`, `bg_yellow`)
        container.append(div)
    } else {
        div.append(element)
        div.classList.add(`box`, `bg_blu`)
        container.append(div)
    }
}