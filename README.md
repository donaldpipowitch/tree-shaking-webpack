```
$ cd fake-lib/
$ npm install
$ npm run -s build
$ cd ..
$ npm install
$ npm run -s build
```

Sadly `logFoo` and `logBar` will allways be included. They are not really _re-exported_, but used by other functions which are exported (but _never_ used).

`logBaz`, `logFizz` and `logBuzz` can be tree shaked.

Search for `TREE_SHAKING` inside `dist/index.js`. You should see `TREE_SHAKING.buzz`, `TREE_SHAKING.foo` and `TREE_SHAKING.bar`. (In a perfect world you would only see `TREE_SHAKING.buzz`.)
