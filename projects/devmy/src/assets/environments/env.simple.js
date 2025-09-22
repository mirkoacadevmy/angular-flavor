(function (window) {
  window['env'] = window['env'] || {};

  window['env']['production'] = true,
  window['env']['customerName'] = ['${CUSTOMER_NAME}']
})(this);
