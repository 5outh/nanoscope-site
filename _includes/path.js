var obj = {
    a: {
        b: 'flintstones'
    }
}, lens = nanoscope(obj);

nanoscope.path('a.b').get();
// #=> 'flintstones'

nanoscope.path('a.b.c.d').get();
// #=> undefined

nanoscope.path('a.b.c.d').set('vitamins');
// #=> { a: { b: { c: { d: 'vitamins } } } }