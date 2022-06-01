[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_planner](../modules/neuron_planner.md) / NeuronPlanner

# Class: NeuronPlanner

[neuron_planner](../modules/neuron_planner.md).NeuronPlanner

## Table of contents

### Constructors

- [constructor](neuron_planner.NeuronPlanner.md#constructor)

### Properties

- [TYPE](neuron_planner.NeuronPlanner.md#type)
- [VERSION](neuron_planner.NeuronPlanner.md#version)

### Methods

- [add\_mission\_item](neuron_planner.NeuronPlanner.md#add_mission_item)
- [add\_mission\_items](neuron_planner.NeuronPlanner.md#add_mission_items)
- [clear\_mission](neuron_planner.NeuronPlanner.md#clear_mission)
- [export\_mission\_kml](neuron_planner.NeuronPlanner.md#export_mission_kml)
- [fit\_mission\_on\_map](neuron_planner.NeuronPlanner.md#fit_mission_on_map)
- [get\_last\_item\_altitude](neuron_planner.NeuronPlanner.md#get_last_item_altitude)
- [get\_mission\_as\_json](neuron_planner.NeuronPlanner.md#get_mission_as_json)
- [get\_mission\_as\_points](neuron_planner.NeuronPlanner.md#get_mission_as_points)
- [get\_mission\_items](neuron_planner.NeuronPlanner.md#get_mission_items)
- [import\_features\_from\_kmx](neuron_planner.NeuronPlanner.md#import_features_from_kmx)
- [import\_features\_from\_kmx\_multiple](neuron_planner.NeuronPlanner.md#import_features_from_kmx_multiple)
- [load\_mission\_file](neuron_planner.NeuronPlanner.md#load_mission_file)
- [on\_mission\_change](neuron_planner.NeuronPlanner.md#on_mission_change)
- [remove\_mission\_item](neuron_planner.NeuronPlanner.md#remove_mission_item)
- [replace\_point\_with\_waypoint](neuron_planner.NeuronPlanner.md#replace_point_with_waypoint)
- [replace\_polygon\_with\_survey](neuron_planner.NeuronPlanner.md#replace_polygon_with_survey)
- [reset](neuron_planner.NeuronPlanner.md#reset)
- [save\_mission\_file](neuron_planner.NeuronPlanner.md#save_mission_file)
- [set\_map](neuron_planner.NeuronPlanner.md#set_map)
- [set\_mission\_from\_json](neuron_planner.NeuronPlanner.md#set_mission_from_json)
- [update](neuron_planner.NeuronPlanner.md#update)
- [isObjectOfDataType](neuron_planner.NeuronPlanner.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronPlanner**(`plan_element_name`, `map?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `plan_element_name` | `string` | `undefined` |
| `map` | [`NeuronMap`](neuron_map.NeuronMap.md) | `null` |

#### Defined in

[neuron_planner.ts:61](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L61)

## Properties

### TYPE

▪ `Static` **TYPE**: `string` = `'NeuronPlanner'`

#### Defined in

[neuron_planner.ts:45](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L45)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'48a24a80-d243-11ec-918e-9fd28348efc7'`

#### Defined in

[neuron_planner.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L46)

## Methods

### add\_mission\_item

▸ **add_mission_item**(`item`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:360](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L360)

___

### add\_mission\_items

▸ **add_mission_items**(`items`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `items` | [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)[] | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:364](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L364)

___

### clear\_mission

▸ **clear_mission**(): `void`

#### Returns

`void`

#### Defined in

[neuron_planner.ts:393](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L393)

___

### export\_mission\_kml

▸ **export_mission_kml**(): `void`

#### Returns

`void`

#### Defined in

[neuron_planner.ts:265](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L265)

___

### fit\_mission\_on\_map

▸ **fit_mission_on_map**(`allow_animate?`, `pad_left?`, `pad_top?`, `pad_right?`, `pad_bottom?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `allow_animate` | `boolean` | `true` |
| `pad_left` | `number` | `50` |
| `pad_top` | `number` | `50` |
| `pad_right` | `number` | `50` |
| `pad_bottom` | `number` | `50` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[neuron_planner.ts:218](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L218)

___

### get\_last\_item\_altitude

▸ **get_last_item_altitude**(): `number`

#### Returns

`number`

#### Defined in

[neuron_planner.ts:336](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L336)

___

### get\_mission\_as\_json

▸ **get_mission_as_json**(): [`MissionFeatureData`](../modules/neuron_planner.md#missionfeaturedata)[]

#### Returns

[`MissionFeatureData`](../modules/neuron_planner.md#missionfeaturedata)[]

#### Defined in

[neuron_planner.ts:86](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L86)

___

### get\_mission\_as\_points

▸ **get_mission_as_points**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_planner.ts:525](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L525)

___

### get\_mission\_items

▸ **get_mission_items**(): [`MissionFeature`](../modules/neuron_planner.md#missionfeature)[]

#### Returns

[`MissionFeature`](../modules/neuron_planner.md#missionfeature)[]

#### Defined in

[neuron_planner.ts:82](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L82)

___

### import\_features\_from\_kmx

▸ **import_features_from_kmx**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Blob` |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:512](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L512)

___

### import\_features\_from\_kmx\_multiple

▸ **import_features_from_kmx_multiple**(`files`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `Blob`[] |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:506](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L506)

___

### load\_mission\_file

▸ **load_mission_file**(`file`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `Blob` |

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_planner.ts:213](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L213)

___

### on\_mission\_change

▸ **on_mission_change**(`cb`): `CallableFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `CallableFunction` |

#### Returns

`CallableFunction`

#### Defined in

[neuron_planner.ts:293](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L293)

___

### remove\_mission\_item

▸ **remove_mission_item**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md) |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:378](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L378)

___

### replace\_point\_with\_waypoint

▸ **replace_point_with_waypoint**(`old_item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `old_item` | [`NeuronFeaturePoint`](neuron_feature_point.NeuronFeaturePoint.md) |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:484](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L484)

___

### replace\_polygon\_with\_survey

▸ **replace_polygon_with_survey**(`old_item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `old_item` | [`NeuronFeaturePolygon`](neuron_feature_polygon.NeuronFeaturePolygon.md) |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:495](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L495)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[neuron_planner.ts:516](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L516)

___

### save\_mission\_file

▸ **save_mission_file**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_planner.ts:193](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L193)

___

### set\_map

▸ **set_map**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`NeuronMap`](neuron_map.NeuronMap.md) |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:279](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L279)

___

### set\_mission\_from\_json

▸ **set_mission_from_json**(`j`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronPlannerMissionData`](../interfaces/neuron_planner.NeuronPlannerMissionData.md) |

#### Returns

`void`

#### Defined in

[neuron_planner.ts:102](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L102)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[neuron_planner.ts:404](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L404)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronPlannerMissionData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronPlannerMissionData

#### Defined in

[neuron_planner.ts:94](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_planner.ts#L94)
