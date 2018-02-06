
var IG = require('ig-markets');
const ig = new IG('apikey', 'user-name', 'password', false);

ig.accountTransactions('ALL', new Date(2017, 1, 1), new Date(2017, 11, 31), function(err, data) {
    if (err) {
        console.error(err);
    } else {
        var data = JSON.stringify(data, null, 4);

        var fs = require('fs');
        fs.writeFile("./transactions.json", data, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 

    }
});