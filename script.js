let arr1 = [ 1, -3 , 5, -9, 18, 3, -2, 7];
let newarry = arr1.filter(function(numbers){
    return numbers > 0;
});
let sumNumbers = newarry.reduce(function(sum,numbers){
    return sum + numbers;});
    console.log(newarry);
    console.log(sumNumbers);
//2

let myArray = ["პირველი ", "მეორე", "მესამე ", "მეორე", "მესამე", "მეორე"];


let targetString = "მეორე";
let occurrences = myArray.reduce((acc, string) => string === targetString ? acc + 1 : acc, 0);


console.log(`${targetString}-ე მეორდება  ${occurrences} ჯერ`);

//3
function addAsync(param1, param2) {
    return new Promise((resolve, reject) => {
      if (typeof param1 === 'number' && typeof param2 === 'number') {
        const result = param1 + param2;
        resolve(result);
      } else {
        reject(new Error('error.'));
      }
    });
  }
  
 
  addAsync(5, 10)
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

