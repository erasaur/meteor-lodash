A wrapper for [Lo-Dash](http://lodash.com), a JavaScript utility library delivering consistency, modularity, performance, & extras. Lo-Dash can be used as a drop-in replacement for [Underscore.js](http://underscorejs.org).

#### Usage
```
meteor add erasaur:meteor-lodash
```

The package exports `_` and `lodash` as two global variables, though it's still possible for `_` to be redefiend as `underscore` subsequently. To be safe, you can declare `_ = lodash`in your application code.

#### Why use Lo-Dash?
Lo-Dash is known to be generally more performant than Underscore, and has a set of [features](https://lodash.com/#features) that Underscore lacks.
