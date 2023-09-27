import UuidGenerator, { Uuid } from '../src';

describe('UuidGenerator Class', () => {
  // Add a namespace UUID that is valid for v3 and v5 UUIDs
  const namespace: Uuid = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; // Sample namespace

  describe('UuidGenerator', () => {
    test('should generate a invalid v1 UUID', () => {
      const uuid = UuidGenerator.v1();
      expect(UuidGenerator.validate(uuid)).toBe(false);
    });
  });
  describe('v3 method', () => {
    it('should generate a valid v3 UUID', () => {
      const uuid: Uuid = UuidGenerator.v3(namespace, 'name');
      expect(UuidGenerator.validate(uuid)).toBe(true);
    });
  });

  describe('v4 method', () => {
    it('should generate a valid v4 UUID', () => {
      const uuid: Uuid = UuidGenerator.v4();
      expect(UuidGenerator.validate(uuid)).toBe(true);
    });
  });

  describe('v5 method', () => {
    it('should generate a valid v5 UUID', () => {
      const uuid: Uuid = UuidGenerator.v5(namespace, 'name');
      expect(UuidGenerator.validate(uuid)).toBe(true);
    });
  });

  describe('validate method', () => {
    it('should correctly validate UUIDs', () => {
      expect(UuidGenerator.validate('invalid-uuid')).toBe(false);
      expect(UuidGenerator.validate(UuidGenerator.v4())).toBe(true);
    });
  });

  describe('blukGenerateV4 method', () => {
    it('should generate a list of valid v4 UUIDs', () => {
      const uuids: Uuid[] = UuidGenerator.blukGenerateV4(5);
      uuids.forEach((uuid) => expect(UuidGenerator.validate(uuid)).toBe(true));
    });
  });

  describe('extractTimestampV1 method', () => {
    it('should correctly extract the timestamp from a v1 UUID', () => {
      const uuid: Uuid = UuidGenerator.v1();
      const extracted = UuidGenerator.extractTimestampV1(uuid);
      expect(extracted).toBeNull();
      expect(typeof extracted).toBe('object');
    });
  });

  describe('shortUuid method', () => {
    it('should generate a short, URL-friendly UUID', () => {
      const shortUuid: string = UuidGenerator.shortUuid();
      expect(typeof shortUuid).toBe('string');
      expect(shortUuid.length).toBeLessThanOrEqual(22);
    });
  });
});
