#!/usr/bin/env node
import os from "os";
import path from "path";
import fs from "fs";

const command = process.argv[2]
const commandName = process.argv[3]

const sourceDir = process.cwd();

function copyRecursive(srcPath, destPath) {
  const name = path.basename(srcPath)
  if (name === 'node_modules' || name === '.git') return

  const stats = fs.statSync(srcPath)
  
  if (stats.isFile()) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true })
    fs.copyFileSync(srcPath, destPath)
    console.log(`Copied: ${path.basename(srcPath)}`)
  } else if (stats.isDirectory()) {
    const files = fs.readdirSync(srcPath)
    for (const file of files) {
      copyRecursive(
        path.join(srcPath, file),
        path.join(destPath, file)
      )
    }
  }
}

function deleteRecursive(targetPath) {
  try {
      fs.rmSync(targetPath, { recursive: true });
      console.log('Directory and contents removed synchronously.');
  } catch (err) {
      console.log("Deleting template failed:", err);
  }
}


if (command === "save") {
  const templateDir = path.join(os.homedir(), "db-template", commandName);
  copyRecursive(sourceDir, templateDir)
  
  console.log(`Template "${commandName}" saved.`)
} else if (command === "use") {
  const templateDir = path.join(os.homedir(), "db-template", commandName);
  copyRecursive(templateDir, sourceDir)
  console.log(`Using template "${commandName}"`)
} else if (command === "delete") {
  const templateDir = path.join(os.homedir(), "db-template", commandName);
  deleteRecursive(templateDir)
  console.log(`Deleting template "${commandName}"`)
} else if (command == "list") {
  if (fs.existsSync(path.join(os.homedir(), "db-template"))) {
    const templates = fs.readdirSync(path.join(os.homedir(), "db-template"))
    console.log("Saved templates:")
    templates.forEach(template => console.log(`- ${template}`))
  } else {
    console.log("No templates found.")
  }
} else {
  console.log("Commands: save <name> | use <name> | delete <name>")
}