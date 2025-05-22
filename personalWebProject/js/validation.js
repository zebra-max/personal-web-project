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
    errors: {
      adsoyad: '',
      email: '',
      telefon: '',
      cinsiyet: '',
      sehir: '',
      mesaj: ''
    }
  },
  methods: {
    clearErrors() {
      this.errors = {
        adsoyad: '',
        email: '',
        telefon: '',
        cinsiyet: '',
        sehir: '',
        mesaj: ''
      };
    },
    validateSimple() {
      this.clearErrors();
      let isValid = true;
      
      if (!this.form.adsoyad) {
        this.errors.adsoyad = "Ad Soyad boş bırakılamaz";
        isValid = false;
      } else if (this.form.adsoyad.length < 2 || this.form.adsoyad.length > 15) {
    this.errors.adsoyad = "Ad Soyad 2-15 karakter arasında olmalıdır";
    isValid = false;
  }

      
      if (!this.form.email) {
        this.errors.email = "E-posta boş bırakılamaz";
        isValid = false;
      }
      
      if (!this.form.telefon) {
        this.errors.telefon = "Telefon boş bırakılamaz";
        isValid = false;
      }
      
      if (isValid) {
        alert("Temel doğrulama başarılı!");
      }
      return isValid;
    },
    validateAll() {
      this.clearErrors();
      let isValid = true;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const telefonRegex = /^[0-9]{10,11}$/;

      if (!this.form.adsoyad) {
        this.errors.adsoyad = "Ad Soyad boş bırakılamaz";
        isValid = false;
      } else if (this.form.adsoyad.length < 2 || this.form.adsoyad.length > 15) {
    this.errors.adsoyad = "Ad Soyad 2-15 karakter arasında olmalıdır";
    isValid = false;
  }

      
      if (!this.form.email) {
        this.errors.email = "E-posta boş bırakılamaz";
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = "Geçersiz e-posta formatı";
        isValid = false;
      }
      
      if (!this.form.telefon) {
        this.errors.telefon = "Telefon boş bırakılamaz";
        isValid = false;
      } else if (!telefonRegex.test(this.form.telefon)) {
        this.errors.telefon = "Geçersiz telefon numarası (10-11 rakam)";
        isValid = false;
      }
      
      if (!this.form.cinsiyet) {
        this.errors.cinsiyet = "Cinsiyet seçilmelidir";
        isValid = false;
      }
      
      if (!this.form.sehir) {
        this.errors.sehir = "Şehir seçilmelidir";
        isValid = false;
      }
      
      if (!this.form.mesaj) {
        this.errors.mesaj = "Mesaj boş bırakılamaz";
        isValid = false;
      }
      
      if (isValid) {
        alert("Tüm doğrulamalar başarılı!");
      }
      return isValid;
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
      this.clearErrors();
    },
    submitForm() {
      if (this.validateAll()) {
        const params = new URLSearchParams();
        params.append('adsoyad', this.form.adsoyad);
        params.append('email', this.form.email);
        params.append('telefon', this.form.telefon);
        params.append('cinsiyet', this.form.cinsiyet);
        params.append('sehir', this.form.sehir);
        params.append('mesaj', this.form.mesaj);
        
        window.location.href = "sonuc.html?" + params.toString();
      }
    }
  }
});