// Problem 2 : Check whether a string is palindrome or not.

let str  =  "naman"  ;

let bag=[]  ;

for ( let i=str.length-1 ; i>=0;i-- )
  {
    bag.push(str[i]);
  }

for ( let i=0 ; i<str.length ; i++ )
  {
    if( str[i]!=bag[i] )
    {
      console.log("Not Palindrome");
    }
    else
    {
      console.log("Yes Palindrome");
    }
  }