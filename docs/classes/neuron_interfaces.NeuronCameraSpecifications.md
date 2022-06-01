[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_interfaces](../modules/neuron_interfaces.md) / NeuronCameraSpecifications

# Class: NeuronCameraSpecifications

[neuron_interfaces](../modules/neuron_interfaces.md).NeuronCameraSpecifications

## Table of contents

### Constructors

- [constructor](neuron_interfaces.NeuronCameraSpecifications.md#constructor)

### Properties

- [focal\_length](neuron_interfaces.NeuronCameraSpecifications.md#focal_length)
- [image\_height](neuron_interfaces.NeuronCameraSpecifications.md#image_height)
- [image\_width](neuron_interfaces.NeuronCameraSpecifications.md#image_width)
- [name](neuron_interfaces.NeuronCameraSpecifications.md#name)
- [sensor\_height](neuron_interfaces.NeuronCameraSpecifications.md#sensor_height)
- [sensor\_width](neuron_interfaces.NeuronCameraSpecifications.md#sensor_width)
- [TYPE](neuron_interfaces.NeuronCameraSpecifications.md#type)
- [VERSION](neuron_interfaces.NeuronCameraSpecifications.md#version)

### Methods

- [copy](neuron_interfaces.NeuronCameraSpecifications.md#copy)
- [equals](neuron_interfaces.NeuronCameraSpecifications.md#equals)
- [get\_distance](neuron_interfaces.NeuronCameraSpecifications.md#get_distance)
- [get\_ground\_resolution](neuron_interfaces.NeuronCameraSpecifications.md#get_ground_resolution)
- [get\_projected\_size](neuron_interfaces.NeuronCameraSpecifications.md#get_projected_size)
- [get\_projection](neuron_interfaces.NeuronCameraSpecifications.md#get_projection)
- [is\_valid](neuron_interfaces.NeuronCameraSpecifications.md#is_valid)
- [to\_json](neuron_interfaces.NeuronCameraSpecifications.md#to_json)
- [from\_json](neuron_interfaces.NeuronCameraSpecifications.md#from_json)
- [isObjectOfDataType](neuron_interfaces.NeuronCameraSpecifications.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronCameraSpecifications**(`name?`, `focal_length?`, `sensor_width?`, `sensor_height?`, `image_width?`, `image_height?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `"Custom"` |
| `focal_length` | `number` | `0.0` |
| `sensor_width` | `number` | `0.0` |
| `sensor_height` | `number` | `0.0` |
| `image_width` | `number` | `0` |
| `image_height` | `number` | `0` |

#### Defined in

[neuron_interfaces.ts:143](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L143)

## Properties

### focal\_length

• **focal\_length**: `number`

#### Defined in

[neuron_interfaces.ts:137](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L137)

___

### image\_height

• **image\_height**: `number`

#### Defined in

[neuron_interfaces.ts:141](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L141)

___

### image\_width

• **image\_width**: `number`

#### Defined in

[neuron_interfaces.ts:140](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L140)

___

### name

• **name**: `string`

#### Defined in

[neuron_interfaces.ts:136](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L136)

___

### sensor\_height

• **sensor\_height**: `number`

#### Defined in

[neuron_interfaces.ts:139](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L139)

___

### sensor\_width

• **sensor\_width**: `number`

#### Defined in

[neuron_interfaces.ts:138](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L138)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronCameraSpecifications"`

#### Defined in

[neuron_interfaces.ts:133](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L133)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'c5a01d00-d4fa-11ec-95ac-1b0aaa4d0e1e'`

#### Defined in

[neuron_interfaces.ts:134](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L134)

## Methods

### copy

▸ **copy**(): [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Returns

[`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Defined in

[neuron_interfaces.ts:152](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L152)

___

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md) |

#### Returns

`boolean`

#### Defined in

[neuron_interfaces.ts:163](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L163)

___

### get\_distance

▸ **get_distance**(`ground_resolution`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ground_resolution` | `number` |

#### Returns

`number`

#### Defined in

[neuron_interfaces.ts:194](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L194)

___

### get\_ground\_resolution

▸ **get_ground_resolution**(`distance`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

`number`

#### Defined in

[neuron_interfaces.ts:180](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L180)

___

### get\_projected\_size

▸ **get_projected_size**(`distance`): [`Rect`](neuron_tools_survey.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

[`Rect`](neuron_tools_survey.Rect.md)

#### Defined in

[neuron_interfaces.ts:227](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L227)

___

### get\_projection

▸ **get_projection**(`distance`): [`Rect`](neuron_tools_survey.Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

[`Rect`](neuron_tools_survey.Rect.md)

#### Defined in

[neuron_interfaces.ts:209](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L209)

___

### is\_valid

▸ **is_valid**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_interfaces.ts:172](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L172)

___

### to\_json

▸ **to_json**(): [`NeuronCameraSpecificationsData`](../interfaces/neuron_interfaces.NeuronCameraSpecificationsData.md)

#### Returns

[`NeuronCameraSpecificationsData`](../interfaces/neuron_interfaces.NeuronCameraSpecificationsData.md)

#### Defined in

[neuron_interfaces.ts:271](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L271)

___

### from\_json

▸ `Static` **from_json**(`j`): [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronCameraSpecificationsData`](../interfaces/neuron_interfaces.NeuronCameraSpecificationsData.md) |

#### Returns

[`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md)

#### Defined in

[neuron_interfaces.ts:256](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L256)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronCameraSpecificationsData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronCameraSpecificationsData

#### Defined in

[neuron_interfaces.ts:247](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L247)
