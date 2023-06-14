// Mendapatkan elemen-elemen yang akan diubah
const namaElement = document.getElementById("nama");
const roleElement = document.getElementById("role");
const usiaElement = document.getElementById("usia");
const lokasiElement = document.getElementById("lokasi");
const pengalamanElement = document.getElementById("pengalaman");
const emailElement = document.getElementById("email");

const formElement = document.getElementById("form-data");
const submitButton = document.getElementById("submit");

function tampilkan_form() {
  document.getElementById("Nama").value = namaElement.innerText;
  document.getElementById("Role").value = roleElement.innerText;
  document.getElementById("Usia").value = usiaElement.innerText;
  document.getElementById("Lokasi").value = lokasiElement.innerText;
  document.getElementById("Pengalaman").value = pengalamanElement.innerText;
  document.getElementById("Email").value = emailElement.innerText;

  document.getElementById("hasil").style.display = "block";
}

function submitForm(event) {
  event.preventDefault();

  const namaValue = document.getElementById("Nama").value;
  const roleValue = document.getElementById("Role").value;
  const usiaValue = document.getElementById("Usia").value;
  const lokasiValue = document.getElementById("Lokasi").value;
  const pengalamanValue = document.getElementById("Pengalaman").value;
  const emailValue = document.getElementById("Email").value;

  namaElement.innerText = namaValue;
  roleElement.innerText = roleValue;
  usiaElement.innerText = usiaValue;
  lokasiElement.innerText = lokasiValue;
  pengalamanElement.innerText = pengalamanValue;
  emailElement.innerText = emailValue;

  document.getElementById("hasil").style.display = "none";

  formElement.reset();
}

submitButton.addEventListener("click", submitForm);
