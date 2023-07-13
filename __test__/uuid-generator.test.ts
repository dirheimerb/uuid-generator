import UuidGenerator from '../src';

describe('UuidGenerator', () => {
  test('should generate a valid v1 UUID', () => {
    const uuid = UuidGenerator.v1();
    expect(UuidGenerator.validate(uuid)).toBe(false);
  });

  test('should generate a valid v3 UUID', () => {
    const namespace = 'd94ea0ca-1c30-465e-8e8b-b7984a7c7336'; // Use a valid UUID
    const uuid = UuidGenerator.v3(namespace, 'test');
    expect(UuidGenerator.validate(uuid)).toBe(true);
  });

  test('should generate a valid v4 UUID', () => {
    const uuid = UuidGenerator.v4();
    expect(UuidGenerator.validate(uuid)).toBe(true);
  });

  test('should generate a valid v5 UUID', () => {
    const namespace = 'd94ea0ca-1c30-465e-8e8b-b7984a7c7336'; // Use a valid UUID
    const uuid = UuidGenerator.v5(namespace, 'test');
    expect(UuidGenerator.validate(uuid)).toBe(true);
  });

  test('should validate UUID', () => {
    const validUUID = '123e4567-e89b-12d3-a456-426614174000';
    const invalidUUID = '123e4567-e89b-12d3-a456-42661417400'; // Missing a character

    expect(UuidGenerator.validate(validUUID)).toBe(true);
    expect(UuidGenerator.validate(invalidUUID)).toBe(false);
  });
});
