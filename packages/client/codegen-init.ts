import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  errorsOnly: true,
  schema: '../server/schema.gql',
  documents: './graphql/**/*',
  generates: {
    './generated/': {
      preset: 'client',
    },
  },
};

export default config;
