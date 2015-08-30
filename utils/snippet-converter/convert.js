var fs = require('fs');
var glob = require('glob');
var parseString = require('xml2js').parseString;


glob('tmp/**/*.sublime-snippet', {}, function (err, files) {
    if (err) {
        return;
    }

    var opt = {encoding: 'utf-8'};

    files.forEach(function (file) {
        fs.readFile(__dirname + '/' + file, opt, function (err, data) {
            if (err) {
                return;
            }

            parseString(data, extractSnippet);

        });
    });

});

function extractSnippet(err, data) {
    if (err) {
        return;
    }
    var snippet = data.snippet;

    console.log('"'+ snippet.tabTrigger +'" : ' + JSON.stringify(snippet.content[0]) + ',');

}


