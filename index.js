//create an array to hold the names from the form inputs
const entries = [];

// this function removes the class "active" from every element that has it
// using "querySelectorAll" and "forEach" and then adds the class active to
// the target element which has the id in sectionName
function setActiveSection(sectionName) {
  document.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(`#${sectionName}`).classList.add("active");
}
setActiveSection("landing");

// add an event listener to the forms for when it is submitted
document.querySelector("#names").addEventListener("submit", (event) => {
  // prevent the default action of the form which is to
  // navigate to a differet page on submit
  event.preventDefault();

  // FormData provides various methods for interacting with the data submitted in a form
  // it takes in the form element(event.target) as its argument
  // FormData.get() returns the first value associated with a given key from within a FormData object.(the key is the
  //  name attribute in the html input tag e.g <input name="item"> where 'item' is the key)

  const data = new FormData(event.target);
  const entry = data.get("name");

  // add each new entry to the array
  entries.push(entry);
  //  event.target is the current form element
  // the reset method clears all the form fields
  event.target.reset();

  // Construct an array of elements from the array of names (entries) that have been submitted
  // using the map function (entries.map) which takes in the submitted names and applies
  // the function to generate a div with the specified classes and name
  const elements = entries.map((name) => {
    return `<div class="submittedName inline-block ml-3 bg-amber-300 rounded-full px-3 py-1">${name}</div>`;
  });

  // display each submitted name
  document.querySelector("#entries").innerHTML = elements.join("");
});

// this function selects a random name, displays the loading page
// and then displays the result after the timeout
function shuffle() {
  const randomNameIndex = Math.floor(Math.random() * entries.length);
  const randomName = entries[randomNameIndex];
  setActiveSection("loading");
  // set a time out on the loading page and display the results page after 2000 milliseconds
  setTimeout(() => {
    document.querySelector("#instruction").innerHTML =
      "We've selected one person to handle the bills";
    document.querySelector("#randomName").innerHTML = randomName;
    setActiveSection("result");
  }, 2000);
}
// add an event listener to both the shuffle and shuffleAgain button
// when either button is clicked to display the loading page, select a random
// name from the entries and display the result page
document.querySelector("#shuffle").addEventListener("click", shuffle);
document.querySelector("#shuffleAgain").addEventListener("click", shuffle);
