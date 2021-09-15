# Next.js Project File structure

## .next

Folder where Next stores things like cache, build ID's & static generated pages. This is also the build output directory.
You should never edit this folder because it will be overwritten in a new build. You can savely remove this entire directory if a build fails. It is not in source control.

## docs

Documentation for this project

## node_modules

NPM packages folder.

## public

webroot of project. Fonts & images are stored here.

## src

Source of the entire project. Everything you code exept assets should be in this folder.

## src/compoments

React components. If a components has subcomponents (Ex: Form, FormInput, FormSubmit) it should be contained in a folder with the name of the root component (Form).

## src/lib

This directory contains reuseable, non-ui-generating files.

## src/lib/context

Context directory for all react contexts. Each context should be in a seperate file with it's exact naming and a `.ts` extention

UserContext becomes UserContext.ts
The only purpose of this file should be to create a context using its types and export it.

```typescript
// Package imports
import { createContext } from 'react';

// Interface imports
import { UserContextProps } from '../interfaces/Editor';

// Create UserContext.
export const UserContext = createContext<Partial<UserContextProps>>(null);
```

## src/lib/functions

Reusable not react dependant functions.

## src/lib/hooks

Custom react hooks. These are functions which can implement react logic without generating UI. https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook

## src/lib/types

Typescript type definitions.

For ex.: A breadcrumb type interface. (Breadcrumbs.d.ts)

```typescript
export interface Breadcrumbs {
    url: string;
    label: string;
}
```

## src/pages

Represents the actual routing structure of the website. Next uses this folder to locate pages & generate routes.

## src/styles

View `STYLES.md`

## .env:

Environment variables like API_URL ect.

## .env.development:

Example variables for development .env.

## .env.production:

Example variables for production .env.

## .eslintrc.js:

Settings for JS linter

## .gitignore:

Files which git ignores.

## .prettierrc.js:

Settings for Prettier code styling.

## .stylelintrc:

Settings for SCSS linter, also style order.

## next-env.d.ts:

Typescript definition for next.

## next-config.js:

Next configuration file.

## package-lock.json:

Lock file for NPM packages. Don't commit changes to this file. Only if you need to when upgrading to a new version or a new package is added.

## README.md

Quick setup & commands

## tsconfig.json:

Typescript configuration.
