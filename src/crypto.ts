import * as crypto from 'crypto';

// Function to create a SHA-256 hash of a string
function createHash(input: string): string {
    // Create a hash object
    const hash = crypto.createHash('sha256');

    const password = '123333';
    // Update the hash object with the input string
    hash.update(input + password);

    // Compute and return the hash as a hexadecimal string
    return hash.digest('hex');
}

// Example usage
const inputString = 'Hello, World!';
const hashedString = createHash(inputString);

console.log(`Input: ${inputString}`);
console.log(`SHA-256 Hash: ${hashedString}`);