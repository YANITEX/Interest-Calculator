const amount = document.getElementById("amount") ;
const rate = document.getElementById("rate") ;
const years = document.getElementById("years") ;
const result = document.getElementById("result") ;
const sub = document.getElementById("sub");

result.textContent = `Total : ${Number(amount.value).toLocaleString('AR', {style: 'currency',currency: 'DZD',})}`;
function submit(){
    let total = Number(amount.value) ;
    for(let i=0 ; i<Number(years.value) ; i++){
        total += total * Number(rate.value) / 100 ;
    }
    
    total = total.toLocaleString('AR', {style: 'currency',currency: 'DZD',});

    result.textContent = `Total : ${total}`;

    
}


