
const funzione = function() {
    document.querySelector("body").classList.toggle("menuopened");
}

const searchbar = function() {
    document.querySelector("body").classList.toggle("searchopened");
}

document.querySelector(".buttonbars").addEventListener("click", funzione);
document.querySelector(".buttonsearch").addEventListener("click", searchbar);

document.getElementById("nosubmit").addEventListener("click", function(event)
{
    event.preventDefault()
});
