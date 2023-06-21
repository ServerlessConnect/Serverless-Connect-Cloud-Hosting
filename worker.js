/* 
Copyright 2023, Serverless Connect
All applicable matarial structure are Intellectual property of Serverless Connect.
https://www.serverlessconnect.com/
Updated - 21/Jun/2023  
Latest Version - 1.23.3
*/

var _0x2f9b28 = _0x36a2;
(function (_0x478f16, _0xdc2787) {
    var _0x581c66 = _0x36a2, _0x56ad9c = _0x478f16();
    while (!![]) {
        try {
            var _0xbad052 = parseInt(_0x581c66(0x16a)) / 0x1 + parseInt(_0x581c66(0x1ab)) / 0x2 + parseInt(_0x581c66(0x158)) / 0x3 + -parseInt(_0x581c66(0x1a5)) / 0x4 * (-parseInt(_0x581c66(0x12d)) / 0x5) + -parseInt(_0x581c66(0x174)) / 0x6 * (parseInt(_0x581c66(0x1a1)) / 0x7) + parseInt(_0x581c66(0x190)) / 0x8 * (-parseInt(_0x581c66(0x19c)) / 0x9) + parseInt(_0x581c66(0x122)) / 0xa * (-parseInt(_0x581c66(0x14d)) / 0xb);
            if (_0xbad052 === _0xdc2787)
                break;
            else
                _0x56ad9c['push'](_0x56ad9c['shift']());
        } catch (_0xff31cb) {
            _0x56ad9c['push'](_0x56ad9c['shift']());
        }
    }
}(_0x385a, 0x7b3cb));
const cache = caches[_0x2f9b28(0x191)], spl = _0x2f9b28(0x1ae), mimeURL = _0x2f9b28(0x145), cacheMapURL = _0x2f9b28(0x17e) + spl;
var css = 'style';
const uikit = 'authkey', flid = _0x2f9b28(0x141), return_as_file = [
    _0x2f9b28(0x17a),
    _0x2f9b28(0x17d),
    _0x2f9b28(0x12b)
], return_base64 = [];
var cacheRequest = !![], cachingMap = {
    'routes': [{
        'route': _0x2f9b28(0x15f),
        'ttl': 0x0
    }],
    'extension': {
        'js': 0x0,
        'css': 0x0,
        'png': 0xe10,
        'jpg': 0xe10
    }
}, fwwR = null;
addEventListener('fetch', _0x306cbe => {
    var _0xbd55cb = _0x2f9b28;
    _0x306cbe[_0xbd55cb(0x16f)](handleRequest(_0x306cbe['request'])[_0xbd55cb(0x1a4)](_0xb91a25 => new Response(_0xbd55cb(0x1a9), { 'status': 0x193 })));
});
async function handleRequest(_0x25eb50) {
    var _0x59a3d1 = _0x2f9b28;
    const {
        protocol: _0x416ce9,
        pathname: _0x1d8b9e,
        hostname: _0x124890,
        searchParams: _0x97a5a,
        search: _0x5e4b74
    } = new URL(_0x25eb50[_0x59a3d1(0x148)]);
    var _0x56177f, _0x77909c;
    try {
        if (_0x25eb50[_0x59a3d1(0x1a2)] == _0x59a3d1(0x14b)) {
            var _0x4a0962 = await _0x25eb50['text']();
            _0x56177f = new URLSearchParams(_0x4a0962);
            if (_0x25eb50[_0x59a3d1(0x14e)][_0x59a3d1(0x147)]('content-type')['includes'](_0x59a3d1(0x17f))) {
                var _0x4a0962 = {};
                for (const _0x4e3f5a of _0x56177f['entries']()) {
                    _0x4a0962[_0x4e3f5a[0x0]] = _0x4e3f5a[0x1];
                }
            }
        }
    } catch (_0x2a9724) {
    }
    try {
        if (_0x1d8b9e['startsWith'](_0x59a3d1(0x13f))) {
            if (_0x25eb50[_0x59a3d1(0x1a2)] == _0x59a3d1(0x14b)) {
                if (await gb(_0x25eb50) == ![]) {
                    var _0x15d177 = await uiUx(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x18d)) ? _0x56177f['get']('token') : '', _0x124890, _0x25eb50);
                    if (_0x15d177 === ![])
                        return await cloudHosting['put'](_0x59a3d1(0x14a) + _0x25eb50[_0x59a3d1(0x14e)][_0x59a3d1(0x147)](_0x59a3d1(0x13b)), await enct(JSON['stringify'](Object['fromEntries'](_0x25eb50['headers']))), { 'expirationTtl': 0x12c }), new Response(JSON[_0x59a3d1(0x164)]({ 'ok': ![] }), {
                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                            'status': 0xc8
                        });
                    else {
                        if (_0x15d177['ok'] === !![]) {
                            let _0x11d7f8 = '$';
                            var _0x1033d8 = _0x124890 + '*' + _0x124890[_0x59a3d1(0x154)]('.')[_0x59a3d1(0x10d)](0x1)['join']('.') + '*' + _0x25eb50[_0x59a3d1(0x14e)][_0x59a3d1(0x147)](_0x59a3d1(0x13b)) + '*' + _0x25eb50['headers']['get'](_0x59a3d1(0x183));
                            const _0x2e2187 = await dect(_0x15d177['s'], _0x1033d8);
                            let _0x32e3ec = _0x1d8b9e[_0x59a3d1(0x154)]('/admin/')[0x1], _0x1fc39f = JSON[_0x59a3d1(0x11c)](_0x15d177['r']);
                            fwwR = JSON[_0x59a3d1(0x11c)](await dect(_0x15d177['f'], _0x1033d8));
                            css == _0x124890 && (css = '/', _0x11d7f8 = css);
                            !_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)) ? _0x56177f[_0x59a3d1(0x14c)]('path', _0x11d7f8) : _0x56177f[_0x59a3d1(0x14c)](_0x59a3d1(0x143), _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143))[_0x59a3d1(0x15a)]('~') ? _0x56177f[_0x59a3d1(0x147)]('path') : _0x11d7f8 + _0x56177f[_0x59a3d1(0x147)]('path'));
                            !_0x56177f['get'](_0x59a3d1(0x197)) ? _0x56177f[_0x59a3d1(0x14c)](_0x59a3d1(0x197), _0x11d7f8) : _0x56177f['set'](_0x59a3d1(0x197), _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x197))[_0x59a3d1(0x15a)]('~') ? _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x197)) : _0x11d7f8 + _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x197)));
                            _0x32e3ec = _0x32e3ec == _0x59a3d1(0x13a) ? _0x32e3ec : await dect(decodeURIComponent(_0x32e3ec), _0x1033d8);
                            switch (_0x32e3ec) {
                                case await dect(_0x1fc39f[0x0], _0x1033d8):
                                    return new Response(JSON[_0x59a3d1(0x164)]({
                                        'ok': !![],
                                        'keywords': _0x1fc39f
                                    }), {
                                        'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                        'status': 0xc8
                                    });
                                    break;
                                case await dect(_0x1fc39f[0x1], _0x1033d8):
                                    let _0x40549c = await ik(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x197)) ? _0x56177f['get'](_0x59a3d1(0x197)) : '');
                                    return new Response(JSON[_0x59a3d1(0x164)]({
                                        'ok': !![],
                                        'list': _0x40549c,
                                        'status': 'Listed'
                                    }), {
                                        'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                        'status': 0xc8
                                    });
                                    break;
                                case await dect(_0x1fc39f[0x2], _0x1033d8):
                                    if (_0x56177f[_0x59a3d1(0x147)]('path')) {
                                        var _0x4d4024 = '', _0x2eed5c = _0x59a3d1(0x13e);
                                        try {
                                            _0x56177f['get'](_0x59a3d1(0x143))[_0x59a3d1(0x131)]('.') > -0x1 && (_0x4d4024 = _0x56177f['get'](_0x59a3d1(0x143))['split']('.'), _0x4d4024 = _0x4d4024[_0x59a3d1(0x18e)]()[0x0]);
                                        } catch (_0x4c0d46) {
                                        }
                                        if (_0x4d4024 == '' || _0x4d4024[_0x59a3d1(0x10f)] > 0x5) {
                                        } else {
                                            var _0x2eed5c = JSON[_0x59a3d1(0x11c)](await cloudHosting['get'](_0x59a3d1(0x173), { 'cacheTtl': 0xe10 }));
                                            _0x2eed5c = _0x2eed5c[_0x4d4024];
                                        }
                                        var _0x50dab0 = {
                                            'metadata': {
                                                'since': Math['round'](new Date()[_0x59a3d1(0x137)]()),
                                                'extension': _0x4d4024,
                                                'mime': _0x2eed5c,
                                                'size': _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x121))[_0x59a3d1(0x10f)],
                                                'base64': !![]
                                            }
                                        };
                                        return await cloudHosting[_0x59a3d1(0x18f)](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)), await enct(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x121))), _0x50dab0), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x12f)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    break;
                                case await dect(_0x1fc39f[0x3], _0x1033d8):
                                    var {
                                        value: _0x19f56c,
                                        metadata: _0xb8c7a4
                                    } = await cloudHosting[_0x59a3d1(0x130)](decodeURIComponent(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)))), _0x3bf119 = !![];
                                    _0xb8c7a4[_0x59a3d1(0x17b)] = _0x3bf119;
                                    return new Response(JSON['stringify']({
                                        'ok': !![],
                                        'metadata': _0xb8c7a4,
                                        'status': _0x59a3d1(0x132)
                                    }), {
                                        'headers': { 'Content-Type': 'application/json' },
                                        'status': 0xc8
                                    });
                                    break;
                                case await dect(_0x1fc39f[0x4], _0x1033d8):
                                    if (_0x56177f['get'](_0x59a3d1(0x143))) {
                                        var _0x4d4024 = _0x59a3d1(0x11a), _0x2eed5c = _0x59a3d1(0x13e);
                                        try {
                                            _0x56177f['get'](_0x59a3d1(0x143))[_0x59a3d1(0x131)]('.') > -0x1 && (_0x4d4024 = _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143))[_0x59a3d1(0x154)]('.'), _0x4d4024 = _0x4d4024[_0x59a3d1(0x18e)]()[0x0]);
                                        } catch (_0x5ab857) {
                                        }
                                        if (_0x4d4024 == '' || _0x4d4024[_0x59a3d1(0x10f)] > 0x5) {
                                        } else {
                                            var _0x2eed5c = JSON[_0x59a3d1(0x11c)](await cloudHosting[_0x59a3d1(0x147)](_0x59a3d1(0x173), { 'cacheTtl': 0xe10 }));
                                            _0x2eed5c = _0x2eed5c[_0x4d4024];
                                        }
                                        var _0x50dab0 = {
                                            'metadata': {
                                                'since': Math[_0x59a3d1(0x1ad)](new Date()[_0x59a3d1(0x137)]()),
                                                'extension': _0x4d4024,
                                                'mime': _0x2eed5c,
                                                'size': 0x1,
                                                'base64': ![]
                                            }
                                        };
                                        return await cloudHosting['put'](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)), await enct('\x20'), _0x50dab0), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x12f)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': 'application/json' },
                                            'status': 0xc8
                                        });
                                    break;
                                case await dect(_0x1fc39f[0x5], _0x1033d8):
                                    try {
                                        return await cloudHosting[_0x59a3d1(0x175)](decodeURIComponent(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)))), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x162)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } catch (_0x4eacb6) {
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': 'application/json' },
                                            'status': 0xc8
                                        });
                                    }
                                    break;
                                case await dect(_0x1fc39f[0x6], _0x1033d8):
                                    var _0x19f56c = await dect(await cloudHosting['get'](decodeURIComponent(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)))));
                                    return new Response(JSON[_0x59a3d1(0x164)]({
                                        'ok': !![],
                                        'value': _0x19f56c,
                                        'status': 'Fetched'
                                    }), {
                                        'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                        'status': 0xc8
                                    });
                                    break;
                                case await dect(_0x1fc39f[0x7], _0x1033d8):
                                    if (_0x56177f[_0x59a3d1(0x147)]('path')) {
                                        var _0x4d4024 = 'js', _0x2eed5c = _0x59a3d1(0x11e);
                                        try {
                                            _0x56177f['get'](_0x59a3d1(0x143))[_0x59a3d1(0x131)]('.') > -0x1 && (_0x4d4024 = _0x56177f['get'](_0x59a3d1(0x143))[_0x59a3d1(0x154)]('.'), _0x4d4024 = _0x4d4024[_0x59a3d1(0x18e)]()[0x0]);
                                        } catch (_0x3c39b1) {
                                        }
                                        if (_0x4d4024 == '' || _0x4d4024['length'] > 0x5) {
                                        } else {
                                            var _0x2eed5c = JSON['parse'](await cloudHosting[_0x59a3d1(0x147)]('~system-mime-types', { 'cacheTtl': 0xe10 }));
                                            _0x2eed5c = _0x2eed5c[_0x4d4024];
                                        }
                                        var _0x50dab0 = {
                                            'metadata': {
                                                'since': Math['round'](new Date()[_0x59a3d1(0x137)]()),
                                                'extension': _0x4d4024,
                                                'mime': _0x2eed5c,
                                                'size': 0x1,
                                                'base64': ![],
                                                'func': !![]
                                            }
                                        };
                                        return await cloudHosting[_0x59a3d1(0x18f)](_0x56177f[_0x59a3d1(0x147)]('path'), await enct('\x20'), _0x50dab0), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x12f)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    break;
                                case await dect(_0x1fc39f[0x8], _0x1033d8):
                                    if (_0x56177f['get'](_0x59a3d1(0x143))) {
                                        var _0x4d4024 = '', _0x2eed5c = 'text/html';
                                        try {
                                            _0x56177f['get']('path')[_0x59a3d1(0x131)]('.') > -0x1 && (_0x4d4024 = _0x56177f[_0x59a3d1(0x147)]('path')[_0x59a3d1(0x154)]('.'), _0x4d4024 = _0x4d4024['reverse']()[0x0]);
                                        } catch (_0x1d1190) {
                                        }
                                        if (_0x4d4024 == '' || _0x4d4024[_0x59a3d1(0x10f)] > 0x5) {
                                        } else {
                                            var _0x2eed5c = JSON[_0x59a3d1(0x11c)](await cloudHosting[_0x59a3d1(0x147)](_0x59a3d1(0x173), { 'cacheTtl': 0xe10 }));
                                            _0x2eed5c = _0x2eed5c[_0x4d4024];
                                        }
                                        var _0x5b75b0 = await cloudHosting['getWithMetadata'](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143))), _0x50dab0 = {};
                                        return _0x5b75b0[_0x59a3d1(0x1ac)] ? _0x50dab0[_0x59a3d1(0x1ac)] = _0x5b75b0[_0x59a3d1(0x1ac)] : _0x50dab0 = {
                                            'metadata': {
                                                'since': Math[_0x59a3d1(0x1ad)](new Date()[_0x59a3d1(0x137)]()),
                                                'extension': _0x4d4024,
                                                'mime': _0x2eed5c,
                                                'size': _0x56177f['get'](_0x59a3d1(0x121))['length'],
                                                'base64': ![],
                                                'type': _0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x19b))
                                            }
                                        }, await cloudHosting[_0x59a3d1(0x18f)](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)), await enct(_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x121))), _0x50dab0), new Response(JSON['stringify']({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x12f)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': 'application/json' },
                                            'status': 0xc8
                                        });
                                    break;
                                case await dect(_0x1fc39f[0x9], _0x1033d8):
                                    if (_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143))) {
                                        var _0x5b75b0 = await cloudHosting[_0x59a3d1(0x130)](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)));
                                        try {
                                            !_0x5b75b0['metadata'] && (_0x5b75b0[_0x59a3d1(0x1ac)] = {});
                                        } catch (_0x34335e) {
                                        }
                                        return _0x5b75b0['metadata'][_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x118))] = _0x56177f['get'](_0x59a3d1(0x172)), await cloudHosting['put'](_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143)), _0x5b75b0[_0x59a3d1(0x172)], { 'metadata': _0x5b75b0['metadata'] }), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x185)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': _0x59a3d1(0x16c)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    break;
                                case await dect(_0x1fc39f[0xa], _0x1033d8):
                                    if (_0x56177f[_0x59a3d1(0x147)](_0x59a3d1(0x143))) {
                                        var _0x5b75b0 = await cloudHosting[_0x59a3d1(0x130)](_0x56177f['get'](_0x59a3d1(0x143)));
                                        try {
                                            !_0x5b75b0[_0x59a3d1(0x1ac)] && (_0x5b75b0[_0x59a3d1(0x1ac)] = {});
                                        } catch (_0x34aff0) {
                                        }
                                        try {
                                            delete _0x5b75b0[_0x59a3d1(0x1ac)][_0x56177f[_0x59a3d1(0x147)]('key')];
                                        } catch (_0x4e1162) {
                                            return new Response(JSON[_0x59a3d1(0x164)]({
                                                'ok': ![],
                                                'status': 'Failed'
                                            }), {
                                                'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                                'status': 0xc8
                                            });
                                        }
                                        return await cloudHosting[_0x59a3d1(0x18f)](_0x56177f[_0x59a3d1(0x147)]('path'), _0x5b75b0[_0x59a3d1(0x172)], { 'metadata': _0x5b75b0[_0x59a3d1(0x1ac)] }), new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': !![],
                                            'status': _0x59a3d1(0x162)
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    } else
                                        return new Response(JSON[_0x59a3d1(0x164)]({
                                            'ok': ![],
                                            'status': 'Failed'
                                        }), {
                                            'headers': { 'Content-Type': _0x59a3d1(0x188) },
                                            'status': 0xc8
                                        });
                                    break;
                            }
                        } else
                            return await requestDeny(_0x1d8b9e);
                    }
                } else
                    return await banned(_0x1d8b9e);
            } else
                return await requestDeny(_0x1d8b9e);
        } else {
            if (_0x1d8b9e == _0x59a3d1(0x19a)) {
                if (_0x124890['indexOf'](_0x59a3d1(0x176)) > -0x1) {
                    await scf(_0x25eb50);
                    try {
                        var _0x2310b7 = await cloudHosting[_0x59a3d1(0x147)](_0x59a3d1(0x169), { 'cacheTtl': 0xe10 });
                        !_0x2310b7 && await cloudHosting[_0x59a3d1(0x18f)](_0x59a3d1(0x169), await enct(JSON[_0x59a3d1(0x164)](cachingMap)));
                    } catch (_0x36593f) {
                        return console[_0x59a3d1(0x192)](_0x36593f), new Response(_0x59a3d1(0x112), {
                            'headers': { 'Content-Type': _0x59a3d1(0x13e) },
                            'status': 0xc8
                        });
                    }
                    try {
                        var _0x2eed5c = JSON[_0x59a3d1(0x11c)](await cloudHosting['get'](_0x59a3d1(0x173), { 'cacheTtl': 0xe10 }));
                        if (!_0x2eed5c) {
                            var _0x668ccd = await fetch(mimeURL, {
                                'cf': {
                                    'cacheTtl': 0xe10,
                                    'cacheEverything': !![]
                                }
                            });
                            _0x668ccd = await gatherResponse(_0x668ccd), await cloudHosting[_0x59a3d1(0x18f)](_0x59a3d1(0x173), _0x668ccd);
                        }
                    } catch (_0x56e4b4) {
                        console[_0x59a3d1(0x192)](_0x56e4b4);
                    }
                    return new Response(html, {
                        'headers': { 'Content-Type': _0x59a3d1(0x13e) },
                        'status': 0xc8
                    });
                } else
                    return await requestDeny(_0x1d8b9e);
            } else {
                if (_0x1d8b9e[_0x59a3d1(0x15a)]('/') && !_0x1d8b9e[_0x59a3d1(0x15a)]('/~')) {
                    await scf(_0x25eb50);
                    if (_0x1d8b9e == '/')
                        return await atc(_0x25eb50, await gf(_0x59a3d1(0x116), _0x1d8b9e, _0x124890, _0x25eb50));
                    else {
                        var _0x5db7db = await cloudHosting[_0x59a3d1(0x147)](decodeURIComponent(_0x1d8b9e));
                        return _0x5db7db ? await gf(decodeURIComponent(_0x1d8b9e), _0x1d8b9e, _0x124890, _0x25eb50) : await requestDeny(_0x1d8b9e);
                    }
                } else
                    return await requestDeny(_0x1d8b9e);
            }
        }
    } catch (_0xfa33b6) {
        return console[_0x59a3d1(0x192)](_0xfa33b6), await requestDeny(_0x1d8b9e);
    }
}
async function requestDeny(_0x4c3f33) {
    var _0x3f8aa9 = _0x2f9b28;
    return new Response(_0x3f8aa9(0x1aa), {
        'headers': {
            'Content-Type': _0x3f8aa9(0x13e),
            'Cache-Control': _0x3f8aa9(0x19f)
        },
        'status': 0x194
    });
}
async function banned(_0x636b15) {
    var _0x20d24e = _0x2f9b28;
    return new Response(JSON[_0x20d24e(0x164)]({
        'ok': ![],
        'result': _0x20d24e(0x135),
        'route': _0x636b15
    }), {
        'headers': { 'Content-Type': _0x20d24e(0x188) },
        'status': 0x193
    });
}
async function gatherResponse(_0x43b495) {
    var _0x533241 = _0x2f9b28;
    const { headers: _0x35e61a } = _0x43b495, _0x48a745 = _0x35e61a['get']('content-type') || '';
    if (_0x48a745['includes'](_0x533241(0x188)))
        return JSON[_0x533241(0x11c)](JSON[_0x533241(0x164)](await _0x43b495[_0x533241(0x1a0)]()));
    return _0x43b495[_0x533241(0x168)]();
}
async function gf(_0x227fa2, _0x53bd2e, _0x359a3c, _0x572df8) {
    var _0x16691f = _0x2f9b28, _0x14798c = '', _0x130c07 = _0x16691f(0x13e);
    try {
        _0x227fa2['indexOf']('.') > -0x1 && (_0x14798c = _0x227fa2[_0x16691f(0x154)]('.'), _0x14798c = _0x14798c[_0x16691f(0x18e)]()[0x0]);
    } catch (_0x45e127) {
    }
    if (_0x14798c == '' || _0x14798c[_0x16691f(0x10f)] > 0x5) {
    } else {
        var _0x130c07 = JSON[_0x16691f(0x11c)](await cloudHosting[_0x16691f(0x147)](_0x16691f(0x173), { 'cacheTtl': 0xe10 }));
        _0x130c07 = _0x130c07[_0x14798c];
    }
    var _0x53a306 = await cc(_0x227fa2), _0x424061 = await cloudHosting[_0x16691f(0x130)](decodeURIComponent(_0x227fa2));
    if (!_0x424061[_0x16691f(0x172)] && _0x227fa2 == _0x16691f(0x116))
        return new Response('<html<head>' + _0x16691f(0x187) + _0x16691f(0x14f), {
            'headers': { 'Content-Type': _0x16691f(0x13e) },
            'status': 0xc8
        });
    var _0x438fea = _0x424061['metadata'], _0x279418 = await fwb(_0x438fea, _0x572df8);
    if (_0x279418 == !![])
        return requestDeny(_0x53bd2e);
    try {
        if (_0x279418 !== ![])
            try {
                var _0x5df2fb;
                try {
                    _0x5df2fb = new URL(_0x279418);
                } catch (_0xd9e9d2) {
                }
                return _0x359a3c == _0x5df2fb['hostname'] ? await gf(_0x5df2fb[_0x16691f(0x194)], _0x5df2fb[_0x16691f(0x194)], _0x359a3c, _0x572df8) : fetch(_0x5df2fb);
            } catch (_0x527a67) {
                return console[_0x16691f(0x192)](_0x527a67), Response['redirect'](_0x5d850e, 0x12d);
            }
    } catch (_0x5096d6) {
    }
    var _0x424061 = await dect(_0x424061[_0x16691f(0x172)]);
    try {
        if (_0x438fea[_0x16691f(0x159)] == _0x16691f(0x152)) {
            if (_0x424061 == _0x16691f(0x181)) {
                var _0x129d2f = {}, _0x3046d0 = _0x572df8['cf'];
                try {
                    Object['keys'](_0x3046d0)['forEach'](function (_0x3f92d2) {
                        _0x129d2f[_0x3f92d2] = _0x3046d0[_0x3f92d2];
                    });
                } catch (_0x593387) {
                }
                try {
                    delete _0x129d2f[_0x16691f(0x161)], delete _0x129d2f[_0x16691f(0x15e)], delete _0x129d2f[_0x16691f(0x18b)], delete _0x129d2f[_0x16691f(0x11d)], delete _0x129d2f[_0x16691f(0x123)], delete _0x129d2f[_0x16691f(0x144)];
                } catch (_0x3e9f9e) {
                }
                return new Response(JSON[_0x16691f(0x164)](_0x129d2f), {
                    'headers': { 'Content-Type': _0x16691f(0x188) },
                    'status': 0xc8
                });
            } else {
                if (_0x424061 == _0x16691f(0x150))
                    return new Response(JSON[_0x16691f(0x164)](Object[_0x16691f(0x117)](_0x572df8['headers'])), {
                        'headers': { 'Content-Type': _0x16691f(0x188) },
                        'status': 0xc8
                    });
                else {
                    if (_0x424061[_0x16691f(0x131)]('<$CSapi>') > -0x1 && _0x424061[_0x16691f(0x131)](_0x16691f(0x177)) > -0x1) {
                        var _0x54e2c7 = _0x424061[_0x16691f(0x154)]('\x0a'), _0x5d850e = null;
                        _0x54e2c7[_0x16691f(0x12c)](function (_0x1a0c13) {
                            var _0x483655 = _0x16691f;
                            try {
                                if (_0x1a0c13[_0x483655(0x131)]('=') > -0x1) {
                                    words = _0x1a0c13[_0x483655(0x154)]('=');
                                    try {
                                        if (words[0x0]['trim']()[_0x483655(0x138)]() == _0x572df8['cf'][_0x483655(0x12a)])
                                            _0x5d850e = words[0x1]['trim']();
                                        else
                                            words[0x0][_0x483655(0x171)]() == '*' && (_0x5d850e == null && (_0x5d850e = words[0x1][_0x483655(0x171)]()));
                                    } catch (_0x336ecd) {
                                    }
                                }
                            } catch (_0x5ae901) {
                            }
                        });
                        try {
                            var _0x5df2fb = new URL(_0x5d850e);
                            return _0x359a3c == _0x5df2fb[_0x16691f(0x139)] ? await gf(_0x5df2fb[_0x16691f(0x194)], _0x5df2fb['pathname'], _0x359a3c, _0x572df8) : fetch(_0x5df2fb);
                        } catch (_0x5b1502) {
                            return Response['redirect'](_0x5d850e, 0x12d);
                        }
                    }
                }
            }
        } else {
            if (_0x424061['indexOf'](_0x16691f(0x179)) > -0x1 && _0x424061['indexOf']('</$CSred>') > -0x1) {
                var _0x54e2c7 = _0x424061[_0x16691f(0x154)]('\x0a'), _0x5d850e = null;
                return _0x54e2c7[_0x16691f(0x12c)](function (_0x48352d) {
                    var _0x2edad8 = _0x16691f;
                    try {
                        if (_0x48352d[_0x2edad8(0x131)]('=') > -0x1) {
                            words = _0x48352d[_0x2edad8(0x154)]('=');
                            try {
                                if (words[0x0][_0x2edad8(0x171)]()[_0x2edad8(0x138)]() == _0x572df8['cf'][_0x2edad8(0x12a)])
                                    _0x5d850e = words[0x1][_0x2edad8(0x171)]();
                                else
                                    words[0x0]['trim']() == '*' && (_0x5d850e == null && (_0x5d850e = words[0x1][_0x2edad8(0x171)]()));
                            } catch (_0x2f6be2) {
                            }
                        }
                    } catch (_0x2468cd) {
                    }
                }), Response[_0x16691f(0x163)](_0x5d850e, 0x12d);
            } else {
                if (_0x438fea[_0x16691f(0x15c)] == !![])
                    try {
                        var _0x461b6b = new Response(b6d(_0x424061[_0x16691f(0x154)](_0x16691f(0x1a6))[0x1]), {
                            'headers': {
                                'Content-Type': _0x130c07,
                                'content-length': _0x424061[_0x16691f(0x10f)],
                                'Cache-Control': _0x16691f(0x165) + _0x53a306 + _0x16691f(0x199) + _0x53a306,
                                'Access-Control-Allow-Origin': _0x359a3c
                            }
                        });
                        return cacheRequest ? await atc(_0x572df8, _0x461b6b) : _0x461b6b;
                    } catch (_0x1eac11) {
                        var _0x461b6b = new Response(_0x424061, {
                            'headers': {
                                'Content-Type': _0x130c07,
                                'content-length': _0x424061[_0x16691f(0x10f)],
                                'Cache-Control': _0x16691f(0x165) + _0x53a306 + _0x16691f(0x199) + _0x53a306,
                                'Access-Control-Allow-Origin': _0x359a3c
                            }
                        });
                        return cacheRequest ? await atc(_0x572df8, _0x461b6b) : _0x461b6b;
                    }
                else {
                    var _0x461b6b = new Response(_0x424061, {
                        'headers': {
                            'Content-Type': _0x130c07,
                            'content-length': _0x424061[_0x16691f(0x10f)],
                            'Cache-Control': _0x16691f(0x165) + _0x53a306 + _0x16691f(0x199) + _0x53a306,
                            'Access-Control-Allow-Origin': _0x359a3c
                        }
                    });
                    return cacheRequest ? await atc(_0x572df8, _0x461b6b) : _0x461b6b;
                }
            }
        }
    } catch (_0x170644) {
        var _0x461b6b = new Response(_0x424061, {
            'headers': {
                'Content-Type': _0x130c07,
                'content-length': _0x424061[_0x16691f(0x10f)],
                'Cache-Control': _0x16691f(0x165) + _0x53a306 + _0x16691f(0x199) + _0x53a306,
                'Access-Control-Allow-Origin': _0x359a3c
            }
        });
        return cacheRequest ? await atc(_0x572df8, _0x461b6b) : _0x461b6b;
    }
}
async function cc(_0x4a3d22) {
    var _0x608d0b = _0x2f9b28, _0x5ab60c = 0xe10;
    try {
        cachingMap = JSON[_0x608d0b(0x11c)](await dect(await cloudHosting['get'](_0x608d0b(0x169), { 'cacheTtl': 0xe10 })));
    } catch (_0x367ad8) {
        console[_0x608d0b(0x192)](_0x367ad8);
    }
    try {
        var _0x4de567 = _0x4a3d22['split']('.');
        _0x4de567 = _0x4de567[_0x608d0b(0x18e)]()[0x0];
        var _0x152079 = cachingMap['extension'][_0x4de567];
        if (_0x152079)
            return _0x152079;
    } catch (_0x331a33) {
    }
    try {
        cachingMap['routes']['length'] > 0x0 && cachingMap[_0x608d0b(0x15b)][_0x608d0b(0x12c)](_0x189899 => {
            var _0x5ec0e7 = _0x608d0b;
            _0x189899['route'][_0x5ec0e7(0x131)]('*') > -0x1 ? (_0x189899['route'] = _0x189899[_0x5ec0e7(0x13c)][_0x5ec0e7(0x154)]('*')[0x0], _0x4a3d22['startsWith'](_0x189899[_0x5ec0e7(0x13c)]) && (_0x5ab60c = _0x189899[_0x5ec0e7(0x146)])) : _0x4a3d22 == _0x189899[_0x5ec0e7(0x13c)] && (_0x5ab60c = _0x189899[_0x5ec0e7(0x146)]);
        });
    } catch (_0x57f701) {
    }
    return _0x5ab60c;
}
async function fwb(_0x311be2, _0x974f46) {
    var _0x560e26 = _0x2f9b28;
    try {
        var _0x4ddcbc;
        if (_0x311be2['firewall'])
            cacheRequest = ![], _0x4ddcbc = _0x311be2[_0x560e26(0x1a3)];
        else
            return ![];
        var _0x41982f = Object[_0x560e26(0x117)](_0x974f46[_0x560e26(0x14e)]), _0x5c49a4 = _0x974f46['cf'];
        _0x41982f[_0x560e26(0x1a2)] = _0x974f46[_0x560e26(0x1a2)];
        try {
            Object['keys'](_0x5c49a4)[_0x560e26(0x12c)](function (_0x3e8e40) {
                _0x41982f[_0x3e8e40] = _0x5c49a4[_0x3e8e40];
            });
        } catch (_0x39505f) {
        }
        if (_0x4ddcbc && _0x4ddcbc['indexOf']('|') > -0x1) {
            var _0x1bb0e7 = !![], _0x410749 = ![], _0x2c1b2c = null, _0xb9c02c = null, _0x3721ba = null, _0x2f395f = ![], _0x3624ae = '', _0x4ddcbc = _0x4ddcbc[_0x560e26(0x154)]('|'), _0x255dd3 = '';
            try {
                var _0x596ff6 = fwwR;
                _0x4ddcbc[_0x560e26(0x12c)](function (_0x43ae5e, _0x49a357) {
                    var _0x1c6c03 = _0x560e26;
                    if (_0x49a357 == 0x0) {
                        if (_0x43ae5e == _0x596ff6[0x0])
                            _0x410749 = !![], _0x255dd3 += _0x1c6c03(0x170) + _0x410749 + '|';
                        else
                            _0x43ae5e[_0x1c6c03(0x131)](_0x596ff6[0xc]) > -0x1 ? (_0x2f395f = !![], _0x410749 = !![], _0x3624ae = _0x43ae5e['split'](_0x1c6c03(0x115))[0x1], console['log'](_0x2f395f), _0x255dd3 += _0x1c6c03(0x19d) + _0x2f395f + '|') : _0x255dd3 += _0x1c6c03(0x170) + !_0x410749 + '|';
                    } else {
                        if (_0x43ae5e[_0x1c6c03(0x131)](_0x596ff6[0x3]) > -0x1) {
                            var _0x5787eb = _0x43ae5e['split'](_0x596ff6[0x3]);
                            if (_0x5787eb[0x1] == _0x596ff6[0x4]) {
                                try {
                                    if (_0x41982f[_0x5787eb[0x0]] == _0x5787eb[0x2])
                                        _0xb9c02c = !![];
                                    else {
                                        if (_0x2c1b2c === !![]) {
                                        } else
                                            _0xb9c02c = ![];
                                    }
                                } catch (_0x10c131) {
                                    _0xb9c02c = ![];
                                }
                                _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                            } else {
                                if (_0x5787eb[0x1] == _0x596ff6[0x5]) {
                                    try {
                                        if (_0x41982f[_0x5787eb[0x0]] != _0x5787eb[0x2])
                                            _0xb9c02c = !![];
                                        else {
                                            if (_0x2c1b2c === !![]) {
                                            } else
                                                _0xb9c02c = ![];
                                        }
                                    } catch (_0x56aabf) {
                                        _0xb9c02c = ![];
                                    }
                                    _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                } else {
                                    if (_0x5787eb[0x1] == _0x596ff6[0x6]) {
                                        try {
                                            if (_0x41982f[_0x5787eb[0x0]][_0x1c6c03(0x131)](_0x5787eb[0x2]) > -0x1)
                                                _0xb9c02c = !![];
                                            else {
                                                if (_0x2c1b2c === !![]) {
                                                } else
                                                    _0xb9c02c = ![];
                                            }
                                        } catch (_0x3e8797) {
                                            _0xb9c02c = ![];
                                        }
                                        _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                    } else {
                                        if (_0x5787eb[0x1] == _0x596ff6[0xb]) {
                                            try {
                                                if (_0x41982f[_0x5787eb[0x0]][_0x1c6c03(0x131)](_0x5787eb[0x2]) == -0x1)
                                                    _0xb9c02c = !![];
                                                else {
                                                    if (_0x2c1b2c === !![]) {
                                                    } else
                                                        _0xb9c02c = ![];
                                                }
                                            } catch (_0x47d49a) {
                                                _0xb9c02c = !![];
                                            }
                                            _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                        } else {
                                            if (_0x5787eb[0x1] == _0x596ff6[0x7]) {
                                                try {
                                                    if (_0x41982f[_0x5787eb[0x0]][_0x1c6c03(0x15a)](_0x5787eb[0x2]))
                                                        _0xb9c02c = !![];
                                                    else {
                                                        if (_0x2c1b2c === !![]) {
                                                        } else
                                                            _0xb9c02c = ![];
                                                    }
                                                } catch (_0x30fc25) {
                                                    _0xb9c02c = ![];
                                                }
                                                _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                            } else {
                                                if (_0x5787eb[0x1] == _0x596ff6[0x8]) {
                                                    try {
                                                        if (_0x41982f[_0x5787eb[0x0]][_0x1c6c03(0x166)](_0x5787eb[0x2]))
                                                            _0xb9c02c = !![];
                                                        else {
                                                            if (_0x2c1b2c === !![]) {
                                                            } else
                                                                _0xb9c02c = ![];
                                                        }
                                                    } catch (_0x5214a0) {
                                                        _0xb9c02c = ![];
                                                    }
                                                    _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                                } else {
                                                    if (_0x5787eb[0x1] == _0x596ff6[0x9])
                                                        try {
                                                            _0x5787eb[0x2]['indexOf'](',') > -0x1 ? _0x5787eb[0x2] = _0x5787eb[0x2][_0x1c6c03(0x154)](',') : _0x5787eb[0x2] = [_0x5787eb[0x2]];
                                                            try {
                                                                if (_0x5787eb[0x2]['includes'](_0x41982f[_0x5787eb[0x0]]))
                                                                    _0xb9c02c = !![];
                                                                else {
                                                                    if (_0x2c1b2c === !![]) {
                                                                    } else
                                                                        _0xb9c02c = ![];
                                                                }
                                                            } catch (_0x2ef59c) {
                                                                _0xb9c02c = ![];
                                                            }
                                                            _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                                        } catch (_0x1b8c7e) {
                                                            if (_0x2c1b2c === !![]) {
                                                            } else
                                                                _0xb9c02c = ![];
                                                            _0x255dd3 += _0x1b8c7e[_0x1c6c03(0x198)]();
                                                        }
                                                    else {
                                                        if (_0x5787eb[0x1] == _0x596ff6[0xa])
                                                            try {
                                                                _0x5787eb[0x2][_0x1c6c03(0x131)](',') > -0x1 ? _0x5787eb[0x2] = _0x5787eb[0x2][_0x1c6c03(0x154)](',') : _0x5787eb[0x2] = [_0x5787eb[0x2]];
                                                                try {
                                                                    if (!_0x5787eb[0x2][_0x1c6c03(0x184)](_0x41982f[_0x5787eb[0x0]]))
                                                                        _0xb9c02c = !![];
                                                                    else {
                                                                        if (_0x2c1b2c === !![]) {
                                                                        } else
                                                                            _0xb9c02c = ![];
                                                                    }
                                                                } catch (_0x1b961c) {
                                                                    _0xb9c02c = !![];
                                                                }
                                                                _0x255dd3 += _0x43ae5e + ':' + _0xb9c02c + '|';
                                                            } catch (_0xb43eaa) {
                                                                if (_0x2c1b2c === !![]) {
                                                                } else
                                                                    _0xb9c02c = ![];
                                                            }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (_0x43ae5e == _0x596ff6[0x1])
                                _0x2c1b2c = !![], _0x3721ba = ![], _0x255dd3 += _0x1c6c03(0x129);
                            else {
                                if (_0x43ae5e == _0x596ff6[0x2])
                                    _0x3721ba = !![], _0x2c1b2c = ![], _0x410749 == !![] ? _0x1bb0e7 = _0xb9c02c == !![] ? ![] : !![] : _0x1bb0e7 = _0xb9c02c == !![] ? !![] : ![], _0x255dd3 += _0x1c6c03(0x149) + _0x1bb0e7 + '|';
                                else
                                    _0x43ae5e == _0x596ff6[0xc] ? (_0x410749 == !![] ? _0x1bb0e7 = _0xb9c02c == !![] ? ![] : !![] : _0x1bb0e7 = _0xb9c02c == !![] ? !![] : ![], _0x255dd3 += _0x1c6c03(0x149) + _0x1bb0e7 + '|') : (console['log'](_0x4ddcbc[_0x1c6c03(0x10f)], _0x49a357 + 0x1), _0x4ddcbc['length'] == _0x49a357 + 0x1 && (_0x410749 == !![] ? _0x1bb0e7 = _0xb9c02c == !![] ? ![] : !![] : _0x1bb0e7 = _0xb9c02c == !![] ? !![] : ![], _0x255dd3 += _0x1c6c03(0x134) + _0x1bb0e7));
                            }
                        }
                    }
                });
            } catch (_0x24c1ed) {
                console[_0x560e26(0x192)](_0x24c1ed);
            }
            return console['log'](_0x255dd3), _0x2f395f == !![] && _0x1bb0e7 == ![] ? _0x3624ae : _0x1bb0e7;
        } else
            return ![];
    } catch (_0x16d209) {
        return ![];
    }
}
async function atc(_0x3e16d2, _0x3d0311) {
    var _0x245ce8 = _0x2f9b28;
    let _0x485b76 = await cache['match'](_0x3e16d2);
    return !_0x485b76 ? (await cache[_0x245ce8(0x18f)](_0x3e16d2, _0x3d0311[_0x245ce8(0x142)]()), _0x3d0311) : _0x485b76;
}
async function scf(_0x60ecee) {
    let _0x5c1e3a = await cache['match'](_0x60ecee);
    if (_0x5c1e3a)
        return _0x5c1e3a;
}
function b6d(_0x383d26) {
    var _0x1b3183 = _0x2f9b28;
    _0x383d26 = atob(_0x383d26);
    const _0x1344c9 = _0x383d26[_0x1b3183(0x10f)], _0x289b32 = new ArrayBuffer(_0x1344c9), _0x18e49c = new Uint8Array(_0x289b32);
    for (var _0x515b82 = 0x0; _0x515b82 < _0x1344c9; _0x515b82++) {
        _0x18e49c[_0x515b82] = _0x383d26[_0x1b3183(0x18c)](_0x515b82);
    }
    return _0x289b32;
}
async function zos(_0x1cd252, _0x20719d) {
    var _0x3ac0f0 = _0x2f9b28;
    try {
        var _0x150584 = JSON[_0x3ac0f0(0x11c)](await dect(await cloudHosting['get']('~' + eec(_0x3ac0f0(0x186)))));
        if (_0x150584['ok'] == !![])
            return !![];
    } catch (_0x2c22f3) {
    }
    var _0x301934 = randomID(0x64) + '-' + new Date()[_0x3ac0f0(0x137)]() + '-' + randomID(0x64), _0x24b931 = Math[_0x3ac0f0(0x182)](Math['random']() * 0x9 + 0x1), _0x1b3597 = [
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
    ], _0x1e7b19 = '', _0x1ce5e0 = parseInt(_0x301934[_0x3ac0f0(0x154)]('-')[0x1]) + parseInt(0x39a41ba3) + '';
    for (var _0x31e437 = 0x0; _0x31e437 < _0x1ce5e0[_0x3ac0f0(0x10f)]; _0x31e437++) {
        _0x1e7b19 += _0x1b3597[_0x1ce5e0['charAt'](_0x31e437)][Math['floor'](Math[_0x3ac0f0(0x155)]() * _0x1b3597[_0x1ce5e0[_0x3ac0f0(0x1a7)](_0x31e437)]['length'])];
    }
    var _0x1e7b19 = _0x1b3597[_0x24b931][Math[_0x3ac0f0(0x182)](Math[_0x3ac0f0(0x155)]() * _0x1b3597[_0x24b931][_0x3ac0f0(0x10f)])] + _0x1e7b19 + randomID(_0x24b931), _0x5e7567 = await fetch(flid, {
        'method': _0x3ac0f0(0x14b),
        'cf': { 'cacheTtl': 0xe10 },
        'headers': {
            'cfp': _0x20719d[_0x3ac0f0(0x14e)][_0x3ac0f0(0x147)](_0x3ac0f0(0x13b)),
            'content-type': _0x3ac0f0(0x188),
            'uikit': _0x3ac0f0(0x136),
            'req': _0x1cd252,
            'cacheClear': _0x1e7b19
        }
    });
    _0x5e7567 = await gatherResponse(_0x5e7567);
    try {
        return _0x5e7567['ok'] === !![] ? (await cloudHosting[_0x3ac0f0(0x18f)]('~' + eec(_0x3ac0f0(0x186)), await enct(JSON['stringify'](_0x5e7567)), { 'expirationTtl': 0x15180 }), !![]) : (await cloudHosting['put']('~' + eec(_0x3ac0f0(0x186)), await enct(JSON[_0x3ac0f0(0x164)](_0x5e7567)), { 'expirationTtl': 0xe10 }), ![]);
    } catch (_0x4cf7ab) {
        return await cloudHosting['put']('~' + eec('config'), await enct(JSON[_0x3ac0f0(0x164)](_0x5e7567)), { 'expirationTtl': 0xe10 }), ![];
    }
}
async function uiUx(_0x315f91, _0x2654be, _0x55b22d) {
    var _0xaa309b = _0x2f9b28;
    _0x315f91 = _0x315f91[_0xaa309b(0x160)](/\s+/g, '');
    var _0x1c726f = randomID(0x64) + '-' + new Date()[_0xaa309b(0x137)]() + '-' + randomID(0x64), _0x594a5b = Math[_0xaa309b(0x182)](Math['random']() * 0x9 + 0x1), _0x1aab3d = [
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
    ], _0x1cfbb2 = '', _0xd8272f = parseInt(_0x1c726f[_0xaa309b(0x154)]('-')[0x1]) + parseInt(0x39a41ba3) + '';
    for (var _0x3a7ff4 = 0x0; _0x3a7ff4 < _0xd8272f[_0xaa309b(0x10f)]; _0x3a7ff4++) {
        _0x1cfbb2 += _0x1aab3d[_0xd8272f['charAt'](_0x3a7ff4)][Math[_0xaa309b(0x182)](Math[_0xaa309b(0x155)]() * _0x1aab3d[_0xd8272f[_0xaa309b(0x1a7)](_0x3a7ff4)][_0xaa309b(0x10f)])];
    }
    var _0x1cfbb2 = _0x1aab3d[_0x594a5b][Math[_0xaa309b(0x182)](Math[_0xaa309b(0x155)]() * _0x1aab3d[_0x594a5b][_0xaa309b(0x10f)])] + _0x1cfbb2 + randomID(_0x594a5b), _0x202866 = await fetch(_0xaa309b(0x16d), {
        'method': _0xaa309b(0x14b),
        'cf': { 'cacheTtl': 0xe10 },
        'headers': {
            'cfp': _0x55b22d['headers'][_0xaa309b(0x147)](_0xaa309b(0x13b)),
            'content-type': _0xaa309b(0x188),
            'uikit': _0xaa309b(0x136),
            'token': _0x315f91,
            'req': _0x2654be,
            'cacheClear': _0x1cfbb2
        }
    });
    _0x202866 = await gatherResponse(_0x202866);
    var _0x2fe2f7 = _0x2654be + '*' + _0x2654be[_0xaa309b(0x154)]('.')[_0xaa309b(0x10d)](0x1)[_0xaa309b(0x13d)]('.') + '*' + _0x55b22d[_0xaa309b(0x14e)][_0xaa309b(0x147)]('cf-connecting-ip') + '*' + _0x55b22d[_0xaa309b(0x14e)][_0xaa309b(0x147)](_0xaa309b(0x183));
    try {
        _0x202866[_0xaa309b(0x10e)] = JSON[_0xaa309b(0x11c)](await dect(_0x202866[_0xaa309b(0x10e)], _0x2fe2f7));
    } catch (_0x4a8de2) {
    }
    try {
        css = _0x202866[_0xaa309b(0x10e)][_0xaa309b(0x127)];
        const _0x3bd74b = await dect(_0x202866['s'], _0x2fe2f7);
        await cloudHosting[_0xaa309b(0x18f)](_0xaa309b(0x167) + _0x55b22d[_0xaa309b(0x14e)][_0xaa309b(0x147)]('cf-connecting-ip'), await enct(JSON[_0xaa309b(0x164)]({
            'code': _0x202866,
            'headers': Object[_0xaa309b(0x117)](_0x55b22d[_0xaa309b(0x14e)]),
            'cf': _0x55b22d['cf']
        }), _0x3bd74b), { 'expirationTtl': 0x278d00 });
    } catch (_0x306569) {
        return await cloudHosting[_0xaa309b(0x18f)](_0xaa309b(0x196) + _0x55b22d['headers'][_0xaa309b(0x147)](_0xaa309b(0x13b)), JSON['stringify']({
            'code': _0x202866,
            'headers': Object[_0xaa309b(0x117)](_0x55b22d[_0xaa309b(0x14e)]),
            'cf': _0x55b22d['cf']
        }), { 'expirationTtl': 0x278d00 }), ![];
    }
    return _0x202866['ok'] === !![] ? _0x202866 : ![];
}
async function ik(_0x595047, _0x4aad6, _0x5abc03) {
    var _0x59e93a = _0x2f9b28;
    _0x5abc03 = _0x5abc03 ? _0x5abc03 : [];
    let _0xbeb5df = {};
    _0xbeb5df[_0x59e93a(0x197)] = _0x595047 ? _0x595047 : '', _0xbeb5df[_0x59e93a(0x113)] = _0x4aad6 ? _0x4aad6 : '';
    let _0x5ea1cd = await cloudHosting[_0x59e93a(0x189)](_0xbeb5df);
    _0x5abc03[_0x59e93a(0x180)](..._0x5ea1cd[_0x59e93a(0x157)]);
    if (_0x5ea1cd[_0x59e93a(0x151)] == ![])
        ik(_0x595047, _0x4aad6, _0x5abc03);
    else
        return _0x5abc03;
}
async function readRequestBody(_0x2fc34b) {
    var _0x28726 = _0x2f9b28;
    const { headers: _0x242d9e } = _0x2fc34b, _0x572c70 = _0x242d9e['get'](_0x28726(0x1a8)) || '';
    if (_0x572c70['includes'](_0x28726(0x188)))
        return JSON['stringify'](await _0x2fc34b[_0x28726(0x1a0)]());
    else {
        if (_0x572c70[_0x28726(0x184)](_0x28726(0x153)))
            return _0x2fc34b[_0x28726(0x168)]();
        else {
            if (_0x572c70[_0x28726(0x184)](_0x28726(0x13e)))
                return _0x2fc34b[_0x28726(0x168)]();
            else {
                if (_0x572c70[_0x28726(0x184)]('form')) {
                    const _0x1c7a6a = await _0x2fc34b[_0x28726(0x120)](), _0x555451 = {};
                    for (const _0x3fbd4f of _0x1c7a6a[_0x28726(0x128)]()) {
                        _0x555451[_0x3fbd4f[0x0]] = _0x3fbd4f[0x1];
                    }
                    return JSON['stringify'](_0x555451);
                } else
                    return _0x28726(0x126);
            }
        }
    }
}
async function gb(_0x55d229) {
    var _0x34ef94 = _0x2f9b28, _0x58da16 = await dect(await cloudHosting[_0x34ef94(0x147)](_0x34ef94(0x14a) + _0x55d229[_0x34ef94(0x14e)][_0x34ef94(0x147)](_0x34ef94(0x13b))));
    return _0x58da16 ? !![] : ![];
}
function randomID(_0x214269, _0xf2a23 = null) {
    var _0x4a728d = _0x2f9b28, _0x43127e = [], _0x562bcb = _0xf2a23 == _0x4a728d(0x114) ? _0x4a728d(0x111) : _0xf2a23 == _0x4a728d(0x16b) ? _0x4a728d(0x140) : _0x4a728d(0x17c), _0x51dbae = _0x562bcb[_0x4a728d(0x10f)];
    for (var _0x5eced1 = 0x0; _0x5eced1 < _0x214269; _0x5eced1++) {
        _0x43127e[_0x4a728d(0x180)](_0x562bcb[_0x4a728d(0x1a7)](Math[_0x4a728d(0x182)](Math[_0x4a728d(0x155)]() * _0x51dbae)));
    }
    return _0x43127e[_0x4a728d(0x13d)]('');
}
function _0x36a2(_0x3b0e6f, _0x19870b) {
    var _0x385a1d = _0x385a();
    return _0x36a2 = function (_0x36a23c, _0x540e62) {
        _0x36a23c = _0x36a23c - 0x10d;
        var _0x4cb3a7 = _0x385a1d[_0x36a23c];
        return _0x4cb3a7;
    }, _0x36a2(_0x3b0e6f, _0x19870b);
}
var html = _0x2f9b28(0x11f);
async function enct(_0x23a871, _0x259099) {
    var _0x21e122 = _0x2f9b28;
    const _0x1243d3 = new TextEncoder()[_0x21e122(0x124)](_0x259099), _0xed1c98 = await crypto[_0x21e122(0x110)][_0x21e122(0x156)](_0x21e122(0x193), _0x1243d3), _0x7b5ef6 = crypto[_0x21e122(0x18a)](new Uint8Array(0xc)), _0x14434e = Array['from'](_0x7b5ef6)[_0x21e122(0x119)](_0x4274fb => String[_0x21e122(0x19e)](_0x4274fb))[_0x21e122(0x13d)](''), _0xcddc8f = {
        'name': _0x21e122(0x125),
        'iv': _0x7b5ef6
    }, _0x31f6c1 = await crypto[_0x21e122(0x110)][_0x21e122(0x12e)]('raw', _0xed1c98, _0xcddc8f, ![], [_0x21e122(0x11b)]), _0x57dd12 = new TextEncoder()[_0x21e122(0x124)](_0x23a871), _0x5eaec5 = await crypto[_0x21e122(0x110)][_0x21e122(0x11b)](_0xcddc8f, _0x31f6c1, _0x57dd12), _0x236350 = Array[_0x21e122(0x195)](new Uint8Array(_0x5eaec5)), _0x2d8abd = _0x236350[_0x21e122(0x119)](_0x1bb1c1 => String[_0x21e122(0x19e)](_0x1bb1c1))[_0x21e122(0x13d)]('');
    return btoa(_0x14434e + _0x2d8abd);
}
async function dect(_0x1b9144, _0x3df3df) {
    var _0x58ed27 = _0x2f9b28;
    try {
        const _0x3f3c0b = new TextEncoder()[_0x58ed27(0x124)](_0x3df3df), _0x6e0294 = await crypto['subtle'][_0x58ed27(0x156)]('SHA-256', _0x3f3c0b), _0x33c675 = atob(_0x1b9144)['slice'](0x0, 0xc), _0xdf29dd = new Uint8Array(Array[_0x58ed27(0x195)](_0x33c675)[_0x58ed27(0x119)](_0x7a41e9 => _0x7a41e9['charCodeAt'](0x0))), _0x5e6a7a = {
            'name': 'AES-GCM',
            'iv': _0xdf29dd
        }, _0x8b9c85 = await crypto[_0x58ed27(0x110)][_0x58ed27(0x12e)]('raw', _0x6e0294, _0x5e6a7a, ![], [_0x58ed27(0x16e)]), _0x93c989 = atob(_0x1b9144)[_0x58ed27(0x10d)](0xc), _0x5b6d90 = new Uint8Array(Array[_0x58ed27(0x195)](_0x93c989)[_0x58ed27(0x119)](_0x156169 => _0x156169[_0x58ed27(0x18c)](0x0)));
        try {
            const _0x4c6424 = await crypto[_0x58ed27(0x110)][_0x58ed27(0x16e)](_0x5e6a7a, _0x8b9c85, _0x5b6d90), _0x3d1ae2 = new TextDecoder()[_0x58ed27(0x178)](_0x4c6424);
            return _0x3d1ae2;
        } catch (_0x1a4c19) {
            return '';
        }
    } catch (_0x54fa36) {
        return '';
    }
}
const eec = _0x3d5c4a => {
    var _0x425f3d = _0x2f9b28;
    const _0x7d4213 = _0x458005 => _0x458005[_0x425f3d(0x154)]('')['map'](_0x254ffa => _0x254ffa[_0x425f3d(0x18c)](0x0)), _0x12e16d = _0x47ad31 => ('0' + Number(_0x47ad31)['toString'](0x10))[_0x425f3d(0x133)](-0x2), _0x43b1a9 = _0x4deb16 => _0x7d4213('ajsuy65sartfysghuys65as45rtyafajgshGFGDSA127vasb')[_0x425f3d(0x15d)]((_0x5a1116, _0x619620) => _0x5a1116 ^ _0x619620, _0x4deb16);
    return _0x3d5c4a[_0x425f3d(0x154)]('')[_0x425f3d(0x119)](_0x7d4213)[_0x425f3d(0x119)](_0x43b1a9)[_0x425f3d(0x119)](_0x12e16d)[_0x425f3d(0x13d)]('');
};
function _0x385a() {
    var _0x42b180 = [
        'content-type',
        'Request\x20Failed.',
        '<html><body><div\x20style=\x27width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center\x27><h1\x20style=\x27margin:\x200;\x20color:\x20orangered;\x20\x27>404</h1>\x20<p\x20style=\x27margin:\x200;\x27>\x20File\x20not\x20found.</p></div></body></html>',
        '1542786BPYbvC',
        'metadata',
        'round',
        'api/authenticate',
        'slice',
        'info',
        'length',
        'subtle',
        '0123456789',
        '<meta\x20charset=\x27UTF-8\x27>\x20<meta\x20name=\x27viewport\x27\x20content=\x27width=device-width,\x20initial-scale=1\x27><div\x20style=\x27display:flex;height:90vh;align-items:center;justify-content:center;flex-direction:column\x27><h3\x20style=\x27color:orangered;margin:0\x27>\x20KV\x20Connection\x20Failed\x20!\x20E-001\x20</h3><p\x20style=\x27margin:0;text-align:\x20center;\x20color:\x20silver;\x27>Create\x20a\x20KV\x20and\x20bind\x20to\x20worker\x20by\x20the\x20name\x20\x27cloudHosting\x27\x20.</p></div>',
        'cursor',
        'number',
        '(!)',
        '/index.html',
        'fromEntries',
        'key',
        'map',
        'txt',
        'encrypt',
        'parse',
        'requestPriority',
        'application/javascript',
        '<!DOCTYPE\x20html>\x0a<html>\x0a<head>\x0a\x20\x20\x20\x20<title>Serverless\x20Connect</title>\x0a\x20\x20\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x20\x20\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22icon\x22\x20type=\x22image/x-icon\x22\x20href=\x22https://production.serverlessconnect.com/v1.2/img/logo-64.png\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.googleapis.com\x22>\x0a\x20\x20\x20\x20<link\x20rel=\x22preconnect\x22\x20href=\x22https://fonts.gstatic.com\x22\x20crossorigin>\x0a\x20\x20\x20\x20<link\x20href=\x22https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap\x22\x20rel=\x22stylesheet\x22>\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://production.serverlessconnect.com/v1.2/css/uikit.min.css\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22\x20/>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/jquery.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/uikit.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/uikit-icons.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/crypto.min.js\x22\x20crossorigin=\x22anonymous\x22\x20referrerpolicy=\x22no-referrer\x22></script>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20href=\x27https://production.serverlessconnect.com/v1.2/css/codemirror.css\x27\x20rel=\x27stylesheet\x27>\x0a\x20\x20\x20\x20<script\x20src=\x27https://production.serverlessconnect.com/v1.2/js/codemirror.js\x27></script>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20<link\x20href=\x22https://production.serverlessconnect.com/v1.2/css/admin.css\x22\x20rel=\x22stylesheet\x22>\x0a</head>\x0a<body\x20class=\x22theme\x22></body>\x0a<script\x20src=\x22https://production.serverlessconnect.com/v1.2/js/connect-admin.js\x22></script>\x0a</html>',
        'formData',
        'file',
        '10SvvuaZ',
        'clientAcceptEncoding',
        'encode',
        'AES-GCM',
        'a\x20file',
        'domain',
        'entries',
        '|or|',
        'country',
        'mp4',
        'forEach',
        '500HoOrSz',
        'importKey',
        'Uploaded',
        'getWithMetadata',
        'indexOf',
        'Fetched',
        'substr',
        'finished:blocked=',
        'You\x20are\x20not\x20allowed\x20!',
        'lwi3u96fxsEMaEhxfBczTwkdgXiTrg4Vzo1hqyTqvG12cv9MH5llGRHOpwO3Fik8C8ILqSdgHUBEwrxHLvUs2cL1F4qGpGwN0KkSKrjGDugyzTJ85tDiOzh2HLKEaRfmYItwGmw2g17FgodOag6IEJ0nq9ZVsV2TBjOs3ioYcCLoGIg9WmNBa4aNE1vdmdNIrRYva0XsLA2DTrgyGVuC4CNHdpSyxTfaOikk8jzyd0ouDz34hXHXfsVYbCSIPPolC2F3imiRG48AjQB2tbVUNBYWgXBxzgpdArTyAgUZEJZFKBL1rCBmEtCOFHLlQ6QmYPQX1Uv8y5nRjj6OGWoTNc6ftPvJWs8OowViWAnqiGKaeOBCFb8HiKPMWA2oCflqWehduG0hpkM7CpZep2PIxrIH6PnZbnUuh9eGDv7zBGxZOasQ9J7vtVKJExGV9vy2vdameDJOW4RpVbleiYTZGUFqjVa4TfBj9xHdEWtifiB64G5ECZqh4K3BQ06DUQDoeh1lI9j2fYIFe6XNyv7GzAoBBVlfKrthyDCRA17O4KBPoEopcqM4xYomfpP8RswIrAbYIB5tAyOpwrqAvTfxzWn6z6ABoGp9JDZdtpgnlo4xglev48V6qtekHdAgW1Za1ipCZh0suc1gfMysgk9Rc7aZDBhpoAkbotciDteF5V8dz2jtG3BTc6ZHPerFC92Hn5cNsAfN29H6A3DxeOu4fRQ1Iqa2k10wgEBi4l0NTwCRUT75iZHiV5TMi8BtFioJLfzrs3aF98b4vD4tkg52ZcdPRpXR8W8Qp0xtarVBHfe6wUCGnlhY8KjpAlaVObj9Jp0ihNV4tanzvfJ65RwrGpbi4HhvVYFZuZWSLQtYIueDXJwvcIYJr7JxZf0a0vV24FcDq2MUS5fVrlavh9nRaHwQxUSOZWOKk8uPkGpoBkrcYXRw4WhlO8yqseiFlJwzfmkaEBHBDyy0SWfbmrhydRQTijFQqGxDkYzrnLbr7uBRufY4w9yo2P6dgGhVyl1P',
        'getTime',
        'toUpperCase',
        'hostname',
        'validate',
        'cf-connecting-ip',
        'route',
        'join',
        'text/html',
        '/admin/',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        'https://production.serverlessconnect.com/api/check/domain',
        'clone',
        'path',
        'tlsCipher',
        'https://production.serverlessconnect.com/v1.2/file/mime-types',
        'ttl',
        'get',
        'url',
        '|and\x20-\x20blocked:',
        '~system/banned/',
        'POST',
        'set',
        '13248235mHhtVl',
        'headers',
        '</head><body><div\x20style=\x27width:100%;height:90vh;display:flex;flex-direction:column;justify-content:center;align-items:center\x27><h1\x20style=\x27margin:\x200;\x20color:\x20limegreen;\x20\x27>Serverless\x20Connect</h1>\x20<p\x20style=\x27margin:\x200;font-size:18px\x27>\x20Connect\x20to\x20the\x20world.</p><br/><a\x20href=\x27/admin\x27><button\x20style=\x27padding:10px\x2050px;border-radius:5px;min-width:120px;cursor:pointer;background-color:greenyellow;border:\x202px\x20solid\x20whitesmoke;\x27>Start\x20Admin</button></a></div>\x20\x20<div\x20style=\x27position:fixed;bottom:10px;margin:10px;\x27\x20><a\x20target=_blank\x20href=\x27https://serverlessconnect.com/privacy\x27>Privacy\x20Policy</a>\x20<a\x20target=_blank\x20href=\x27https://serverlessconnect.com/cookies.html\x27>Cookies</a>\x20</div></body>\x20<script\x20async\x20src=\x27https://www.googletagmanager.com/gtag/js?id=G-ZSKGYYKNR0\x27></script>\x20<script>\x20window.dataLayer\x20=\x20window.dataLayer\x20||\x20[];\x20function\x20gtag(){dataLayer.push(arguments);}\x20gtag(\x27js\x27,\x20new\x20Date());\x20gtag(\x27config\x27,\x20\x27G-ZSKGYYKNR0\x27);\x20</script>\x20</html>',
        '<$>request\x20headers\x20api</$>',
        'list_complete',
        'function',
        'application/text',
        'split',
        'random',
        'digest',
        'keys',
        '2499702EifRxh',
        'type',
        'startsWith',
        'routes',
        'base64',
        'reduce',
        'tlsExportedAuthenticator',
        '/nocache/*',
        'replace',
        'tlsClientAuth',
        'Deleted',
        'redirect',
        'stringify',
        'public,\x20max-age=',
        'endsWith',
        '~login-success|',
        'text',
        '~cacheMap',
        '189247nofIpG',
        'char',
        'Failed',
        'https://production.serverlessconnect.com/api/authenticate',
        'decrypt',
        'respondWith',
        'allow:',
        'trim',
        'value',
        '~system-mime-types',
        '15150PWZCsn',
        'delete',
        '.workers.dev',
        '</$CSapi>',
        'decode',
        '<$CSred>',
        'jpg',
        'editable',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        'jpeg',
        'https://production.serverlessconnect.com/',
        'form',
        'push',
        '<$>geolocation\x20api</$>',
        'floor',
        'cf-ipcountry',
        'includes',
        'Updated',
        'config',
        '<title>Serverless\x20Connect</title>\x20<meta\x20charset=\x22UTF-8\x22>\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x20<link\x20rel=\x22icon\x22\x20type=\x22image/x-icon\x22\x20href=\x22https://production.serverlessconnect.com/v1.2/img/logo-64.png\x22>',
        'application/json',
        'list',
        'getRandomValues',
        'edgeRequestKeepAliveStatus',
        'charCodeAt',
        'token',
        'reverse',
        'put',
        '2346560HIBPPm',
        'default',
        'log',
        'SHA-256',
        'pathname',
        'from',
        '~login-failed|',
        'prefix',
        'toString',
        ',\x20s-maxage=',
        '/admin',
        'other',
        '27nmHVtv',
        'respond:',
        'fromCharCode',
        'public,\x20max-age=0,\x20s-maxage=0',
        'json',
        '434jGLoFn',
        'method',
        'firewall',
        'catch',
        '38072jnvGWu',
        ';base64,',
        'charAt'
    ];
    _0x385a = function () {
        return _0x42b180;
    };
    return _0x385a();
}


/* Do not allow to modify or edit for security reason  */
