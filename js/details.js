import { BASE_URL } from "./constants.js";
import {
  elDetailsAccelaration,
  elDetailsCategory,
  elDetailsCity,
  elDetailsColor,
  elDetailsColorName,
  elDetailsCombined,
  elDetailsCountry,
  elDetailsDescription,
  elDetailsDoorCount,
  elDetailsEngine,
  elDetailsFuelType,
  elDetailsGeneration,
  elDetailsHighway,
  elDetailsHorsePower,
  elDetailsLoading,
  elDetailsMaxSpeed,
  elDetailsSeatCount,
  elDetailsTitle,
  elDetailsTrim,
  elDetailsWrapper,
  elDetailsYear,
} from "./html-selection.js";

let title;

function init() {
  Loading(true);
  const id = new URLSearchParams(location.search).get("id");
  fetch(BASE_URL + "/cars" + `/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      DisplayDetails(res);
    })
    .catch(() => {})
    .finally(() => {
      Loading(false);
    });
}

function Loading(bool) {
  if (bool) {
    document.title = "Yuklanmoqda...";
    elDetailsLoading.classList.remove("hidden");
  } else {
    document.title = title;
    elDetailsWrapper.classList.add("scale-100");
    elDetailsLoading.classList.add("hidden");
  }
}

function DisplayDetails(carData) {
  title = carData.name;
  elDetailsTitle.innerText = carData.name;
  elDetailsDescription.innerText = carData.description;
  elDetailsTrim.innerText = carData.trim;
  elDetailsGeneration.innerText = carData.generation;
  elDetailsYear.innerText = carData.year;
  elDetailsColor.style.backgroundColor = carData.color;
  elDetailsColorName.innerText = carData.colorName;
  elDetailsCategory.innerText = carData.category;
  elDetailsMaxSpeed.innerText = carData.maxSpeed;
  elDetailsSeatCount.innerText = carData.seatCount;
  elDetailsDoorCount.innerText = carData.doorCount;
  elDetailsAccelaration.innerText = carData.acceleration;
  elDetailsEngine.innerText = carData.engine;
  elDetailsHorsePower.innerText = carData.horsepower;
  elDetailsFuelType.innerText = carData.fuelType;
  elDetailsCountry.innerText = carData.country;
  elDetailsCity.innerText = carData?.fuelConsumption?.city;
  elDetailsHighway.innerText = carData?.fuelConsumption?.highway;
  elDetailsCombined.innerText = carData?.fuelConsumption?.combined;
}

init();
