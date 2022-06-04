[neuron-planner](../README.md) / [Modules](../modules.md) / neuron\_tools\_kml

# Module: neuron\_tools\_kml

## Table of contents

### Interfaces

- [NeuronKMLData](../interfaces/neuron_tools_kml.NeuronKMLData.md)

### Functions

- [get\_supported\_kmx\_types](neuron_tools_kml.md#get_supported_kmx_types)
- [kml\_data\_from\_neuron\_data](neuron_tools_kml.md#kml_data_from_neuron_data)
- [kml\_document\_to\_string](neuron_tools_kml.md#kml_document_to_string)
- [kml\_download\_from\_neuron\_data](neuron_tools_kml.md#kml_download_from_neuron_data)
- [kml\_extract\_features](neuron_tools_kml.md#kml_extract_features)
- [kmx\_load\_file](neuron_tools_kml.md#kmx_load_file)
- [kmz\_download\_from\_neuron\_data](neuron_tools_kml.md#kmz_download_from_neuron_data)

## Functions

### get\_supported\_kmx\_types

▸ **get_supported_kmx_types**(): `string`[]

#### Returns

`string`[]

#### Defined in

[neuron_tools_kml.ts:10](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L10)

___

### kml\_data\_from\_neuron\_data

▸ **kml_data_from_neuron_data**(`markers`, `waypoints`, `polygons`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `waypoints` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `polygons` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[][] |

#### Returns

`Promise`<`string`\>

#### Defined in

[neuron_tools_kml.ts:188](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L188)

___

### kml\_document\_to\_string

▸ **kml_document_to_string**(`xmlDocument`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xmlDocument` | `XMLDocument` |

#### Returns

`string`

#### Defined in

[neuron_tools_kml.ts:215](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L215)

___

### kml\_download\_from\_neuron\_data

▸ **kml_download_from_neuron_data**(`markers`, `waypoints`, `polygons`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `waypoints` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `polygons` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[][] |

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_tools_kml.ts:153](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L153)

___

### kml\_extract\_features

▸ **kml_extract_features**(`kml_plain_text`): `Promise`<[`NeuronKMLData`](../interfaces/neuron_tools_kml.NeuronKMLData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `kml_plain_text` | `string` |

#### Returns

`Promise`<[`NeuronKMLData`](../interfaces/neuron_tools_kml.NeuronKMLData.md)\>

#### Defined in

[neuron_tools_kml.ts:68](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L68)

___

### kmx\_load\_file

▸ **kmx_load_file**(`file`, `cb_file_loaded`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Blob` |
| `cb_file_loaded` | (`result`: [`NeuronKMLData`](../interfaces/neuron_tools_kml.NeuronKMLData.md)) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_tools_kml.ts:22](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L22)

___

### kmz\_download\_from\_neuron\_data

▸ **kmz_download_from_neuron_data**(`markers`, `waypoints`, `polygons`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `markers` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `waypoints` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] |
| `polygons` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[][] |

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_tools_kml.ts:165](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_kml.ts#L165)
