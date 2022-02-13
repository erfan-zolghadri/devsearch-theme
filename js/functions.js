const showNavbarMenu = function () {
    const navButton = document.querySelector('.navbar__button');
    const navMenu = document.querySelector('.navbar__menu');
    let isnavMenuVisible = false;

    navButton.addEventListener("click", function () {
        if (!isnavMenuVisible) {
            navButton.classList.add("js-change");
            navMenu.classList.add("js-show");
            isnavMenuVisible = true;
        } else {
            navButton.classList.remove("js-change");
            navMenu.classList.remove("js-show");
            isnavMenuVisible = false;
        }
    });
}

const closeAlertMessage = function () {
    const alertButtons = document.querySelectorAll('.alert__button');
    if (alertButtons) {
        alertButtons.forEach(btn => {
            btn.addEventListener("click", function () {
                const alertWrapper = btn.parentElement;
                alertWrapper.style.display = "none";
            })
        });
    }
}