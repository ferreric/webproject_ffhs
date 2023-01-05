const TOKEN = "Bearer 99|sok4NQmnQQ8TyOnty4v4SCdBV0LUzTlP1tL67KN4";

//*********************************************//
// html trimming

const getProperNode = (html) => {
    const templ = document.createElement('template');
    templ.innerHTML = html.trim();
    return templ.content.firstChild.cloneNode(true);
}

//*********************************************//
// products loading
//*********************************************//
// template for product cards

const productTarget = document.querySelector('.products')
function createProductCard(data) {
    const pCard = getProperNode(`
        <article>
      <header class="sku article-child">
          ${data['sku']}
      </header>
      <div class="name-price-container">
        <h2 class="article-child">${data['name']}</h2>
        <p class="product-price article-child">${data['price']} CHF</p>
      </div>
      <p class="ProductDescription article-child">${data['description']}</p>
      <p class="product-category article-child">${data.category['name']}</p>
    </article>`)
    productTarget.appendChild(pCard)
}

//*********************************************//
// products loading
//*********************************************//
// API call for products

const getProducts = () => {
    fetch(`https://web-modules.dev/api/v1/products/12`, {
        headers: {
            Authorization: TOKEN
        }
    })
        .then(result => result.json())
        .then(json => {
            console.log(json)
            json.products.forEach(function (product) {
                createProductCard(product)
            })
        })
        .catch(e => console.error())
}

//*********************************************//
// testimonials loading
//*********************************************//
// testimonial card template

const testimonialTarget = document.querySelector('.testimonials')
function createTestimonialCard(data) {
    let testimonialId = data['id'];
    const tCard = getProperNode(`
        <article>
          <figure>
              <img src=${data.avatar} alt=${data.lastname}>
          </figure>
          <p class="TestimonialName article-child">${data.firstname + ' ' + data.lastname}</p>
          <p class="TestimonialCompany article-child">${data.company}</p>
          <blockquote>${data.quote}</blockquote>
          <p class="article-child">
            <button class="like-testimonial" onclick='like("testimonial", ${testimonialId}, this)'>👍 ${data.likes_count}</button>
          </p>
      </article>`)
    testimonialTarget.appendChild(tCard)
}

//*********************************************//
// testimonials loading
//*********************************************//
// testimonial API call

const getTestimonials = () => {
    fetch(`https://web-modules.dev/api/v1/testimonials/12`, {
        headers: {
            Authorization: TOKEN
        }
    })
        .then(result => result.json())
        .then(json => {
            console.log(json)
            json.testimonials.forEach(function (testimonial) {
                createTestimonialCard(testimonial)
            })
        })
        .catch(er => {
            console.error()
        })
}

//update likes count
//const likeTestimonial = document.querySelector('.like-testimonial');
//likeTestimonial.addEventListener('click', like('testimonial', ${data.id}))

//like button
let likesCount
const like = (type, id, likeButton) => {
    console.log(
        `https://web-modules.dev/api/v1/like?type=${type}&id=${id}`
    );
    fetch(`https://web-modules.dev/api/v1/like?type=${type}&id=${id}`, {
        method: "POST",
        headers: {
            Authorization: TOKEN
        },
    }).then(r => r.json())
        .then(json => {
            console.log(json)
            likesCount = json.amount
            likeButton.textContent = `👍 ${likesCount}`
            likeButton.disabled = true
        })
        .catch(er => {
            console.error(er);
            likeButton.disabled = false
        })
}

//*********************************************//
// POST form
//*********************************************//
// feedback POST API call

const form = document.getElementById("feedback-form");
const submitMessage = document.getElementById('feedback-submitted');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the page from reloading upon submission
    fixComment() // replace emtpy comment (undefinied) with empty string
    const formData = new FormData(form); // collect the form data
    console.log(formData)
    const url = 'https://web-modules.dev/api/v1/feedback';

    fetch(url, {
        method: 'POST',
        headers: {
            Authorization: TOKEN
        },
        body: formData
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(`formdata:`)
            console.log(data)
            getRatings()
        }) //display successful submission
        .catch((error) => {
            console.error(error)
        })
    submitMessage.innerHTML = "Vielen Dank für das Feedback!"
    form.remove() // delete the form html
    window.scrollTo(0,0) // prevent surprise repositioning
})

//*********************************************//
// GET feedback data
//*********************************************//
// draws a table with design and components rating

// Initialize the ratings counters
let designRatings = new Array(11);
let componentsRatings = new Array(11);

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
            console.log(`feedback data:`)
            console.log(json)
            console.log(`feedback test (should return 3): ${json.feedbacks[0].rating_design}`)
            json.feedbacks.forEach(function (feedback) {
                designRatings[feedback.rating_design]++;
                componentsRatings[feedback.rating_components]++;
            })
            console.log(`designRatings[1], should return 3: ${designRatings[1]}`)
            console.log(`designRatings:`)
            console.log(designRatings)
            console.log(`componentsRatings:`)
            console.log(componentsRatings)
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
          <tr>
              <th>Bewertungen</th>
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
          <tr>
              <th>Design</th>
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
      </table>`)
    tableTarget.appendChild(ratingTable)
}
