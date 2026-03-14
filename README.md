# Aplicación Básica con Drizzle ORM

Una aplicación CRUD básica usando [Drizzle ORM](https://orm.drizzle.team/) con SQLite (vía libSQL). Este repositorio es complementario del tutorial [Tutorial básico de Drizzle ORM](https://codel.io/articulos/tutorial-basico-de-drizzle-orm/).

> [Read in English](README.en.md)

## Stack Tecnológico

- **TypeScript**
- **Drizzle ORM** - ORM para TypeScript
- **libSQL** - Base de datos compatible con SQLite
- **Drizzle Kit** - CLI para migraciones y gestión de esquemas
- **tsx** - Motor de ejecución de TypeScript

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v18 o superior recomendado) o [Bun](https://bun.sh)

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/codel-io/aplicacion-basica-drizzleorm.git
cd aplicacion-basica-drizzleorm
```

2. Instalar dependencias:

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

3. Configurar las variables de entorno:

```bash
cp .env.example .env
```

El archivo `.env` debe contener:

```
DB_FILE_NAME=file:local.db
```

## Configuración de la Base de Datos

Aplicar el esquema a la base de datos (solo desarrollo):

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

## Uso

Ejecutar la aplicación:

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

O usar el script predefinido:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn run dev

# bun
bun dev
```

## Estructura del Proyecto

```
├── src/
│   ├── db/
│   │   ├── database.ts    # Configuración de la conexión a la BD
│   │   └── schema.ts      # Definición de tablas (authors)
│   └── index.ts           # Punto de entrada principal (operaciones CRUD)
├── drizzle.config.ts       # Configuración de Drizzle Kit
├── .env.example            # Plantilla de variables de entorno
└── package.json
```

## ¿Qué Hace?

La aplicación demuestra operaciones CRUD básicas con Drizzle ORM:

- **Crear** - Insertar nuevos autores en la base de datos
- **Leer** - Consultar todos los autores y filtrar por correo electrónico
- **Actualizar** - Modificar el nombre de un autor
- **Eliminar** - Borrar un autor por correo electrónico

## Licencia

[Unlicense](https://unlicense.org)

## Autor

Sergio Gallardo - [codelio](https://codel.io)
