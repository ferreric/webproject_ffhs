//Schritt 1 - Options

const flexDirectionOptions = new Array ('row', 'row-reverse', 'column', 'column-reverse')
const justifyContentOptions = new Array ('flex-start','flex-end','center','space-between','space-around','space-evenly')
const alignItemsOptions = new Array ('flex-start','flex-end','center','stretch','baseline')
const flexMenu = document.getElementById('select-flex-direction')
const justifyMenu = document.getElementById('select-justify-content')
const alignMenu = document.getElementById('select-align-items')

console.log(flexDirectionOptions)
const fillFlexOptions = (option) => {
    const newOption = document.createElement('option')
    newOption.setAttribute('value', option)
    const text = document.createTextNode(option)
    newOption.appendChild(text)
    flexMenu.appendChild(newOption)
}

flexDirectionOptions.forEach(fillFlexOptions)
const fillJustifyContentOptions = (option) => {
    const newOption = document.createElement('option')
    newOption.setAttribute('value', option)
    const text = document.createTextNode(option)
    newOption.appendChild(text)
    justifyMenu.appendChild(newOption)
}

justifyContentOptions.forEach(fillJustifyContentOptions)
const fillAlignItemsOptions = (option) => {
    const newOption = document.createElement('option')
    newOption.setAttribute('value', option)
    const text = document.createTextNode(option)
    newOption.appendChild(text)
    alignMenu.appendChild(newOption)
}

alignItemsOptions.forEach(fillAlignItemsOptions)

//Schritt 2 - Change & Click Events

const flexContainer = document.getElementById('flex-container')
flexMenu.addEventListener('change', (e) =>{
})

const formWrap = document.querySelector('.form-wrap')

formWrap.addEventListener('change', (e) => { // one listener. event propagates.
    console.log('event thrown ' + e)
    flexContainer.style.flexDirection = flexDirectionOptions[flexMenu.options.selectedIndex]
    flexContainer.style.justifyContent = justifyContentOptions[justifyMenu.options.selectedIndex]
    flexContainer.style.alignItems = alignItemsOptions[alignMenu.options.selectedIndex]
})

const checkBoxWrap = document.getElementById('chk-wrap')
checkBoxWrap.addEventListener('click', (e) => {
    console.log('checkbox ticked: ' + checkBoxWrap.checked)
    checkBoxWrap.checked ? (flexContainer.style.flexWrap = 'wrap') : (flexContainer.style.removeProperty('flex-wrap'))
})