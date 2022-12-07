const token = "Bearer 99|sok4NQmnQQ8TyOnty4v4SCdBV0LUzTlP1tL67KN4";
const getProperNode = (html) => {
    const templ = document.createElement('template');
    templ.innerHTML = html.trim();
    return templ.content.firstChild.cloneNode(true);
}
//products loading
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