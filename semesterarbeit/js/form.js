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


//*********************************************//
// POST form
//*********************************************//
// feedback POST API call

const form = document.getElementById("feedback-form");
const submitMessage = document.getElementById('feedback-submitted')
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the page from reloading upon submission
    if (sliderValid() && nameValid && mailValid) {
        fixComment() // replace empty comment ('') with "EMPTY" to patch error with POST
        const formData = new FormData(form); // collect the form data
        console.log(formData.values().toString(), form)
        const url = 'https://web-modules.dev/api/v1/feedback'
        fetch(url, {
            method: 'POST',
            headers: {
                Authorization: TOKEN
            },
            body: formData
        })
            .then((response) => response.json())
            .then(() => {
                getRatings()
                form.remove() // delete the form html
                submitMessage.innerHTML = "Vielen Dank für das Feedback!<br>So haben die anderen Nutzer abgestimmt. (Anzahl der abgegebenen Feedbacks pro Kategorie und Durchschnittsbewertung.)"
                window.scrollTo(0, 0) // prevent surprise repositioning
            }) //display successful submission
            .catch((error) => {
                console.error(error)
                alert("Das hat leider nicht funktioniert. Bitte versuchen Sie es noch einmal.")
            })
    }
    else {
        alert("Ungültige Werte!") // alert nervt, aber wird nur von hackern getriggert. von daher ist's okay.
    }
})

//*********************************************//
// GET feedback data
//*********************************************//
// draws a table with design and components rating

// Initialize the ratings counters
let designRatings = new Array(11)
let componentsRatings = new Array(11)
let designAvg = 0
let componentsAvg = 0

for (let i = 1; i <= 10; i++) {
    designRatings[i] = 0;
    componentsRatings[i] = 0
}

const getRatings = () => {
    fetch(`https://web-modules.dev/api/v1/feedback`, {
        headers: {
            Authorization: TOKEN
        }
    })
        .then(result => result.json())
        .then(json => {
            json.feedbacks.forEach(function (feedback) {
                designRatings[feedback.rating_design]++;
                designAvg += (feedback.rating_design / json.amount);
                componentsRatings[feedback.rating_components]++;
                componentsAvg += (feedback.rating_components / json.amount);
            })
            drawTable()
        })
        .catch(er => {
            console.error(er)
        })
}

const tableTarget = document.querySelector('.content')
function drawTable() {
    const ratingTable = getProperNode(`
        <table>
            <thead>
              <tr>
                  <th>Bewertungen</th>
                  <th>Ø</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <th>Design</th>
                  <td>${designAvg.toFixed(2)}</td>
                  <td>${designRatings[1]}</td>
                  <td>${designRatings[2]}</td>
                  <td>${designRatings[3]}</td>
                  <td>${designRatings[4]}</td>
                  <td>${designRatings[5]}</td>
                  <td>${designRatings[6]}</td>
                  <td>${designRatings[7]}</td>
                  <td>${designRatings[8]}</td>
                  <td>${designRatings[9]}</td>
                  <td>${designRatings[10]}</td>
              </tr>
              <tr>
                  <th>Funktionsumfang</th>
                  <td>${componentsAvg.toFixed(2)}</td>
                  <td>${componentsRatings[1]}</td>
                  <td>${componentsRatings[2]}</td>
                  <td>${componentsRatings[3]}</td>
                  <td>${componentsRatings[4]}</td>
                  <td>${componentsRatings[5]}</td>
                  <td>${componentsRatings[6]}</td>
                  <td>${componentsRatings[7]}</td>
                  <td>${componentsRatings[8]}</td>
                  <td>${componentsRatings[9]}</td>
                  <td>${componentsRatings[10]}</td>
              </tr>
          </tbody>
        </table>`)
    tableTarget.appendChild(ratingTable)
}