const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const button = document.querySelector(".container");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const closeSidebar = document.getElementById("close-sidebar");
const sidebar = document.getElementById("sidebar");
const menuIcon = menuToggle.querySelector("img");
const closeIcon = closeSidebar.querySelector("img");
const cursor = document.querySelector(".cursor");
const headings = document.querySelectorAll(".hvr");

function updateIcons() {
  const isDarkMode = body.classList.contains("dark-mode");

  menuIcon.src = isDarkMode ? "/img/menu-line white.png" : "/img/menu-line.png";

  closeIcon.src = isDarkMode ? "/img/xrp-line white.png" : "/img/xrp-fill.png";
}

button.addEventListener("click", () => {
  sun.classList.toggle("visible");
  moon.classList.toggle("visible");
  body.classList.toggle("dark-mode");
  updateIcons();
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  updateIcons();
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  updateIcons();
});

updateIcons();

document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const headings = document.querySelectorAll(".hvr, .hvr-small, .logo, p");
  const navbarElements = document.querySelectorAll(
    ".navbar button, .navbar a, .navbar .menu-icon, h1, h2, .download-button"
  );
  const closeIcon = document.querySelector("#close-sidebar");
  const imageDivs = document.querySelectorAll(".image .img");

  let mouseX = 0;
  let mouseY = 0;
  const isDarkMode = document.body.classList.contains('dark-mode');

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: () => {
      gsap.set(cursor, { css: { left: mouseX + "px", top: mouseY + "px" } });
    },
  });

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  headings.forEach((link) => {
    link.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
      if (link.classList.contains("hvr-small")) {
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
      }
    });

    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
    });
  });

  navbarElements.forEach((element) => {
    element.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
      if (element.classList.contains("hvr-small")) {
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
      }
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
    });
  });

  if (closeIcon) {
    closeIcon.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
      cursor.classList.remove("grow-small");
    });

    closeIcon.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
    });
  }

  const otherElements = document.querySelectorAll("button, a, .container");
  otherElements.forEach((element) => {
    element.addEventListener("mousemove", () => {
      cursor.classList.add("grow");
      if (element.classList.contains("hvr-small")) {
        cursor.classList.remove("grow");
        cursor.classList.add("grow-small");
      }
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("grow");
      cursor.classList.remove("grow-small");
    });
  });

  document.addEventListener("click", () => {
    cursor.classList.add("grow");
    setTimeout(() => cursor.classList.remove("grow"), 200);
  });

  imageDivs.forEach((imageDiv) => {
    imageDiv.addEventListener("mouseenter", () => {
      cursor.innerHTML = "View More";
      cursor.style.color = isDarkMode ? "white" : "black";
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
      });
    });

    imageDiv.addEventListener("mouseleave", () => {
      cursor.innerHTML = "";
      cursor.style.color = "";
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })
    });
  });
});
document.querySelector('.download-button').addEventListener('click', function() {
  const button = this;
  
  button.classList.add('active');

  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=1caHdbCdK9M6HNoUASIyEIxfmd7lnWkwb'; 
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    button.classList.remove('active');
    
    const icon = button.querySelector('i');
    const text = button.querySelector('.button-text');
    icon.classList.replace('ri-download-cloud-line', 'ri-checkbox-circle-line');
    text.textContent = 'Completed';
    
    setTimeout(() => {
      icon.classList.replace('ri-checkbox-circle-line', 'ri-download-cloud-line');
      text.textContent = 'Download';
    }, 2000);

  }, 3000);
});


function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

