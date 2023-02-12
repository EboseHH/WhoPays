//create an array to hold the names from the form inputs
const entries = [];

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
});
