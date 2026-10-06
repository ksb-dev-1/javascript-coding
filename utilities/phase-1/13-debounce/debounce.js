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

/*

function debounce(callbackFn, delay = 1000) {
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;

  function reset() {
    timeoutId = null;
    lastArgs = null;
    lastContext = null;
  }

  function debounced(...args) {
    clearTimeout(timeoutId);

    lastArgs = args;
    lastContext = this;

    timeoutId = setTimeout(() => {
      callbackFn.call(lastContext, ...lastArgs);
      reset();
    }, delay);
  }

  debounced.cancel = function () {
    if (timeoutId === null) {
      return false;
    }

    clearTimeout(timeoutId);
    reset();

    return true;
  };

  debounced.flush = function () {
    if (timeoutId === null) {
      return false;
    }

    clearTimeout(timeoutId);
    callbackFn.call(lastContext, ...lastArgs);
    reset();

    return true;
  };
  return debounced;
}

*/

/*

function debounceLeading(callbackFn, delay = 1000) {
  let timeoutId = null;

  return function (...args) {
    const shouldRunNow = timeoutId === null;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);

    if (shouldRunNow) {
      callbackFn.call(this, ...args);
    }
  };
}

*/

/*

function debounceLeadingTrailing(callbackFn, delay = 1000) {
  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;
  let hasNewCallAfterLeading = false;

  return function (...args) {
    const isFirstCall = timeoutId === null;

    lastArgs = args;
    lastContext = this;

    if (isFirstCall) {
      callbackFn.call(lastContext, ...lastArgs);
    } else {
      hasNewCallAfterLeading = true;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (hasNewCallAfterLeading) {
        callbackFn.call(lastContext, ...lastArgs);
      }

      timeoutId = null;
      lastArgs = null;
      lastContext = null;
      hasNewCallAfterLeading = false;
    }, delay);
  };
}

*/

function debounce(callbackFn, delay = 1000, options = {}) {
  const { leading = false, trailing = true } = options;

  let timeoutId = null;
  let lastArgs = null;
  let lastContext = null;
  let hasPendingTrailingCall = false;

  function reset() {
    timeoutId = null;
    lastArgs = null;
    lastContext = null;
    hasPendingTrailingCall = false;
  }

  function debounced(...args) {
    const isFirstCall = timeoutId === null;

    lastArgs = args;
    lastContext = this;

    // Run immediately on the first call when leading is true.
    if (leading && isFirstCall) {
      callbackFn.call(lastContext, ...lastArgs);
    }

    // A trailing call is needed:
    // - always for trailing-only debounce
    // - only after another call for leading + trailing debounce
    if (trailing && (!leading || !isFirstCall)) {
      hasPendingTrailingCall = true;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      if (hasPendingTrailingCall) {
        callbackFn.call(lastContext, ...lastArgs);
      }

      reset();
    }, delay);
  }

  debounced.cancel = function () {
    if (timeoutId === null) {
      return false;
    }

    clearTimeout(timeoutId);
    reset();

    return true;
  };

  debounced.flush = function () {
    if (timeoutId === null || !hasPendingTrailingCall) {
      return false;
    }

    clearTimeout(timeoutId);

    callbackFn.call(lastContext, ...lastArgs);

    reset();

    return true;
  };

  return debounced;
}

function callApi(event) {
  console.log(event.target.value);
}

const debounced = debounce(callApi, 5000);

input.addEventListener("input", debounced);

cancelDebounce.addEventListener("click", () => {
  const wasCancelled = debounced.cancel();

  if (wasCancelled) {
    console.log("Pending debounce cancelled");
  } else {
    console.log("Nothing was waiting to cancel");
  }
});

flushDebounce.addEventListener("click", () => {
  const wasFlushed = debounced.flush();

  if (wasFlushed) {
    console.log("Pending debounce ran immediately");
  } else {
    console.log("Nothing was waiting to flush");
  }
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
