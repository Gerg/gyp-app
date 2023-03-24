# gyp-app
Cloud Foundry test app using gyp (npm native dependencies via python)

## Broken

```sh
❯ cf push gyp-app-broken -s cflinuxfs4 -b nodejs_buildpack
```

## Fixed

```sh
❯ cf push gyp-app -s cflinuxfs4 -b python_buildpack -b nodejs_buildpack
```
