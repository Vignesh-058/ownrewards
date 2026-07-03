const fs = require('fs');

const transcriptPath = "C:\\Users\\Vicky\\.gemini\\antigravity-ide\\brain\\298338ef-92e9-4a9e-ae90-ac2f6a8cacf6\\.system_generated\\logs\\transcript_full.jsonl";
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (const line of lines) {
    if (!line.trim()) continue;
    try {
        const parsed = JSON.parse(line);
        if (parsed.type === 'USER_INPUT' && parsed.content && parsed.content.includes('# ownRewards — Frontend Developer Handoff Document')) {
            fs.writeFileSync('D:\\new task\\handoff_document.md', parsed.content);
            console.log('Successfully extracted handoff_document.md');
            process.exit(0);
        }
    } catch (e) {
        // ignore JSON parse errors
    }
}
console.log('Could not find the document.');
