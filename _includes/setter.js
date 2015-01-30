var lens = nanoscope({ a: 100 }).path('a').setter();

lens.set(30);
// #=> { a: 30 }

lens.get();
// #=>  Error: get not permitted in a Setter