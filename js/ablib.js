var $ = (function() {

  'use strict';

  let Constructor = function(selector) {
    this.elems = document.querySelectorAll(selector);
  };
  Constructor.prototype.onClick = function(callBack) {

    this.elems[0].addEventListener("click", callBack);
  };

  Constructor.prototype.addClass = function(val) {

    this.elems[0].classList.add(val)
  };
  //onchange = handlerFunction;
  Constructor.prototype.onChange = function(callBack) {

    this.elems[0] !== undefined ? this.elems[0].addEventListener('change', callBack) : ''
  };
  Constructor.prototype.removeClass = function(val) {

    this.elems[0].classList.remove(val)
  };
  Constructor.prototype.removeElement = function() {
    this.elems[0] !== undefined ? this.elems[0].remove() : '';

  };
  Constructor.prototype.removeAll = function() {
    while (this.elems[0].firstChild) {
      this.elems[0].removeChild(this.elems[0].firstChild);
    }

  };

  //removeAllChildNodes
  Constructor.prototype.insertChildNode = function(htm) {

    this.elems[0].appendChild(htm);
  };

  Constructor.prototype.insertHTM = function(t, htm) {

  this.elems[0] !== undefined ?  this.elems[0].insertAdjacentHTML(t, htm) : '';
  };
  Constructor.prototype.val = function() {
    return this.elems[0].value;

  };


  Constructor.prototype.show = function() {
    this.elems[0].style.display = 'block';

  };

  Constructor.prototype.hide = function() {
    this.elems[0].style.display = 'none';
  };

  let instantiate = function(selector) {
    return new Constructor(selector);
  };

  return instantiate;

})();
