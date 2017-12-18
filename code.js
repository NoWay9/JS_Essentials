var name, time, place, $event;
$event = prompt('Enter event:', 'meeting');

function valid(form) {
name=form.name.value;
time=form.time.value;
place=form.place.value;
if(validTime(time)==true){
if (name != '' && time != '' && place != '')
console.log(name + ' has a ' + $event + ' today at ' + time + ' somewhere in ' + place);
else alert('Input all data');
}
else alert('Enter time in format hh:mm');


function validTime(time){
    if (time.length != 5)return false;
        var RegExp = /[0-2][0-9]:[0-5][0-9]/;
      if(RegExp.test(time))return true;
      else return false; 
}
}


function convert() {
var euro, dollar, result, result2, result3;
var moneyRate={
euroRate: 31.789,
dollarRate: 27.005
};
euro = prompt('Enter value euro:', '100');
if(isNaN(euro) || euro <= 0){
alert('Please, enter correct number.');
return;
}
dollar = prompt('Enter value dollar', '100');
if(isNaN(dollar) || dollar <= 0){
alert('Please, enter correct number.');
return;
}
else getResult();

function getResult(){
result= euro * moneyRate.euroRate;
result2=dollar * moneyRate.dollarRate;
result3= moneyRate.euroRate/moneyRate.dollarRate;
alert(euro + ' euros are equal ' + result.toFixed(2) + ' grns, ' + dollar + ' dollars are equal ' + result2.toFixed(2) + ', one euro is equal ' + result3.toFixed(3) + ' dollars');
}

}