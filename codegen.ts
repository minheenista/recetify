import type { CodegenConfig } from '@graphql-codegen/cli';
import { ENDPOINT_URL } from "./utils/constants";
 
const config: CodegenConfig = {
  overwrite: true,
  schema: "https://89a2-148-204-142-9.ngrok-free.app/graphql",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
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
