let dropown = document.getElementById("tag-dropdown");
let button = document.getElementById("submit-button");
let listOfElements;

button.addEventListener("click", function () {
  clearHighlight(addHighlight);
});

function clearHighlight(addHighlight) {
  if (listOfElements != undefined) {
    listOfElements.forEach((element) => {
      element.style.border = "";
    });
  }
  addHighlight();
}

function addHighlight() {
  listOfElements = "";
  let selectedTag = dropown.value;
  listOfElements = document.querySelectorAll(selectedTag);
  listOfElements.forEach((element) => {
    element.style.border = "thick solid #0000FF";
    element.style.borderRadius = "10px";
  });
}
