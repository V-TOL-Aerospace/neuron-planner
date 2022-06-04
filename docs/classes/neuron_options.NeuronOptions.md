[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_options](../modules/neuron_options.md) / NeuronOptions

# Class: NeuronOptions

[neuron_options](../modules/neuron_options.md).NeuronOptions

## Table of contents

### Constructors

- [constructor](neuron_options.NeuronOptions.md#constructor)

### Properties

- [camera\_preset\_custom](neuron_options.NeuronOptions.md#camera_preset_custom)
- [camera\_presets](neuron_options.NeuronOptions.md#camera_presets)

### Methods

- [add\_callback](neuron_options.NeuronOptions.md#add_callback)
- [as\_json](neuron_options.NeuronOptions.md#as_json)
- [get\_camera](neuron_options.NeuronOptions.md#get_camera)
- [get\_option\_boolean](neuron_options.NeuronOptions.md#get_option_boolean)
- [get\_option\_number](neuron_options.NeuronOptions.md#get_option_number)
- [get\_option\_string](neuron_options.NeuronOptions.md#get_option_string)
- [init](neuron_options.NeuronOptions.md#init)
- [load](neuron_options.NeuronOptions.md#load)
- [set\_camera](neuron_options.NeuronOptions.md#set_camera)
- [set\_dom\_callback](neuron_options.NeuronOptions.md#set_dom_callback)
- [set\_option\_boolean](neuron_options.NeuronOptions.md#set_option_boolean)
- [set\_option\_number](neuron_options.NeuronOptions.md#set_option_number)
- [set\_option\_string](neuron_options.NeuronOptions.md#set_option_string)

## Constructors

### constructor

• **new NeuronOptions**()

## Properties

### camera\_preset\_custom

▪ `Static` **camera\_preset\_custom**: [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Defined in

[neuron_options.ts:42](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L42)

___

### camera\_presets

▪ `Static` **camera\_presets**: [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)[]

#### Defined in

[neuron_options.ts:43](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L43)

## Methods

### add\_callback

▸ `Static` **add_callback**(`callback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`any`

#### Defined in

[neuron_options.ts:66](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L66)

___

### as\_json

▸ `Static` **as_json**(): [`NeuronOptionsData`](../interfaces/neuron_options.NeuronOptionsData.md)

#### Returns

[`NeuronOptionsData`](../interfaces/neuron_options.NeuronOptionsData.md)

#### Defined in

[neuron_options.ts:137](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L137)

___

### get\_camera

▸ `Static` **get_camera**(): [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Returns

[`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Defined in

[neuron_options.ts:126](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L126)

___

### get\_option\_boolean

▸ `Static` **get_option_boolean**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`SHOW_PATH`](../enums/neuron_options.NeuronOptionsBoolean.md#show_path) |

#### Returns

`boolean`

#### Defined in

[neuron_options.ts:114](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L114)

___

### get\_option\_number

▸ `Static` **get_option_number**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`NeuronOptionsNumber`](../enums/neuron_options.NeuronOptionsNumber.md) |

#### Returns

`number`

#### Defined in

[neuron_options.ts:118](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L118)

___

### get\_option\_string

▸ `Static` **get_option_string**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`CAMERA_NAME`](../enums/neuron_options.NeuronOptionsString.md#camera_name) |

#### Returns

`string`

#### Defined in

[neuron_options.ts:122](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L122)

___

### init

▸ `Static` **init**(): `void`

#### Returns

`void`

#### Defined in

[neuron_options.ts:56](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L56)

___

### load

▸ `Static` **load**(`j`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronOptionsData`](../interfaces/neuron_options.NeuronOptionsData.md) |

#### Returns

`void`

#### Defined in

[neuron_options.ts:150](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L150)

___

### set\_camera

▸ `Static` **set_camera**(`value`, `trigger_callbacks?`, `trigger_dom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md) | `undefined` |
| `trigger_callbacks` | `boolean` | `false` |
| `trigger_dom` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[neuron_options.ts:103](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L103)

___

### set\_dom\_callback

▸ `Static` **set_dom_callback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[neuron_options.ts:62](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L62)

___

### set\_option\_boolean

▸ `Static` **set_option_boolean**(`key`, `value`, `trigger_callbacks?`, `trigger_dom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`SHOW_PATH`](../enums/neuron_options.NeuronOptionsBoolean.md#show_path) | `undefined` |
| `value` | `boolean` | `undefined` |
| `trigger_callbacks` | `boolean` | `true` |
| `trigger_dom` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[neuron_options.ts:88](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L88)

___

### set\_option\_number

▸ `Static` **set_option_number**(`key`, `value`, `trigger_callbacks?`, `trigger_dom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`NeuronOptionsNumber`](../enums/neuron_options.NeuronOptionsNumber.md) | `undefined` |
| `value` | `number` | `undefined` |
| `trigger_callbacks` | `boolean` | `true` |
| `trigger_dom` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[neuron_options.ts:93](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L93)

___

### set\_option\_string

▸ `Static` **set_option_string**(`key`, `value`, `trigger_callbacks?`, `trigger_dom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`CAMERA_NAME`](../enums/neuron_options.NeuronOptionsString.md#camera_name) | `undefined` |
| `value` | `string` | `undefined` |
| `trigger_callbacks` | `boolean` | `true` |
| `trigger_dom` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[neuron_options.ts:98](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_options.ts#L98)
