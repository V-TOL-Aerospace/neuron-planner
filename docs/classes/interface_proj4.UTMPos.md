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

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0.0` |
| `y` | `number` | `0.0` |
| `zone` | `number` | `0.0` |
| `tag` | `string` | `""` |

#### Defined in

[interface_proj4.ts:39](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L39)

## Properties

### tag

• **tag**: `string`

#### Defined in

[interface_proj4.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L37)

___

### x

• **x**: `number`

#### Defined in

[interface_proj4.ts:34](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L34)

___

### y

• **y**: `number`

#### Defined in

[interface_proj4.ts:35](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L35)

___

### zone

• **zone**: `number`

#### Defined in

[interface_proj4.ts:36](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L36)

## Methods

### GetDistance2D

▸ **GetDistance2D**(`b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`UTMPos`](interface_proj4.UTMPos.md) |

#### Returns

`number`

#### Defined in

[interface_proj4.ts:69](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L69)

___

### copy

▸ **copy**(`tag?`): [`UTMPos`](interface_proj4.UTMPos.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tag` | `string` | `null` |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:50](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L50)

___

### equals

▸ **equals**(`other`, `match_tag?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`UTMPos`](interface_proj4.UTMPos.md) | `undefined` |
| `match_tag` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[interface_proj4.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L46)

___

### relative\_point\_from\_dist\_bearing

▸ **relative_point_from_dist_bearing**(`bearing`, `distance`, `tag?`): [`UTMPos`](interface_proj4.UTMPos.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bearing` | `number` | `undefined` |
| `distance` | `number` | `undefined` |
| `tag` | `string` | `""` |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:54](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L54)

___

### to\_NeuronInterfacePoint

▸ **to_NeuronInterfacePoint**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Defined in

[interface_proj4.ts:73](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L73)

___

### from\_NeuronInterfacePoint

▸ `Static` **from_NeuronInterfacePoint**(`point`, `zone?`): [`UTMPos`](interface_proj4.UTMPos.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | `undefined` | Point to create the transformation from |
| `zone` | `number` | `null` | Zone override to use during the projection |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:91](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_proj4.ts#L91)
