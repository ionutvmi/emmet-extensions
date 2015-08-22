emmet.require('filter/main.js').add('php', function(tree) {
    tree.children.forEach(function(node) {
        // define variable name
        node.start = '\\$' + node.name();

        // define object keys
        var className = node.attribute('class');
        if (className) {
            node.start += className
                .split(' ')
                .map(function(c) {return "['" + c + "']";})
                .join('');
        }

        node.end = '';
    });
});


