import type { CodegenConfig } from '@graphql-codegen/cli';
import { ENDPOINT_URL } from "./utils/constants";
 
const config: CodegenConfig = {
  overwrite: true,
  schema: "https://3868-177-232-7-99.ngrok-free.app",
  documents: "src/**/*.vue",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
