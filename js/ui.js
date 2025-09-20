import { elCardContainer, elCardTemplate } from "./html-selection.js";

export function ui(cars) {
  elCardContainer.innerHTML = "";

  cars.forEach((car) => {
    const clone = elCardTemplate.cloneNode(true).content;
    const elName = clone.getElementById("name");
    const elDescription = clone.getElementById("description");
    const elCountry = clone.getElementById("country");
    const elCategory = clone.getElementById("category");
    const elColor = clone.getElementById("color");
    const elColorBadge = clone.getElementById("colorBadge");
    const elDelete = clone.querySelector(".js-delete");
    const elEdit = clone.querySelector(".js-edit");
    const elInfo = clone.querySelector(".js-info");

    // id
    elDelete.id = car.id;
    elEdit.id = car.id;
    elInfo.id = car.id;

    // content
    elName.innerHTML = car.name;
    elDescription.innerHTML = car.description;
    elCountry.innerHTML = car.country;
    elCategory.innerHTML = car.category;
    elColor.innerHTML = car.colorName;
    elColorBadge.style.backgroundColor = car.color;

    // append
    elCardContainer.append(clone);
  });
}
