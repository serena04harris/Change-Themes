function applyTheme() {
    const h1 = document.getElementById("main-heading");

    if (document.getElementById("november").checked) {
        h1.classList.add("h1-november");
    } else if (document.getElementById("october").checked) {
        h1.classList.add("h1-october");
    }