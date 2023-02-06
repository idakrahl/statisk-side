const id = 1532;
const url = `https://kea-alt-del.dk/t7/api/products/1532`;
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".puma_cell").textContent = produkt.productdisplayname;
  document.querySelector(".sko").src = imagePath;
  document.querySelector(".underkategori").textContent = produkt.brandname;
  document.querySelector(".gender").textContent = produkt.gender;
  document.querySelector(".i_number").textContent = produkt.id;
  document.querySelector(".pris").textContent = "DDK " + produkt.price + ",-";
  document.querySelector(".wear").textContent = produkt.subcategory;
  document.querySelector(".option_1").textContent = "XS";
  document.querySelector(".option_2").textContent = "S";
  document.querySelector(".option_3").textContent = "M";
}

hentData();
