var fs = require('fs');

var name = [];
var amount = [];
var date = [];
var bill = [];

function random_amout() {
    return Math.floor(Math.random() * 100000);
}

function random_date() {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
}

for (var i = 0; i < 10; i++) {
    name.push('name_' + i);
    amount.push(random_amout());
    date.push(random_date());

    console.log(name[i] + ' ' + amount[i] + ' ' + date[i]);
    bill.push({name: name[i], amount: amount[i], date: date[i]});
}

fs.writeFile('bill.json', JSON.stringify(bill), function (err) {
    if (err) throw err;
    console.log('Saved!');
});