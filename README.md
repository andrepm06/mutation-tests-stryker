# Mutation Tests Using Stryker

This is a small sample of how execute [mutation testing](http://atodorov.org/blog/2016/12/27/mutation-testing-vs-coverage/) into your javascript code using [Stryker](http://stryker-mutator.io/quickstart.html).

This example uses mocha as test runner and test framework, but you can also use Jest or Jasmine. (See more: http://stryker-mutator.io/plugins.html)

### Installing

Execute the command below to install dependencies:

```
npm install
```

## Running the tests

To execute unit tests:

```
npm test
```

To check code coverage:

```
npm run coverage
```

Finally, to execute mutations on the source code:

```
npm run mutations
```

## Report

Mutation report is automatically generated at `./reports`