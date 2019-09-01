const exchangeRatesURL = 'https://api.exchangeratesapi.io/latest';

fetch(exchangeRatesURL)
    .then(response => response.json())
    .then(data => {
        let rates = data['rates'];
        let ron = rates['RON'];
        let usd = rates['USD'];
        let gbp = rates['GBP'];
        
        document.getElementById('currencyInput').addEventListener('input', convertCurrency);

        function convertCurrency(event) {
        let amount = event.target.value;
    
        document.getElementById('ronOutput').innerHTML = amount * ron;    
        document.getElementById('euroOutput').innerHTML = amount * 1; //base currency 
        document.getElementById('usdOutput').innerHTML = amount * usd;  
        document.getElementById('gbpOutput').innerHTML = amount * gbp;         
}
    })
    .catch(error => console.log(error));




