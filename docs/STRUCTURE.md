# Next.js Project File structure

```
├── .next: Folder where Next stores all its stuff.
├── docs: documentation for this project.
├── node_modules: NPM packages folder.
├── public: webroot of project. Fonts & images are stored here.
├── src: source, all components, styles & pages.
   ├── components: React components. If a components has subcomponents (Ex: Form, FormInput, FormSubmit) it should be contained in a folder with the name of the root component (Form).
   ├── functions: seperate functions like request indepentant of components.
   ├── interfaces: Typescript interfaces. Place them here if you need to reuse them.
   ├── pages: All pages for the project.
   ├── scripts: Javascript which doesn't have to do with functionality. can be related to components.
   ├── styles: View STYLES.md.
.env: Environment variables like API_URL ect.
.env.development: Example variables for development .env.
.env.production: Example variables for production .env.
.eslintrc.js: Settings for JS linter
.gitignore: Files which git ignores.
.prettierrc.js: Settings for Prettier code styling.
.stylelintrc: Settings for SCSS linter, also style order.
next-env.d.ts: Typescript definition for next.
next-config.js: Next configuration file.
package-lock.json: Lock file for NPM packages. Don't commit changes to this file. Only if you need to when upgrading something.
README.md
tsconfig.json: Typescript configuration.
```
