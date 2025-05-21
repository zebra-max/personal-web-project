function validateWithJS() {
  const adsoyad = document.getElementById("adsoyad").value;
  const email = document.getElementById("email").value;
  const telefon = document.getElementById("telefon").value;

  if (adsoyad.trim() === "" || email.trim() === "" || telefon.trim() === "") {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Geçerli bir e-posta adresi giriniz.");
    return;
  }

  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(telefon)) {
    alert("Telefon sadece rakamlardan oluşmalıdır.");
    return;
  }

  alert("JavaScript ile doğrulama başarılı!");
}
