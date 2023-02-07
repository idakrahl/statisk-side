const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");
const url = `https://kea-alt-del.dk/t7/api/products?limit=50&category=${cat}`;

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach(showProducts);
}

document.querySelector(".overskrift").textContent = cat;

getData();

function showProducts(products) {
  const template = document.querySelector("#template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = products.productdisplayname;
  copy.querySelector(".pris2").textContent = products.price;
  copy.querySelector(".belob").textContent = Math.round(products.price - (products.price * products.discount) / 100);
  copy.querySelector(".discount").textContent = products.discount;
  copy.querySelector(".brand").textContent = products.brandname;
  copy.querySelector(".kategori").textContent = products.subcategory;
  copy.querySelector(".sko").src = `https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp`;
  copy.querySelector("a").href = "product.html?id=" + products.id;
  if (products.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (products.discount) {
    copy.querySelector(".sale").classList.remove("sale");
    copy.querySelector(".sale2").classList.remove("sale2");
    copy.querySelector(".sale3").classList.remove("sale3");
  }

  document.querySelector("main").appendChild(copy);
}
/*
{
"id": 1529,
"gender": "Men",
"category": "Apparel",
"subcategory": "Topwear",
"articletype": "Tshirts",
"season": "Fall",
"productionyear": 2010,
"usagetype": "Casual",
"productdisplayname": "Tee",
"price": 1899,
"discount": null,
"brandname": "Puma",
"soldout": 0 
}
*/
