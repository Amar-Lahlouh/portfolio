/* =========================================================
   Amar Lahlouh — Portfolio Script
   Vanilla JS only. Sections: nav, mobile menu, smooth scroll,
   active-link tracking, scroll reveal, terminal typing effect,
   project modal, contact form validation, footer year.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavbarScrollState();
  initMobileMenu();
  initSmoothScroll();
  initActiveNavLink();
  initScrollReveal();
  initTerminalTyping();
  initProjectModal();
  initContactForm();
  initFooterYear();
});

/* ---------- Navbar background on scroll ---------- */
function initNavbarScrollState() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const updateState = () => {
    if (window.scrollY > 12) {
      navbar.classList.add("is-scrolled");
    } else {
      navbar.classList.remove("is-scrolled");
    }
  };

  updateState();
  window.addEventListener("scroll", updateState, { passive: true });
}

/* ---------- Mobile hamburger menu ---------- */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!hamburger || !mobileMenu) return;

  const closeMenu = () => {
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* ---------- Smooth scrolling for in-page links ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* ---------- Highlight active nav link while scrolling ---------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll("main section[id], .hero[id]");
  const navLinks = document.querySelectorAll("[data-nav]");
  if (!sections.length || !navLinks.length) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isMatch);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------- Scroll reveal animations ---------- */
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

/* ---------- Hero terminal typing effect ---------- */
function initTerminalTyping() {
  const codeEl = document.getElementById("typedCode");
  const cursorEl = document.getElementById("terminalCursor");
  if (!codeEl) return;

  const lines = [
    { text: "const developer = {", type: "plain" },
    { text: "  name: ", type: "key", after: '"Amar Lahlouh",', afterType: "str" },
    { text: "  role: ", type: "key", after: '"Full-Stack Developer",', afterType: "str" },
    { text: "  education: ", type: "key", after: '"Computer Engineering, LIU",', afterType: "str" },
    { text: "  stack: ", type: "key", after: "[\"React\", \"Node.js\", \"MongoDB\"],", afterType: "str" },
    { text: "  focus: ", type: "key", after: '"web & mobile apps",', afterType: "str" },
    { text: "  status: ", type: "key", after: '"building..."', afterType: "str" },
    { text: "};", type: "plain" },
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderPlainLine = (line) => {
    const span = document.createElement("span");
    span.className = "tok-punc";
    span.textContent = line.text;
    return span;
  };

  const renderKeyValueLine = (line) => {
    const frag = document.createDocumentFragment();
    const key = document.createElement("span");
    key.className = "tok-key";
    key.textContent = line.text;
    frag.appendChild(key);

    const val = document.createElement("span");
    val.className = "tok-str";
    val.textContent = line.after;
    frag.appendChild(val);
    return frag;
  };

  if (prefersReducedMotion) {
    lines.forEach((line) => {
      const row = document.createElement("div");
      row.appendChild(line.after ? renderKeyValueLine(line) : renderPlainLine(line));
      codeEl.appendChild(row);
    });
    return;
  }

  let lineIndex = 0;

  const typeNextLine = () => {
    if (lineIndex >= lines.length) {
      if (cursorEl) cursorEl.style.visibility = "visible";
      return;
    }

    const line = lines[lineIndex];
    const row = document.createElement("div");
    codeEl.appendChild(row);

    const fullText = line.text + (line.after || "");
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= fullText.length) {
        const partial = fullText.slice(0, charIndex);
        const keyLen = line.text.length;

        row.innerHTML = "";
        if (line.after) {
          const keySpan = document.createElement("span");
          keySpan.className = "tok-key";
          keySpan.textContent = partial.slice(0, Math.min(charIndex, keyLen));
          row.appendChild(keySpan);

          if (charIndex > keyLen) {
            const valSpan = document.createElement("span");
            valSpan.className = "tok-str";
            valSpan.textContent = partial.slice(keyLen);
            row.appendChild(valSpan);
          }
        } else {
          const plainSpan = document.createElement("span");
          plainSpan.className = "tok-punc";
          plainSpan.textContent = partial;
          row.appendChild(plainSpan);
        }

        charIndex++;
        setTimeout(typeChar, 14 + Math.random() * 18);
      } else {
        lineIndex++;
        setTimeout(typeNextLine, 90);
      }
    };

    typeChar();
  };

  typeNextLine();
}

/* ---------- Featured project details modal ---------- */
function initProjectModal() {
  const openBtn = document.getElementById("openProjectModal");
  const closeBtn = document.getElementById("closeProjectModal");
  const overlay = document.getElementById("projectModal");
  if (!openBtn || !closeBtn || !overlay) return;

  const openModal = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  };

  const closeModal = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    openBtn.focus();
  };

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeModal();
    }
  });
}

/* ---------- Contact form validation (static — no real submission) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("formSuccess");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (input, errorEl, message) => {
    if (message) {
      input.classList.add("is-invalid");
      errorEl.textContent = message;
    } else {
      input.classList.remove("is-invalid");
      errorEl.textContent = "";
    }
  };

  const validate = () => {
    let isValid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, nameError, "Please enter your name.");
      isValid = false;
    } else {
      setError(nameInput, nameError, "");
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, emailError, "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      setError(emailInput, emailError, "Please enter a valid email address.");
      isValid = false;
    } else {
      setError(emailInput, emailError, "");
    }

    if (!messageInput.value.trim()) {
      setError(messageInput, messageError, "Please enter a message.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      setError(messageInput, messageError, "Message should be at least 10 characters.");
      isValid = false;
    } else {
      setError(messageInput, messageError, "");
    }

    return isValid;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validate()) {
      successMsg.classList.remove("is-visible");
      successMsg.textContent = "";
      return;
    }

    // NOTE: This is a static site — no backend is connected, so nothing is
    // actually sent anywhere. See README.md for how to wire this up to a
    // service like Formspree or EmailJS for real submissions.
    successMsg.textContent = "Thanks! Your message looks good — connect a form service (see README) to make this a real submission.";
    successMsg.classList.add("is-visible");
    form.reset();

    setTimeout(() => {
      successMsg.classList.remove("is-visible");
    }, 6000);
  });

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("is-invalid")) validate();
    });
  });
}

/* ---------- Footer current year ---------- */
function initFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
