let outputImage = document.querySelector("#coinFlipImage");
let holding20FlipsCounts = document.querySelector("#flipped20Times");

const coin = {
  state: 0,
  flip: function() {
      return this.state = Math.floor(Math.random() * 2 + 0);
      // 1. One point: Randomly set your coin object's "state" property to be either 
      //    0 or 1: use "this.state" to access the "state" property on this object.
  },
  toString: function() {
      if(this.state === 0){
        return this.state = "Heads"
      }else if(this.state === 1){
        return this.state = "Tails"
      }
      this.state.toString();
      // 2. One point: Return the string "Heads" or "Tails", depending on whether
      //    "this.state" is 0 or 1.
  },
  toHTML: function() {
      const imageHeads = document.createElement('img');
      const imageTails = document.createElement('img');

      if(this.state === "Heads"){
        imageHeads.src="images/quarter-heads.png";
        imageHeads.style.width = "350px"
        outputImage.appendChild(imageHeads);
        return imageHeads;
      }else if(this.state === "Tails"){
        imageTails.src="images/quarter-tails.png";
        imageTails.style.width = "350px"
        outputImage.appendChild(imageTails);
        return imageTails;
      }
      // 3. One point: Set the properties of this image element to show either face-up
      //    or face-down, depending on whether this.state is 0 or 1.
  }
};

function display20Flips() {
  let storeFlipNumber;
  const results = [];
  for(let i = 0; i < 20; i++){
    storeFlipNumber = coin.flip()
    results.push(storeFlipNumber);
    // holding20FlipsCounts.appendChild(results);
  }
  return results.toString();
  // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
}
function display20Images() {
  const results = [];
  for(let i = 0; i < 20; i++){
    storeImageFlip = coin.toHTML();
    results.push(storeImageFlip);
  }
  return results;
  // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
}

console.log(coin.flip());
console.log(coin.toString());
coin.toHTML();
console.log(display20Flips());
console.log(display20Images());

display20Flips();








