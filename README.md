# Frontend Interview Task - Employee Management

React + TypeScript + Vite application with employee CRUD functionality.

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
- **TypeScript** - strict type safety
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

- `bun run dev` - Start development server with hot reload
- `bun run build` - Create production build (TypeScript type-check + build)
- `bun run preview` - Preview production build locally
- `bun run generate:api` - Generate API types from OpenAPI specification
- `bun run lint` - Run ESLint on all files
- `bun run lint:fix` - Auto-fix ESLint issues
- `bun run type-check` - Run TypeScript compiler without emitting files

## Folder Structure

```
src/
├── api/         # API client and calls
├── components/  # Reusable UI components
├── features/    # Feature-specific code (auth, employees)
├── hooks/       # Custom React hooks
├── i18n/        # Translation files
├── lib/         # Helper classes and utility functions
└── types/       # TypeScript type definitions
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

- TypeScript types and interfaces (`__generated__/api.schemas.ts`)
- API endpoint definitions and structures

**Manual (Custom Implementation):**

- Custom enums with descriptive names (`enums/`)
- API services with error handling (`services/`)
- Axios client with interceptors (`client.ts`)
- React Query hooks for data fetching (`hooks/api/`)

**Why This Approach?**

This combines the benefits of automated type generation (guaranteed sync with backend, no manual typing errors) with custom business logic and error handling that demonstrates architectural understanding and production-ready patterns.

## Git Hooks (Husky)

The project uses Husky for automatic validation:

### Pre-commit Hook

- ESLint auto-fix (import sorting, unused imports, etc.)
- Prettier formatting

### Commit-msg Hook

- Conventional commits validation

### Pre-push Hook

- Full TypeScript type checking
- Full ESLint validation

These hooks ensure code quality before committing and pushing.

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
