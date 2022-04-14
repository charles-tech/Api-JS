const request = require('request');


const moedas ='USD-BRL,EUR-BRL,BTC-BRL';

const options = {
  url: `https://economia.awesomeapi.com.br/last/${moedas}`,
  method:'GET',
  headers:{
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8'
  }

};

const callback_todas_cotacoes = function(erro, res,body){
  let json = JSON.parse(body);
  console.log(json);
};

const callback_dolar = function(erro, res, body){
  let json = JSON.parse(body);
  cotacao = json.USD['bid'];
  dia = json.USD['create_date'];
  console.log('DOLAR = R$ '+ cotacao+' dia: '+ dia);
};


const callback_euro = function(erro, res, body){
  let json = JSON.parse(body);
  cotacao = json.EUR['bid'];
  dia = json.EUR['create_date'];
  console.log('Euro = R$ '+ cotacao+' dia: '+ dia);
};

const callback_BTC = function(erro, res, body){
  let json = JSON.parse(body);
  cotacao = json.BTC['bid'];
  dia = json.BTC['create_date'];
  console.log('BTC = R$ '+ cotacao+' dia: '+ dia);
};


setInterval(()=>{
  request(options, callback_dolar);
  request(options, callback_euro);
  request(options, callback_BTC);
  console.log('********************');
}, 5000);
