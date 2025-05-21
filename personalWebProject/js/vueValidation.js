new Vue({
  el: '#app',
  data: {
    form: {
      adsoyad: '',
      email: '',
      telefon: '',
      cinsiyet: '',
      sehir: '',
      mesaj: ''
    },
    errorMessage: ''
  },
  methods: {
    validateSimple() {
      if (!this.form.adsoyad || !this.form.email) {
        this.errorMessage = "Ad Soyad ve E-posta zorunludur.";
      } else {
        this.errorMessage = '';
        alert("Temel doğrulama başarılı!");
      }
    },
    validateAll() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]+$/;

      if (!this.form.adsoyad || !emailRegex.test(this.form.email) || !phoneRegex.test(this.form.telefon)) {
        this.errorMessage = "Tüm alanları doğru şekilde doldurun.";
      } else {
        this.errorMessage = '';
        alert("Tüm doğrulamalar başarılı!");
      }
    },
    resetForm() {
      this.form = {
        adsoyad: '',
        email: '',
        telefon: '',
        cinsiyet: '',
        sehir: '',
        mesaj: ''
      };
      this.errorMessage = '';
    },
    submitForm() {
      localStorage.setItem("iletisimFormu", JSON.stringify(this.form));
      window.location.href = "sonuc.html";
    }
  }
});
