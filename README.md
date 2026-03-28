# templr-js

templr-js is a local-first template scaffolding CLI. Save any project structure as a reusable template, spin it up instantly in any new folder, and manage all your templates from the terminal — no config, no cloud, just your machine

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