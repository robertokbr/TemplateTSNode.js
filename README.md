<h1 align="center">
    <img src="https://raw.githubusercontent.com/TypeStrong/ts-node/HEAD/logo.svg?sanitize=true" width="500px" /><br>
    <br>
    Node.JS + Typescript template 
</h1>

<h4 align="center">
  Template to start the API development with Typescript
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/robertokbr/NodeTS-template.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/robertokbr/NodeTS-template.svg">

  <a href="https://www.codacy.com/app/robertokbr/NodeTS-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=robertokbr/NodeTS-template&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/1b577a07dda843aba09f4bc55d1af8fc.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/robertokbr/NodeTS-template.svg">
  <a href="https://github.com/robertokbr/NodeTS-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/robertokbr/NodeTS-template.svg">
  </a>

  <a href="https://github.com/robertokbr/NodeTS-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/robertokbr/NodeTS-template.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/robertokbr/NodeTS-template.svg">
</p>

## 🔧 Features
- TypeScript with ts-node-dev
- tsconfig-paths
- EditorConfig
- ESLint
- Prettier
- Setting Debug
- Jest
- Babel


## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/robertokbr/NodeTS-template.git

# Go into the repository
$ cd NodeTS-template

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

### 🕹 Config ESLint autocorrect 

 -  Install ESLint VSCode integration 
 -  Add in settings.json

   ```jsx
     "[javascript]": {
     "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true,

       }
     },
     "[javascriptreact]":{
     "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true 
           }
        },
     "[typescript]":{
     "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true 
        }
      },
     "[typescriptreact]":{
     "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true 
        }
      } 
      ```
