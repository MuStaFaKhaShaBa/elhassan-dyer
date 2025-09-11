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
        // document.title = `صباغ الكويت ✔️🇰🇼  خصم 50%  صبغ بدون ريحه جوتن - اتصل الأن 96616761  - صباغ شاطر - صباغ - رقم صباغ - صباغ ورق جدران - أشطر صباغ بالكويت - أحسن صباغ بالكويت - أفضل صباغ بالكويت - صباغ ماهر - المهدي للتشطيبات`;

    }
}


// Get both pairs of buttons
const btnArabic = document.getElementById("btn-arabic"),
    btnEnglish = document.getElementById("btn-english"),
    btnArabic2 = document.getElementById("btn-arabic2"),
    btnEnglish2 = document.getElementById("btn-english2");

// Event listeners for language buttons
btnArabic?.addEventListener("click", () => setLanguage("ar"));
btnEnglish?.addEventListener("click", () => setLanguage("en"));

btnArabic2?.addEventListener("click", () => setLanguage("ar"));
btnEnglish2?.addEventListener("click", () => setLanguage("en"));

// Set initial language to Arabic
// setLanguage("ar");



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


  (function(){
      const serviceAreas = [
        "الفروانيه","خطيطان","حولي","المهبوله","السالميه","جابريه","الرميثية","الاحمدي","الاندلس","اشبيلية","القيروان","جهراء","النسيم","المطلاع","جابر الاحمد","صباح الاحمد","فهد الاحمد","القرين","القصور","حطين","السلام","الصديق"
      ];

      function slugify(text){
        return text
          .toString()
          .normalize('NFKD')
          .replace(/[^\w\s\u0600-\u06FF\-]/g,'')
          .trim()
          .replace(/\s+/g,'-')
          .toLowerCase();
      }

      const grid = document.getElementById('areasGrid');

      function buildCards(list){
        grid.innerHTML = '';
        if(!list.length){
          grid.innerHTML = '<div class="area-meta">لم يتم العثور على مناطق تطابق البحث.</div>';
          return;
        }
        list.forEach(area => {
          const slug = slugify(area);
          const card = document.createElement('article');
          card.className = 'card';
          card.innerHTML = `
            <div>
              <div class="area-name">${area}</div>
              <div class="area-meta">خدمة طلاء وديكورات في ${area}</div>
            </div>
            <div class="cta-row" style="display:flex;gap:8px;margin-top:12px">
              <a class="btn primary" href="/services/${slug}" title="خدمات الصباغ في ${area}" style="padding:8px 12px;border-radius:10px;text-decoration:none;font-weight:600;background:#0b74de;color:#fff">عرض الخدمات</a>
              <a class="btn ghost" href="tel:+965-XXXX-XXXX" aria-label="اتصل لطلب خدمة في ${area}" style="padding:8px 12px;border-radius:10px;text-decoration:none;font-weight:600;border:1px solid rgba(11,116,222,0.15)">احجز الآن</a>
            </div>
          `;
          grid.appendChild(card);
        });
      }

      window.filterAreas = function(q){
        const v = q.trim().toLowerCase();
        if(!v) return buildCards(serviceAreas);
        const filtered = serviceAreas.filter(a => a.toLowerCase().includes(v));
        buildCards(filtered);
      }

      // Initialize
      buildCards(serviceAreas);

      // Add visually-hidden helper if not present
      if(!document.querySelector('.visually-hidden')){
        const s = document.createElement('style');
        s.innerHTML = `.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;border:0;padding:0;margin:-1px}`;
        document.head.appendChild(s);
      }
    })();
 