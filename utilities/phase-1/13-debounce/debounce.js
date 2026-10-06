const input = document.querySelector("#input");
const cancelDebounce = document.querySelector("#cancel-debounce");
const flushDebounce = document.querySelector("#flush-debounce");

/*

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

*/

// -----------------------------------------------------------------

/*

function debounce(callbackFn, delay = 1000, options = {}) {
  let timeoutId = null;

  function debounced(...args) {
    clearTimeout(timeoutId);

    const context = this;

    timeoutId = setTimeout(() => {
      callbackFn.call(context, ...args);
    }, delay);
  }

  debounced.cancel = function () {
    if (timeoutId === null) {
      console.log("Nothing to cancel");
      return;
    }

    clearTimeout(timeoutId);
    timeoutId = null;
    console.log("Pending call cancelled");
  };
  return debounced;
}

*/

// ----------------------------------------------------------------

function debounce(callbackFn, delay = 1000) {
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;

  function debounced(...args) {
    clearTimeout(timeoutId);

    lastArgs = args;
    lastContext = this;

    timeoutId = setTimeout(() => {
      callbackFn.call(lastContext, ...lastArgs);

      timeoutId = null;
      lastArgs = null;
      lastContext = null;
    }, delay);
  }

  debounced.cancel = function () {
    if (timeoutId === null) return;

    clearTimeout(timeoutId);
    timeoutId = null;
    lastArgs = null;
    lastContext = null;
  };

  debounced.flush = function () {
    if (timeoutId === null) return;

    clearTimeout(timeoutId);

    callbackFn.call(lastContext, ...lastArgs);

    timeoutId = null;
    lastArgs = null;
    lastContext = null;
  };
  return debounced;
}

function callApi(event) {
  console.log(event.target.value);
}

const debounced = debounce(callApi, 5000);

input.addEventListener("input", debounced);
cancelDebounce.addEventListener("click", () => {
  debounced.cancel();
  console.log("Debounce Cancelled");
});
flushDebounce.addEventListener("click", () => {
  debounced.flush();
  console.log("Debounce Flushed");
});

// setTimeout(() => {
//   debounced.cancel();
// }, 5000);

// input.addEventListener("input", function (...args) {
//   // 'this' inside a regular function refers to the <input> element
//   debounced.call(this, ...args);
// });

// -------------------------------------------------

/*

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

searchWidget.handleInput("javascript");
// Output after 300ms: Sending request to /api/search?q=javascript
//
*/

// --------------------------------------------------

/*

const button = document.querySelector("#submit-btn");

function handleClick(event) {
  // `this` refers to the <button> element
  // this.classList.add("active");
  // this.disabled = true;
  console.log("Button clicked:", this.id);
}

button.addEventListener("click", debounce(handleClick, 500));

*/
