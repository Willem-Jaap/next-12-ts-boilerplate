# Next.js Project File structure

```
├── .next: Folder where Next stores all its stuff
├── docs: documentation for this project
├── node_modules: NPM packages folder.
├── public: webroot of project. Fonts & Images are stored here.
├── src: source, all components, styles & pages
   ├── components: React components. If a components has subcomponents (Ex: Form, FormInput, FormSubmit) you should make a folder with the name of the root component (Form).
   ├── functions: seperate functions like request indepentant of components.
   ├── pages: All pages for the project
   ├── scripts: Javascript which doesn't have to do with functionality. can be related to components.
   ├── styles: View styles.md
.env: environment variables like API_URL ect.
.env.development: Example variables for development .env
.env.production: Example variables for production .env
.gitignore: Files which git ignores
next-env.d.ts: Typescript definition for next.
next-config.js: Next configuration file.
package-lock.json: Lock file for NPM packages. Don't commit changes to this file. Only it you need to when upgrading something.
tsconfig.json: Typescript configuration
```
