console.log(Number(10.5));//returns 10.5
 console.log(Number(true));//returns 1
 console.log(Number(false));//returns 0
 console.log(Number(null));//returns 0
 console.log(Number(undefined));//returns 0
 console.log(Number(" 123 "));//returns 123
 console.log( typeof Number('4999'));
 console.log(Number(""));//returns 0
 console.log(Number(" "));//returns 0
 console.log(Number("123e-1"));//returns 12.3
 console.log(Number("0xFF"));
 console.log(Number("underfined"));//returns NAN
 console.log(Number(null));//returns return NAN
 console.log(Number("HELLO WORLD!"));//returns NAN