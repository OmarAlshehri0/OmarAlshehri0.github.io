const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section, header[id]");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const languageButtons = document.querySelectorAll(".language-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAttributeElements = document.querySelectorAll("[data-i18n-attr]");
const backToTopBtn = document.getElementById("backToTopBtn");

const defaultLanguage = "en";

const translations = {
  en: {
    "page.title": "Omar Alshehri | Retro Portfolio",
    "language.selector": "Language selector",
    "language.english": "English",
    "language.arabic": "Arabic",
    "nav.label": "Primary navigation",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.introOne":
      "Software Engineering student at King Fahd University of Petroleum & Minerals (KFUPM) with hands-on experience in web design and front-end development.",
    "hero.introTwo":
      "I am currently learning game development and improving myself to become a Cloud-Native Full-Stack Engineer.",
    "hero.introThree":
      "Worked on a personal web development project delivering responsive, clean websites.",
    "hero.portraitAlt": "Pixel portrait of Omar Alshehri",
    "social.label": "Social links",
    "social.email": "Email",
    "social.whatsapp": "WhatsApp",
    "projects.title": "Projects",
    "projects.categories": "Project categories",
    "projects.websites": "Websites",
    "projects.games": "Games",
    "projects.systems": "Systems",
    "projects.personalProject": "Personal Project",
    "projects.velonwebDescription":
      "Founded in 2024, VelonWeb is my own creative web project where I design and develop responsive websites with a clean visual identity. It represents how I approach real-world web work: thoughtful layout, strong presentation, and a focus on making each site feel professional and easy to use.",
    "projects.visitWebsite": "Visit Website",
    "projects.underConstruction": "Under Construction",
    "projects.gamesPortfolio": "Games Portfolio",
    "projects.gamesDescription":
      "This area is reserved for future game projects and interactive experiments. New quests will appear here once development milestones are complete.",
    "projects.comingSoon": "Coming Soon",
    "projects.systemsPortfolio": "Systems Portfolio",
    "projects.systemsDescription":
      "System-based projects will be added here in a future update, including more technical work focused on architecture, workflows, and scalable problem solving.",
    "contact.title": "Contact",
    "contact.name": "Name",
    "contact.namePlaceholder": "Name",
    "contact.phone": "Phone Number",
    "contact.phonePlaceholder": "+966...",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Write your message here",
    "contact.send": "Send",
    "form.success": "Message sent successfully.",
    "form.nameRequired": "Please enter your name.",
    "form.phoneRequired": "Please enter your phone number.",
    "form.phoneInvalid": "Please enter a valid phone number.",
    "form.emailRequired": "Please enter your email address.",
    "form.emailInvalid": "Please enter a valid email address.",
    "form.messageRequired": "Please write a short message.",
    backToTop: "Back to top",
  },
  ar: {
    "page.title": "عمر الشهري | ملف شخصي رترو",
    "language.selector": "اختيار اللغة",
    "language.english": "English",
    "language.arabic": "العربية",
    "nav.label": "التنقل الرئيسي",
    "nav.about": "نبذة",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    "hero.introOne":
      "طالب هندسة برمجيات في جامعة الملك فهد للبترول والمعادن (KFUPM)، ولدي خبرة عملية في تصميم الويب وتطوير الواجهات الأمامية.",
    "hero.introTwo":
      "أتعلم حاليا تطوير الألعاب وأعمل على تطوير نفسي لأصبح مهندس برمجيات Full-Stack سحابيا.",
    "hero.introThree":
      "عملت على مشروع شخصي لتطوير مواقع ويب متجاوبة ونظيفة.",
    "hero.portraitAlt": "صورة بكسل لعمر الشهري",
    "social.label": "روابط التواصل",
    "social.email": "البريد",
    "social.whatsapp": "واتساب",
    "projects.title": "المشاريع",
    "projects.categories": "تصنيفات المشاريع",
    "projects.websites": "مواقع",
    "projects.games": "ألعاب",
    "projects.systems": "أنظمة",
    "projects.personalProject": "مشروع شخصي",
    "projects.velonwebDescription":
      "تأسس VelonWeb في عام 2024، وهو مشروعي الإبداعي الخاص لتصميم وتطوير مواقع ويب متجاوبة بهوية بصرية نظيفة. يعكس طريقتي في تنفيذ أعمال الويب الواقعية: تخطيط مدروس، عرض قوي، وتركيز على جعل كل موقع احترافيا وسهل الاستخدام.",
    "projects.visitWebsite": "زيارة الموقع",
    "projects.underConstruction": "قيد الإنشاء",
    "projects.gamesPortfolio": "ملف الألعاب",
    "projects.gamesDescription":
      "هذه المساحة مخصصة لمشاريع الألعاب والتجارب التفاعلية القادمة. ستظهر مشاريع جديدة هنا عند اكتمال مراحل التطوير.",
    "projects.comingSoon": "قريبا",
    "projects.systemsPortfolio": "ملف الأنظمة",
    "projects.systemsDescription":
      "ستتم إضافة المشاريع المعتمدة على الأنظمة هنا في تحديث قادم، وتشمل أعمالا تقنية أكثر تركيزا على البنية، وسير العمل، وحل المشكلات القابلة للتوسع.",
    "contact.title": "تواصل",
    "contact.name": "الاسم",
    "contact.namePlaceholder": "الاسم",
    "contact.phone": "رقم الجوال",
    "contact.phonePlaceholder": "+966...",
    "contact.email": "البريد الإلكتروني",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "الرسالة",
    "contact.messagePlaceholder": "اكتب رسالتك هنا",
    "contact.send": "إرسال",
    "form.success": "تم إرسال الرسالة بنجاح.",
    "form.nameRequired": "يرجى إدخال اسمك.",
    "form.phoneRequired": "يرجى إدخال رقم الجوال.",
    "form.phoneInvalid": "يرجى إدخال رقم جوال صحيح.",
    "form.emailRequired": "يرجى إدخال بريدك الإلكتروني.",
    "form.emailInvalid": "يرجى إدخال بريد إلكتروني صحيح.",
    "form.messageRequired": "يرجى كتابة رسالة قصيرة.",
    backToTop: "العودة إلى الأعلى",
  },
};

let currentLanguage = getSavedLanguage() || defaultLanguage;

function getSavedLanguage() {
  try {
    return localStorage.getItem("portfolioLanguage");
  } catch (error) {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("portfolioLanguage", language);
  } catch (error) {
    // The language switch still works for this session if storage is unavailable.
  }
}

function translate(key) {
  return translations[currentLanguage][key] || translations[defaultLanguage][key] || key;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : defaultLanguage;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.title = translate("page.title");

  translatableElements.forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  translatableAttributeElements.forEach((element) => {
    const attributeMappings = element.dataset.i18nAttr.split(",");

    attributeMappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":").map((part) => part.trim());

      if (!attribute || !key) {
        return;
      }

      element.setAttribute(attribute, translate(key));
    });
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  saveLanguage(currentLanguage);
}

function updateActiveNav() {
  let currentId = "about";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (window.scrollY >= top - 160 && window.scrollY < top + height - 160) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
}

function updateBackToTopButton() {
  if (!backToTopBtn) {
    return;
  }

  backToTopBtn.classList.toggle("hidden", window.scrollY < 260);
}

window.addEventListener("scroll", () => {
  updateActiveNav();
  updateBackToTopButton();
});

window.addEventListener("load", () => {
  updateActiveNav();
  updateBackToTopButton();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    tabButtons.forEach((tabButton) => {
      const active = tabButton === button;
      tabButton.classList.toggle("active", active);
      tabButton.setAttribute("aria-pressed", String(active));
    });

    tabPanels.forEach((panel) => {
      const active = panel.id === target;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  });
});

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formSuccess = document.getElementById("formSuccess");

function showFieldState(element, message) {
  element.textContent = message;
  element.classList.toggle("hidden", !message);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  return /^[+\d\s()-]{7,20}$/.test(value);
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let hasError = false;

    showFieldState(nameError, "");
    showFieldState(phoneError, "");
    showFieldState(emailError, "");
    showFieldState(messageError, "");
    showFieldState(formSuccess, "");

    if (!name) {
      showFieldState(nameError, translate("form.nameRequired"));
      hasError = true;
    }

    if (!phone) {
      showFieldState(phoneError, translate("form.phoneRequired"));
      hasError = true;
    } else if (!isValidPhone(phone)) {
      showFieldState(phoneError, translate("form.phoneInvalid"));
      hasError = true;
    }

    if (!email) {
      showFieldState(emailError, translate("form.emailRequired"));
      hasError = true;
    } else if (!isValidEmail(email)) {
      showFieldState(emailError, translate("form.emailInvalid"));
      hasError = true;
    }

    if (!message) {
      showFieldState(messageError, translate("form.messageRequired"));
      hasError = true;
    }

    if (hasError) {
      return;
    }

    showFieldState(formSuccess, translate("form.success"));
    contactForm.reset();
  });
}

applyLanguage(currentLanguage);
