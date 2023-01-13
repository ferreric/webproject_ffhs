/*
[...document.querySelectorAll('.button-row>button')]
    .map(node => {
        let color = [...node.classList] // spreading verwandelt nodelist in array
            .find(className => className.startsWith('change-to-'))
            .substr(10)
        node.addEventListener('click', () => {
            article.classList = [...article.classList]
                .filter(className => !className.startsWith('bg-'))
            article.classList.add('bg-' + color)
        })
    })*/
const buttons = [...document.querySelectorAll('.button-row > button')]

for(let i = 0; i < buttons.length; i++) {
    const article = buttons[i].closest('.article')
    const buttonClasses = [...buttons[i].classList]
    let color = ''
    for (let j = 0; j < buttonClasses.length; j++) {
        if (buttonClasses[j].startsWith('change-to-')) {
            color = buttonClasses[j].substr(10)
        }
    }
    console.log(color)
    buttons[i].addEventListener('click', () => {
        article.classList = [...article.classList]
            .filter(className => !className.startsWith('bg-'))
        article.classList.add('bg-' + color)
    })
}