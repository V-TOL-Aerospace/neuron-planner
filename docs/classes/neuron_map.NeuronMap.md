[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_map](../modules/neuron_map.md) / NeuronMap

# Class: NeuronMap

[neuron_map](../modules/neuron_map.md).NeuronMap

## Table of contents

### Constructors

- [constructor](neuron_map.NeuronMap.md#constructor)

### Methods

- [add\_feature](neuron_map.NeuronMap.md#add_feature)
- [add\_features](neuron_map.NeuronMap.md#add_features)
- [create\_point\_in\_view](neuron_map.NeuronMap.md#create_point_in_view)
- [create\_polygon\_in\_view](neuron_map.NeuronMap.md#create_polygon_in_view)
- [create\_survey\_in\_view](neuron_map.NeuronMap.md#create_survey_in_view)
- [create\_waypoint\_in\_view](neuron_map.NeuronMap.md#create_waypoint_in_view)
- [get\_leaflet\_map](neuron_map.NeuronMap.md#get_leaflet_map)
- [on\_double\_click](neuron_map.NeuronMap.md#on_double_click)
- [reset](neuron_map.NeuronMap.md#reset)
- [set\_location](neuron_map.NeuronMap.md#set_location)
- [set\_options\_subscriber](neuron_map.NeuronMap.md#set_options_subscriber)
- [show\_map\_help](neuron_map.NeuronMap.md#show_map_help)
- [toggle\_map\_help](neuron_map.NeuronMap.md#toggle_map_help)
- [toggle\_map\_tools](neuron_map.NeuronMap.md#toggle_map_tools)
- [update\_path](neuron_map.NeuronMap.md#update_path)
- [zoom\_to](neuron_map.NeuronMap.md#zoom_to)

## Constructors

### constructor

• **new NeuronMap**(`map_element_name`, `help_element_name`, `planner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `map_element_name` | `string` |
| `help_element_name` | `string` |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |

#### Defined in

[neuron_map.ts:29](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L29)

## Methods

### add\_feature

▸ **add_feature**(`feature`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature` | `Layer` |

#### Returns

`void`

#### Defined in

[neuron_map.ts:85](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L85)

___

### add\_features

▸ **add_features**(`features`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `features` | `Layer`[] |

#### Returns

`void`

#### Defined in

[neuron_map.ts:91](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L91)

___

### create\_point\_in\_view

▸ **create_point_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:109](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L109)

___

### create\_polygon\_in\_view

▸ **create_polygon_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:164](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L164)

___

### create\_survey\_in\_view

▸ **create_survey_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:174](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L174)

___

### create\_waypoint\_in\_view

▸ **create_waypoint_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:127](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L127)

___

### get\_leaflet\_map

▸ **get_leaflet_map**(): `Map`

#### Returns

`Map`

#### Defined in

[neuron_map.ts:69](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L69)

___

### on\_double\_click

▸ **on_double_click**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `LeafletMouseEvent` |

#### Returns

`void`

#### Defined in

[neuron_map.ts:96](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L96)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:218](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L218)

___

### set\_location

▸ **set_location**(`location`, `zoom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `location` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | `undefined` |
| `zoom` | `number` | `13` |

#### Returns

`void`

#### Defined in

[neuron_map.ts:73](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L73)

___

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:44](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L44)

___

### show\_map\_help

▸ **show_map_help**(`show`, `help_key?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `show` | `boolean` | `undefined` |
| `help_key` | `string` | `''` |

#### Returns

`void`

#### Defined in

[neuron_map.ts:51](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L51)

___

### toggle\_map\_help

▸ **toggle_map_help**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:65](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L65)

___

### toggle\_map\_tools

▸ **toggle_map_tools**(`show`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Returns

`void`

#### Defined in

[neuron_map.ts:192](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L192)

___

### update\_path

▸ **update_path**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:184](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L184)

___

### zoom\_to

▸ **zoom_to**(`feature_group`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feature_group` | `FeatureGroup`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_map.ts:79](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_map.ts#L79)
