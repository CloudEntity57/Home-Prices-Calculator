

//declare input variable:
let input = "5 3 188930 194123 201345 154243 154243";

let challenge_1 = (input) => {

// declare output for function:
  let result=[];

  //convert input file into workable javascript data types -- 2 integer variables and an array:
  console.log('input: ',input);
  input = input.split('');
  const nums = input[0].split('');
  let homePrices = input[1];
  homePrices = homePrices.split(' ');
  homePrices = homePrices.map((val)=>{
    return parseInt(val);
  });
  const n = parseInt(nums[0]);
  const k = parseInt(nums[2]);

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
challenge_1(input);
//get input text from text file:
// $.get('./input.txt',(val)=>{
//   input = val;
// //call the main function:
//   challenge_1(val);
// });
