async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
  const data = await response.json();

  data.forEach(showProducts);
}
getData();

function showProducts(products) {
  const template = document.querySelector("#template").content;

  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = products.productdisplayname;
  copy.querySelector(".pris").textContent = products.price;
  copy.querySelector(".sko").src = `https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp`;
  if (products.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (products.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  if (products.discount) {
    copy.querySelector(".sale").classList.remove("sale");
  }
  if (products.discount) {
    copy.querySelector(".sale2").classList.remove("sale2");
  }
  if (products.discount) {
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
