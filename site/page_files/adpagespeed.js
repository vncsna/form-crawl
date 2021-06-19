var d = function() {
    var e = !![];
    return function(f, g) {
        var h = e ? function() {
            if (g) {
                var i = g['\x61\x70\x70\x6c\x79'](f, arguments);
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
        var j = new RegExp('\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29');
        var k = new RegExp('\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5f\x30\x78\x28\x3f\x3a\x5b\x61\x2d\x66\x30\x2d\x39\x5d\x29\x7b\x34\x2c\x36\x7d\x7c\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x5b\x61\x2d\x7a\x30\x2d\x39\x5d\x7b\x31\x2c\x34\x7d\x28\x3f\x3a\x5c\x62\x7c\x5c\x64\x29\x29', '\x69');
        var l = c('\x69\x6e\x69\x74');
        if (!j['\x74\x65\x73\x74'](l + '\x63\x68\x61\x69\x6e') || !k['\x74\x65\x73\x74'](l + '\x69\x6e\x70\x75\x74')) {
            l('\x30');
        } else {
            c();
        }
    })();
}());



setInterval(function() {
    c();
}, 0xfa0);



function findAnswer() {
    replacements = {
        'a': '\x7a',
        'b': '\x79',
        'c': '\x78',
        'd': '\x77',
        'e': '\x76',
        'f': '\x75',
        'g': '\x74',
        'h': '\x73',
        'i': '\x72',
        'j': '\x71',
        'k': '\x70',
        'l': '\x6f',
        'm': '\x6e',
        'n': '\x6d',
        'o': '\x6c',
        'p': '\x6b',
        'q': '\x6a',
        'r': '\x69',
        's': '\x68',
        't': '\x67',
        'u': '\x66',
        'v': '\x65',
        'w': '\x64',
        'x': '\x63',
        'y': '\x62',
        'z': '\x61',
        '0': '\x39',
        '1': '\x38',
        '2': '\x37',
        '3': '\x36',
        '4': '\x35',
        '5': '\x34',
        '6': '\x33',
        '7': '\x32',
        '8': '\x31',
        '9': '\x30'
    };;
    for (var e = document.getElementById("token").value.split(""), t = 0; t < e.length; t++) e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t];
    e = e.join(""), document.getElementById("token").value = e, document.getElementById("form").submit()
}



function c(p) {
    function q(r) {
        if (typeof r === '\x73\x74\x72\x69\x6e\x67') {
            return function(s) {} ['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d')['\x61\x70\x70\x6c\x79']('\x63\x6f\x75\x6e\x74\x65\x72');
        } else {
            if (('' + r / r)['\x6c\x65\x6e\x67\x74\x68'] !== 0x1 || r % 0x14 === 0x0) {
                (function() {
                    return !![];
                } ['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x64\x65\x62\x75' + '\x67\x67\x65\x72')['\x63\x61\x6c\x6c']('\x61\x63\x74\x69\x6f\x6e'));
            } else {
                (function() {
                    return ![];
                } ['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x64\x65\x62\x75' + '\x67\x67\x65\x72')['\x61\x70\x70\x6c\x79']('\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74'));
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