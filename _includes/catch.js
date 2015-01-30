var lens = nanoscope([]).unsafeIndex(10000).catch(console.log);

lens.get();
// logs [Error: Attempt to access invalid index 10000]