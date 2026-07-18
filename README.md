# IVAO Prettier config

This package is a shared configuration file for Prettier.
To use this config, follow the installation instructions.

## Installation

Install the following packages:

- `prettier`
- `@ivao/prettier-config`
- `@ianvs/prettier-plugin-sort-imports`
- `prettier-plugin-tailwindcss`

NPM:

```sh
npm add --save-dev prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

Yarn:

```sh
yarn add -D prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

PNPM:

```sh
pnpm add -D prettier @ivao/prettier-config @ianvs/prettier-plugin-sort-imports prettier-plugin-tailwindcss
```

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

`generateImportOrder` takes four optional arguments and returns a Prettier config object.

##### First argument: `importOrder`

`importOrder` is an array of strings.
Each string is a path to a directory or a regex.
The order of the strings in the array is the order in which the imports will be sorted.
Consult the docs of the `@ianvs/prettier-plugin-sort-imports` package for more information.

##### Second argument: `overwrite`

`overwrite` is a boolean value.
If `true`, the `importOrder` array will overwrite the default import order.
Otherwise, the `importOrder` array will be merged into the default import order.

##### Third argument: `importOrderTypeScriptVersion`

`importOrderTypeScriptVersion` is the TypeScript version used by
`@ianvs/prettier-plugin-sort-imports` to parse imports.
It defaults to `6.0.3`.

##### Fourth argument: `tailwind`

`tailwind` is an optional object for configuring `prettier-plugin-tailwindcss`.
It supports the following properties:

- `tailwindStylesheet`: Sets the `tailwindStylesheet` option. This is required
  when using Tailwind CSS v4 or newer.
- `tailwindConfig`: Sets the `tailwindConfig` option when provided.
- `tailwindFunctions`: Sets the functions whose arguments should be sorted as
  Tailwind classes. It defaults to `['clsx', 'cva']`.

`tailwindStylesheet` and `tailwindConfig` are mutually exclusive and cannot be
provided together. Use `tailwindStylesheet` for Tailwind CSS v4 or newer, or
`tailwindConfig` for earlier Tailwind CSS versions. `tailwindFunctions` can be
used with either option.

For example:

```js
module.exports = generateImportOrder(
  ['@components', '', '@lib', '@config'],
  false,
  '6.0.3',
  {
    tailwindStylesheet: './src/styles.css',
    tailwindFunctions: ['clsx', 'cva', 'cn'],
  },
);
```

## Ignore files

It is recommended to ignore files from formatting. Do this using the `.prettierignore` file.
