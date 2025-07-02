import * as fs from 'fs';
import * as freemind from 'freemind';

// Function to read and parse a FreeMind file
function parseFreeMindFile2(filePath: string): void {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse the FreeMind XML content
    const mindMap = freemind.parse(fileContent);

    // Log the parsed mind map structure
    console.log('Parsed Mind Map:');
    console.log(JSON.stringify(mindMap, null, 2));
}

// Example usage
const filePath = 'example.mm'; // Replace with the path to your .mm file
parseFreeMindFile2(filePath);