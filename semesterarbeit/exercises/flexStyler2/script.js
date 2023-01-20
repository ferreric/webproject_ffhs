const flexDirectionOptions = new Array ('row', 'row-reverse', 'column', 'column-reverse')
const justifyContentOptions = new Array ('flex-start','flex-end','center','space-between','space-around','space-evenly')
const alignItemsOptions = new Array ('flex-start','flex-end','center','stretch','baseline')
const flexMenu = document.getElementById('select-flex-direction')
const justifyMenu = document.getElementById('select-justify-content')
const alignMenu = document.getElementById('select-align-items')

console.log(flexDirectionOptions)
const fillOptions = (menu, option) => {
    const newOption = document.createElement('option')
    newOption.setAttribute('value', option)
    const text = document.createTextNode(option)
    newOption.appendChild(text)
    menu.appendChild(newOption)
}

fillOptions(flexMenu, flexDirectionOptions[0])