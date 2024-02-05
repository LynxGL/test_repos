const btnsView = document.querySelectorAll(".view-btn");

document.addEventListener("DOMContentLoaded", function () {
    const selectedButtonId = localStorage.getItem("selectedButtonId");

    if (selectedButtonId) {
        btnsView.forEach(btn => btn.classList.remove("active"));

        const selectedButton = document.getElementById(selectedButtonId);

        if (selectedButton) {
            selectedButton.classList.add("active");
            setViewListGrid(selectedButtonId);
        }
    }

    btnsView.forEach(btnView => {
        btnView.addEventListener('click', function () {

            const selectedButtonId = this.id;

            btnsView.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");
            setViewListGrid(this.id)

            localStorage.setItem("selectedButtonId", selectedButtonId);
        });
    });

    function setViewListGrid(selectedButtonId) {
        const projectBoxes = document.querySelector(".project-boxes");

        if (selectedButtonId === "button-list") {
            projectBoxes.classList.remove("jsGridView");
            projectBoxes.classList.add("jsListView");
        } else {
            projectBoxes.classList.remove("jsListView");
            projectBoxes.classList.add("jsGridView");
        }
    }
});


