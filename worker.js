(function (_0x1a49a2, _0x56ceae) {
    var _0x467d7f = _0x1a49a2();
    while (!![]) {
        try {
            var _0xcd9275 = parseInt(_0x2302(0x256)) / (0x1a58 + -0x205a + -0x3 * -0x201) * (-parseInt(_0x2302(0x1e0)) / (0x2230 + 0xa15 * 0x1 + 0x3 * -0xec1)) + -parseInt(_0x2302('0x1fb')) / (-0xf2c + 0xe43 + 0xec * 0x1) + parseInt(_0x2302('0x258')) / (-0x1 * -0x2022 + -0x135d + 0xcc1 * -0x1) * (-parseInt(_0x2302(0x1e2)) / (-0x58e + -0x4 * 0x17b + 0xb7f)) + -parseInt(_0x2302(0x1d8)) / (0x26f1 + -0x142 + 0x137 * -0x1f) * (parseInt(_0x2302(0x1fc)) / (-0x7 * -0xf4 + -0xf74 + -0xb * -0xcd)) + parseInt(_0x2302(0x233)) / (0x1a * 0x13a + 0x1e32 * 0x1 + 0x152 * -0x2f) * (parseInt(_0x2302(0x1ee)) / (0x6 * 0x2e9 + -0x48a + 0xce3 * -0x1)) + -parseInt(_0x2302(0x1fd)) / (0x24b8 + 0x16e3 + -0x3b91) + parseInt(_0x2302('0x1de')) / (0x13e2 + -0x153c + 0x1 * 0x165) * (parseInt(_0x2302('0x217')) / (0x6ce + 0x225 * -0x8 + 0xa66));
            if (_0xcd9275 === _0x56ceae) {
                break;
            } else {
                _0x467d7f['push'](_0x467d7f['shift']());
            }
        } catch (_0x1439d3) {
            _0x467d7f['push'](_0x467d7f['shift']());
        }
    }
}(_0x4296, -0x6e481 + 0xadf37 + -0x1 * -0x92216));
const cache = caches[_0x2302('0x246')];
const mimeURL = _0x2302(0x23e);
var css = _0x2302('0x23d');
const uikit = _0x2302('0x21f');
const flid = _0x2302('0x1dc');
var _0x1ffb50 = {};
_0x1ffb50[_0x2302('0x250')] = _0x2302(0x228);
_0x1ffb50[_0x2302(0x1f3)] = 0x0;
var _0x2d50db = {};
_0x2d50db['js'] = 0x0;
_0x2d50db[_0x2302(0x206)] = 0x0;
_0x2d50db[_0x2302(0x1d0)] = 0xe10;
_0x2d50db[_0x2302(0x232)] = 0xe10;
var _0x49de87 = {};
_0x49de87[_0x2302(0x253)] = [_0x1ffb50];
_0x49de87[_0x2302(0x205)] = _0x2d50db;
var cachingMap = _0x49de87;
addEventListener(_0x2302(0x1cb), _0x48081d => {
    var _0x2f2f93 = {};
    _0x2f2f93[_0x2302(0x1d5)] = _0x2302('0x259');
    var _0x397060 = {};
    _0x397060[_0x2302(0x201)] = _0x2f2f93;
    _0x397060[_0x2302('0x1d4')] = 0xc8;
    _0x48081d[_0x2302(0x248)](handleRequest(_0x48081d[_0x2302(0x21e)])[_0x2302(0x1ef)](_0xf79ceb => new Response(_0x2302('0x235'), _0x397060)));
});
async function handleRequest(_0x342b2e) {
    const {
        protocol: _0x56fadf,
        pathname: _0x43000a,
        hostname: _0x3849e3,
        searchParams: _0x2104aa,
        search: _0x178559
    } = new URL(_0x342b2e[_0x2302(0x230)]);
    var _0x519427, _0x146647;
    if (_0x342b2e[_0x2302(0x20b)] == _0x2302('0x247')) {
        var _0x3b425c = await _0x342b2e[_0x2302('0x1fa')]();
        _0x519427 = new URLSearchParams(_0x3b425c);
        if (_0x342b2e[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x20e'))[_0x2302(0x1df)](_0x2302('0x1ec'))) {
            var _0x3b425c = {};
            for (const _0x1cf48a of _0x519427[_0x2302(0x20f)]()) {
                _0x3b425c[_0x1cf48a[-0x25df * 0x1 + -0x1ba0 + -0x17 * -0x2d9]] = _0x1cf48a[0x1813 + 0x34 * -0x1d + 0x1a * -0xb3];
            }
        }
    }
    if (_0x43000a[_0x2302('0x229')](_0x2302('0x1e3'))) {
        if (_0x342b2e[_0x2302(0x20b)] == _0x2302('0x247')) {
            if (await gb(_0x342b2e) == ![]) {
                var _0x50fdbd = await uiUx(_0x519427[_0x2302(0x1f6)](_0x2302(0x1d9)) ? _0x519427[_0x2302(0x1f6)](_0x2302(0x1d9)) : '', _0x3849e3, _0x342b2e);
                if (_0x50fdbd === ![]) {
                    var _0x329af1 = {};
                    _0x329af1['ok'] = ![];
                    var _0x432c23 = {};
                    _0x432c23[_0x2302(0x1d5)] = _0x2302('0x1e8');
                    var _0x4c93b9 = {};
                    _0x4c93b9[_0x2302(0x201)] = _0x432c23;
                    _0x4c93b9[_0x2302('0x1d4')] = 0xc8;
                    return new Response(JSON[_0x2302('0x1dd')](_0x329af1), _0x4c93b9);
                } else if (_0x50fdbd['ok'] === !![]) {
                    let _0x1b747e = '$';
                    var _0x4fe2e4 = _0x3849e3 + '*' + _0x3849e3[_0x2302(0x257)]('.')[_0x2302(0x23a)](-0x262e + -0x50 * -0x5c + 0x96f)[_0x2302('0x24c')]('.') + '*' + _0x342b2e[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3')) + '*' + _0x342b2e[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302(0x238));
                    const _0x39555d = await dect(_0x50fdbd['s'], _0x4fe2e4);
                    let _0x10776f = _0x43000a[_0x2302(0x257)](_0x2302('0x1e3'))[-0xf46 + 0x1 * -0x118a + 0x1f * 0x10f];
                    let _0x517734 = JSON[_0x2302(0x1f9)](_0x50fdbd['r']);
                    if (css == _0x3849e3) {
                        css = '/';
                        _0x1b747e = css;
                    }
                    if (!_0x519427[_0x2302(0x1f6)](_0x2302(0x223))) {
                        _0x519427[_0x2302('0x1f1')](_0x2302(0x223), _0x1b747e);
                    } else {
                        _0x519427[_0x2302('0x1f1')](_0x2302(0x223), _0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302('0x229')]('~') ? _0x519427[_0x2302(0x1f6)](_0x2302(0x223)) : _0x1b747e + _0x519427[_0x2302(0x1f6)](_0x2302(0x223)));
                    }
                    if (!_0x519427[_0x2302(0x1f6)](_0x2302('0x1f8'))) {
                        _0x519427[_0x2302('0x1f1')](_0x2302('0x1f8'), _0x1b747e);
                    } else {
                        _0x519427[_0x2302('0x1f1')](_0x2302('0x1f8'), _0x519427[_0x2302(0x1f6)](_0x2302('0x1f8'))[_0x2302('0x229')]('~') ? _0x519427[_0x2302(0x1f6)](_0x2302('0x1f8')) : _0x1b747e + _0x519427[_0x2302(0x1f6)](_0x2302('0x1f8')));
                    }
                    _0x10776f = _0x10776f == _0x2302(0x213) ? _0x10776f : await dect(decodeURIComponent(_0x10776f), _0x4fe2e4);
                    var _0x59c7f1 = await dect(_0x517734[-0x1704 + 0x1 * 0x859 + -0x5 * -0x2ef], _0x4fe2e4);
                    var _0x2ae768 = await dect(_0x517734[0x3b * -0x4f + -0x1c * -0xc9 + 0x7 * -0x8a], _0x4fe2e4);
                    var _0x426dbe = await dect(_0x517734[-0x762 + -0x14d5 + 0x1c39], _0x4fe2e4);
                    var _0x2b4a0a = await dect(_0x517734[0x2563 + -0x1293 + -0x12cd], _0x4fe2e4);
                    var _0x2a905c = await dect(_0x517734[0x10c0 + 0x37e * 0x2 + -0x2f7 * 0x8], _0x4fe2e4);
                    var _0x574462 = await dect(_0x517734[-0x1c + -0x1c31 + 0x5 * 0x5aa], _0x4fe2e4);
                    var _0x368828 = await dect(_0x517734[0xbf2 + -0x1eb9 + 0x12cd], _0x4fe2e4);
                    var _0x2e1439 = await dect(_0x517734[0x71d * 0x3 + -0x2b * 0x33 + 0x1 * -0xcbf], _0x4fe2e4);
                    var _0x3c89d3 = await dect(_0x517734[0x1d71 + 0x6 * -0xb1 + -0x1943], _0x4fe2e4);
                    switch (_0x10776f) {
                    case _0x59c7f1:
                        var _0x4825d2 = {};
                        _0x4825d2['ok'] = !![];
                        _0x4825d2[_0x2302('0x1d4')] = _0x2302(0x1f0);
                        _0x4825d2[_0x2302('0x1db')] = _0x517734;
                        var _0x19dcec = {};
                        _0x19dcec[_0x2302(0x1d5)] = _0x2302('0x1e8');
                        var _0x3eb32e = {};
                        _0x3eb32e[_0x2302(0x201)] = _0x19dcec;
                        _0x3eb32e[_0x2302('0x1d4')] = 0xc8;
                        return new Response(JSON[_0x2302('0x1dd')](_0x4825d2), _0x3eb32e);
                        break;
                    case _0x2ae768:
                        let _0x4508a4 = await ik(_0x519427[_0x2302(0x1f6)](_0x2302('0x1f8')) ? _0x519427[_0x2302(0x1f6)](_0x2302('0x1f8')) : '');
                        var _0x5bc6ea = {};
                        _0x5bc6ea['ok'] = !![];
                        _0x5bc6ea[_0x2302('0x22d')] = _0x4508a4;
                        _0x5bc6ea[_0x2302('0x1d4')] = _0x2302('0x209');
                        var _0x1c4680 = {};
                        _0x1c4680[_0x2302(0x1d5)] = _0x2302('0x1e8');
                        var _0x1f1029 = {};
                        _0x1f1029[_0x2302(0x201)] = _0x1c4680;
                        _0x1f1029[_0x2302('0x1d4')] = 0xc8;
                        return new Response(JSON[_0x2302('0x1dd')](_0x5bc6ea), _0x1f1029);
                        break;
                    case _0x426dbe:
                        if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))) {
                            var _0x50824b = '';
                            var _0x8c3746 = _0x2302('0x259');
                            try {
                                if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x20d)]('.') > -(0xd10 + -0x144f + 0x740)) {
                                    _0x50824b = _0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x257)]('.');
                                    _0x50824b = _0x50824b[_0x2302(0x252)]()[-0x2154 + 0x1f89 + 0x1 * 0x1cb];
                                }
                            } catch (_0x3a42da) {
                            }
                            if (_0x50824b == '' || _0x50824b[_0x2302(0x23c)] > -0x1bb7 + 0xfd1 + 0x3 * 0x3f9) {
                            } else {
                                var _0x8c3746 = JSON[_0x2302(0x1f9)](await cloudHosting[_0x2302(0x1f6)](_0x2302(0x1f4)));
                                _0x8c3746 = _0x8c3746[_0x50824b];
                            }
                            var _0x44ce65 = {
                                'metadata': {
                                    'since': Math[_0x2302('0x21a')](new Date()[_0x2302('0x222')]()),
                                    'extension': _0x50824b,
                                    'mime': _0x8c3746,
                                    'size': _0x519427[_0x2302(0x1f6)](_0x2302(0x1e7))[_0x2302(0x23c)],
                                    'base64': !![]
                                }
                            };
                            if (_0x50fdbd[_0x2302(0x1e4)][_0x2302(0x214)] == _0x2302(0x204) && _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)] > -0x1e * 0x47 + -0x9a * -0x23 + -0xcbc) {
                                _0x44ce65[_0x2302('0x20c')] = _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)];
                            }
                            await cloudHosting[_0x2302('0x21b')](_0x519427[_0x2302(0x1f6)](_0x2302(0x223)), await enct(_0x519427[_0x2302(0x1f6)](_0x2302(0x1e7)), _0x39555d), _0x44ce65);
                            var _0x56be12 = {};
                            _0x56be12['ok'] = !![];
                            _0x56be12[_0x2302('0x1d4')] = _0x2302(0x23f);
                            _0x56be12[_0x2302('0x237')] = _0x50fdbd[_0x2302(0x1e4)];
                            var _0x1b1f3b = {};
                            _0x1b1f3b[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x2400f6 = {};
                            _0x2400f6[_0x2302(0x201)] = _0x1b1f3b;
                            _0x2400f6[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x56be12), _0x2400f6);
                        } else {
                            var _0x588789 = {};
                            _0x588789['ok'] = ![];
                            _0x588789[_0x2302('0x1d4')] = _0x2302(0x22b);
                            var _0x49892a = {};
                            _0x49892a[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x29e91c = {};
                            _0x29e91c[_0x2302(0x201)] = _0x49892a;
                            _0x29e91c[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x588789), _0x29e91c);
                        }
                        break;
                    case _0x2b4a0a:
                        var {
                            value: _0x197106,
                            metadata: _0x4e7acc
                        } = await cloudHosting[_0x2302('0x218')](decodeURIComponent(_0x519427[_0x2302(0x1f6)](_0x2302(0x223))));
                        var _0x2b9ca8 = !![];
                        _0x4e7acc[_0x2302('0x234')] = _0x2b9ca8;
                        var _0x495d59 = {};
                        _0x495d59['ok'] = !![];
                        _0x495d59[_0x2302(0x236)] = _0x4e7acc;
                        _0x495d59[_0x2302('0x1d4')] = _0x2302('0x242');
                        var _0x2b2f15 = {};
                        _0x2b2f15[_0x2302(0x1d5)] = _0x2302('0x1e8');
                        var _0x26038e = {};
                        _0x26038e[_0x2302(0x201)] = _0x2b2f15;
                        _0x26038e[_0x2302('0x1d4')] = 0xc8;
                        return new Response(JSON[_0x2302('0x1dd')](_0x495d59), _0x26038e);
                        break;
                    case _0x2a905c:
                        if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))) {
                            try {
                                var _0x50824b = _0x2302(0x231);
                                var _0x8c3746 = _0x2302('0x259');
                                try {
                                    if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x20d)]('.') > -(-0x11d8 + 0x1eae + 0xf * -0xdb)) {
                                        _0x50824b = _0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x257)]('.');
                                        _0x50824b = _0x50824b[_0x2302(0x252)]()[0x1 * -0xc34 + 0x215d + -0x1529];
                                    }
                                } catch (_0x1a2daa) {
                                }
                                if (_0x50824b == '' || _0x50824b[_0x2302(0x23c)] > -0x12c6 + -0x2284 + 0x354f) {
                                } else {
                                    var _0x8c3746 = JSON[_0x2302(0x1f9)](await cloudHosting[_0x2302(0x1f6)](_0x2302(0x1f4)));
                                    _0x8c3746 = _0x8c3746[_0x50824b];
                                }
                                var _0x44ce65 = {
                                    'metadata': {
                                        'since': Math[_0x2302('0x21a')](new Date()[_0x2302('0x222')]()),
                                        'extension': _0x50824b,
                                        'mime': _0x8c3746,
                                        'size': 0x1,
                                        'base64': ![]
                                    }
                                };
                                if (_0x50fdbd[_0x2302(0x1e4)][_0x2302(0x214)] == _0x2302(0x204) && _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)] > -0xa78 + 0x21e2 + -0x176a) {
                                    _0x44ce65[_0x2302('0x20c')] = _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)];
                                }
                                await cloudHosting[_0x2302('0x21b')](_0x519427[_0x2302(0x1f6)](_0x2302(0x223)), await enct('\x20', _0x39555d), _0x44ce65);
                                var _0x2036c7 = {};
                                _0x2036c7['ok'] = !![];
                                _0x2036c7[_0x2302('0x1d4')] = _0x2302(0x23f);
                                _0x2036c7[_0x2302('0x237')] = _0x50fdbd[_0x2302(0x1e4)];
                                var _0x3c1f4c = {};
                                _0x3c1f4c[_0x2302(0x1d5)] = _0x2302('0x1e8');
                                var _0x3302ef = {};
                                _0x3302ef[_0x2302(0x201)] = _0x3c1f4c;
                                _0x3302ef[_0x2302('0x1d4')] = 0xc8;
                                return new Response(JSON[_0x2302('0x1dd')](_0x2036c7), _0x3302ef);
                            } catch (_0x378951) {
                                var _0x37caa8 = {};
                                _0x37caa8['ok'] = ![];
                                _0x37caa8[_0x2302('0x1d4')] = _0x2302(0x22b);
                                _0x37caa8[_0x2302('0x1cf')] = _0x378951;
                                var _0x488140 = {};
                                _0x488140[_0x2302(0x1d5)] = _0x2302('0x1e8');
                                var _0xaf6133 = {};
                                _0xaf6133[_0x2302(0x201)] = _0x488140;
                                _0xaf6133[_0x2302('0x1d4')] = 0xc8;
                                return new Response(JSON[_0x2302('0x1dd')](_0x37caa8), _0xaf6133);
                            }
                        } else {
                            var _0xe6b916 = {};
                            _0xe6b916['ok'] = ![];
                            _0xe6b916[_0x2302('0x1d4')] = _0x2302(0x22b);
                            var _0xa15659 = {};
                            _0xa15659[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x4b3f56 = {};
                            _0x4b3f56[_0x2302(0x201)] = _0xa15659;
                            _0x4b3f56[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0xe6b916), _0x4b3f56);
                        }
                        break;
                    case _0x574462:
                        try {
                            await cloudHosting[_0x2302('0x220')](decodeURIComponent(_0x519427[_0x2302(0x1f6)](_0x2302(0x223))));
                            var _0x21a066 = {};
                            _0x21a066['ok'] = !![];
                            _0x21a066[_0x2302('0x1d4')] = _0x2302(0x244);
                            var _0x3ad80e = {};
                            _0x3ad80e[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x351c5c = {};
                            _0x351c5c[_0x2302(0x201)] = _0x3ad80e;
                            _0x351c5c[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x21a066), _0x351c5c);
                        } catch (_0x2514f6) {
                            var _0x25e36c = {};
                            _0x25e36c['ok'] = ![];
                            _0x25e36c[_0x2302('0x1d4')] = _0x2302(0x22b);
                            var _0x37a189 = {};
                            _0x37a189[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x6f2bd5 = {};
                            _0x6f2bd5[_0x2302(0x201)] = _0x37a189;
                            _0x6f2bd5[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x25e36c), _0x6f2bd5);
                        }
                        break;
                    case _0x368828:
                        var _0x197106 = await dect(await cloudHosting[_0x2302(0x1f6)](decodeURIComponent(_0x519427[_0x2302(0x1f6)](_0x2302(0x223)))));
                        var _0x1fd0fd = {};
                        _0x1fd0fd['ok'] = !![];
                        _0x1fd0fd[_0x2302('0x221')] = _0x197106;
                        _0x1fd0fd[_0x2302('0x1d4')] = _0x2302('0x242');
                        var _0x34a616 = {};
                        _0x34a616[_0x2302(0x1d5)] = _0x2302('0x1e8');
                        var _0x4f036d = {};
                        _0x4f036d[_0x2302(0x201)] = _0x34a616;
                        _0x4f036d[_0x2302('0x1d4')] = 0xc8;
                        return new Response(JSON[_0x2302('0x1dd')](_0x1fd0fd), _0x4f036d);
                        break;
                    case _0x2e1439:
                        if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))) {
                            var _0x50824b = 'js';
                            var _0x8c3746 = _0x2302('0x226');
                            try {
                                if (_0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x20d)]('.') > -(0x1c27 + 0x6e + 0x2 * -0xe4a)) {
                                    _0x50824b = _0x519427[_0x2302(0x1f6)](_0x2302(0x223))[_0x2302(0x257)]('.');
                                    _0x50824b = _0x50824b[_0x2302(0x252)]()[-0xc53 + -0x269 * -0x9 + 0x95e * -0x1];
                                }
                            } catch (_0x34722f) {
                            }
                            if (_0x50824b == '' || _0x50824b[_0x2302(0x23c)] > -0x72 * 0xb + 0xd7 * 0x6 + -0x1f) {
                            } else {
                                var _0x8c3746 = JSON[_0x2302(0x1f9)](await cloudHosting[_0x2302(0x1f6)](_0x2302(0x1f4)));
                                _0x8c3746 = _0x8c3746[_0x50824b];
                            }
                            var _0x44ce65 = {
                                'metadata': {
                                    'since': Math[_0x2302('0x21a')](new Date()[_0x2302('0x222')]()),
                                    'extension': _0x50824b,
                                    'mime': _0x8c3746,
                                    'size': 0x1,
                                    'base64': ![],
                                    'func': !![]
                                }
                            };
                            if (_0x50fdbd[_0x2302(0x1e4)][_0x2302(0x214)] == _0x2302(0x204) && _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)] > 0x4f * -0x31 + -0x91 + 0x8 * 0x1f6) {
                                _0x44ce65[_0x2302('0x20c')] = _0x50fdbd[_0x2302(0x1e4)][_0x2302(0x1f3)];
                            }
                            await cloudHosting[_0x2302('0x21b')](_0x519427[_0x2302(0x1f6)](_0x2302(0x223)), await enct('\x20', _0x39555d), _0x44ce65);
                            var _0x4060e3 = {};
                            _0x4060e3['ok'] = !![];
                            _0x4060e3[_0x2302('0x1d4')] = _0x2302(0x23f);
                            _0x4060e3[_0x2302('0x237')] = _0x50fdbd[_0x2302(0x1e4)];
                            var _0x1d0e24 = {};
                            _0x1d0e24[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x287ae9 = {};
                            _0x287ae9[_0x2302(0x201)] = _0x1d0e24;
                            _0x287ae9[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x4060e3), _0x287ae9);
                        } else {
                            var _0x2d4d3f = {};
                            _0x2d4d3f['ok'] = ![];
                            _0x2d4d3f[_0x2302('0x1d4')] = _0x2302(0x22b);
                            var _0x3f7efa = {};
                            _0x3f7efa[_0x2302(0x1d5)] = _0x2302('0x1e8');
                            var _0x7b6f96 = {};
                            _0x7b6f96[_0x2302(0x201)] = _0x3f7efa;
                            _0x7b6f96[_0x2302('0x1d4')] = 0xc8;
                            return new Response(JSON[_0x2302('0x1dd')](_0x2d4d3f), _0x7b6f96);
                        }
                        break;
                    }
                } else {
                    return await requestDeny(_0x43000a);
                }
            } else {
                return await banned(_0x43000a);
            }
        } else {
            return await requestDeny(_0x43000a);
        }
    } else if (_0x43000a == _0x2302(0x1ea)) {
        await scf(_0x342b2e);
        try {
            var _0x3e9c81 = await cloudHosting[_0x2302(0x1f6)](_0x2302(0x203));
            if (!_0x3e9c81) {
                await cloudHosting[_0x2302('0x21b')](_0x2302(0x203), await JSON[_0x2302('0x1dd')](cachingMap));
            }
        } catch (_0x4de86f) {
            console[_0x2302(0x251)](_0x4de86f);
            var _0x44e99c = {};
            _0x44e99c[_0x2302(0x1d5)] = _0x2302('0x259');
            var _0x3f90a1 = {};
            _0x3f90a1[_0x2302(0x201)] = _0x44e99c;
            _0x3f90a1[_0x2302('0x1d4')] = 0xc8;
            return new Response(_0x2302(0x21c), _0x3f90a1);
        }
        try {
            var _0x8c3746 = JSON[_0x2302(0x1f9)](await cloudHosting[_0x2302(0x1f6)](_0x2302(0x1f4)));
            if (!_0x8c3746) {
                var _0x508ac6 = {};
                _0x508ac6[_0x2302(0x215)] = 0xe10;
                _0x508ac6[_0x2302('0x1f5')] = !![];
                var _0x1ca63a = {};
                _0x1ca63a['cf'] = _0x508ac6;
                var _0x2b5444 = await fetch(mimeURL, _0x1ca63a);
                _0x2b5444 = await gatherResponse(_0x2b5444);
                await cloudHosting[_0x2302('0x21b')](_0x2302(0x1f4), _0x2b5444);
            }
        } catch (_0x347006) {
            console[_0x2302(0x251)](_0x347006);
        }
        var _0x47bc64 = {};
        _0x47bc64[_0x2302(0x1d5)] = _0x2302('0x259');
        var _0x1022d6 = {};
        _0x1022d6[_0x2302(0x201)] = _0x47bc64;
        _0x1022d6[_0x2302('0x1d4')] = 0xc8;
        return new Response(html, _0x1022d6);
    } else if (_0x43000a[_0x2302('0x229')]('/') && !_0x43000a[_0x2302('0x229')]('/~')) {
        await scf(_0x342b2e);
        if (_0x43000a == '/') {
            var _0x182b64 = await cloudHosting[_0x2302(0x1f6)](_0x2302('0x1d7'));
            if (_0x182b64) {
                return await atc(_0x342b2e, await gf(_0x2302('0x1d7'), _0x43000a, _0x3849e3, _0x342b2e));
            } else {
                var _0x3f5313 = {};
                _0x3f5313[_0x2302(0x1d5)] = _0x2302('0x259');
                var _0x79a7d1 = {};
                _0x79a7d1[_0x2302(0x201)] = _0x3f5313;
                _0x79a7d1[_0x2302('0x1d4')] = 0xc8;
                return new Response(_0x2302(0x22f), _0x79a7d1);
            }
        } else {
            return await atc(_0x342b2e, await gf(decodeURIComponent(_0x43000a), _0x43000a, _0x3849e3, _0x342b2e));
        }
    } else {
        return await requestDeny(_0x43000a);
    }
}
function _0x4296() {
    var _0x4bbe43 = [
        'getRandomValues',
        'You\x20are\x20not\x20allowed\x20!',
        'err',
        'png',
        'formData',
        'subtle',
        'cf-connecting-ip',
        'status',
        'Content-Type',
        'fromCharCode',
        '/index.html',
        '578142VGuUrU',
        'token',
        'encode',
        'keywords',
        'https://production.serverlessconnect.com/api/check/domain',
        'stringify',
        '4840qzraNi',
        'includes',
        '3386FiIxzB',
        'public,\x20max-age=',
        '5lRitAm',
        '/admin/',
        'info',
        'random',
        'clone',
        'file',
        'application/json',
        'importKey',
        '/admin',
        'lwi3u96fxsEMaEhxfBczTwkdgXiTrg4Vzo1hqyTqvG12cv9MH5llGRHOpwO3Fik8C8ILqSdgHUBEwrxHLvUs2cL1F4qGpGwN0KkSKrjGDugyzTJ85tDiOzh2HLKEaRfmYItwGmw2g17FgodOag6IEJ0nq9ZVsV2TBjOs3ioYcCLoGIg9WmNBa4aNE1vdmdNIrRYva0XsLA2DTrgyGVuC4CNHdpSyxTfaOikk8jzyd0ouDz34hXHXfsVYbCSIPPolC2F3imiRG48AjQB2tbVUNBYWgXBxzgpdArTyAgUZEJZFKBL1rCBmEtCOFHLlQ6QmYPQX1Uv8y5nRjj6OGWoTNc6ftPvJWs8OowViWAnqiGKaeOBCFb8HiKPMWA2oCflqWehduG0hpkM7CpZep2PIxrIH6PnZbnUuh9eGDv7zBGxZOasQ9J7vtVKJExGV9vy2vdameDJOW4RpVbleiYTZGUFqjVa4TfBj9xHdEWtifiB64G5ECZqh4K3BQ06DUQDoeh1lI9j2fYIFe6XNyv7GzAoBBVlfKrthyDCRA17O4KBPoEopcqM4xYomfpP8RswIrAbYIB5tAyOpwrqAvTfxzWn6z6ABoGp9JDZdtpgnlo4xglev48V6qtekHdAgW1Za1ipCZh0suc1gfMysgk9Rc7aZDBhpoAkbotciDteF5V8dz2jtG3BTc6ZHPerFC92Hn5cNsAfN29H6A3DxeOu4fRQ1Iqa2k10wgEBi4l0NTwCRUT75iZHiV5TMi8BtFioJLfzrs3aF98b4vD4tkg52ZcdPRpXR8W8Qp0xtarVBHfe6wUCGnlhY8KjpAlaVObj9Jp0ihNV4tanzvfJ65RwrGpbi4HhvVYFZuZWSLQtYIueDXJwvcIYJr7JxZf0a0vV24FcDq2MUS5fVrlavh9nRaHwQxUSOZWOKk8uPkGpoBkrcYXRw4WhlO8yqseiFlJwzfmkaEBHBDyy0SWfbmrhydRQTijFQqGxDkYzrnLbr7uBRufY4w9yo2P6dgGhVyl1P',
        'form',
        'char',
        '261315VJCogm',
        'catch',
        'Authenticated',
        'set',
        'base64',
        'ttl',
        '~system-mime-types',
        'cacheEverything',
        'get',
        'cursor',
        'prefix',
        'parse',
        'text',
        '3699369mBrwYJ',
        '28AAyzXq',
        '13764640ZLKZYs',
        'charAt',
        'decrypt',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'headers',
        'encrypt',
        '~cacheMap',
        'trial',
        'extension',
        'css',
        'digest',
        'list_complete',
        'Listed',
        'push',
        'method',
        'expirationTtl',
        'indexOf',
        'content-type',
        'entries',
        'https://production.serverlessconnect.com/api/authenticate',
        'AES-GCM',
        'replace',
        'validate',
        'subscription',
        'cacheTtl',
        '0123456789',
        '99168LplEZu',
        'getWithMetadata',
        'json',
        'round',
        'put',
        '<meta\x20charset=\x27UTF-8\x27>\x20<meta\x20name=\x27viewport\x27\x20content=\x27width=device-width,\x20initial-scale=1\x27><div\x20style=\x27display:flex;height:90vh;align-items:center;justify-content:center;flex-direction:column\x27><h3\x20style=\x27color:orangered;margin:0\x27>\x20KV\x20Connection\x20Failed\x20!\x20E-001\x20</h3><p\x20style=\x27margin:0;text-align:\x20center;\x20color:\x20silver;\x27>Create\x20a\x20KV\x20and\x20bind\x20to\x20worker\x20by\x20the\x20name\x20\x27cloudHosting\x27\x20.</p></div>',
        'match',
        'request',
        'authkey',
        'delete',
        'value',
        'getTime',
        'path',
        'name',
        '<html><body><div\x20style=\x27width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center\x27><h1\x20style=\x27margin:\x200;\x20color:\x20orangered;\x20\x27>404</h1>\x20<h2\x20style=\x27margin:\x200;\x27>\x20File\x20not\x20found.</h2></div></body></html>',
        'application/javascript',
        'from',
        '/nocache/*',
        'startsWith',
        'a\x20file',
        'Failed',
        '~login-failed|',
        'list',
        ';base64,',
        '<html><body><div\x20style=\x27width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center\x27><h1\x20style=\x27margin:\x200;\x20color:\x20limegreen;\x20\x27>Serverless\x20Connect</h1>\x20<p\x20style=\x27margin:\x200;font-size:18px\x27>\x20Connect\x20to\x20the\x20World.</p></div></body></html>',
        'url',
        'txt',
        'jpg',
        '296HDXlIP',
        'editable',
        '<html><body><div\x20style=\x27width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center\x27><h1\x20style=\x27margin:\x200;\x20color:\x20orangered;\x20\x27>404</h1>\x20<p\x20style=\x27margin:\x200;font-size:18px\x27>\x20File\x20not\x20found.</p></div></body></html>',
        'metadata',
        'domain',
        'cf-ipcountry',
        '~login-success|',
        'slice',
        'result',
        'length',
        'style',
        'https://production.serverlessconnect.com/v1.2/file/mime-types',
        'Uploaded',
        'decode',
        'keys',
        'Fetched',
        'map',
        'Deleted',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        'default',
        'POST',
        'respondWith',
        'floor',
        '~system/banned/',
        'fromEntries',
        'join',
        'number',
        'raw',
        'charCodeAt',
        'route',
        'log',
        'reverse',
        'routes',
        'application/text',
        ',\x20s-maxage=',
        '409dIMIUA',
        'split',
        '654652ZpmjKg',
        'text/html',
        '<!DOCTYPE\x20html>\x0a<html>\x0a<head>\x0a\x20\x20\x20\x20<title>Serverless\x20Connect</title>\x0a\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22icon\x22\x20type=\x22image/x-icon\x22\x20href=\x22https://production.serverlessconnect.com/v1.2/img/logo-64.png\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin>\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap\x22\x20rel=\x22stylesheet\x22>\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://production.serverlessconnect.com/v1.2/css/uikit.min.css\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22\x20/>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/jquery.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/uikit.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/uikit-icons.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/crypto.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20href=\x27https://production.serverlessconnect.com/v1.2/css/codemirror.css\x27\x20rel=\x27stylesheet\x27>\x0a\x20\x20\x20\x20<script\x20src=\x27https://production.serverlessconnect.com/v1.2/js/codemirror.js\x27></script>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20href=\x22https://production.serverlessconnect.com/v1.2/css/admin.css\x22\x20rel=\x22stylesheet\x22>\x0a</head>\x0a<body\x20class=\x22theme\x22></body>\x0a<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/connect.js\x22></script>\x0a</html>',
        'fetch',
        'SHA-256'
    ];
    _0x4296 = function () {
        return _0x4bbe43;
    };
    return _0x4296();
}
async function requestDeny(_0x835911) {
    var _0x10f18a = {};
    _0x10f18a[_0x2302(0x1d5)] = _0x2302('0x259');
    var _0x4d0e36 = {};
    _0x4d0e36[_0x2302(0x201)] = _0x10f18a;
    _0x4d0e36[_0x2302('0x1d4')] = 0x194;
    return new Response(_0x2302('0x225'), _0x4d0e36);
}
async function banned(_0x9a17b8) {
    var _0x59f464 = {};
    _0x59f464['ok'] = ![];
    _0x59f464[_0x2302('0x23b')] = _0x2302(0x1ce);
    _0x59f464[_0x2302('0x250')] = _0x9a17b8;
    var _0x4eb4cf = {};
    _0x4eb4cf[_0x2302(0x1d5)] = _0x2302('0x1e8');
    var _0x5c4e93 = {};
    _0x5c4e93[_0x2302(0x201)] = _0x4eb4cf;
    _0x5c4e93[_0x2302('0x1d4')] = 0x193;
    return new Response(JSON[_0x2302('0x1dd')](_0x59f464), _0x5c4e93);
}
async function gatherResponse(_0x4e5a01) {
    const {headers: _0x4a87e4} = _0x4e5a01;
    const _0x213081 = _0x4a87e4[_0x2302(0x1f6)](_0x2302('0x20e')) || '';
    if (_0x213081[_0x2302(0x1df)](_0x2302('0x1e8'))) {
        return JSON[_0x2302(0x1f9)](JSON[_0x2302('0x1dd')](await _0x4e5a01[_0x2302('0x219')]()));
    }
    return _0x4e5a01[_0x2302('0x1fa')]();
}
async function gf(_0x29a55a, _0x3df947, _0x4fe16b, _0x577d2b) {
    var _0x195142 = '';
    var _0x19bcc0 = _0x2302('0x259');
    try {
        if (_0x29a55a[_0x2302(0x20d)]('.') > -(-0x24c9 + -0xc31 * -0x1 + 0x1899)) {
            _0x195142 = _0x29a55a[_0x2302(0x257)]('.');
            _0x195142 = _0x195142[_0x2302(0x252)]()[-0x298 + -0xced + -0x1d * -0x89];
        }
    } catch (_0x412be9) {
    }
    if (_0x195142 == '' || _0x195142[_0x2302(0x23c)] > -0x258 + -0x37 * -0x6a + -0x113 * 0x13) {
    } else {
        var _0x19bcc0 = JSON[_0x2302(0x1f9)](await cloudHosting[_0x2302(0x1f6)](_0x2302(0x1f4)));
        _0x19bcc0 = _0x19bcc0[_0x195142];
    }
    var _0x570ea0 = -0xf7 * 0x17 + -0x140d * -0x1 + 0x1034;
    var _0x25ad0e = await cloudHosting[_0x2302('0x218')](decodeURIComponent(_0x29a55a));
    if (!_0x25ad0e) {
        return await requestDeny(_0x3df947);
    }
    var _0x56fee6 = _0x25ad0e[_0x2302(0x236)];
    var _0x25ad0e = await dect(_0x25ad0e[_0x2302('0x221')]);
    if (_0x56fee6[_0x2302(0x1f2)] == !![]) {
        try {
            return new Response(b6d(_0x25ad0e[_0x2302(0x257)](_0x2302(0x22e))[0x1 * -0x1a23 + 0x2702 + -0xcde]), {
                'headers': {
                    'Content-Type': _0x19bcc0,
                    'content-length': _0x25ad0e[_0x2302(0x23c)],
                    'Cache-Control': _0x2302(0x1e1) + _0x570ea0 + _0x2302(0x255) + _0x570ea0,
                    'Access-Control-Allow-Origin': _0x4fe16b
                }
            });
        } catch (_0x54d944) {
            return new Response(_0x25ad0e, {
                'headers': {
                    'Content-Type': _0x19bcc0,
                    'content-length': _0x25ad0e[_0x2302(0x23c)],
                    'Cache-Control': _0x2302(0x1e1) + _0x570ea0 + _0x2302(0x255) + _0x570ea0,
                    'Access-Control-Allow-Origin': _0x4fe16b
                }
            });
        }
    } else {
        return new Response(_0x25ad0e, {
            'headers': {
                'Content-Type': _0x19bcc0,
                'content-length': _0x25ad0e[_0x2302(0x23c)],
                'Cache-Control': _0x2302(0x1e1) + _0x570ea0 + _0x2302(0x255) + _0x570ea0,
                'Access-Control-Allow-Origin': _0x4fe16b
            }
        });
    }
}
async function atc(_0x41fafc, _0x3ecf0e) {
    let _0x5ac95e = await cache[_0x2302(0x21d)](_0x41fafc);
    if (!_0x5ac95e) {
        await cache[_0x2302('0x21b')](_0x41fafc, _0x3ecf0e[_0x2302('0x1e6')]());
        return _0x3ecf0e;
    } else {
        return _0x5ac95e;
    }
}
async function scf(_0x4bb943) {
    let _0x5cd931 = await cache[_0x2302(0x21d)](_0x4bb943);
    if (_0x5cd931) {
        return _0x5cd931;
    }
}
function b6d(_0x14e06f) {
    _0x14e06f = atob(_0x14e06f);
    const _0x818ca9 = _0x14e06f[_0x2302(0x23c)], _0x249144 = new ArrayBuffer(_0x818ca9), _0x1e118a = new Uint8Array(_0x249144);
    for (var _0x3cc00c = -0x233c + -0x11af + -0x34eb * -0x1; _0x3cc00c < _0x818ca9; _0x3cc00c++) {
        _0x1e118a[_0x3cc00c] = _0x14e06f[_0x2302(0x24f)](_0x3cc00c);
    }
    return _0x249144;
}
async function uiUx(_0x4716f9, _0x253c5b, _0x194c3a) {
    _0x4716f9 = _0x4716f9[_0x2302('0x212')](/\s+/g, '');
    var _0x8233f6 = randomID(-0x1af * -0x1 + -0xa * 0xef + 0x80b) + '-' + new Date()[_0x2302('0x222')]() + '-' + randomID(-0x2614 + -0x912 + 0x2f8a);
    var _0x476da1 = Math[_0x2302('0x249')](Math[_0x2302('0x1e5')]() * (-0x10d8 + 0x69d * -0x1 + 0xc2 * 0x1f) + (0x7 * -0x281 + -0x1 * 0x86b + 0x19f3));
    var _0xe908a = [
        [
            'Z',
            'A',
            'W',
            'l',
            'p'
        ],
        [
            'X',
            'S',
            'E',
            'z',
            'a'
        ],
        [
            'C',
            'D',
            'R',
            'x',
            's'
        ],
        [
            'V',
            'F',
            'T',
            'c',
            'd'
        ],
        [
            'B',
            'G',
            'Y',
            'v',
            'f'
        ],
        [
            'N',
            'H',
            'U',
            'b',
            'g',
            'y'
        ],
        [
            'M',
            'J',
            'I',
            'n',
            'h',
            'u'
        ],
        [
            'K',
            'O',
            'm',
            'j',
            'i'
        ],
        [
            'L',
            'P',
            'Q',
            'k',
            'o'
        ],
        [
            'q',
            'w',
            'e',
            'r',
            't'
        ]
    ];
    var _0x585caa = '';
    var _0x415e13 = parseInt(_0x8233f6[_0x2302(0x257)]('-')[-0x1fca + 0xa * -0x2a6 + 0x3a47]) + parseInt(0x1c8c505 + 0x6196e66a + 0x522e66 * -0x82) + '';
    for (var _0x2c7951 = 0x1b7a + 0x5 * -0x337 + -0xb67; _0x2c7951 < _0x415e13[_0x2302(0x23c)]; _0x2c7951++) {
        _0x585caa += _0xe908a[_0x415e13[_0x2302('0x1fe')](_0x2c7951)][Math[_0x2302('0x249')](Math[_0x2302('0x1e5')]() * _0xe908a[_0x415e13[_0x2302('0x1fe')](_0x2c7951)][_0x2302(0x23c)])];
    }
    var _0x585caa = _0xe908a[_0x476da1][Math[_0x2302('0x249')](Math[_0x2302('0x1e5')]() * _0xe908a[_0x476da1][_0x2302(0x23c)])] + _0x585caa + randomID(_0x476da1);
    var _0x4e3b4b = {};
    _0x4e3b4b[_0x2302(0x215)] = 0xe10;
    var _0x3d4900 = await fetch(_0x2302('0x210'), {
        'method': _0x2302('0x247'),
        'cf': _0x4e3b4b,
        'headers': {
            'cfp': _0x194c3a[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3')),
            'content-type': _0x2302('0x1e8'),
            'uikit': _0x2302(0x1eb),
            'token': _0x4716f9,
            'req': _0x253c5b,
            'cacheClear': _0x585caa
        }
    });
    _0x3d4900 = await gatherResponse(_0x3d4900);
    var _0x52aaa6 = _0x253c5b + '*' + _0x253c5b[_0x2302(0x257)]('.')[_0x2302(0x23a)](0xb99 + 0xf24 + 0xec * -0x1d)[_0x2302('0x24c')]('.') + '*' + _0x194c3a[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3')) + '*' + _0x194c3a[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302(0x238));
    try {
        _0x3d4900[_0x2302(0x1e4)] = JSON[_0x2302(0x1f9)](await dect(_0x3d4900[_0x2302(0x1e4)], _0x52aaa6));
    } catch (_0x561a55) {
    }
    try {
        css = _0x3d4900[_0x2302(0x1e4)][_0x2302('0x237')];
        const _0x451a1c = await dect(_0x3d4900['s'], _0x52aaa6);
        var _0x2e79d6 = {};
        _0x2e79d6[_0x2302('0x20c')] = 0x278d00;
        await cloudHosting[_0x2302('0x21b')](_0x2302(0x239) + _0x194c3a[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3')), await enct(JSON[_0x2302('0x1dd')]({
            'code': _0x3d4900,
            'headers': Object[_0x2302('0x24b')](_0x194c3a[_0x2302(0x201)]),
            'cf': _0x194c3a['cf']
        }), _0x451a1c), _0x2e79d6);
    } catch (_0x53905e) {
        console[_0x2302(0x251)](_0x53905e);
        var _0x3d3f09 = {};
        _0x3d3f09[_0x2302('0x20c')] = 0x278d00;
        await cloudHosting[_0x2302('0x21b')](_0x2302(0x22c) + _0x194c3a[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3')), JSON[_0x2302('0x1dd')]({
            'code': _0x3d4900,
            'headers': Object[_0x2302('0x24b')](_0x194c3a[_0x2302(0x201)]),
            'cf': _0x194c3a['cf']
        }), _0x3d3f09);
        return ![];
    }
    if (_0x3d4900['ok'] === !![]) {
        return _0x3d4900;
    } else {
        return ![];
    }
}
function _0x2302(_0x12bf10, _0x572ecc) {
    var _0x1ffb50 = _0x4296();
    _0x2302 = function (_0x2d50db, _0x49de87) {
        _0x2d50db = _0x2d50db - (-0x8 * 0x14c + -0xbc * -0x19 + -0x632 * 0x1);
        var _0x16949f = _0x1ffb50[_0x2d50db];
        return _0x16949f;
    };
    return _0x2302(_0x12bf10, _0x572ecc);
}
async function ik(_0x1e60e0, _0x58054d, _0x3c618c) {
    _0x3c618c = _0x3c618c ? _0x3c618c : [];
    let _0x391608 = {};
    _0x391608[_0x2302('0x1f8')] = _0x1e60e0 ? _0x1e60e0 : '';
    _0x391608[_0x2302('0x1f7')] = _0x58054d ? _0x58054d : '';
    let _0x507a61 = await cloudHosting[_0x2302('0x22d')](_0x391608);
    _0x3c618c[_0x2302('0x20a')](..._0x507a61[_0x2302(0x241)]);
    if (_0x507a61[_0x2302(0x208)] == ![]) {
        ik(_0x1e60e0, _0x58054d, _0x3c618c);
    } else {
        return _0x3c618c;
    }
}
async function readRequestBody(_0x3018e4) {
    const {headers: _0x33aac3} = _0x3018e4;
    const _0x505178 = _0x33aac3[_0x2302(0x1f6)](_0x2302('0x20e')) || '';
    if (_0x505178[_0x2302(0x1df)](_0x2302('0x1e8'))) {
        return JSON[_0x2302('0x1dd')](await _0x3018e4[_0x2302('0x219')]());
    } else if (_0x505178[_0x2302(0x1df)](_0x2302(0x254))) {
        return _0x3018e4[_0x2302('0x1fa')]();
    } else if (_0x505178[_0x2302(0x1df)](_0x2302('0x259'))) {
        return _0x3018e4[_0x2302('0x1fa')]();
    } else if (_0x505178[_0x2302(0x1df)](_0x2302('0x1ec'))) {
        const _0x49aaaf = await _0x3018e4[_0x2302('0x1d1')]();
        const _0x7311ad = {};
        for (const _0x498362 of _0x49aaaf[_0x2302(0x20f)]()) {
            _0x7311ad[_0x498362[-0x31 * -0xa8 + 0xc52 + 0x1 * -0x2c7a]] = _0x498362[-0x890 + 0x56f * 0x2 + -0x13 * 0x1f];
        }
        return JSON[_0x2302('0x1dd')](_0x7311ad);
    } else {
        return _0x2302(0x22a);
    }
}
async function gb(_0x2ef36f) {
    var _0xdbb5 = await dect(await cloudHosting[_0x2302(0x1f6)](_0x2302('0x24a') + _0x2ef36f[_0x2302(0x201)][_0x2302(0x1f6)](_0x2302('0x1d3'))));
    if (_0xdbb5) {
        return !![];
    } else {
        return ![];
    }
}
function randomID(_0x56693d, _0x223959 = null) {
    var _0x43d24e = [];
    var _0x5acc9c = _0x223959 == _0x2302('0x24d') ? _0x2302('0x216') : _0x223959 == _0x2302('0x1ed') ? _0x2302('0x245') : _0x2302(0x200);
    var _0x5ce962 = _0x5acc9c[_0x2302(0x23c)];
    for (var _0x38c2df = -0x1934 + -0x745 * 0x1 + 0x2079; _0x38c2df < _0x56693d; _0x38c2df++) {
        _0x43d24e[_0x2302('0x20a')](_0x5acc9c[_0x2302('0x1fe')](Math[_0x2302('0x249')](Math[_0x2302('0x1e5')]() * _0x5ce962)));
    }
    return _0x43d24e[_0x2302('0x24c')]('');
}
var html = _0x2302(0x1ca);
async function enct(_0x512223, _0x263727) {
    const _0x284dc6 = new TextEncoder()[_0x2302(0x1da)](_0x263727);
    const _0x1151df = await crypto[_0x2302('0x1d2')][_0x2302(0x207)](_0x2302(0x1cc), _0x284dc6);
    const _0x353322 = crypto[_0x2302(0x1cd)](new Uint8Array(0xce3 * -0x2 + -0x913 + -0x22e5 * -0x1));
    const _0x4991f3 = Array[_0x2302('0x227')](_0x353322)[_0x2302(0x243)](_0xb6ea87 => String[_0x2302('0x1d6')](_0xb6ea87))[_0x2302('0x24c')]('');
    var _0x325d08 = {};
    _0x325d08[_0x2302('0x224')] = _0x2302('0x211');
    _0x325d08['iv'] = _0x353322;
    const _0x30107a = _0x325d08;
    const _0x5735b7 = await crypto[_0x2302('0x1d2')][_0x2302(0x1e9)](_0x2302('0x24e'), _0x1151df, _0x30107a, ![], [_0x2302(0x202)]);
    const _0xa25a0c = new TextEncoder()[_0x2302(0x1da)](_0x512223);
    const _0x1e98f2 = await crypto[_0x2302('0x1d2')][_0x2302(0x202)](_0x30107a, _0x5735b7, _0xa25a0c);
    const _0x99881 = Array[_0x2302('0x227')](new Uint8Array(_0x1e98f2));
    const _0x167aaa = _0x99881[_0x2302(0x243)](_0x3cab0a => String[_0x2302('0x1d6')](_0x3cab0a))[_0x2302('0x24c')]('');
    return btoa(_0x4991f3 + _0x167aaa);
}
async function dect(_0x32f4bb, _0x38c7c0) {
    try {
        const _0x51e65b = new TextEncoder()[_0x2302(0x1da)](_0x38c7c0);
        const _0x362337 = await crypto[_0x2302('0x1d2')][_0x2302(0x207)](_0x2302(0x1cc), _0x51e65b);
        const _0x398ffe = atob(_0x32f4bb)[_0x2302(0x23a)](0x1 * 0x13e9 + -0x795 + -0xc54, -0xca7 + 0xe47 + 0xca * -0x2);
        const _0x286c97 = new Uint8Array(Array[_0x2302('0x227')](_0x398ffe)[_0x2302(0x243)](_0x3cdbc5 => _0x3cdbc5[_0x2302(0x24f)](-0x88f * 0x2 + -0x178a + 0x515 * 0x8)));
        var _0x3f8101 = {};
        _0x3f8101[_0x2302('0x224')] = _0x2302('0x211');
        _0x3f8101['iv'] = _0x286c97;
        const _0x151a1 = _0x3f8101;
        const _0x1a0731 = await crypto[_0x2302('0x1d2')][_0x2302(0x1e9)](_0x2302('0x24e'), _0x362337, _0x151a1, ![], [_0x2302(0x1ff)]);
        const _0xc6fd54 = atob(_0x32f4bb)[_0x2302(0x23a)](0xf1c + 0x548 + 0x15 * -0xf8);
        const _0x2dbfcc = new Uint8Array(Array[_0x2302('0x227')](_0xc6fd54)[_0x2302(0x243)](_0x47367b => _0x47367b[_0x2302(0x24f)](-0x2 * -0x3fd + -0x2a7 + -0x1 * 0x553)));
        try {
            const _0x1e2b27 = await crypto[_0x2302('0x1d2')][_0x2302(0x1ff)](_0x151a1, _0x1a0731, _0x2dbfcc);
            const _0x2b3127 = new TextDecoder()[_0x2302('0x240')](_0x1e2b27);
            return _0x2b3127;
        } catch (_0x1cf40e) {
            return '';
        }
    } catch (_0x212b4d) {
        return '';
    }
}
