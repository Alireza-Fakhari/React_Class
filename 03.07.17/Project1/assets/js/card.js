let card = () => {
  let html = "";
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((data) => data.json())
    .then((res) => {
      res.slice(0,52).forEach((element) => {
          html += `
            <div class="product">
                <img src="${element.url}" />
                <div class="product-info">
                    <h4 class="product-title">${element.title}</h4>
                    <p class="product-price">$${element.id}</p>
                    <a class="product-btn" href="#">Buy Now</a>
                </div>
            </div>
                `;
      });
      document.querySelector("div.all-products").innerHTML=html;
    });
};

export default card;
