var name, time, place, $event;
$event = prompt('Enter event:', 'meeting');

function valid(form) {
name=form.name.value;
time=form.time.value;
place=form.place.value;
if (name != '' && time != '' && place != '')
console.log(name + ' has a ' + $event + ' today at ' + time + ' somewhere in ' + place);
else alert('Input all data');
}


function convert() {
var euro, dollar, result, result2, result3;
euro = prompt('Enter value euro:', '100');
dollar = prompt('Enter value dollar', '100');
var moneyRate={
euroRate: 31.789,
dollarRate: 27.005
};
result= euro * moneyRate.euroRate;
result2=dollar * moneyRate.dollarRate;
result3= moneyRate.euroRate/moneyRate.dollarRate;
if(euro != 0 && dollar != 0)
alert(euro + ' euros are equal ' + result.toFixed(2) + ' grns, ' + dollar + ' dollars are equal ' + result2.toFixed(2) + ', one euro is equal ' + result3.toFixed(3) + ' dollars');
else alert('Value can`t be 0. Enter different value.');
}