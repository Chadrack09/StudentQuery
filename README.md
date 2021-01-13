# Student Query ~ Javascript
This web app was deployed on [Netlify](https://studentquery.netlify.app/mainpage/).

```
It is composed of three apps
    1. Search Book app
    2. Calculator
    3. Currency Converter
```
---
## 1. Search Book 
> This app help query books in the library by their names. 

```javascript
// Search Function
function myFunction() {
  var input, filter, cards, cardContainer, h5, title, i;
  input = document.getElementById("myFilter");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("myItems");
  cards = cardContainer.getElementsByClassName("card");
  
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h5.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } 
      else {
          cards[i].style.display = "none";
      }
  }
}
```

## 2. Calculator
> The app calculate the price by their quantity

```javascript
// Price Calculator Function
function totalDiscount(){
    let unitPrice = Number(document.querySelector('#price').value);
    let quantity = Number(document.querySelector('#qty').value);
    
    let total = unitPrice * quantity;
    document.querySelector('#total').innerHTML = "$"+ total;
}
```

## 3. Currency Converter
> This is a static currency converter from dollar to rand. Note this currency is static according to the day of its records.

```javascript
// Currency Converter Function
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
```
___

This project was implemented using ```Javascript``` programming language
