import type { CodegenConfig } from '@graphql-codegen/cli';
import { ENDPOINT_URL } from "./utils/constants";
 
const config: CodegenConfig = {
  overwrite: true,
  schema: "https://3868-177-232-7-99.ngrok-free.app/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript-operations",
        "typescript-document-nodes",
        "typescript",
      ]
    },
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
      plugins: ["introspection"]
    }
  }
};

export default config;
