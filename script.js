/* ==========================
   SCROLL REVEAL
========================== */

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        const trigger = window.innerHeight * 0.8;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ==========================
   ACTIVE NAVIGATION
========================== */

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#f7c96a";
topButton.style.color = "#071423";
topButton.style.fontSize = "24px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================
   DARK / LIGHT MODE
========================== */

const modeButton =
document.createElement("button");

modeButton.innerHTML = "🌙";

modeButton.id = "modeBtn";

document.body.appendChild(modeButton);

modeButton.style.position = "fixed";
modeButton.style.left = "25px";
modeButton.style.bottom = "25px";
modeButton.style.width = "55px";
modeButton.style.height = "55px";
modeButton.style.border = "none";
modeButton.style.borderRadius = "50%";
modeButton.style.cursor = "pointer";
modeButton.style.fontSize = "20px";
modeButton.style.background = "#f7c96a";

let darkMode = true;

modeButton.addEventListener("click", () => {

    if (darkMode) {

        document.body.style.background =
            "#ffffff";

        document.body.style.color =
            "#111111";

        modeButton.innerHTML = "☀️";

        darkMode = false;

    } else {

        document.body.style.background =
            "#071423";

        document.body.style.color =
            "#ffffff";

        modeButton.innerHTML = "🌙";

        darkMode = true;
    }

});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"Prem Kumar Portfolio Website Loaded Successfully"
);
