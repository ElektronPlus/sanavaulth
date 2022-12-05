
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://sanavaulth-api.herokuapp.com/graphql",
  documents: "./**/*.graphql",
  generates: {
    "src/types.ts": {
        plugins: [
            "typescript",
            "typescript-operations",
            "fragment-matcher"
        ],
        config: {
            apolooClientVersion: 3,
            useExplicitTyping: true,
        },
    },
    "./graphql.schema.json": {
        plugins: ["introspection"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types.ts",
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      }
    }
  }
};

export default config;
