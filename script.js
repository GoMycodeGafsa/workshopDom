//console.log(document)
const btnaddtag= document.getElementsByClassName('plus')
for (let i = 0; i < btnaddtag.length; i++) {
    btnaddtag[i].addEventListener('click',increment)      
    }
    function increment(Event) {
     var btnaddtarget=Event.target;
     var divElement=btnaddtarget.parentElement;
     var quantitytag=divElement.querySelector("p")
     var quantity= Number(quantitytag.innerHTML)
     quantity++
     quantitytag.innerHTML=quantity;
     var pricetag= divElement.parentElement.parentElement.querySelector('.Price')
     var unitpricetag= divElement.parentElement.parentElement.querySelector('.unitPrice')
     var unitPrice= Number(unitpricetag.innerHTML)
     var Price= quantity*unitPrice
     pricetag.innerHTML=Price;

    }
    const btnmoinstag= document.getElementsByClassName('minus')
for (let i = 0; i < btnmoinstag.length; i++) {
    btnmoinstag[i].addEventListener('click',decrement)      
    }
    function decrement(Event) {
     var btnaddtarget=Event.target;
     var divElement=btnaddtarget.parentElement;
     var quantitytag=divElement.querySelector("p")
     var quantity= Number(quantitytag.innerHTML)
     if (quantity>0) {
        quantity--
     }
     quantitytag.innerHTML=quantity;
     var pricetag= divElement.parentElement.parentElement.querySelector('.Price')
     var unitpricetag= divElement.parentElement.parentElement.querySelector('.unitPrice')
     var unitPrice= Number(unitpricetag.innerHTML)
     var Price= quantity*unitPrice
     pricetag.innerHTML=Price;

    }
    const checktag= document.getElementsByClassName('check')
    for (let i =0;  i< checktag.length; i++) {
        checktag[i]=addEventListener('click', Total)   
    }
    function Total(Event) {
     var pricetag=Event.target.parentElement.parentElement.querySelector(".Price")
      var price=Number(pricetag.innerHTML)
     var totaltag=document.getElementById('total')
     var Total=Number(totaltag.innerHTML)
      var btnplus=Event.target.parentElement.parentElement.querySelector('.plus')
      var btnmoins=Event.target.parentElement.parentElement.querySelector('.moins')
     if (Event.target.checked===true) {
         btnplus.setAttribute("disabled",true)
         btnmoins.setAttribute("disabled",true);
         Total+=price
     } else {
         Total-=price
         btnplus.removeAttribute("disabled");
         btnmoins.removeAttribute("disabled");
     }
     totaltag.innerHTML=Total

    }
    var likeTag=document.getElementsByClassName("like")
for(var i=0;i<likeTag.length;i++){
    likeTag[i].addEventListener("click",colorLike);
}
function colorLike(event){
 var liketag=event.target;
 if(liketag.style.color=='red'){
 liketag.style.color = 'black';}
 else{
    liketag.style.color='red'
 }
}

var suppTag=document.getElementsByClassName("delete")
for(var i=0;i<suppTag.length;i++){
    suppTag[i].addEventListener("click",supp);
}
function supp(event){
    var supptag=event.target;
    var childElem =supptag.parentElement.parentElement.parentElement.parentElement;
    var parentElem=document.querySelector("tbody");

     parentElem.removeChild(childElem);
}
