export default (input:string) :string => {
    let result = "";
    const inputArray = input.split(' ');

    for(let i = 0;  i < inputArray.length; i++) {

      let currentStr = inputArray[i];
    
      let tempStr = currentStr.toLowerCase();

      if(i != 0) {
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
       }
      
       result +=tempStr;
      
    }
  
    return result;
}