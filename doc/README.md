uuid-wand / [Exports](modules.md)

# UUID Wand

UUID Wand is a TypeScript library that provides functionality to generate and validate UUIDs (Universally Unique Identifiers).

- [UUID Wand](#uuid-wand)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Generating UUIDs](#generating-uuids)
    - [Validating UUIDs](#validating-uuids)
    - [Bulk Generation](#bulk-generation)
    - [Timestamp Retrieval](#timestamp-retrieval)
    - [Short UUID](#short-uuid)
  - [License](#license)

## Installation

To use this library in your project, make sure you have Node.js installed. Follow the steps below to install and use the library:

1. Clone the repository or download the source code files.
2. Install the required dependencies by running the following command in the project directory:

   ```bash
   npm install uuid-wand
   ```

   ```bash
   yarn add uuid-wand
   ```

   ```bash
   pnpm add uuid-wand
   ```

3. Import the `UuidGenerator` class into your TypeScript file:

   ```typescript
   import UuidGenerator from 'uuid-wand';
   ```

## Usage

### Generating UUIDs

The `UuidGenerator` class provides four methods for generating UUIDs:

- `v1()`: Generates a version 1 UUID using the current timestamp, clock sequence, and node ID.

  ```typescript
  const uuidV1 = UuidGenerator.v1();
  console.log(uuidV1); // Output: e.g., '6a365c44-e127-11eb-b95f-cb258f9664de'
  ```

- `v3(namespace: string, name: string)`: Generates a version 3 UUID using the provided namespace and name.

  ```typescript
  const uuidV3 = UuidGenerator.v3(
    '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    'Hello, World!',
  );
  console.log(uuidV3); // Output: e.g., '2ed6657d-e927-568b-95e1-2665a8aea6a2'
  ```

- `v4()`: Generates a version 4 UUID using random values.

  ```typescript
  const uuidV4 = UuidGenerator.v4();
  console.log(uuidV4); // Output: e.g., 'd6e3c7b6-8e47-4a3c-a31c-78168d0b96cd'
  ```

- `v5(namespace: string, name: string)`: Generates a version 5 UUID using the provided namespace and name.

  ```typescript
  const uuidV5 = UuidGenerator.v5(
    '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    'Hello, World!',
  );
  console.log(uuidV5); // Output: e.g., '886313e1-3b8a-5372-9b90-0c9aee199e5d'
  ```

### Validating UUIDs

- The `validate()` method can be used to check if a given string is a valid UUID.

```typescript
const uuid = '6a365c44-e127-11eb-b95f-cb258f9664de';
const isValid = UuidGenerator.validate(uuid);
console.log(isValid); // Output: true
```

### Bulk Generation

- The method bulkGenerateV4 takes an integer count as an argument and returns an array of version 4 UUIDs.

```typescript
const uuids = UuidGenerator.bulkGenerateV4(5);
console.log(uuids);
// Output:
// [
//   'd6e3c7h6-8e47-4a3c-a31c-78168d0b96jd',
//   'd6e3c7b6-8h47-4a3c-a31c-78168d0b96ca',
//   'd6e3c7b6-8347-4g3c-a31c-78168d0b96cq',
//   'd6e3c7b6-8e47-4d3c-a31c-78168d0b96cj',
//   'd6e3c7b6-8e47-4a3c-b31c-78168d0b96cl'
```

### Timestamp Retrieval

- The method extractTimestampV1 extracts the timestamp from a version 1 UUID string. It returns the timestamp as a number or null if the UUID is not valid or not a version 1 UUID. The extraction logic relies on bit manipulation and should be fairly efficient.

```typescript
const uuid = '6a365c44-e127-11eb-b95f-cb258f9664de';
const timestamp = UuidGenerator.extractTimestampV1(uuid);
console.log(timestamp); // Output: 1625765020000
```

### Short UUID

- The method shortUuid creates a shorter, URL-friendly UUID by generating a version 4 UUID, hashing it with MD5, and then encoding it using base64. Any characters not safe for URLs are replaced.

```typescript
const shortUuid = UuidGenerator.shortUuid();
console.log(shortUuid); // Output: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

## License

This library is released under the [MIT License](LICENSE). Feel free to modify and use it in your projects.
