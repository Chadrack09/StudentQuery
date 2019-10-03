$(function(){
    $("h1").css("color", "#0088ff");
});

function totalDiscount(){
		
    let unitPrice = Number(document.querySelector('#price').value);
    let quantity = Number(document.querySelector('#qty').value);
    
    let total = unitPrice * quantity;
    document.querySelector('#total').innerHTML = "$"+ total;
}

// Currency function
function currencyConverter(){
	var dollarToRand = 14.93;
	var randToDollar = 0.067;
	var amount = Number(document.querySelector('#money').value);

	if (document.querySelector('#c1').checked){
		document.querySelector('#convert').innerHTML = "R"+amount  * dollarToRand;
    }
    else if (document.querySelector('#c2').checked){
		document.querySelector('#convert').innerHTML = "$" + amount * randToDollar;
	}
	else
		document.querySelector('#Answer').innerHTML = "Select a conversion Currency";
}

// Calculator

function calC(c) {

    // form theke panel e jao then value bosao function calC ja value pabe ta 
    // sei value + koro jno protita value add hoi
    form.panel.value = form.panel.value + c;


}
function CE() {

    // clear korar jonne function
    // form theke panel e jao giye value bosao faka
    form.panel.value = "";
}