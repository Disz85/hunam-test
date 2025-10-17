import dotenv from 'dotenv';
import { defineConfig } from 'orval';

dotenv.config();

const swaggerUrl = process.env.SWAGGER_URL;

if (typeof swaggerUrl !== 'string' || swaggerUrl.trim().length === 0) {
  throw new Error(
    'SWAGGER_URL environment variable is not set!\n' +
      'Please create a .env file with:\n'
  );
}

export default defineConfig({
  api: {
    input: {
      target: swaggerUrl,
    },
    output: {
      target: './src/api/__generated__/api.ts',
      client: 'axios',
      mode: 'tags-split',
      prettier: true,
      clean: true,
      mock: false,
    },
  },
});
