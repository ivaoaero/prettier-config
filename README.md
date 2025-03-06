# IVAO Prettier config

This package is a shared configuration file for Prettier.
To use this config, follow the installation instructions.

## Installation

Install the following packages:

- `prettier`
- `@ivao/prettier-config`
- `@ianvs/prettier-plugin-sort-imports`

`npm add --save-dev prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports` or `yarn add -D prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports` or `pnpm add -D prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports`

### package.json

You can add the following to your `package.json` file to use this config:

```json
"prettier": "@ivao/prettier-config",
```

Using this setup, you cannot modify anything.

### .prettierrc

You can add a `.prettierrc` file to your project to use this config:

```
"@ivao/prettier-config"
```

Using this setup, you cannot modify anything.

### .prettierrc

You can add a `.prettierrc` file to your project to use this config:

```js
const ivaoPrettierConfig = require('@ivao/prettier-config');
const generateImportOrder = require('@ivao/prettier-config/generateImportOrder');

module.exports = generateImportOrder(['@components', '', '@lib', '@config']);
```

#### `generateImportOrder`

`generateImportOrder` takes two arguments and returns a prettier config object.

##### First argument: `importOrder`

`importOrder` is an array of strings.
Each string is a path to a directory or a regex.
The order of the strings in the array is the order in which the imports will be sorted.
Consult the docs of the `@ianvs/prettier-plugin-sort-imports` package for more information.

##### Second argument: `overwrite`

`overwrite` is a boolean value.
If `true`, the `importOrder` array will overwrite the default import order.
Otherwise, the `importOrder` array will be merged into the default import order.

## Ignore files

It is recommended to ignore files from formatting. Do this using the `.prettierignore` file.
