const fs = require('fs');
const path = require('path');

function fixImports(dir, depth) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            fixImports(fullPath, depth + 1);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // In src/components (depth 0): Button is at ./ui/Button, Logo is at ./ui/Logo, Navbar is at ./layout/Navbar
            // In src/pages (depth 0, wait relative to pages it's ../components/ui/Button)
            // It's easier to just use regex to replace any '../components/Button' or './Button' with the correct relative path.

            // 1. Find all `import * from '.../Button'` and replace with correct path to `src/components/ui/Button`
            // 2. Find all `import * from '.../Logo'` and replace with correct path to `src/components/ui/Logo`
            
            // To be bulletproof, we will resolve the absolute path and then compute relative path to src/components/ui/Button
            
            const buttonAbsolutePath = path.resolve(__dirname, 'src/components/ui/Button');
            const logoAbsolutePath = path.resolve(__dirname, 'src/components/ui/Logo');
            
            // Re-read file lines and fix
            const lines = content.split('\n');
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                
                // Fix Button
                if (line.match(/import\s+(?:\{\s*Button\s*\}|Button)\s+from\s+['"].*?Button['"];?/)) {
                    const relativePath = path.relative(path.dirname(fullPath), buttonAbsolutePath).replace(/\\/g, '/');
                    lines[i] = `import { Button } from '${relativePath}';`;
                    modified = true;
                }
                
                // Fix Logo
                if (line.match(/import\s+Logo\s+from\s+['"].*?Logo['"];?/)) {
                    const relativePath = path.relative(path.dirname(fullPath), logoAbsolutePath).replace(/\\/g, '/');
                    lines[i] = `import Logo from '${relativePath}';`;
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, lines.join('\n'));
                console.log(`Bulletproof fixed imports in ${fullPath}`);
            }
        }
    }
}

fixImports(path.join(__dirname, 'src/components'), 0);
fixImports(path.join(__dirname, 'src/pages'), 0);
