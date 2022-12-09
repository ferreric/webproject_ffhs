const TOKEN = "Bearer 99|sok4NQmnQQ8TyOnty4v4SCdBV0LUzTlP1tL67KN4";
//html trimming
const getProperNode = (html) => {
    const templ = document.createElement('template');
    templ.innerHTML = html.trim();
    return templ.content.firstChild.cloneNode(true);
}

//like button
let likesCount
const like = (type, id) => {
    console.log(
        `https://web-modules.dev/api/v1/like?type=${type}&id=${id}`
    );
    fetch(`https://web-modules.dev/api/v1/like?type=${type}&id=${id}`, {
        method: "POST",
        //mode: "no-cors",
        headers: {
            Authorization: TOKEN
        },
    }).then(r => r.json())
        .then(json => {
            console.log(json)
            likesCount = json.amount
        })
        .catch(er => {
            console.error(er);
        })
}
//const likeTestimonial = document.getElementById('like-testimonial');
//likeTestimonial.addEventListener('click', like('testimonial', ${data.id}))
//products loading start
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

    const productTarget = document.querySelector('.products')
    const getProducts = (amount) => {
        fetch(`https://web-modules.dev/api/v1/products/${amount}`, {
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

//testimonials loading
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
          <p class="article-child"><button id="like-testimonial" onclick="like('testimonial', ${data['id']})">👍 ${data.likes_count}</button></p>
      </article>`)
        testimonialTarget.appendChild(tCard)
    }

    const testimonialTarget = document.querySelector('.testimonials')
    const getTestimonials = (amount) => {
        fetch(`https://web-modules.dev/api/v1/testimonials/${amount}`, {
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

