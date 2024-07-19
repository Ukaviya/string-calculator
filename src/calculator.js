function add(numbers){
   if(numbers === ""){
    return 0;
   } 
   const numArray = numbers.split(/[\n,]/);
   const negatives = numArray.filter(num => num < 0);
   if (negatives.length > 0) {
       throw new Error("negative numbers are not allowed");
   }

   return numArray.reduce((sum, num) => sum + (+num), 0);
}

module.exports=add;