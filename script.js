document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // Close mobile menu when clicking on a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Highlight active nav link on scroll
  window.addEventListener("scroll", onScroll);

  function onScroll() {
    const scrollPos = window.scrollY;

    // Change header style on scroll
    const header = document.querySelector(".header");
    if (scrollPos > 50) {
      header.style.padding = "0.5rem 0";
      header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.padding = "1rem 0";
      header.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
    }

    // Update active nav link
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Load products
  const products = [
    { id: 1, name: "Baju 1", price: "RM50", image: "assets/products/t1.jpg" },
    { id: 2, name: "Baju 2", price: "RM50", image: "assets/products/t2.jpg" },
    { id: 3, name: "Baju 3", price: "RM50", image: "assets/products/t3.jpg" },
    { id: 4, name: "Baju 4", price: "RM50", image: "assets/products/t1.jpg" },
    { id: 5, name: "Baju 5", price: "RM50", image: "assets/products/t1.jpg" },
    { id: 6, name: "Baju 6", price: "RM50", image: "assets/products/t1.jpg" },
    { id: 7, name: "Baju 7", price: "RM50", image: "assets/products/t1.jpg" },
    { id: 8, name: "Baju 8", price: "RM50", image: "assets/products/t1.jpg" },
  ];

  const productGrid = document.getElementById("product-grid");

  if (productGrid) {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <span class="product-brand">Claryty</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price-cart">
                        <span class="product-price">${product.price}</span>
                        <div class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
            `;

      productGrid.appendChild(productCard);
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simulate form submission (replace with actual form submission)
      contactForm.classList.add("hidden");
      formSuccess.classList.remove("hidden");

      // Reset form after 5 seconds
      setTimeout(() => {
        contactForm.reset();
        contactForm.classList.remove("hidden");
        formSuccess.classList.add("hidden");
      }, 5000);
    });
  }

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});
