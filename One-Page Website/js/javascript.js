function openModal(src) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("img01").src = src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}