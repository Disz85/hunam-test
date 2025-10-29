# Frontend Interview Task - Employee Management

React + TypeScript + Vite application with employee CRUD functionality.

📚 [View Full API Documentation](https://disz85.github.io/hunam-test/)

## Tech Stack

- **React 18.3** + **Vite**
- **TypeScript**
- **Tailwind CSS** + **@tailwindcss/forms**
- **Headless UI** + **HeroIcons**
- **TanStack Router** - routing
- **TanStack Query** - data fetching
- **TanStack Table** - table management
- **React Hook Form** + **Zod** - form handling and validation
- **Axios** - HTTP client
- **i18next** - internationalization
- **date-fns** - date utilities

## Tooling & Code Quality

- **ESLint** (strict TypeScript rules) + **Prettier** - code quality and formatting
- **Husky** + **lint-staged** - pre-commit hooks
- **Commitlint** - conventional commits validation
- **Commitizen** - interactive commit message creation
- **TypeScript** - strict type safety with pre-commit checking
- **Import sorting** - automatic import organization
- **JSX A11y** - accessibility checks
- **EditorConfig** - consistent editor settings

## Requirements

- **Bun** v1.2.23+ (for package management and development)
- **Node.js** v22.20.0 (LTS - required for Orval API type generation)

**Tested with:**

- Bun v1.2.23
- Node.js v22.20.0

Note: While this project uses Bun for package management and running scripts, Orval requires Node.js LTS for code generation due to its dependencies.

## Setup

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.example .env
   ```

   Fill in the required values in the `.env` file.

3. **Start development server:**

   ```bash
   bun run dev
   ```

## Available Scripts

### Development

- `bun run dev` - Start development server with hot reload
- `bun run build` - Create production build (TypeScript type-check + build)
- `bun run preview` - Preview production build locally

### Documentation

- `bun run docs:generate` - Generate TypeDoc documentation from JSDoc comments
- `bun run docs:open` - Open documentation in default browser

### Code Quality

- `bun run lint` - Run ESLint on all files
- `bun run lint:fix` - Auto-fix ESLint issues
- `bun run type-check` - Run TypeScript compiler without emitting files
- `bun run check` - Run all checks (TypeScript + ESLint + Prettier)
- `bun run format` - Format all files with Prettier

### API & Commits

- `bun run generate:api` - Generate API types from OpenAPI specification
- `bun run commit` - Interactive commit with Commitizen
- `bun run commit:retry` - Amend last commit

### Utilities

- `bun run clean` - Clean build cache and node_modules/.vite

## Folder Structure

```
hunam-test/
├── .github/workflows/              # GitHub Actions workflows
│   └── docs.yml                    # Automated documentation deployment
├── docs/                           # TypeDoc generated documentation (gitignored)
├── public/                         # Static assets
├── src/
│   ├── api/                        # API layer (client, base, services, generated types)
│   │   ├── api-client.ts           # Axios client (cookie-based auth, interceptors)
│   │   ├── base-service.ts         # Shared error handling (ApiError mapping)
│   │   ├── auth/                   # Auth services
│   │   │   ├── auth-service.ts
│   │   │   └── index.ts
│   │   ├── employees/              # Employee services
│   │   │   ├── employee-service.ts
│   │   │   └── index.ts
│   │   ├── errors/                 # Error handling utilities
│   │   └── __generated__/          # Orval-generated types (types source)
│   ├── components/
│   │   ├── layouts/                # Layout components
│   │   ├── navigation/             # Navigation components
│   │   ├── pages/                  # Page-level components
│   │   └── ui/                     # Reusable, headless UI primitives
│   ├── features/                   # Feature-based domain structure
│   │   ├── auth/                   # Authentication feature
│   │   │   ├── components/         # Auth UI components
│   │   │   ├── context/            # Auth context
│   │   │   ├── domain/             # Auth domain logic (types, enums, mappers)
│   │   │   ├── hooks/              # Auth-specific hooks
│   │   │   ├── lib/                # Auth utilities
│   │   │   ├── pages/              # Auth pages
│   │   │   ├── providers/          # Auth providers
│   │   │   └── schemas/            # Auth validation schemas
│   │   ├── dashboard/              # Dashboard feature
│   │   │   ├── components/
│   │   │   └── pages/
│   │   └── employees/              # Employees feature
│   │       ├── components/         # Employee UI components
│   │       │   ├── employee-form/  # Employee form components
│   │       │   ├── employee-list/  # Employee list components
│   │       │   └── employee-table/ # Employee table components
│   │       ├── domain/             # Employee domain logic
│   │       │   ├── constants/      # Employee constants
│   │       │   ├── enums/          # Employee enums (Sex, Education, PaymentMethod)
│   │       │   ├── mappers/        # Data mappers
│   │       │   └── query-keys/     # React Query keys
│   │       ├── hooks/              # Employee-specific hooks
│   │       ├── pages/              # Employee pages
│   │       └── schemas/            # Employee validation schemas
│   ├── hooks/                      # App-wide reusable hooks
│   ├── i18n/
│   │   └── locales/                # Translation files (en, hu)
│   ├── lib/                        # Utility functions
│   ├── providers/                  # App-level providers (Query, Auth, i18n)
│   ├── routes/                     # TanStack Router file-based routes
    ├── config/                     # Configuration files
    └── main.tsx                    # Application entry point
```

## Path Aliases

The project uses `@/` path alias:

```typescript
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
```

## Backend API

API URL: `https://interview.hyperplane.hu`
API Docs: `https://interview.hyperplane.hu/swagger/index.html`

## API Type Generation

This project uses **Orval** to automatically generate TypeScript types from the backend OpenAPI specification.

### Generate API Types

```bash
bun run generate:api
```

This command:

- Fetches the OpenAPI spec from the backend Swagger endpoint
- Generates TypeScript types and interfaces
- Outputs to `src/api/__generated__/`

**Note:** Generated files should not be manually edited. They are committed to version control to ensure type consistency across all environments.

### Architecture Approach

The project uses a **hybrid approach** for API integration:

**Generated (Automated):**

- TypeScript types and interfaces (e.g. `__generated__/api.schemas.ts`)
- Endpoint definitions (used as reference; calls go through custom services)

**Manual (Custom Implementation):**

- Axios client with interceptors and cookie-based auth (`src/api/api-client.ts`)
- Unified error handling base (`src/api/base-service.ts`)
- Service layer (`src/api/auth/*`, `src/api/employees/*`)
- Feature-level domain structure (enums, types, mappers under `src/features/*/domain`)

**Why This Approach?**

This combines the benefits of automated type generation (guaranteed sync with backend, no manual typing errors) with custom business logic and error handling that demonstrates architectural understanding and production-ready patterns.

## Documentation

The project includes comprehensive API documentation generated from JSDoc comments using TypeDoc.

### Generate Documentation Locally

```bash
bun run docs:generate
```

This generates static HTML documentation in the `docs/` folder.

### View Documentation

Open the generated documentation in your browser:

```bash
bun run docs:open
```

Or visit: https://disz85.github.io/hunam-test/

### Automatic Deployment

The documentation is automatically deployed to GitHub Pages whenever:

- You push changes to TypeScript/TSX files in `src/`
- The `typedoc.json` configuration changes
- The GitHub Actions workflow is manually triggered

## Deployment

This project is configured for **Vercel** deployment with a `vercel.json` configuration file.

### Deploy to Vercel

1. **Push to GitHub:**

   ```bash
   git push origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New Project"
   - Import your repository: `Disz85/hunam-test`

3. **Configure environment variables:**
   - Add the following environment variable:
     ```
     VITE_API_BASE_URL=https://interview.hyperplane.hu
     ```

4. **Deploy:**
   - Vercel will automatically detect Vite and use the existing `vercel.json`
   - Click "Deploy"
   - Your app will be live in ~2 minutes!

### Build Settings (Auto-detected)

Vercel automatically detects:

- **Framework**: Vite
- **Build Command**: `bun run build`
- **Output Directory**: `dist`
- **Node.js Version**: 22.x

### After Deployment

- Vercel provides a free HTTPS domain
- Automatic deployments on every push to `main`
- Preview deployments for pull requests

## Git Hooks (Husky)

The project uses Husky for automatic validation:

### Pre-commit Hook

- **TypeScript type checking** (`tsc --noEmit`)
- **ESLint auto-fix** (import sorting, unused imports, etc.)
- **Prettier formatting**

### Commit-msg Hook

- **Conventional commits validation** (commitlint)

These hooks ensure code quality before committing and pushing.

### Interactive Commits

Use `bun run commit` for guided commit message creation with Commitizen:

```bash
bun run commit
```

This will guide you through:

- Commit type selection (feat, fix, docs, etc.)
- Scope definition
- Description writing
- Breaking changes detection

## Commit Guidelines

The project uses **Conventional Commits** format:

```
feat: add employee search functionality
fix: resolve date picker validation issue
docs: update API documentation
style: format code with prettier
refactor: simplify authentication logic
test: add unit tests for employee service
chore: update dependencies
```

Commits are automatically validated before commit.
