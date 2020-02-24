/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */
 function mysteryRange(str, number){
     var arr = str.split('');
     var result = [];
     for(var i = 0; i < arr.length - 1; i++){
         if (arr[i] === '1'){
           arr[i] += arr[i+1];
           arr.splice(i+1, 1);
         }
     };
     for(var i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
     };
     var min = arr[0];
     var max = arr[0];
     for(var i = 1; i < arr.length; i++){
       if (arr[i] < min){
         min = arr[i]
       }
       if ( arr[i] > max){
         max = arr[i];
       }

     }
result.push(min);
result.push(max);
return result;

 }