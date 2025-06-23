// Get all elements with class 'translate-en' or 'translate-ar'
const elementsEn = document.querySelectorAll('.translate-en');
const elementsAr = document.querySelectorAll('.translate-ar');

function setLanguage(lang) {
    // Toggle visibility based on the selected language using classList to add/remove 'd-none'
    if (lang === 'en') {
        elementsEn.forEach(el => el.classList.remove('d-none'));
        elementsAr.forEach(el => el.classList.add('d-none'));
        document.title = "The cheapest painting and professional finishing in Kuwait - Al Hussien for Finishing."

    } else if (lang === 'ar') {
        elementsEn.forEach(el => el.classList.add('d-none'));
        elementsAr.forEach(el => el.classList.remove('d-none'));
        document.title = `صباغ الكويت ✔️🇰🇼  خصم 50%  صبغ بدون ريحه جوتن - اتصل الأن 96616761  - صباغ شاطر - صباغ - رقم صباغ - صباغ ورق جدران - أشطر صباغ بالكويت - أحسن صباغ بالكويت - أفضل صباغ بالكويت - صباغ ماهر - المهدي للتشطيبات`;

    }
}

// Get both pairs of buttons
const btnArabic = document.getElementById("btn-arabic"),
    btnEnglish = document.getElementById("btn-english"),
    btnArabic2 = document.getElementById("btn-arabic2"),
    btnEnglish2 = document.getElementById("btn-english2");

// Event listeners for language buttons
btnArabic.addEventListener("click", () => setLanguage("ar"));
btnEnglish.addEventListener("click", () => setLanguage("en"));

btnArabic2.addEventListener("click", () => setLanguage("ar"));
btnEnglish2.addEventListener("click", () => setLanguage("en"));

// Set initial language to Arabic
setLanguage("ar");



// floating menu
document.getElementById('fabButton').addEventListener('click', function () {
    document.querySelector('.fab-container').classList.toggle('active');
});

document.querySelectorAll("#portfolio .tab-content .port")
    .forEach((i) => i.addEventListener("click", _ =>
        i.classList.contains("active") ? i.classList.remove("active") :
            i.classList.add("active")))



/// hide images 
// Get all images in the container
const images = document.querySelectorAll('.img-profile img');
let currentIndex = 0;

// Function to show the current image and hide others with fade effect
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('show'); // Add show class to fade in
    } else {
      img.classList.remove('show'); // Remove show class to fade out
    }
  });
}

// Initial display of the first image
showImage(currentIndex);

// Set interval to change the displayed image every 3 seconds
setInterval(() => {
  // Update the index to show the next image
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 5000); // Change 3000 to your desired interval in milliseconds
