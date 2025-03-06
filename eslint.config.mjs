import ivaoConfig from '@ivao/eslint-config';

export default [
  ...ivaoConfig.configs.base,
  ...ivaoConfig.configs.prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            'eslint.config.mjs',
            'commitlint.config.ts',
            'release.config.mjs',
          ],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
