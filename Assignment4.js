function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    }
    else {
        let result = number * number * number;
        return result;
    }
}









function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please provide a string";
    }
    else {
        if ( string1.includes(string2)){
          return true;
        }
        else{
          return false;
        }
    }
}











function sortMaker(arr) {

    let firstItem = arr[0];
    let lastItem = arr[arr.length - 1];

    if (arr.length <= 0 || arr.length > 2 || arr.length === 1 || firstItem < 0 || lastItem < 0) {
        return 'Invalid Input'
    }
    else if (firstItem === lastItem) {
        return 'equal';
    }
    else if (firstItem > 0 && lastItem > 0) {
        return arr.sort().reverse();
    }
    else {
        return 'Invalid Input'
    }









function findAddress(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) === true) {
        return 'Please enter an object'
    }
    else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        const fullAddress = street + ',' + house + ',' + society;
        return fullAddress;
    }
}
const address = {street: 10,
    house: '15A',
    society: 'Earth Perfect'
}







function canPay(changeArray, totalDue) {
    if(!Array.isArray(changeArray) || typeof totalDue !== 'number'){
        return 'Please enter an array and a number type input'
    }
    else if(changeArray.length === 0){
        return 'Please enter an array of number'
    }
    else{
        let totalCoin = 0;
        for(let item of changeArray){
            if(typeof item === 'number'){
                totalCoin = totalCoin + item;
            }
            else{
                return 'Please enter an array of number'
            }
        }
        if(totalCoin >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}

}