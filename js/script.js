const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section, header[id]");
const projectsSection = document.getElementById("projects");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const backToTopBtn = document.getElementById("backToTopBtn");

const languageSwitcher = document.querySelector("[data-language-switcher]");
const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = document.querySelectorAll(".language-option");
const currentLanguageFlag = document.getElementById("currentLanguageFlag");
const currentLanguageLabel = document.getElementById("currentLanguageLabel");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAttributeElements = document.querySelectorAll("[data-i18n-attr]");
const metaDescription = document.querySelector('meta[name="description"]');
const minecraftHelper = document.getElementById("minecraftHelper");
const minecraftHelperClose = document.getElementById("minecraftHelperClose");
const minecraftHelperCharacter = document.getElementById("minecraftHelperCharacter");
const pixelCursor = document.querySelector(".pixel-cursor");
const revealElements = document.querySelectorAll(".site-header, .section-block, .project-card");
const canAnimate = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches && canAnimate;
const canUseProjectSpotlight = window.matchMedia("(min-width: 721px)").matches && canAnimate;
const canUseMinecraftHelper =
  window.matchMedia("(min-width: 721px) and (hover: hover) and (pointer: fine)").matches && canAnimate;

const defaultLanguage = "en";
const languageStorageKey = "portfolioLanguage";
const minecraftHelperSessionKey = "minecraftHelperClosed";
const whatsappUrl = "https://wa.me/966595824433";

const languageMeta = {
  en: {
    flag: "🇺🇸",
    label: "English",
    direction: "ltr",
  },
  ar: {
    flag: "🇸🇦",
    label: "العربية",
    direction: "rtl",
  },
};

const translations = {
  en: {
    "page.title": "Omar Alshehri | Retro Portfolio",
    "meta.description":
      "Retro RPG-style personal portfolio for Omar Alshehri, featuring web projects, contact details, and a polished one-page experience.",
    "language.toggleLabel": "Choose language",
    "helper.message": "Need help or have a question? Message me on WhatsApp.",
    "helper.close": "Close helper",
    "helper.open": "Message me on WhatsApp",
    "nav.label": "Primary navigation",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.name": "Omar Alshehri",
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
    "badge.signatureBuild": "Signature Build",
    "badge.healthcare": "Healthcare",
    "badge.logistics": "Logistics",
    "badge.legal": "Legal",
    "badge.healthLegal": "Health + Legal",
    "badge.craft": "Craft",
    "project.velonweb": "VelonWeb",
    "projects.velonwebDescription":
      "Founded in 2024, VelonWeb is my own creative web project where I design and develop responsive websites with a clean visual identity. It represents how I approach real-world web work: thoughtful layout, strong presentation, and a focus on making each site feel professional and easy to use.",
    "projects.visitWebsite": "Visit Website",
    "project.shumos": "Shumos Care Physiotherapy",
    "project.ornava": "Ornava Logistics",
    "project.ruba": "Ruba Law & Legal Consulting",
    "project.rowad": "Rowad Al-Najah Law",
    "project.pioneers": "Pioneers Law and Healthcare",
    "project.marssa": "MARSSA POTTERY",
    "project.velonwebAlt": "VelonWeb homepage screenshot",
    "project.shumosAlt": "Shumos Care Physiotherapy homepage screenshot",
    "project.ornavaAlt": "Ornava Logistics homepage screenshot",
    "project.rubaAlt": "Ruba Law and Legal Consulting homepage screenshot",
    "project.rowadAlt": "Rowad Al-Najah Law homepage screenshot",
    "project.pioneersAlt": "Pioneers Law and Healthcare homepage screenshot",
    "project.marssaAlt": "MARSSA POTTERY homepage screenshot",
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
    "backToTop": "Back to top",
  },
  ar: {
    "page.title": "عمر الشهري | ملف شخصي رترو",
    "meta.description":
      "ملف شخصي لعمر الشهري بطابع رترو يعرض مشاريع الويب وطرق التواصل في تجربة صفحة واحدة مصقولة.",
    "language.toggleLabel": "اختر اللغة",
    "helper.message": "تحتاج مساعدة أو لديك سؤال؟ راسلني على واتساب.",
    "helper.close": "إغلاق المساعد",
    "helper.open": "راسلني على واتساب",
    "nav.label": "التنقل الرئيسي",
    "nav.about": "نبذة",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    "hero.name": "عمر الشهري",
    "hero.introOne":
      "طالب هندسة برمجيات في جامعة الملك فهد للبترول والمعادن (KFUPM)، ولدي خبرة عملية في تصميم الويب وتطوير الواجهات الأمامية.",
    "hero.introTwo":
      "أتعلم حاليا تطوير الألعاب وأعمل على تطوير مهاراتي لأصبح مهندس برمجيات Full-Stack سحابيا.",
    "hero.introThree":
      "عملت على مشروع شخصي في تطوير الويب لتقديم مواقع متجاوبة ونظيفة.",
    "hero.portraitAlt": "صورة بكسل لعمر الشهري",
    "social.label": "روابط التواصل",
    "social.email": "البريد الإلكتروني",
    "social.whatsapp": "واتساب",
    "projects.title": "المشاريع",
    "projects.categories": "تصنيفات المشاريع",
    "projects.websites": "مواقع الويب",
    "projects.games": "الألعاب",
    "projects.systems": "الأنظمة",
    "projects.personalProject": "مشروع شخصي",
    "badge.signatureBuild": "عمل مميز",
    "badge.healthcare": "رعاية صحية",
    "badge.logistics": "لوجستيات",
    "badge.legal": "قانوني",
    "badge.healthLegal": "صحي وقانوني",
    "badge.craft": "حرفي",
    "project.velonweb": "VelonWeb",
    "projects.velonwebDescription":
      "تأسس VelonWeb في عام 2024، وهو مشروعي الإبداعي الخاص لتصميم وتطوير مواقع ويب متجاوبة بهوية بصرية نظيفة. يعكس طريقتي في تنفيذ أعمال الويب الواقعية: تخطيط مدروس، عرض قوي، وتركيز على جعل كل موقع احترافيا وسهل الاستخدام.",
    "projects.visitWebsite": "زيارة الموقع",
    "project.shumos": "شموس كير للعلاج الطبيعي",
    "project.ornava": "أورنافا للخدمات اللوجستية",
    "project.ruba": "ربى للمحاماة والاستشارات القانونية",
    "project.rowad": "رواد النجاح للمحاماة",
    "project.pioneers": "بايونيرز للقانون والرعاية الصحية",
    "project.marssa": "مرسى للفخار",
    "project.velonwebAlt": "لقطة شاشة للصفحة الرئيسية في VelonWeb",
    "project.shumosAlt": "لقطة شاشة للصفحة الرئيسية في شموس كير للعلاج الطبيعي",
    "project.ornavaAlt": "لقطة شاشة للصفحة الرئيسية في أورنافا للخدمات اللوجستية",
    "project.rubaAlt": "لقطة شاشة للصفحة الرئيسية في ربى للمحاماة والاستشارات القانونية",
    "project.rowadAlt": "لقطة شاشة للصفحة الرئيسية في رواد النجاح للمحاماة",
    "project.pioneersAlt": "لقطة شاشة للصفحة الرئيسية في بايونيرز للقانون والرعاية الصحية",
    "project.marssaAlt": "لقطة شاشة للصفحة الرئيسية في مرسى للفخار",
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
    "backToTop": "العودة إلى الأعلى",
  },
};

let currentLanguage = getSavedLanguage();

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    return translations[savedLanguage] ? savedLanguage : defaultLanguage;
  } catch (error) {
    return defaultLanguage;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    // The language still changes for the current visit if storage is unavailable.
  }
}

function translate(key) {
  return translations[currentLanguage][key] || translations[defaultLanguage][key] || key;
}

function setLanguageMenuOpen(open) {
  if (!languageSwitcher || !languageToggle || !languageMenu) {
    return;
  }

  languageSwitcher.classList.toggle("open", open);
  languageMenu.hidden = !open;
  languageToggle.setAttribute("aria-expanded", String(open));
}

function updateSavedMessages() {
  [nameError, phoneError, emailError, messageError, formSuccess].forEach((element) => {
    if (!element || !element.dataset.messageKey) {
      return;
    }

    showFieldState(element, element.dataset.messageKey);
  });
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : defaultLanguage;
  const languageInfo = languageMeta[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = languageInfo.direction;
  document.title = translate("page.title");

  if (metaDescription) {
    metaDescription.setAttribute("content", translate("meta.description"));
  }

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

  if (currentLanguageFlag) {
    currentLanguageFlag.textContent = languageInfo.flag;
  }

  if (currentLanguageLabel) {
    currentLanguageLabel.textContent = languageInfo.label;
  }

  languageOptions.forEach((option) => {
    const active = option.dataset.lang === currentLanguage;
    option.classList.toggle("active", active);
    option.setAttribute("aria-checked", String(active));
  });

  updateSavedMessages();
  updateActiveNav();
  updateProjectSpotlightPosition();
  saveLanguage(currentLanguage);
}

function setupRevealAnimations() {
  if (!canAnimate) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealElements.forEach((element) => element.classList.add("reveal-ready"));

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px",
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupAmbientParallax() {
  if (!canAnimate) {
    return;
  }

  let parallaxFrame = null;
  let nextX = 0;
  let nextY = 0;

  window.addEventListener(
    "pointermove",
    (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      nextX = ((event.clientX - centerX) / centerX) * 7;
      nextY = ((event.clientY - centerY) / centerY) * 5;

      if (parallaxFrame) {
        return;
      }

      parallaxFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--parallax-x", `${nextX.toFixed(2)}px`);
        document.documentElement.style.setProperty("--parallax-y", `${nextY.toFixed(2)}px`);
        parallaxFrame = null;
      });
    },
    { passive: true }
  );
}

function updateProjectSpotlightPosition() {
  if (!projectsSection) {
    return;
  }

  const rect = projectsSection.getBoundingClientRect();
  const centerX = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
  const focusY = ((rect.top + Math.min(rect.height * 0.42, window.innerHeight * 0.62)) / window.innerHeight) * 100;
  const clampedX = Math.min(82, Math.max(18, centerX));
  const clampedY = Math.min(78, Math.max(22, focusY));

  document.documentElement.style.setProperty("--spotlight-x", `${clampedX.toFixed(2)}%`);
  document.documentElement.style.setProperty("--spotlight-y", `${clampedY.toFixed(2)}%`);
}

function setupProjectSpotlight() {
  if (!projectsSection || !canUseProjectSpotlight || !("IntersectionObserver" in window)) {
    return;
  }

  let spotlightFrame = null;

  function requestSpotlightUpdate() {
    if (spotlightFrame) {
      return;
    }

    spotlightFrame = window.requestAnimationFrame(() => {
      if (document.body.classList.contains("projects-spotlight")) {
        updateProjectSpotlightPosition();
      }

      spotlightFrame = null;
    });
  }

  const spotlightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const active = entry.isIntersecting && entry.intersectionRatio > 0.16;
        document.body.classList.toggle("projects-spotlight", active);

        if (active) {
          updateProjectSpotlightPosition();
        }
      });
    },
    {
      threshold: [0, 0.16, 0.35],
      rootMargin: "-8% 0px -20%",
    }
  );

  spotlightObserver.observe(projectsSection);
  window.addEventListener("scroll", requestSpotlightUpdate, { passive: true });
  window.addEventListener("resize", requestSpotlightUpdate);
}

function helperWasClosed() {
  try {
    return sessionStorage.getItem(minecraftHelperSessionKey) === "true";
  } catch (error) {
    return false;
  }
}

function markHelperClosed() {
  try {
    sessionStorage.setItem(minecraftHelperSessionKey, "true");
  } catch (error) {
    // If session storage is unavailable, hiding still works for this page view.
  }
}

function openWhatsAppChat() {
  const whatsappWindow = window.open(whatsappUrl, "_blank");

  if (whatsappWindow) {
    whatsappWindow.opener = null;
  }
}

function hideMinecraftHelper() {
  if (!minecraftHelper) {
    return;
  }

  minecraftHelper.classList.remove("is-visible");
  markHelperClosed();

  window.setTimeout(() => {
    minecraftHelper.classList.add("hidden");
  }, 700);
}

function showMinecraftHelper() {
  if (!minecraftHelper || helperWasClosed()) {
    return;
  }

  minecraftHelper.classList.remove("has-settled");
  minecraftHelper.classList.remove("hidden");
  window.requestAnimationFrame(() => {
    minecraftHelper.classList.add("is-visible");
  });

  window.setTimeout(() => {
    minecraftHelper.classList.add("has-settled");
  }, 950);
}

function setupMinecraftHelper() {
  if (!minecraftHelper || !canUseMinecraftHelper || helperWasClosed()) {
    return;
  }

  window.setTimeout(showMinecraftHelper, 15000);

  if (minecraftHelperClose) {
    minecraftHelperClose.addEventListener("click", hideMinecraftHelper);
  }

  if (minecraftHelperCharacter) {
    minecraftHelperCharacter.addEventListener("click", openWhatsAppChat);
  }
}

function setupPixelCursor() {
  if (!pixelCursor || !canUseCustomCursor) {
    return;
  }

  let targetX = -80;
  let targetY = -80;
  let currentX = targetX;
  let currentY = targetY;

  function renderCursor() {
    currentX += (targetX - currentX) * 0.24;
    currentY += (targetY - currentY) * 0.24;
    pixelCursor.style.transform = `translate3d(${currentX - 9}px, ${currentY - 4}px, 0)`;
    window.requestAnimationFrame(renderCursor);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      document.body.classList.add("custom-cursor-active");
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("custom-cursor-active");
  });

  document.addEventListener("mouseenter", () => {
    document.body.classList.add("custom-cursor-active");
  });

  renderCursor();
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

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    setLanguageMenuOpen(languageMenu.hidden);
  });
}

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.lang);
    setLanguageMenuOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!languageSwitcher || languageSwitcher.contains(event.target)) {
    return;
  }

  setLanguageMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLanguageMenuOpen(false);
  }
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

    updateProjectSpotlightPosition();
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

function showFieldState(element, messageKey) {
  if (!element) {
    return;
  }

  const message = messageKey ? translate(messageKey) : "";
  element.textContent = message;
  element.dataset.messageKey = messageKey || "";
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
      showFieldState(nameError, "form.nameRequired");
      hasError = true;
    }

    if (!phone) {
      showFieldState(phoneError, "form.phoneRequired");
      hasError = true;
    } else if (!isValidPhone(phone)) {
      showFieldState(phoneError, "form.phoneInvalid");
      hasError = true;
    }

    if (!email) {
      showFieldState(emailError, "form.emailRequired");
      hasError = true;
    } else if (!isValidEmail(email)) {
      showFieldState(emailError, "form.emailInvalid");
      hasError = true;
    }

    if (!message) {
      showFieldState(messageError, "form.messageRequired");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    showFieldState(formSuccess, "form.success");
    contactForm.reset();
  });
}

setupRevealAnimations();
setupAmbientParallax();
setupProjectSpotlight();
setupMinecraftHelper();
setupPixelCursor();
applyLanguage(currentLanguage);
