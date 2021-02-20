function selectionSort(arr) {
  
    var arr = array.slice();

  for (let i = 0; i < arr.length -1; i++){

    let minIndex = i; 

    for (let j = i+1; j < arr.length; j++){

      if(arr[j] < arr[minIndex]){ //søger efter en værdi mindre end den i variablen 
         minIndex = j;
         }
    }

    /*
    Det her skrev jeg først: 

    *************************
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    *************************

    Der findes dog en endnu lettere måde at gøre dette på, 
    eftersom at JS er et deklarativ sprog kan man skrive således:
    */
    
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    
    //dog er der et problem med det nuværende funktion, det er ikke en pure function,
    //den manipulere vores orginale aray-data, hvilket er et problem, da idéen er at intet data skal ændres i en pure function.
    
  }
         
         return arr;
}

const arr = [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92];
const output = selectionSort(arr);
console.log(output);
console.log(arr);
         