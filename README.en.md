# Drizzle ORM Basic Application

A basic CRUD application using [Drizzle ORM](https://orm.drizzle.team/) with SQLite (via libSQL). This repository is the companion for the article [Tutorial básico de Drizzle ORM](https://codel.io/articulos/tutorial-basico-de-drizzle-orm/).

> [Leer en español](README.md)

## Tech Stack

- **TypeScript**
- **Drizzle ORM** - TypeScript ORM
- **libSQL** - SQLite-compatible database
- **Drizzle Kit** - CLI for migrations and schema management
- **tsx** - TypeScript execution engine

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended) or [Bun](https://bun.sh)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/codel-io/aplicacion-basica-drizzleorm.git
cd aplicacion-basica-drizzleorm
```

2. Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

The `.env` file should contain:

```
DB_FILE_NAME=file:local.db
```

## Database Setup

Push the schema to the database (development only):

```bash
# npm
npx drizzle-kit push

# pnpm
pnpm drizzle-kit push

# yarn
yarn drizzle-kit push

# bun
bunx drizzle-kit push
```

## Usage

Run the application:

```bash
# npm
npx tsx src/index.ts

# pnpm
pnpm tsx src/index.ts

# yarn
yarn tsx src/index.ts

# bun
bun src/index.ts
```

Or use the predefined script:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn run dev

# bun
bun run dev
```

## Project Structure

```
├── src/
│   ├── db/
│   │   ├── database.ts    # Database connection setup
│   │   └── schema.ts      # Table definitions (authors)
│   └── index.ts           # Main entry point (CRUD operations)
├── drizzle.config.ts       # Drizzle Kit configuration
├── .env.example            # Environment variables template
└── package.json
```

## What Does It Do?

The application demonstrates basic CRUD operations with Drizzle ORM:

- **Create** - Insert new authors into the database
- **Read** - Query all authors and filter by email
- **Update** - Modify an author's name
- **Delete** - Remove an author by email

## License

[Unlicense](https://unlicense.org)

## Author

Sergio Gallardo - [codelio](https://codel.io)
