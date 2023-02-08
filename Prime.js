// Problem 1 : Check whether a number is Prime or not

let num = 11;

if ( num == 2 )
    {
        console.log ( "Prime" )  ;
    }
    
    else if ( num%2 )
    {
        let flag = false  ;
        
        for ( let i = 3 ; i*i<=num ; i=i+2 )
        {
            if ( num%i )
            {
                continue  ;
            }
            
            flag = 1  ;
            break  ;
        }
        
        if ( flag )
        {
            console.log ( "Not Prime" )  ;
        }
        
        else
        {
            console.log ( "Prime" )  ;   
        }
    }
    
    else
    {
        console.log ( "Prime" )  ;
    }