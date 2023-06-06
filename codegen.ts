import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://74d5-177-232-5-217.ngrok-free.app/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/graphql.ts": {
      plugins: [
        "typescript-operations",
        "typescript-document-nodes",
        "typescript",
      ],
    },
    "gql/graphql.d.ts": {
      plugins: ["typescript-graphql-files-modules"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;