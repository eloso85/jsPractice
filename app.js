


/*
Write a javascript program to check two 
numbers and return true if one of the number is 100 
or if the sum of the two numbers is 100 
*/
$("#ex1").submit(function sumOftwo(){
   
    var num1 = parseFloat($("#fnumber").val());
    var num2 = parseFloat($("#snumber").val());
    const isEqualTo100  = (a,b) => a === 100 || b === 100 || (a + b)===100
    console.log(isEqualTo100(num1,num2))
     $("#ex1Answer").html(isEqualTo100(num1,num2))
    
    event.preventDefault()
    
});


//const isEqualTo100  = (a,b) => a === 100 || b === 100 || (a + b)===100; 

// || means or

// console.log (isEqualTo100(100,0));

// console.log (isEqualTo100(80,0));

// console.log (isEqualTo100(70,30));

/*
Write a Javascript program to get the extenstion of a filename
*/

$("#ex2").submit(function fileType(){
    var file = $("#fileType").val();

    const getFileExtension = (str)=> str.slice(str.lastIndexOf('.'));
    $("#ex2Answer").html(getFileExtension(file));
    // console.log(getFileExtension(file));
    // console.log(file);
    event.preventDefault()
})

// const getFileExtension = (str)=> str.slice(str.lastIndexOf('.'));
// .slice just give portion of the string
// console.log(getFileExtension('index.html'))
// console.log(getFileExtension('webpack.config.js'));

/**
 * Write a JavaScript program to replace every
 * character in a given string with character 
 * following it in the alphabet
 */

 //String.fromCharCode
 //charCodeAt

 $("#ex3").submit(function moveCharsForward(){ 
     var letter =$("#letter").val();

     const getNextLetter = (str) => 
     str
     .split('')
     .map(char=> String.fromCharCode(char.charCodeAt(0)+1))
     .join('');

    $("#ex3Answer").html(getNextLetter(letter));
 
 event.preventDefault()
 console.log(getNextLetter(letter))
 })
 
