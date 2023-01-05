const nameInput = document.getElementById('feedback-name');
const mailInput = document.getElementById('feedback-email');
const sliderDesign = document.getElementById('feedback-design');
const designValue = document.getElementById('feedback-design-value');
const sliderComponents = document.getElementById('feedback-components');
const componentsValue = document.getElementById('feedback-components-value');
const submitButton = document.querySelector("button");
const nameMessage = document.getElementById('feedback-name-help');
const mailMessage = document.getElementById('feedback-email-help');
// https://stackoverflow.com/questions/24098039/rfc-5322-email-format-validation
const mailPattern = /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)|\[[\t -Z^-~]*])/;

//validate name input
let nameValid = false;
nameInput.addEventListener('input', () => {
    if (nameInput.value.length < 3 || nameInput.value.length > 100){
        nameMessage.innerText = "⚠️ Name nicht zw. 3 und 100 Zeichen";
        nameValid = false
        checkButton()}
    else {
        nameMessage.innerText = "☑️ Name zw. 3 und 100 Zeichen";
        nameValid = true
        checkButton()
    }
})

// validate e-mail address (rfc 5322 applied)
let mailValid = false;
mailInput.addEventListener('input', () => {
    if (!mailInput.value.match(mailPattern) || mailInput.value.length > 200) {
        mailMessage.innerText = '⚠️ Keine gültige E-Mail!';
        mailValid = false;
        checkButton()
    } else {
        mailMessage.innerText = '☑️ Gültige E-Mail-Adresse';
        mailValid = true;
        checkButton()
    }
});

// print slider values
//
// validation not included!!4
// user could alter range in browser tools!!

let updateDesign = () => designValue.innerHTML = sliderDesign.value;
sliderDesign.addEventListener('input', updateDesign);
updateDesign();

let updateComponents = () => componentsValue.innerHTML = sliderComponents.value;
sliderComponents.addEventListener('input', updateComponents);
updateComponents();

//enable button if name & email are valid
let enableButton = () => submitButton.disabled = false;
let disableButton = () =>  submitButton.disabled = true;
let checkButton = () => {
    nameValid && mailValid ? enableButton() : disableButton()
}

const commentTextArea = document.getElementById('feedback-comment')
const fixComment = () => {
    if (commentTextArea.innerText === '') {
        commentTextArea.innerText = "EMPTY"
    }
}

const sliderValid = () => {
    return (designValue.innerHTML >= 1 && designValue.innerHTML <= 10 && componentsValue.innerHTML >= 1 && componentsValue.innerHTML <= 10)
}