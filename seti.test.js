const seti = require('./seti');

// toBe
test('No signal found must be true', () => {
  expect(seti.noSignalFound(true)).toBe(true);
});

// toContain
test('Philip Morrison should be in founders', () => {
  expect(seti.founders).toContain('Philip Morrison');
});

// toEqual
test('Fetched telescope name should be Leanne Graham', () => {
  return seti.fetchTelescope()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    })
})