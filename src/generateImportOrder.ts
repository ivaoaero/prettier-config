import { PrettierConfig } from '@ianvs/prettier-plugin-sort-imports';

type TailwindConfig = {
  /** If set, sets the `tailwindFunctions` option. Defaults to `['clsx', 'cva']`. */
  tailwindFunctions?: string[];
} & (
  | {
      tailwindStylesheet?: never;
      /** If set, sets the `tailwindConfig` option. */
      tailwindConfig?: string;
    }
  | {
      /** Required if using Tailwind CSS v4+. Sets the `tailwindStylesheet` option. */
      tailwindStylesheet?: string;
      tailwindConfig?: never;
    }
);

/**
 * Generate an import order configuration for Prettier.
 * @param importOrder If provided, these orderings will be added to the configuration.
 * @param overwrite If true, the orderings provided in `importOrder` will be used only.
 * @param importOrderTypeScriptVersion The TypeScript version to use for the import order plugin. Defaults to '6.0.3'.
 * @param tailwind Tailwind CSS configuration.
 */
export const generateImportOrder = (
  importOrder: string[] = [],
  overwrite: boolean = false,
  importOrderTypeScriptVersion: string = '6.0.3',
  tailwind: TailwindConfig | undefined = undefined,
) => {
  if (!overwrite) {
    importOrder = [
      '^(react/(.*)$)|^(react$)',
      '',
      '^(@ivao/(.*)$)|^(@ivao$)',
      '^(@ivaoaero/(.*)$)|^(@ivaoaero$)',
      '',
      '<BUILTIN_MODULES>',
      '',
      '<THIRD_PARTY_MODULES>',
      '',
      '<TYPES>',
      '^types$',
      '',
      ...(importOrder.length ? [...importOrder, ''] : []),
      '^[./]',
    ];
  }
  return {
    arrowParens: 'always',
    singleQuote: true,
    tabWidth: 2,
    endOfLine: 'lf',
    printWidth: 80,
    trailingComma: 'all',
    semi: true,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
    importOrder,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion,
    tailwindFunctions: tailwind?.tailwindFunctions ?? ['clsx', 'cva'],
    tailwindStylesheet: tailwind?.tailwindStylesheet,
    tailwindConfig: tailwind?.tailwindConfig,
  } satisfies PrettierConfig;
};
