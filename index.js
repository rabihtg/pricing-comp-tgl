const slider = document.querySelector(".slider");
const sliderBox = document.querySelector(".slider-btn");
const annualData = document.querySelectorAll(".card__price.annual");
const monthlyData = document.querySelectorAll(".card__price.monthly");

slider.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (sliderBox.checked === true) {
      sliderBox.checked = false;
    } else {
      sliderBox.checked = true;
    }
    toggleData();
    localStorage.toggledPlan = sliderBox.checked;
  }
});

sliderBox.addEventListener("change", () => {
  toggleData();
  localStorage.toggledPlan = sliderBox.checked;
});

window.addEventListener("load", () => {
  if (localStorage.toggledPlan === "true") {
    sliderBox.setAttribute("checked", true);
  } else {
    sliderBox.removeAttribute("checked");
    toggleData();
  }
});

function toggleData() {
  annualData.forEach((item) => {
    item.classList.toggle("hidden-data");
  });
  document.querySelectorAll(".main__card").forEach((item) => {
    item.classList.toggle("ann");
  });
  monthlyData.forEach((item) => {
    item.classList.toggle("hidden-data");
  });
}
