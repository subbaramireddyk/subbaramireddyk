/**
 * Subbaramireddy K — Portfolio interactions
 * Vanilla JS: no jQuery / plugin dependencies
 */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------------------------------------------------------------
   * Preloader
   * ------------------------------------------------------------------- */
  var preloader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(function () {
        preloader.style.display = "none";
      }, 400);
    }
  });

  /* ---------------------------------------------------------------------
   * Mobile navigation toggle
   * ------------------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("is-active");
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Sticky navbar + scroll spy (active link highlighting)
   * ------------------------------------------------------------------- */
  var navbar = document.getElementById("navbar");
  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll(".nav-link");

  function onScroll() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }

    var scrollPos = window.scrollY + 140;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      var link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (!link) return;

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach(function (a) {
          a.classList.remove("active");
        });
        link.classList.add("active");
      }
    });

    var backToTop = document.getElementById("backToTop");
    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 500);
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------------------------------------------------------------------
   * Smooth scrolling for in-page anchors
   * ------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var offset = target.offsetTop - 84;
      window.scrollTo({ top: offset, behavior: "smooth" });
    });
  });

  var backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
   * Reveal-on-scroll animations
   * ------------------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          setTimeout(function () {
            entry.target.classList.add("is-visible");
          }, index * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------------------------------------------------------------------
   * Hero role typewriter effect
   * ------------------------------------------------------------------- */
  var roles = [
    "DevSecOps Engineer",
    "Multi-Cloud Platform Engineer",
    "Kubernetes (CKA) Specialist",
    "GitOps & CI/CD Automation",
    "Cloud-Native Platform Engineer"
  ];
  var typewriterEl = document.getElementById("typewriter");

  if (typewriterEl) {
    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function typeLoop() {
      var current = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        typewriterEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeLoop, 1400);
          return;
        }
      } else {
        charIndex--;
        typewriterEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(typeLoop, deleting ? 35 : 65);
    }

    typeLoop();
  }

  /* ---------------------------------------------------------------------
   * Terminal window typing simulation
   * ------------------------------------------------------------------- */
  var terminalLines = [
    { type: "prompt", text: "kubectl get nodes -o wide" },
    { type: "output", text: "NAME          STATUS   VERSION\nnode-eks-01   Ready    v1.34\nnode-eks-02   Ready    v1.34" },
    { type: "prompt", text: "argocd app sync platform-hub" },
    { type: "output", text: "Syncing 12 apps across 4 clusters... Synced \u2705" },
    { type: "prompt", text: "terraform apply -var-file=prod.tfvars" },
    { type: "output", text: "Apply complete! Resources: 18 added, 0 destroyed." },
    { type: "prompt", text: "echo $MONTHLY_CLOUD_COST_SAVINGS" },
    { type: "output", text: "~45% reduced via autoscaling \u2705" }
  ];

  var terminalBody = document.getElementById("terminalBody");

  function typeTerminal() {
    if (!terminalBody) return;
    terminalBody.innerHTML = "";
    var lineIdx = 0;

    function nextLine() {
      if (lineIdx >= terminalLines.length) {
        setTimeout(function () {
          terminalBody.innerHTML = "";
          lineIdx = 0;
          nextLine();
        }, 3000);
        return;
      }

      var line = terminalLines[lineIdx];
      var div = document.createElement("div");
      div.className = "terminal-line";

      if (line.type === "prompt") {
        var promptSpan = document.createElement("span");
        promptSpan.className = "terminal-prompt";
        promptSpan.textContent = "$ ";
        div.appendChild(promptSpan);

        var textNode = document.createElement("span");
        div.appendChild(textNode);
        terminalBody.appendChild(div);

        var i = 0;
        var typer = setInterval(function () {
          textNode.textContent += line.text.charAt(i);
          i++;
          if (i >= line.text.length) {
            clearInterval(typer);
            lineIdx++;
            setTimeout(nextLine, 260);
          }
        }, 28);
      } else {
        div.classList.add("terminal-output");
        div.textContent = line.text;
        terminalBody.appendChild(div);
        lineIdx++;
        setTimeout(nextLine, 500);
      }

      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    nextLine();
  }

  typeTerminal();

  /* ---------------------------------------------------------------------
   * Experience / Education tabs
   * ------------------------------------------------------------------- */
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");

      tabButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      tabPanels.forEach(function (p) {
        p.classList.remove("active");
      });

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  /* ---------------------------------------------------------------------
   * Animated stat counters
   * ------------------------------------------------------------------- */
  var statEls = document.querySelectorAll(".stat-count");

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = target * progress;
      el.textContent = (target % 1 === 0 ? Math.floor(value) : value.toFixed(1)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  var statObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  statEls.forEach(function (el) {
    statObserver.observe(el);
  });

  /* ---------------------------------------------------------------------
   * Contact form (Formspree AJAX submission)
   * ------------------------------------------------------------------- */
  var contactForm = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var submitBtn = contactForm.querySelector(".submitform");
      var originalLabel = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;
      formStatus.textContent = "";
      formStatus.className = "";

      fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.textContent = "Thanks! Your message has been sent \u2014 I'll get back to you soon.";
            formStatus.className = "success";
            contactForm.reset();
          } else {
            formStatus.textContent = "Something went wrong. Please try again or email me directly.";
            formStatus.className = "error";
          }
        })
        .catch(function () {
          formStatus.textContent = "Network error. Please try again or email me directly.";
          formStatus.className = "error";
        })
        .finally(function () {
          submitBtn.textContent = originalLabel;
          submitBtn.disabled = false;
        });
    });
  }
});
