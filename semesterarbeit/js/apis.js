const token = "Bearer 99|sok4NQmnQQ8TyOnty4v4SCdBV0LUzTlP1tL67KN4";
const getProperNode = (html) => {
    const templ = document.createElement('template');
    templ.innerHTML = html.trim();
    return templ.content.firstChild.cloneNode(true);
}
//products loading start
function createProductCard(data){
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
            Authorization: token
        }
    })
        .then(result => result.json())
        .then( json => {
            console.log(json)
            json.products.forEach(function (product){
                createProductCard(product)
                })
            })
        .catch( er => {
            console.error()
        })
}
//products loading end

//testimonials loading start
function createTestimonialCard(data){
    const tCard = getProperNode(`
        <article>
          <figure>
              <img src=${data.avatar} alt=${data.firstname + ' ' + data.lastname}>
          </figure>
          <p class="TestimonialName article-child">${data.firstname + ' ' + data.lastname}</p>
          <p class="TestimonialCompany article-child">${data.company}</p>
          <blockquote>${data.quote}</blockquote>
      </article>`)
    testimonialTarget.appendChild(tCard)
}
const testimonialTarget = document.querySelector('.testimonials')
const getTestimonials = (amount) => {
    fetch(`https://web-modules.dev/api/v1/testimonials/${amount}`, {
        headers: {
            Authorization: token
        }
    })
        .then(result => result.json())
        .then( json => {
            console.log(json)
            json.testimonials.forEach(function (testimonial){
                createTestimonialCard(testimonial)
            })
        })
        .catch( er => {
            console.error()
        })
}