# loadtest

## To run test
```
npm test
```

This command will run the playwright tests under `tests/`.

## To run the load test
```
npm run test:load
```
This command will run `artillery` with the `artillery.yml` file.

## Notes
`tests/flows.js` needs the `user` and `pass` variables filled in for Basic Auth