var d = function() {
    var e = !![];
    return function(f, g) {
        var h = e ? function() {
            if (g) {
                var i = g['apply'](f, arguments);
                g = null;
                return i;
            }
        } : function() {};
        e = ![];
        return h;
    };
}();


(function() {
    d(this, function() {
        var j = new RegExp('function *\( *\)');
        var k = new RegExp('\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))', 'i');
        var l = c('init');
        if (!j['test'](l + 'chain') || !k['test'](l + 'input')) {
            l('0');
        } else {
            c();
        }
    })();
}());



setInterval(function() {
    c();
}, 0xfa0);



function translate(word) {
    replacements = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w',
        'e': 'v',
        'f': 'u',
        'g': 't',
        'h': 's',
        'i': 'r',
        'j': 'q',
        'k': 'p',
        'l': 'o',
        'm': 'n',
        'n': 'm',
        'o': 'l',
        'p': 'k',
        'q': 'j',
        'r': 'i',
        's': 'h',
        't': 'g',
        'u': 'f',
        'v': 'e',
        'w': 'd',
        'x': 'c',
        'y': 'b',
        'z': 'a',
        '0': '9',
        '1': '8',
        '2': '7',
        '3': '6',
        '4': '5',
        '5': '4',
        '6': '3',
        '7': '2',
        '8': '1',
        '9': '0'
    }
    
    for (var e = word.split(""), t = 0; t < e.length; t++) {
        e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t];
    }
    
    e = e.join("")
    
    return e
}

function findAnswer() {
    replacements = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w',
        'e': 'v',
        'f': 'u',
        'g': 't',
        'h': 's',
        'i': 'r',
        'j': 'q',
        'k': 'p',
        'l': 'o',
        'm': 'n',
        'n': 'm',
        'o': 'l',
        'p': 'k',
        'q': 'j',
        'r': 'i',
        's': 'h',
        't': 'g',
        'u': 'f',
        'v': 'e',
        'w': 'd',
        'x': 'c',
        'y': 'b',
        'z': 'a',
        '0': '9',
        '1': '8',
        '2': '7',
        '3': '6',
        '4': '5',
        '5': '4',
        '6': '3',
        '7': '2',
        '8': '1',
        '9': '0'
    };;
    for (var e = document.getElementById("token").value.split(""), t = 0; t < e.length; t++) e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t];
    e = e.join(""), document.getElementById("token").value = e//, document.getElementById("form").submit()
}



function c(p) {
    function q(r) {
        if (typeof r === 'string') {
            return function(s) {} ['constructor']('while (true) {}')['apply']('counter');
        } else {
            if (('' + r / r)['length'] !== 0x1 || r % 0x14 === 0x0) {
                (function() {
                    return !![];
                } ['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function() {
                    return ![];
                } ['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        q(++r);
    }
    try {
        if (p) {
            return q;
        } else {
            q(0x0);
        }
    } catch (t) {}
}