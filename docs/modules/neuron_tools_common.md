[neuron-planner](../README.md) / [Modules](../modules.md) / neuron\_tools\_common

# Module: neuron\_tools\_common

## Table of contents

### Functions

- [NeuronUID](neuron_tools_common.md#neuronuid)
- [flight\_distance\_from\_coords](neuron_tools_common.md#flight_distance_from_coords)
- [flight\_time\_from\_duration](neuron_tools_common.md#flight_time_from_duration)
- [mm\_to\_px](neuron_tools_common.md#mm_to_px)
- [zero\_pad](neuron_tools_common.md#zero_pad)

## Functions

### NeuronUID

▸ **NeuronUID**(`prefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prefix` | `string` | `'nuid-'` |

#### Returns

`string`

#### Defined in

[neuron_tools_common.ts:8](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_tools_common.ts#L8)

___

### flight\_distance\_from\_coords

▸ **flight_distance_from_coords**(`coords`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coords` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |

#### Returns

`number`

#### Defined in

[neuron_tools_common.ts:13](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_tools_common.ts#L13)

___

### flight\_time\_from\_duration

▸ **flight_time_from_duration**(`duration`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`string`

#### Defined in

[neuron_tools_common.ts:34](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_tools_common.ts#L34)

___

### mm\_to\_px

▸ **mm_to_px**(`mm`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mm` | `number` |

#### Returns

`number`

#### Defined in

[neuron_tools_common.ts:42](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_tools_common.ts#L42)

___

### zero\_pad

▸ **zero_pad**(`num`, `places`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `places` | `number` |

#### Returns

`string`

#### Defined in

[neuron_tools_common.ts:3](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_tools_common.ts#L3)
