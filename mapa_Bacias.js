let interuptor = true;

function mapBacias (){

var cardAcre = document.getElementById('Card_Acre')


if(interuptor){

cardAcre.style.height = '20vh'
cardAcre.style.display = 'block'



interuptor = false
}else{


    cardAcre.style.height = '0vh'
    cardAcre.style.display = 'none'
    
    interuptor = true
}

}