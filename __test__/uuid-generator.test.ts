import UuidGenerator from '../src/index';

test('generate v4 UUID', () => {
  const uuid = UuidGenerator.v4();
  expect(UuidGenerator.validate(uuid)).toBe(true);
});

test('generate v1 UUID', () => {
  const uuid = UuidGenerator.v1();
  expect(UuidGenerator.validate(uuid)).toBe(false);
});

test('validate invalid UUID', () => {
  const invalidUuid = '123456';
  expect(UuidGenerator.validate(invalidUuid)).toBe(false);
});
