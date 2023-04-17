const refs = {
  counter: 0,
  counterValue: document.querySelector("#value"),
  decrementBtn: document.querySelector("[data-action='decrement']"),
  incrementtBtn: document.querySelector("[data-action='increment']"),
};

refs.decrementBtn.addEventListener("click", decrement);
refs.incrementtBtn.addEventListener("click", increment);

function decrement() {
  refs.counter -= 1;
  refs.counterValue.textContent = refs.counter;
}

function increment() {
  refs.counter += 1;
  refs.counterValue.textContent = refs.counter;
}
