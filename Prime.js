// Problem 1 : Check whether a number is Prime or not

let number = 11;
let count=0;
for(let i=number;i<=number;i++)
  {
    if(i%1==0 && number%i==0)
    {
      count++;
    }
  }
if(count==2)
{
  console.log("Prime Number");
}
else
{
  console.log("Not Prime Number");
}