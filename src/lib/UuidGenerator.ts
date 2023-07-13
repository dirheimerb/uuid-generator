import crypto from 'crypto';

const pad = (n: number, length: number): string => {
  let str = n.toString(16);
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
};

export default class UuidGenerator {
  public static v1(): string {
    const timestamp = Date.now();
    const timeLow = pad(timestamp & 0xffffffff, 8);
    const timeMid = pad((timestamp >>> 32) & 0xffff, 4);
    const timeHighAndVersion = pad((timestamp >>> 48) & 0x0fff, 4) + '1';
    const clockSeq = pad((Math.random() * 0x3fff) | 0x8000, 4);
    const nodeId = pad(crypto.randomBytes(6).readUIntBE(0, 6), 12);

    return `${timeLow}-${timeMid}-${timeHighAndVersion}-${clockSeq}-${nodeId}`;
  }

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

  public static v4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

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

  public static validate(uuid: string): boolean {
    const regex =
      /^[0-9A-F]{8}-[0-9A-F]{4}-[1-5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
    return regex.test(uuid);
  }
}
