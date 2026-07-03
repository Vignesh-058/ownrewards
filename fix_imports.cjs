const fs = require('fs');
const path = require('path');

const globalCssPath = path.join(__dirname, 'src/styles/global.css');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.css') && !fullPath.includes('global.css') && !fullPath.includes('index.css')) {
            // Append CSS to global.css
            const cssContent = fs.readFileSync(fullPath, 'utf8');
            fs.appendFileSync(globalCssPath, `\n/* --- From ${file} --- */\n${cssContent}`);
            
            // Delete the CSS file
            fs.unlinkSync(fullPath);
            console.log(`Merged and deleted ${fullPath}`);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Remove CSS imports
            const cssImportRegex = /import\s+['"]\.\/.*?\.css['"];?\n?/g;
            if (cssImportRegex.test(content)) {
                content = content.replace(cssImportRegex, '');
                modified = true;
            }

            // Fix Button imports
            // Example: import Button from './Button'; -> import { Button } from '../ui/Button';
            // Example: import Button from '../Button'; -> import { Button } from '../ui/Button';
            const btnImportRegex = /import\s+Button\s+from\s+['"](\.\.?)\/Button['"];?/g;
            if (btnImportRegex.test(content)) {
                content = content.replace(btnImportRegex, (match, p1) => {
                    const depth = p1 === '.' ? '../ui/Button' : '../../components/ui/Button';
                    return `import { Button } from '${depth}';`;
                });
                modified = true;
            }
            
            // Fix Logo imports
            const logoImportRegex = /import\s+Logo\s+from\s+['"](\.\.?)\/Logo['"];?/g;
            if (logoImportRegex.test(content)) {
                content = content.replace(logoImportRegex, (match, p1) => {
                    const depth = p1 === '.' ? '../ui/Logo' : '../../components/ui/Logo';
                    return `import Logo from '${depth}';`;
                });
                modified = true;
            }
            
            // Fix Navbar/Footer imports if any
            const navImportRegex = /import\s+Navbar\s+from\s+['"](\.\.?)\/Navbar['"];?/g;
            if (navImportRegex.test(content)) {
                content = content.replace(navImportRegex, "import { Navbar } from '../layout/Navbar';");
                modified = true;
            }

            const footerImportRegex = /import\s+Footer\s+from\s+['"](\.\.?)\/Footer['"];?/g;
            if (footerImportRegex.test(content)) {
                content = content.replace(footerImportRegex, "import { Footer } from '../layout/Footer';");
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated imports in ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, 'src/components'));
processDirectory(path.join(__dirname, 'src/pages'));
console.log("Done.");
