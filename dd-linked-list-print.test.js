const print = require('./dd-linked-list-print');


const d = {
  value: 'd',
  next: undefined
}

const c = {
  value: 'c',
  next: d
}

const b = {
  value: "b",
  next: c
}

const a = {
  value: 'a',
  next: b
}



test('result is output as a string seperated by "->"', () => {
  output = print(a);
  expect(output).toEqual('a->b->c->d');
});

test('result is output as a string seperated by "->"', () => {
  output = print(b);
  expect(output).toEqual('b->c->d');
});
