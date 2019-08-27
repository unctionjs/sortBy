import {test} from "tap";

import sortBy from "./";


test("sorts", ({same, done}) => {
  same(
    sortBy(({id}) => id)([{id: 3}, {id: 1}, {id: 2}]),
    [{id: 1}, {id: 2}, {id: 3}]
  );

  done();
});

test("sort", ({same, done}) => {
  same(
    sortBy(({id}) => id)([{id: 1}, {id: 2}, {id: 3}]),
    [{id: 1}, {id: 2}, {id: 3}]
  );

  done();
});

test("sort", ({same, done}) => {
  same(
    sortBy(({id}) => id)([{id: 1}, {id: 2}, {id: 1}]),
    [{id: 1}, {id: 1}, {id: 2}]
  );

  done();
});


test("sort", ({same, done}) => {
  same(
    sortBy(({id}) => id)([{id: "ad2e123"}, {id: "123123dd"}, {id: "asd2o3o1"}]),
    [{id: "123123dd"}, {id: "ad2e123"}, {id: "asd2o3o1"}]
  );

  done();
});

test("sort", ({same, done}) => {
  same(
    sortBy(({id}) => id)([{id: true}, {id: false}, {id: true}]),
    [{id: false}, {id: true}, {id: true}]
  );

  done();
});
