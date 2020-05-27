<h4 align="center">
<img src="https://raw.githubusercontent.com/TypeStrong/ts-node/HEAD/logo.svg?sanitize=true" width="500px" /><br>

# NodeTS-template

### HOW TO USE

- Install yarn and run the cmd

```jsx
$ git clone https://github.com/robertokbr/NodeTS-template.git
$ cd NodeTs-template
$ yarn
$ yarn dev:server
```
### ⇒ Dependencies

- express
- TypeScript with ts-node-dev

### ⇒ IDEs Pattern setting

- EditorConfig

    ```jsx
    root = true

    [*]
    end_of_line = lf
    indent_style = space
    indent_size = 2
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    ```

### ⇒ Code Pattern Automator

- ESLint
    - Project Style ⇒ Airbnb
        - ⚠: Install integration ESLint
        - ⚠: Add in settings.json

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
                },
            ```

    - + Plugin eslint-import-resolver-typescript ⇒ Config TypeScript imports and  the .ts extensions
    - + .eslintignore : ``` /*.js , node_modules , dist```

### ⇒ Code Style Automator

- Prettier
    - + eslint-config-prettier , eslint-plugin-prettier
    - prettier.config.js

### ⇒ Setting Debug

- .vscode/launch.json

    ```jsx
  "request": "attach",
  "protocol": "inspector",
  "restart": true,
    ```

### ⇒ Middleware

- logRequest ⇒ catch the method end the url of the request to return in the console log

