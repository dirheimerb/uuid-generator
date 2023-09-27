import { pad } from '../utils/pad';
import crypto from 'crypto';
/**
 * @typedef {string} Uuid
 */
export type Uuid = string;
/**
 * @class UuidGenerator
 * @description A class for generating UUIDs
 */
export default class UuidGenerator {
  /**
   * @method v1
   * @description Generate a version 1 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.2.1
   * @returns {string} A version 1 UUID
   * @example
   * Returns something like 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
   */
  public static v1(): string {
    const timestamp = Date.now();
    const timeLow = pad(timestamp & 0xffffffff, 8);
    const timeMid = pad((timestamp >>> 32) & 0xffff, 4);
    const timeHighAndVersion = pad((timestamp >>> 48) & 0x0fff, 4) + '1';
    const clockSeq = pad((Math.random() * 0x3fff) | 0x8000, 4);
    const nodeId = pad(crypto.randomBytes(6).readUIntBE(0, 6), 12);

    return `${timeLow}-${timeMid}-${timeHighAndVersion}-${clockSeq}-${nodeId}`;
  }
  /**
   * @method v3
   * @description Generate a version 3 UUID
   * @param {string} namespace A version 3 UUID
   * @param {string} name A version 3 UUID
   * @returns {string} A version 3 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.3
   * @example
   * Returns something like '21f7f8de-8051-5b89-8680-0195ef798b6a'
   * v3('1b671a64-40d5-491e-99b0-da01ff1f3341', 'hello');
   */
  public static v3(namespace: string, name: string): string {
    if (!this.validate(namespace)) {
      throw new Error('Invalid namespace UUID');
    }

    const namespaceBytes = Buffer.from(namespace.replace(/-/g, ''), 'hex');
    const nameBytes = Buffer.from(name, 'utf8');

    const hasher = crypto.createHash('md5');
    hasher.update(namespaceBytes);
    hasher.update(nameBytes);

    const hash = hasher.digest();

    const uuidChars = [...hash.subarray(0, 16).toString('hex')];
    uuidChars[12] = '3';
    uuidChars[16] = ((parseInt(uuidChars[16], 16) & 0x3) | 0x8).toString(16);

    return uuidChars
      .join('')
      .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
  }
  /**
   * @method v4
   * @description Generate a version 4 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.4
   * @returns {string} A version 4 UUID
   * @example
   * Returns something like 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
   * v4();
   */
  public static v4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  /**
   * @method v5
   * @description Generate a version 5 UUID
   * @param {string} namespace A version 5 UUID
   * @param {string} name A version 5 UUID
   * @returns {string} A version 5 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.3
   * @example
   * Returns something like 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
   * v5('1b671a64-40d5-491e-99b0-da01ff1f3341', 'hello');
   */
  public static v5(namespace: string, name: string): string {
    if (!this.validate(namespace)) {
      throw new Error('Invalid namespace UUID');
    }

    const namespaceBytes = Buffer.from(namespace.replace(/-/g, ''), 'hex');
    const nameBytes = Buffer.from(name, 'utf8');

    const hasher = crypto.createHash('sha1');
    hasher.update(namespaceBytes);
    hasher.update(nameBytes);

    const hash = hasher.digest();

    const uuidChars = [...hash.subarray(0, 16).toString('hex')];
    uuidChars[12] = '5';
    uuidChars[16] = ((parseInt(uuidChars[16], 16) & 0x3) | 0x8).toString(16);

    return uuidChars
      .join('')
      .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
  }
  /**
   * @method validate
   * @description Validate a UUID
   * @param {string} uuid A UUID
   * @returns {boolean} Whether the UUID is valid
   * @example
   * Returns true
   * validate('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
   */
  public static validate(uuid: string): boolean {
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[1-5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return regex.test(uuid);
  }
  /**
   * @method blukGenerateV4
   * @description Generate a version 4 UUID
   * @param {number} count A version 4 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.4
   * @returns {string} A version 4 UUID
   * @example
   * Returns something like ['xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx']
   * blukGenerateV4(2);
   */
  public static blukGenerateV4(count: number): Uuid[] {
    const uuids: Uuid[] = [];
    for (let i = 0; i < count; i++) {
      uuids.push(this.v4());
    }
    return uuids;
  }
  /**
   * @method extractTimestampV1
   * @description Extract the timestamp from a version 1 UUID
   * @param {string} uuid A version 1 UUID
   * @see https://tools.ietf.org/html/rfc4122#section-4.1.2
   * @returns {number | null} The timestamp from the UUID, or null if the UUID is not a valid V1 UUID
   * @example
   * Returns something like 1625097600000
   * extractTimestampV1('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
   */
  public static extractTimestampV1(uuid: Uuid): number | null {
    if (!this.validate(uuid) || uuid[14] !== '1') {
      return null; // Not a valid V1 UUID
    }

    const [timeLow, timeMid, timeHighAndVersion] = uuid
      .split('-')
      .map((part) => parseInt(part, 16));
    const timestamp =
      ((timeHighAndVersion & 0x0fff) << 48) | (timeMid << 32) | timeLow;
    return timestamp;
  }
  /**
   * @method shortUuuid
   * @description Generate a short UUID
   * @returns {string} A short UUID
   * @example
   * Returns something like '3k2n2j3n2j3n2j3n2j3n'
   * shortUuid();
   *
   *
   */
  public static shortUuid(): string {
    const fullUuid = this.v4();
    // Hash the UUID to generate a shorter, URL-friendly version
    const hash = crypto
      .createHash('md5')
      .update(fullUuid)
      .digest('base64')
      .replace(/[/+]/g, '_')
      .substring(0, 22);
    return hash;
  }
}
