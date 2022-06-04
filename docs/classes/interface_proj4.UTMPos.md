[neuron-planner](../README.md) / [Modules](../modules.md) / [interface\_proj4](../modules/interface_proj4.md) / UTMPos

# Class: UTMPos

[interface_proj4](../modules/interface_proj4.md).UTMPos

## Table of contents

### Constructors

- [constructor](interface_proj4.UTMPos.md#constructor)

### Properties

- [tag](interface_proj4.UTMPos.md#tag)
- [x](interface_proj4.UTMPos.md#x)
- [y](interface_proj4.UTMPos.md#y)
- [zone](interface_proj4.UTMPos.md#zone)

### Methods

- [GetDistance2D](interface_proj4.UTMPos.md#getdistance2d)
- [copy](interface_proj4.UTMPos.md#copy)
- [equals](interface_proj4.UTMPos.md#equals)
- [relative\_point\_from\_dist\_bearing](interface_proj4.UTMPos.md#relative_point_from_dist_bearing)
- [to\_NeuronInterfacePoint](interface_proj4.UTMPos.md#to_neuroninterfacepoint)
- [from\_NeuronInterfacePoint](interface_proj4.UTMPos.md#from_neuroninterfacepoint)

## Constructors

### constructor

• **new UTMPos**(`x?`, `y?`, `zone?`, `tag?`)

Creates a UTMPos object that defines a location in the coordinate frame of a specific UTM zone.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0.0` | Coordinate location in the x-axis of the UTM zone. |
| `y` | `number` | `0.0` | Coordinate location in the y-axis of the UTM zone. |
| `zone` | `number` | `0.0` | UTM zone to use as the reference origin. |
| `tag` | `string` | `""` | Additional tag metadata information to identify this position. |

#### Defined in

[interface_proj4.ts:56](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L56)

## Properties

### tag

• **tag**: `string`

#### Defined in

[interface_proj4.ts:48](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L48)

___

### x

• **x**: `number`

#### Defined in

[interface_proj4.ts:45](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L45)

___

### y

• **y**: `number`

#### Defined in

[interface_proj4.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L46)

___

### zone

• **zone**: `number`

#### Defined in

[interface_proj4.ts:47](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L47)

## Methods

### GetDistance2D

▸ **GetDistance2D**(`b`): `number`

Get the 2D distance between this UTMPos and another location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `b` | [`UTMPos`](interface_proj4.UTMPos.md) | The other location to measure distance to. |

#### Returns

`number`

#### Defined in

[interface_proj4.ts:100](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L100)

___

### copy

▸ **copy**(`tag?`): [`UTMPos`](interface_proj4.UTMPos.md)

Create a deep copy of this UTMPos object.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `tag` | `string` | `null` | Additional tag metadata information to identify the new position |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:73](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L73)

___

### equals

▸ **equals**(`other`, `match_tag?`): `boolean`

Compares this UTMPos object with another object to assess if they represent the same location and same UTM zone.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`UTMPos`](interface_proj4.UTMPos.md) | `undefined` | The other UTM object to compare with in the assessment. |
| `match_tag` | `boolean` | `false` | Additional flag to consider if the tag metadata should also be matched. Tag data will be ignored if this is false. |

#### Returns

`boolean`

#### Defined in

[interface_proj4.ts:66](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L66)

___

### relative\_point\_from\_dist\_bearing

▸ **relative_point_from_dist_bearing**(`bearing`, `distance`, `tag?`): [`UTMPos`](interface_proj4.UTMPos.md)

Get a new UTMPos object that represents a position of relative bearing and distance from this UTMPos.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `bearing` | `number` | `undefined` | The bearing from north from this UTMPos to the new location. |
| `distance` | `number` | `undefined` | The distance from this UTMPos to the new location. |
| `tag` | `string` | `""` | Additional tag metadata information to identify the new position. |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:82](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L82)

___

### to\_NeuronInterfacePoint

▸ **to_NeuronInterfacePoint**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

Convert this UTMPos data into a new NeuronInterfacePoint that represents the same location. Tag metadata will also be included if it exists.

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Defined in

[interface_proj4.ts:106](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L106)

___

### from\_NeuronInterfacePoint

▸ `Static` **from_NeuronInterfacePoint**(`point`, `zone?`): [`UTMPos`](interface_proj4.UTMPos.md)

Converts NeuronInterfacePoint data into a new UTMPos that represents the same location. Tag metadata will also be included if it exists.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | `undefined` | Point to create the transformation from |
| `zone` | `number` | `null` | Zone override to use during the projection |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:124](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L124)
