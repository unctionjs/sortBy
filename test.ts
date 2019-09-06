import sortBy from "./index";


test("works", () => {
  expect(sortBy(({id}) => id)([{id: 3}, {id: 1}, {id: 2}])).toEqual([{id: 1}, {id: 2}, {id: 3}]);

  t.done();
});

test("works", () => {
  expect(sortBy(({id}) => id)([{id: 1}, {id: 2}, {id: 3}])).toEqual([{id: 1}, {id: 2}, {id: 3}]);

  t.done();
});

test("works", () => {
  expect(sortBy(({id}) => id)([{id: 1}, {id: 2}, {id: 1}])).toEqual([{id: 1}, {id: 1}, {id: 2}]);

  t.done();
});


test("works", () => {
  expect(
    sortBy(({id}) => id)([{id: "ad2e123"}, {id: "123123dd"}, {id: "asd2o3o1"}])
  ).toEqual([{id: "123123dd"}, {id: "ad2e123"}, {id: "asd2o3o1"}]);

  t.done();
});

test("works", () => {
  expect(sortBy(({id}) => id)([{id: true}, {id: false}, {id: true}])).toEqual([{id: false}, {id: true}, {id: true}]);

  t.done();
});

test("works", () => {
  expect(sortBy(({length}) => length)(["ac", "b"])).toEqual(["b", "ac"]);

  t.done();
});
