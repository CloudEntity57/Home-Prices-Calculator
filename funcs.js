var fs = require('fs')
var path = require('path')

module.exports.loadDb = function (dbFile, cb) {
  fs.readFile(dbFile, 'utf8', function (err, res) {
    if (err) { return cb(err) }

    var input
    try {
      input = res;
      input = input.replace(/\n/g,' ');
      input = input.split(' ');
      let result = [];
      input.map((val)=>{
        if(val !== ''){
          result.push(parseInt(val));
        }
      });
      input = result;
      console.log('input: ',input);
    } catch (e) {
      console.log('error: ',err);
    }
    cb(input);


    // return cb(null, { n: dbFile, k: messages, homePrices: })
  })
}

module.exports.challenge_1 = function(homePrices){
let n = homePrices.shift();
console.log('n: ',n);
let k = homePrices.shift();
console.log('k: ',k);
// declare output for function:
  let result=[];
// declare input for function:
  //
  // let homePrices = [188930, 194123, 201345, 154243, 154243]
  // const n = 5
  // const k = 3

//define a function that calculates the net increasing/decreasing subranges in a window of values:

  let findSubranges = (window)=>{
    let output;
    let increasing=0;
    let decreasing=0;

//first, find all increasing subranges in window.
//go through each index of window, and find every increasing subrange beginning at that index:
    for(let i=0; i<window.length; i++){
      for(let j=(i+1); j<window.length; j++){
        if(window[j]>window[j-1]){
//store the instance of an increasing subrange:
          increasing++;
        }else{
          break;
        }
      }
    }
//do the same thing to find all decreasing subranges in the window:
//go through each index of window, and find every decreasing subrange beginning at that index:
    for(let i=0; i<window.length; i++){
      for(let j=(i+1); j<window.length; j++){
        if(window[j]<window[j-1]){
          decreasing--;
        }else{
          break;
        }
      }
    }
    output = increasing+decreasing;
    result.push(output);
  }

//go through every window and apply findSubranges() as defined above:

  for(let i=0; i<(n-k+1); i++){
    let window = homePrices.slice(i,k+i);
    findSubranges(window);
  }
  console.log('result: ',result);
  return result;
}
