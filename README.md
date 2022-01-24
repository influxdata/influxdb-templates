**NOTICE**: this repo has been archived and left for historical reference but
is no longer maintained.

# InfluxDB Templates

This repo is a collection of [templates](https://v2.docs.influxdata.com/v2.0/visualize-data/templates/) used in the InfluxDB UI.

## Development

### Releasing a new version

Ensure that:

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are logged into Yarn (`yarn login`)
- You are on `master` and the working tree is clean

Then run the publish script in the root of the repo:

```
./publish
```
