var lens = nanoscope([1]).index(0).getter();

lens.get();
// #=> 1

lens.set(100);
// #=> Error: map not permitted in a Getter