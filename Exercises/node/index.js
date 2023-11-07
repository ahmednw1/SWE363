const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyFilesWithExtensions(sourceDir, targetDir, extensions) {
  try {
    const files = await readdir(sourceDir);

    const filteredFiles = files.filter((file) =>
      extensions.some((ext) => file.endsWith(ext))
    );

    for (const file of filteredFiles) {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);

      await copyFile(sourceFilePath, targetFilePath);
      console.log(`Copied: ${file}`);
    }

  } catch (err) {
    console.error('Error:', err);
  }
}


const sourceDirectory = process.argv[2];
const targetDirectory = process.argv[3];
const extensions = ['.txt', '.jpg']; 
copyFilesWithExtensions(sourceDirectory, targetDirectory, extensions);
