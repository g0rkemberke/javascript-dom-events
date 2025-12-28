// ========================================
// DOM Projesi - Tüm Fonksiyonlar
// ========================================

// ----------------------------------------
// 1. Resim Galerisi - Thumbnail Değiştirme
// ----------------------------------------
function initImageGallery() {
  const mainImage = document.querySelector('#main-image');
  const thumbnails = document.querySelectorAll('.main-navigation img');
  
  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener('mouseenter', function (event) {
        mainImage.src = event.target.src;
      });
    });
    console.log('✓ Resim galerisi başlatıldı');
  }
}

// ----------------------------------------
// 2. Karanlık Tema Toggle
// ----------------------------------------
function initDarkTheme() {
  function karanlikTemayiAcKapa() {
    document.body.classList.toggle('dark');
    const button = document.getElementById('acKapa');
    
    if (document.body.classList.contains('dark')) {
      button.textContent = 'Karanlık temayı kapat';
    } else {
      button.textContent = 'Karanlık temayı aç';
    }
  }
  
  const descriptionElement = document.querySelector('.description');
  if (descriptionElement) {
    const button = document.createElement('button');
    button.textContent = 'Karanlık temayı aç';
    button.setAttribute('id', 'acKapa');
    button.addEventListener('click', karanlikTemayiAcKapa);
    descriptionElement.appendChild(button);
    console.log('✓ Karanlık tema butonu eklendi');
  }
}

// ----------------------------------------
// Challenge 1: Grayscale Efekti
// ----------------------------------------
function initGrayscaleEffect() {
  const allImages = document.getElementsByTagName('img');
  
  for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('mouseenter', function (e) {
      e.target.classList.add('grayscale');
    });
    allImages[i].addEventListener('mouseleave', function (e) {
      e.target.classList.remove('grayscale');
    });
  }
  console.log(`✓ ${allImages.length} resme grayscale efekti eklendi`);
}

// ----------------------------------------
// Challenge 2: Klavye ile Tema Değiştirme
// ----------------------------------------
function initKeyboardThemes() {
  window.addEventListener('keydown', function (event) {
    if (event.key === '1') {
      document.body.className = 'theme1';
      console.log('Tema 1 aktif');
    } else if (event.key === '2') {
      document.body.className = 'theme2';
      console.log('Tema 2 aktif');
    } else if (event.key === '3') {
      document.body.className = 'theme3';
      console.log('Tema 3 aktif');
    } else if (event.key === 'Escape') {
      document.body.className = '';
      console.log('Tema sıfırlandı');
    }
  });
  console.log('✓ Klavye tema kontrolü aktif (1, 2, 3, Esc tuşları)');
}

// ----------------------------------------
// Challenge 3 & 4: Form İşlemleri
// ----------------------------------------
function initFormHandling() {
  const inputElement = document.querySelector('input[name="full_name"]');
  const buttonElement = document.querySelector('button[type="submit"]');
  const formElement = document.querySelector('form');
  const submitResult = document.getElementById('submitResult');
  
  if (!inputElement || !buttonElement || !formElement) {
    console.warn('⚠ Form elemanları bulunamadı');
    return;
  }
  
  // Challenge 3: Input validation
  inputElement.addEventListener('input', function () {
    this.value = this.value.toUpperCase();
    
    if (this.value.length > 5) {
      buttonElement.removeAttribute('disabled');
    } else {
      buttonElement.setAttribute('disabled', 'true');
    }
  });
  
  // Challenge 4: Form submit
  formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = inputElement.value;
    
    if (submitResult) {
      submitResult.textContent = `${inputValue} başarı ile kaydedildi...`;
    }
    
    inputElement.value = '';
    buttonElement.disabled = true;
    console.log(`✓ Form kaydedildi: ${inputValue}`);
  });
  
  console.log('✓ Form işlemleri başlatıldı');
}

// ----------------------------------------
// Ana Başlatma Fonksiyonu
// ----------------------------------------
function init() {
  console.log('🚀 DOM Projesi başlatılıyor...');
  
  initImageGallery();
  initDarkTheme();
  initGrayscaleEffect();
  initKeyboardThemes();
  initFormHandling();
  
  console.log('✅ Tüm fonksiyonlar başlatıldı!');
}

// Sayfa yüklendiğinde tüm fonksiyonları başlat
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}