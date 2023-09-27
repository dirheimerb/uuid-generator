[uuid-wand](../README.md) / [Exports](../modules.md) / default

# Class: default

**`Description`**

A class for generating UUIDs

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Methods

- [blukGenerateV4](default.md#blukgeneratev4)
- [extractTimestampV1](default.md#extracttimestampv1)
- [shortUuid](default.md#shortuuid)
- [v1](default.md#v1)
- [v3](default.md#v3)
- [v4](default.md#v4)
- [v5](default.md#v5)
- [validate](default.md#validate)

## Constructors

### constructor

• **new default**()

## Methods

### blukGenerateV4

▸ `Static` **blukGenerateV4**(`count`): `string`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | A version 4 UUID |

#### Returns

`string`[]

A version 4 UUID

**`Method`**

blukGenerateV4

**`Description`**

Generate a version 4 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.4

**`Example`**

```ts
Returns something like ['xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx']
blukGenerateV4(2);
```

#### Defined in

[lib/UuidGenerator.ts:136](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L136)

___

### extractTimestampV1

▸ `Static` **extractTimestampV1**(`uuid`): ``null`` \| `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | A version 1 UUID |

#### Returns

``null`` \| `number`

The timestamp from the UUID, or null if the UUID is not a valid V1 UUID

**`Method`**

extractTimestampV1

**`Description`**

Extract the timestamp from a version 1 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.1.2

**`Example`**

```ts
Returns something like 1625097600000
extractTimestampV1('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
```

#### Defined in

[lib/UuidGenerator.ts:153](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L153)

___

### shortUuid

▸ `Static` **shortUuid**(): `string`

#### Returns

`string`

A short UUID

**`Method`**

shortUuuid

**`Description`**

Generate a short UUID

**`Example`**

```ts
Returns something like '3k2n2j3n2j3n2j3n2j3n'
shortUuid();
```

#### Defined in

[lib/UuidGenerator.ts:175](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L175)

___

### v1

▸ `Static` **v1**(): `string`

#### Returns

`string`

A version 1 UUID

**`Method`**

v1

**`Description`**

Generate a version 1 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.2.1

**`Example`**

```ts
Returns something like 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
```

#### Defined in

[lib/UuidGenerator.ts:20](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L20)

___

### v3

▸ `Static` **v3**(`namespace`, `name`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A version 3 UUID |
| `name` | `string` | A version 3 UUID |

#### Returns

`string`

A version 3 UUID

**`Method`**

v3

**`Description`**

Generate a version 3 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.3

**`Example`**

```ts
Returns something like '21f7f8de-8051-5b89-8680-0195ef798b6a'
v3('1b671a64-40d5-491e-99b0-da01ff1f3341', 'hello');
```

#### Defined in

[lib/UuidGenerator.ts:41](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L41)

___

### v4

▸ `Static` **v4**(): `string`

#### Returns

`string`

A version 4 UUID

**`Method`**

v4

**`Description`**

Generate a version 4 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.4

**`Example`**

```ts
Returns something like 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
v4();
```

#### Defined in

[lib/UuidGenerator.ts:72](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L72)

___

### v5

▸ `Static` **v5**(`namespace`, `name`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace` | `string` | A version 5 UUID |
| `name` | `string` | A version 5 UUID |

#### Returns

`string`

A version 5 UUID

**`Method`**

v5

**`Description`**

Generate a version 5 UUID

**`See`**

https://tools.ietf.org/html/rfc4122#section-4.3

**`Example`**

```ts
Returns something like 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
v5('1b671a64-40d5-491e-99b0-da01ff1f3341', 'hello');
```

#### Defined in

[lib/UuidGenerator.ts:90](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L90)

___

### validate

▸ `Static` **validate**(`uuid`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | `string` | A UUID |

#### Returns

`boolean`

Whether the UUID is valid

**`Method`**

validate

**`Description`**

Validate a UUID

**`Example`**

```ts
Returns true
validate('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');
```

#### Defined in

[lib/UuidGenerator.ts:121](https://github.com/dirheimerb/uuid-generator/blob/e398d1a/src/lib/UuidGenerator.ts#L121)
