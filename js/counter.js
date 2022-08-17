const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);
  this._bindEvents();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector("[data-increment]");
  refs.decrementBtn = refs.container.querySelector("[data-decrement]");
  refs.value = refs.container.querySelector("[data-value]");

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener("click", () => {
    this.updateValueUI();
    this.increment();
  });

  this._refs.decrementBtn.addEventListener("click", () => {
    this.updateValueUI();
    this.decrement();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter = new CounterPlugin({ rootSelector: "#counter-1", step: 10 });

const counter2 = new CounterPlugin({ rootSelector: "#counter-2", step: 2 });
