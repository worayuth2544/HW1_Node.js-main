let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let temp1 = []  
  let temp2 = []
  let mergeArray = []
  let Ans = []
  for(let i=0; i<characters.length; i++) {
      if(i%2!=0) {
          temp1.push(characters[i])
      }
      if(i%2==0) {
          temp2.push(characters[i])
      }
  }
  let newArray = temp1.map((e, i) => e + temp2[i]);
  for(let i=0; i<newArray.length; i++) {
    Ans.push(newArray[i].split(","))
  }
console.log(Ans.join(""))
