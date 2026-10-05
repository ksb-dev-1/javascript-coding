const input = document.querySelector("#input");

function debounce(callbackFn, delay = 1000) {
  let timeOutId = null;

  return function (...args) {
    clearTimeout(timeOutId);

    const context = this;

    timeOutId = setTimeout(() => {
      callbackFn.call(context, ...args);
    }, delay);
  };
}

// function callApi() {
//   console.log("Api called.");
// }

// const debounced = debounce(callApi, 500);

// // input.addEventListener("input", debounced);

// input.addEventListener("input", function (...args) {
//   // 'this' inside a regular function refers to the <input> element
//   debounced.call(this, ...args);
// });

// -------------------------------------------------

class SearchComponent {
  constructor() {
    this.apiEndpoint = "/api/search";
    this.handleInput = debounce(this.performSearch, 3000);
  }

  performSearch(query) {
    console.log(`Sending request to ${this.apiEndpoint}?q=${query}`);
  }
}

const searchWidget = new SearchComponent();

// Called in the context of searchWidget:
searchWidget.handleInput("javascript");
// Output after 300ms: Sending request to /api/search?q=javascript

// --------------------------------------------------

const button = document.querySelector("#submit-btn");

function handleClick(event) {
  // `this` refers to the <button> element
  // this.classList.add("active");
  // this.disabled = true;
  console.log("Button clicked:", this.id);
}

// Attach debounced event listener
button.addEventListener("click", debounce(handleClick, 500));
