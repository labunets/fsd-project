// clear node_modules/.cache directory

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { execSync } = require('child_process');

const cacheDir = path.join(process.cwd(), 'node_modules', '.cache');

if (fs.existsSync(cacheDir)) {
    console.log(chalk.green('Clearing cache...'));
    execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
} else {
    console.log(chalk.green('No cache to clear.'));
}
