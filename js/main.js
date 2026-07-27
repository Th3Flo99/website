/**
 * florianronsse.net — site behaviour
 * -------------------------------------------------------------------------
 * Vanilla JavaScript, no dependencies. Loaded with `defer`, after js/i18n.js
 * which provides the global `translations` object.
 *
 * Blocks in this file:
 *   1. Language switching (?lang= -> localStorage -> nl)
 *   2. Mobile navigation
 *   3. Scrollspy for the active navigation state
 *   4. Scroll reveal animations
 *   5. Contact form (validation, spam limiting, Formspree)
 *   6. Footer year
 *
 * Every lookup is guarded, so removing an element from the HTML degrades
 * gracefully instead of throwing.
 */
(function () {
  "use strict";

  var DEFAULT_LANG = "nl";
  var STORAGE_KEY = "lang";
  var dictionaries = typeof translations === "object" && translations ? translations : {};

  /* =====================================================================
     1. Language switching
     ===================================================================== */

  var currentLang = DEFAULT_LANG;

  /** localStorage can throw in private mode or with cookies blocked. */
  function readStoredLang() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* Opslaan is optioneel: de taal blijft gewoon voor deze sessie gelden. */
    }
  }

  function isSupported(lang) {
    return typeof lang === "string" && Object.prototype.hasOwnProperty.call(dictionaries, lang);
  }

  /**
   * Priority: ?lang= in the URL, then the stored preference, then Dutch.
   * A link such as https://florianronsse.net/?lang=en therefore opens in
   * English and keeps that choice for the next visit.
   */
  function detectLang() {
    var fromUrl = null;
    try {
      fromUrl = new URLSearchParams(window.location.search).get("lang");
    } catch (err) {
      fromUrl = null;
    }
    if (fromUrl) fromUrl = fromUrl.toLowerCase();
    if (isSupported(fromUrl)) return fromUrl;

    var stored = readStoredLang();
    if (isSupported(stored)) return stored;

    return isSupported(DEFAULT_LANG) ? DEFAULT_LANG : Object.keys(dictionaries)[0];
  }

  function setMeta(selector, value) {
    if (!value) return;
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  function setLanguage(lang) {
    if (!isSupported(lang)) return;

    var dict = dictionaries[lang];
    currentLang = lang;
    storeLang(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-placeholder")];
      if (value) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-aria-label")];
      if (value) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n-alt")];
      if (value) el.setAttribute("alt", value);
    });

    /* Document- en socialemetadata mee laten wisselen */
    document.documentElement.lang = lang;
    if (dict["meta.title"]) document.title = dict["meta.title"];
    setMeta('meta[name="description"]', dict["meta.description"]);
    setMeta('meta[property="og:title"]', dict["meta.ogTitle"]);
    setMeta('meta[property="og:description"]', dict["meta.ogDescription"]);
    setMeta('meta[property="og:locale"]', dict["meta.ogLocale"]);
    setMeta('meta[name="twitter:title"]', dict["meta.ogTitle"]);
    setMeta('meta[name="twitter:description"]', dict["meta.ogDescription"]);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    /* Reeds getoonde formulierfouten meteen in de nieuwe taal tonen */
    refreshFieldErrors();
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLanguage(btn.dataset.lang);
    });
  });

  /* =====================================================================
     2. Mobile navigation
     ===================================================================== */

  var burger = document.getElementById("nav-burger");
  var navLinks = document.getElementById("nav-links");

  function closeNav(returnFocus) {
    if (!navLinks || !burger) return;
    if (!navLinks.classList.contains("open")) return;

    navLinks.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    if (returnFocus) burger.focus();
  }

  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });

    /* Een link aanklikken sluit het menu */
    navLinks.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav(false);
    });

    /* Escape sluit het menu en geeft de focus terug aan de knop */
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav(true);
    });

    /* Klikken buiten de navigatie sluit het menu */
    document.addEventListener("click", function (event) {
      if (!navLinks.classList.contains("open")) return;
      if (event.target.closest(".nav")) return;
      closeNav(false);
    });

    /* Terug naar desktopbreedte: menu resetten */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 780) closeNav(false);
    });
  }

  /* =====================================================================
     3. Scrollspy — actieve navigatiestatus
     ===================================================================== */

  var navAnchors = navLinks ? Array.prototype.slice.call(navLinks.querySelectorAll('a[href^="#"]')) : [];
  var spySections = navAnchors
    .map(function (anchor) {
      return document.querySelector(anchor.getAttribute("href"));
    })
    .filter(Boolean);

  function setActiveSection(id) {
    navAnchors.forEach(function (anchor) {
      var active = anchor.getAttribute("href") === "#" + id;
      anchor.classList.toggle("active", active);
      if (active) {
        anchor.setAttribute("aria-current", "true");
      } else {
        anchor.removeAttribute("aria-current");
      }
    });
  }

  if (spySections.length && "IntersectionObserver" in window) {
    var visibleSections = new Set();
    var sectionOrder = spySections.map(function (section) {
      return section.id;
    });

    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        /* De bovenste zichtbare sectie wint */
        var active = sectionOrder.find(function (id) {
          return visibleSections.has(id);
        });
        setActiveSection(active || "");
      },
      { rootMargin: "-88px 0px -55% 0px", threshold: 0 }
    );

    spySections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* =====================================================================
     4. Scroll reveal
     ===================================================================== */

  var revealTargets = document.querySelectorAll(".reveal");
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealTargets.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    /* Pas verbergen zodra we zeker weten dat we ze ook weer kunnen tonen */
    document.documentElement.classList.add("js-reveal");

    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    revealTargets.forEach(function (target) {
      revealObserver.observe(target);
    });
  }

  /* =====================================================================
     5. Contact form
     ===================================================================== */

  var form = document.getElementById("contact-form");
  var formStatus = document.getElementById("form-status");
  var pageLoadedAt = Date.now();
  var MIN_FILL_SECONDS = 3000;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* Onthoudt welke foutsleutel bij welk veld hoort, zodat een taalwissel
     zichtbare foutmeldingen meteen kan hervertalen. */
  var activeFieldErrors = {};

  function fieldErrorElement(fieldId) {
    return document.getElementById(fieldId + "-error");
  }

  function showFieldError(fieldId, key) {
    var field = document.getElementById(fieldId);
    var target = fieldErrorElement(fieldId);
    activeFieldErrors[fieldId] = key;
    if (field) field.setAttribute("aria-invalid", "true");
    if (target) target.textContent = (dictionaries[currentLang] || {})[key] || "";
  }

  function clearFieldError(fieldId) {
    var field = document.getElementById(fieldId);
    var target = fieldErrorElement(fieldId);
    delete activeFieldErrors[fieldId];
    if (field) field.removeAttribute("aria-invalid");
    if (target) target.textContent = "";
  }

  function refreshFieldErrors() {
    Object.keys(activeFieldErrors).forEach(function (fieldId) {
      var target = fieldErrorElement(fieldId);
      if (target) {
        target.textContent = (dictionaries[currentLang] || {})[activeFieldErrors[fieldId]] || "";
      }
    });
  }

  function setStatus(key, state) {
    if (!formStatus) return;
    formStatus.className = "form-status" + (state ? " " + state : "");
    formStatus.textContent = (dictionaries[currentLang] || {})[key] || "";
  }

  /** Returns the id of the first invalid field, or null when everything checks out. */
  function validateForm() {
    var firstInvalid = null;
    var checks = [
      { id: "name", key: "contact.form.errName", test: function (value) { return value.length > 0; } },
      { id: "email", key: "contact.form.errEmail", test: function (value) { return EMAIL_PATTERN.test(value); } },
      { id: "message", key: "contact.form.errMessage", test: function (value) { return value.length > 0; } }
    ];

    checks.forEach(function (check) {
      var field = document.getElementById(check.id);
      if (!field) return;
      if (check.test(field.value.trim())) {
        clearFieldError(check.id);
      } else {
        showFieldError(check.id, check.key);
        if (!firstInvalid) firstInvalid = check.id;
      }
    });

    return firstInvalid;
  }

  if (form) {
    /* Fout weghalen zodra de bezoeker het veld corrigeert */
    ["name", "email", "message"].forEach(function (fieldId) {
      var field = document.getElementById(fieldId);
      if (!field) return;
      field.addEventListener("input", function () {
        if (activeFieldErrors[fieldId]) clearFieldError(fieldId);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      /* Honeypot: alleen bots vullen dit verborgen veld in. */
      var gotcha = form.querySelector('[name="_gotcha"]');
      if (gotcha && gotcha.value.trim() !== "") return;

      /* Eerst valideren: een bezoeker moet altijd zien wat er mis is met
         zijn invoer, ook als hij snel typt. */
      var firstInvalid = validateForm();
      if (firstInvalid) {
        var field = document.getElementById(firstInvalid);
        if (field) field.focus();
        setStatus("", "");
        return;
      }

      /* Tijdslot: een volledig ingevuld formulier dat binnen enkele seconden
         wordt ingediend, is vrijwel altijd geautomatiseerd. */
      if (Date.now() - pageLoadedAt < MIN_FILL_SECONDS) {
        setStatus("contact.form.errTooFast", "error");
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      setStatus("contact.form.sending", "");
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!response.ok) throw new Error("Formspree responded with " + response.status);
          setStatus("contact.form.success", "success");
          form.reset();
        })
        .catch(function () {
          setStatus("contact.form.error", "error");
        })
        .then(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* =====================================================================
     6. Footer year
     ===================================================================== */

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* =====================================================================
     Init
     ===================================================================== */

  setLanguage(detectLang());
})();
