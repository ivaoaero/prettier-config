/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: [
    {
      name: 'main',
    },
    {
      name: 'develop',
      channel: 'next',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  tagFormat: '${version}',
};
