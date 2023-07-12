# UUID Generator

This is a TypeScript class that provides functionality to generate and validate UUIDs (Universally Unique Identifiers).

## Installation

To use this code in your project, you need to have Node.js installed. Follow these steps to install and use the code:

1. Clone the repository or download the source code files.
2. Install the required dependencies by running the following command in the project directory:

   ```
   npm install
   ```

3. Import the `UuidGenerator` class into your TypeScript file:

   ```typescript
   import UuidGenerator from './path/to/UuidGenerator';
   ```

## Usage

### Generating UUIDs

The `UuidGenerator` class provides two methods for generating UUIDs:

1. `v1()`: Generates a version 1 UUID using the current timestamp, clock sequence, and node ID.

   ```typescript
   const uuidV1 = UuidGenerator.v1();
   console.log(uuidV1); // Output: e.g., '6a365c44-e127-11eb-b95f-cb258f9664de'
   ```

2. `v4()`: Generates a version 4 UUID using random values.

   ```typescript
   const uuidV4 = UuidGenerator.v4();
   console.log(uuidV4); // Output: e.g., 'd6e3c7b6-8e47-4a3c-a31c-78168d0b96cd'
   ```

### Validating UUIDs

The `validate()` method can be used to check if a given string is a valid UUID.

```typescript
const uuid = '6a365c44-e127-11eb-b95f-cb258f9664de';
const isValid = UuidGenerator.validate(uuid);
console.log(isValid); // Output: true
```

## License

This code is released under the [MIT License](LICENSE). Feel free to modify and use it in your projects.