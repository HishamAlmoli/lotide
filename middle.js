  const middle = function(array) {
    let middle = [];
    if (array.length > 2) {
        if ((array.length % 2) === 0) {
            // console.log("even")
            middle.push(array[(array.length / 2) - 1]);
            middle.push(array[array.length / 2]);
        } else {
            // console.log("odd")
            middle.push(array[(Math.floor(array.length / 2))]);
        }
    }
    console.log(middle);
    return middle;
  };

  module.exports = middle;
