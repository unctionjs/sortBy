# @unction/sortBy

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, B> => Array<C> => Array<C>

Sorts an array by a given computer function.

``` javascript
sortBy(({id}) => id)([{id: 3}, {id: 1}, {id: 2}]) // [{id: 1}, {id: 2}, {id: 3}]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/sortBy.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/sortBy.svg?maxAge=2592000&style=flat-square
