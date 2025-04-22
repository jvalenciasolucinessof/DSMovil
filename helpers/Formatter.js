const Formatter = {
  currency: function(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  },

  capitalize(str,allWords = false){
    if (allWords) {
      return str.replace(/\b\w/g, (l) => l.toUpperCase());
    } else {
      return str.replace(/\b\w/, (l) => l.toUpperCase());
    }
  }
};

export default Formatter;
