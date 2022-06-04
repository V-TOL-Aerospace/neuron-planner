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

[neuron_map.ts:31](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L31)

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

[neuron_map.ts:87](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L87)

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

[neuron_map.ts:93](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L93)

___

### create\_point\_in\_view

▸ **create_point_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:111](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L111)

___

### create\_polygon\_in\_view

▸ **create_polygon_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:166](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L166)

___

### create\_survey\_in\_view

▸ **create_survey_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:176](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L176)

___

### create\_waypoint\_in\_view

▸ **create_waypoint_in_view**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:129](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L129)

___

### get\_leaflet\_map

▸ **get_leaflet_map**(): `Map`

#### Returns

`Map`

#### Defined in

[neuron_map.ts:71](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L71)

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

[neuron_map.ts:98](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L98)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:220](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L220)

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

[neuron_map.ts:75](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L75)

___

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L46)

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

[neuron_map.ts:53](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L53)

___

### toggle\_map\_help

▸ **toggle_map_help**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:67](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L67)

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

[neuron_map.ts:194](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L194)

___

### update\_path

▸ **update_path**(): `void`

#### Returns

`void`

#### Defined in

[neuron_map.ts:186](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L186)

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

[neuron_map.ts:81](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_map.ts#L81)
