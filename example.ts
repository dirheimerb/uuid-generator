import UuidGenerator from './src';

console.log(UuidGenerator.v1());
console.log(UuidGenerator.v3('d94ea0ca-1c30-465e-8e8b-b7984a7c7336', 'test'));
console.log(UuidGenerator.v4());
console.log(UuidGenerator.v5('d94ea0ca-1c30-465e-8e8b-b7984a7c7336', 'test'));
console.log(UuidGenerator.validate('123e4567-e89b-12d3-a456-426614174000'));
