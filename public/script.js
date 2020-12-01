console.log("sanity check");

/* navbar logic */

document.querySelector(".menu-icons").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("active");
});

window.onscroll = function () {
    growShrinkLogo();
};

function growShrinkLogo() {
    let logo = document.getElementsByClassName("navbar-logo")[0];
    let navbar = document.getElementsByClassName("navbar")[0];
    console.log(screen.width);
    if (
        (screen.width > 1100 && document.body.scrollTop > 50) ||
        document.documentElement.scrollTop > 50
    ) {
        console.log("shrinking!");
        navbar.style.height = "6rem";
        navbar.style.backgroundColor = "black";
        logo.style.width = "12rem";
        logo.style.top = "0";
    } else {
        if (navbar.classList.contains("prod")) {
            navbar.style.height = "8rem";
            navbar.style.background = "none";
        } else {
            navbar.style.height = "8rem";
        }
        if (screen.width > 1100) {
            logo.style.top = "30px";
            logo.style.width = "23rem";
        } else {
            logo.style.top = "0px";
        }
        console.log("NOT shrinking!");
    }
}

/* mastering form conditional logics */

let vinylCheckBox = document.getElementById("vinyl");
let vinylRadio = document.getElementById("vinyl-radio");
let lacquer = document.getElementById("lacquer");
let lacquerRadio = document.getElementById("lacquer-radio");

let cdCheckBox = document.getElementById("cd");
let cdRadio = document.getElementById("cd-radio");

let tapeCheckBox = document.getElementById("tape");
let tapeRadio = document.getElementById("tape-radio");

vinylCheckBox.onclick = function () {
    vinylRadio.classList.toggle("hidden");
};

vinylRadio.onclick = function () {
    if (lacquer.checked) {
        lacquerRadio.classList.add("show");
        lacquerRadio.classList.remove("hidden");
    } else {
        lacquerRadio.classList.remove("show");
        lacquerRadio.classList.add("hidden");
    }
};

cdCheckBox.onclick = function () {
    cdRadio.classList.toggle("hidden");
};

tapeCheckBox.onclick = function () {
    tapeRadio.classList.toggle("hidden");
};

/* mastering form math */

let tracksNumber = document.getElementById("tracks");
let additionalFormat = document.getElementById("additional-format");
let stemMastering = document.getElementById("stem-mastering");
let totalSum = document.getElementById("total");
let pressingShipment = document.getElementById("pressing-shipment");
let cuttingOptionsA = document.getElementsByName("lacquer-radA");
let cuttingOptionsB = document.getElementsByName("lacquer-radB");
let cdOptions = document.getElementsByName("cd-radio");
let tapeOptions = document.getElementsByName("tape-radio");
let vatOptions = document.getElementsByName("vat-radio");

function calculateTotal() {
    var total;
    total = 0;

    total = tracksNumber.value * 35;
    if (additionalFormat.checked) {
        total += 5 * tracksNumber.value;
    }
    if (stemMastering.checked) {
        total += 30 * tracksNumber.value;
    }
    if (vinylCheckBox.checked && lacquer.checked) {
        total += 1 * pressingShipment.value;
    }

    for (var i = 0; i < cuttingOptionsA.length; i++) {
        if (cuttingOptionsA[i].checked) {
            total += 1 * cuttingOptionsA[i].value;
        }
    }

    for (var i = 0; i < cuttingOptionsB.length; i++) {
        if (cuttingOptionsB[i].checked) {
            total += 1 * cuttingOptionsB[i].value;
        }
    }

    for (var i = 0; i < cdOptions.length; i++) {
        if (cdOptions[i].checked) {
            total += 1 * cdOptions[i].value;
        }
    }
    for (var i = 0; i < tapeOptions.length; i++) {
        if (tapeOptions[i].checked) {
            total += 1 * tapeOptions[i].value;
        }
    }

    for (var i = 0; i < vatOptions.length; i++) {
        if (vatOptions[i].checked) {
            total = total * vatOptions[i].value;
        }
    }

    totalSum.innerHTML = total.toFixed(2);
}
