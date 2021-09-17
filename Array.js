function Calculate(){
    let displayElement = document.getElementById('result-el');
    let displayOddeven = document.getElementById('displayOddEven');
    let oddElement = "";
    let evenElement = "";
    let array = [10,15,25,20,17,24];
    let even = 0 ;
    let odd = 0 ;

    for(let i = 0; i<array.length; i++)
    {
        let remainder = array[i] % 2;
        if( remainder == 0 ){
            even = even + array[i];
            evenElement += ' ' + array[i];
           // console.log(even + 'even');

        }
        else{
             odd = odd + array[i];
            oddElement += ' ' + array[i];

           // console.log(odd +'odd');
        }
    }

    let finalResult = odd - even ;
            //console.log(finalResult + 'finalresult');
displayOddeven.innerHTML= "odd numbers are:" + oddElement + '<br>' + "even numbers are:" + evenElement;

displayElement.textContent = even + ' ' + '-' + ' ' + odd + ' ' + '=' + ' ' + finalResult;
}