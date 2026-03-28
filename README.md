# templr-js

Save and reuse your project boilerplate templates from the CLI.

## Install
```bash
npm install -g templr-js
```

## Usage

### Save a template
Navigate to your project and run:
```bash
templr save <name>
```

### Use a template
Navigate to a new empty folder and run:
```bash
templr use <name>
```

### List all templates
```bash
templr list
```

### Delete a template
```bash
templr delete <name>
```

## Example
```bash
# save your perfect backend setup
cd my-backend-project
templr save backend

# start a new project with that template
mkdir new-project
cd new-project
templr use backend
```

## Notes
- Templates are stored locally on your machine at `~/.db-template/`
- `node_modules` and `.git` are never copied
- Works on Mac, Windows, and Linux

## Author
[@ammardev_](https://twitter.com/ammardev_)