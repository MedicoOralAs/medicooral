window.onload = function () {
  const copyright = document.getElementById("copyright");
  const menuItems = [];
  const currentYear = new Date().getFullYear();

  if (!window.location.href.includes("_en.html")) {
    menuItems.push(
      { text: "Početna", sectionId: "#home" },
      { text: "Usluge", sectionId: "#services" },
      { text: "Naš tim", sectionId: "#team" },
      { text: "Svjedočanstva", sectionId: "#testimonials" },
      { text: "Naša historija", sectionId: "#history" },
      { text: "Česta pitanja", sectionId: "#faq" },
      { text: "Kontakt", sectionId: "#contact" },
      { text: "O nama", sectionId: "#about" }
    );
    copyright.innerText = `© ${currentYear} Medico Oral AS. Sva prava zadržana`;
  } else {
    menuItems.push(
      { text: "Home", sectionId: "#home" },
      { text: "Services", sectionId: "#services" },
      { text: "Our Team", sectionId: "#team" },
      { text: "Testimonials", sectionId: "#testimonials" },
      { text: "Our History", sectionId: "#history" },
      { text: "Frequent Questions", sectionId: "#faq" },
      { text: "Contact", sectionId: "#contact" },
      { text: "About Us", sectionId: "#about" }
    );
    copyright.innerText = `© ${currentYear} Medico Oral AS. All rights reserved`;
  }

  const menuList = document.getElementById("menu-list");
  const ul = document.createElement("ul");

  menuItems.forEach(function (item) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.text;
    a.href = "javascript:void(0);";
    a.onclick = function () {
      scrollToSection(item.sectionId);
    };

    li.appendChild(a);
    ul.appendChild(li);
  });

  menuList.appendChild(ul);
};

function scrollToSection(sectionId) {
  var offset = document.querySelector(".menu").offsetHeight;
  var targetElement = document.querySelector(sectionId);

  window.scrollTo({
    top: targetElement.offsetTop - offset - 100,
    behavior: "smooth",
  });

  toggleMenu();
}

function scrollToContact() {
  const contact = document.querySelector("#contact");
  const offset = document.querySelector(".menu").offsetHeight;

  window.scrollTo({
    top: contact.offsetTop - offset - 100,
    behavior: "smooth",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleMenu() {
  const menuList = document.getElementById("menu-list");
  const menuButton = document.getElementById("menu-button");

  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");

  document.body.style.overflow = menuList.classList.contains("active")
    ? "hidden"
    : "";
}
