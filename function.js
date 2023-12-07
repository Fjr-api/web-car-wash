// script.js

// Dummy data
const datapaket = [
  [
    "Cuci mobil kecil",
    "Suzuki karimun,\ntoyota agya,\nswift, ayla, jaz",
    "40000",
  ],
  ["Cuci mobil sedang", "Crv, Hrv, civic", "45000"],
  ["Cuci mobil besar", "Fortuner, pajero, robicorn", "50000"],
  ["Cuci mobil sangat besar", "alpard, lexus, vellfire", "55000"],
];

// script.js pada halaman home

// Fungsi untuk mengubah angka menjadi format Rupiah
function formatRupiah(angka) {
  var reverse = angka.toString().split("").reverse().join(""),
    ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");
  return "Rp. " + ribuan;
}

document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.querySelector(".product-container");

  datapaket.forEach((paket) => {
    const packageContainer = document.createElement("div");
    packageContainer.classList.add("package-container");

    const packageCard = document.createElement("div");
    packageCard.classList.add("package-card");
    packageCard.innerHTML = `
    <h3>${paket[0]}</h3>
    <p>${paket[1]}</p>
    <p>${formatRupiah(paket[2])}</p>
    `;

    const form = document.createElement("form");
    form.action = "transaksi.html";
    form.method = "get"; // Menggunakan metode GET untuk menyertakan parameter dalam URL

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "paket";
    input.value = JSON.stringify(paket);

    const button = document.createElement("button");
    button.classList.add("select-button");
    button.type = "submit";
    button.textContent = "Pilih Paket";

    form.appendChild(input);
    form.appendChild(button);

    packageContainer.appendChild(packageCard);
    packageContainer.appendChild(form);

    productContainer.appendChild(packageContainer);

    // Menambahkan event listener untuk setiap form
    form.addEventListener("submit", function (event) {
      // Menunda submit form untuk menangani navigasi manual
      event.preventDefault();
      // Melakukan submit form secara manual
      window.location.href =
        form.action + "?paket=" + encodeURIComponent(JSON.stringify(paket));
    });
  });
});
