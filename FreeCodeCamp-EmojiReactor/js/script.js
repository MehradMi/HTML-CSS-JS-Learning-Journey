
function updateCount(btnElement) {
    const countEl = btnElement.querySelector(".count");
    let currCount = +countEl.textContent.split("/")[0];

    if (currCount === 10) {
        // Do nothing
    } else if (currCount < 10) {
        currCount++;
        countEl.textContent = currCount + "/10";
    }
}

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => {
    btn.addEventListener("click", () => updateCount(btn));
});