[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_feature\_survey](../modules/neuron_feature_survey.md) / NeuronFeatureSurvey

# Class: NeuronFeatureSurvey

[neuron_feature_survey](../modules/neuron_feature_survey.md).NeuronFeatureSurvey

## Hierarchy

- [`NeuronFeaturePolygon`](neuron_feature_polygon.NeuronFeaturePolygon.md)

  ↳ **`NeuronFeatureSurvey`**

## Table of contents

### Constructors

- [constructor](neuron_feature_survey.NeuronFeatureSurvey.md#constructor)

### Properties

- [HELP\_KEY](neuron_feature_survey.NeuronFeatureSurvey.md#help_key)
- [IS\_FLYABLE](neuron_feature_survey.NeuronFeatureSurvey.md#is_flyable)
- [NAME](neuron_feature_survey.NeuronFeatureSurvey.md#name)
- [TYPE](neuron_feature_survey.NeuronFeatureSurvey.md#type)
- [VERSION](neuron_feature_survey.NeuronFeatureSurvey.md#version)
- [\_altitude\_ratio](neuron_feature_survey.NeuronFeatureSurvey.md#_altitude_ratio)
- [\_button\_sizes](neuron_feature_survey.NeuronFeatureSurvey.md#_button_sizes)
- [\_gsd\_ratio](neuron_feature_survey.NeuronFeatureSurvey.md#_gsd_ratio)
- [\_xlap\_ratio](neuron_feature_survey.NeuronFeatureSurvey.md#_xlap_ratio)

### Methods

- [\_add\_layer\_to\_map](neuron_feature_survey.NeuronFeatureSurvey.md#_add_layer_to_map)
- [\_create\_dom\_input\_button](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_label)
- [\_create\_dom\_output](neuron_feature_survey.NeuronFeatureSurvey.md#_create_dom_output)
- [\_get\_dom](neuron_feature_survey.NeuronFeatureSurvey.md#_get_dom)
- [\_remove\_layer\_from\_map](neuron_feature_survey.NeuronFeatureSurvey.md#_remove_layer_from_map)
- [\_set\_on\_change\_internal](neuron_feature_survey.NeuronFeatureSurvey.md#_set_on_change_internal)
- [\_trigger\_on\_changed](neuron_feature_survey.NeuronFeatureSurvey.md#_trigger_on_changed)
- [add\_corner](neuron_feature_survey.NeuronFeatureSurvey.md#add_corner)
- [add\_corners](neuron_feature_survey.NeuronFeatureSurvey.md#add_corners)
- [add\_point\_at\_location](neuron_feature_survey.NeuronFeatureSurvey.md#add_point_at_location)
- [corners\_visible](neuron_feature_survey.NeuronFeatureSurvey.md#corners_visible)
- [get\_altitude](neuron_feature_survey.NeuronFeatureSurvey.md#get_altitude)
- [get\_angle](neuron_feature_survey.NeuronFeatureSurvey.md#get_angle)
- [get\_corners](neuron_feature_survey.NeuronFeatureSurvey.md#get_corners)
- [get\_corners\_as\_points](neuron_feature_survey.NeuronFeatureSurvey.md#get_corners_as_points)
- [get\_distance](neuron_feature_survey.NeuronFeatureSurvey.md#get_distance)
- [get\_dom](neuron_feature_survey.NeuronFeatureSurvey.md#get_dom)
- [get\_features](neuron_feature_survey.NeuronFeatureSurvey.md#get_features)
- [get\_ground\_resolution](neuron_feature_survey.NeuronFeatureSurvey.md#get_ground_resolution)
- [get\_image\_count](neuron_feature_survey.NeuronFeatureSurvey.md#get_image_count)
- [get\_label](neuron_feature_survey.NeuronFeatureSurvey.md#get_label)
- [get\_lane\_coords](neuron_feature_survey.NeuronFeatureSurvey.md#get_lane_coords)
- [get\_leadin](neuron_feature_survey.NeuronFeatureSurvey.md#get_leadin)
- [get\_minLaneSeparation](neuron_feature_survey.NeuronFeatureSurvey.md#get_minlaneseparation)
- [get\_overlap](neuron_feature_survey.NeuronFeatureSurvey.md#get_overlap)
- [get\_overshoot1](neuron_feature_survey.NeuronFeatureSurvey.md#get_overshoot1)
- [get\_overshoot2](neuron_feature_survey.NeuronFeatureSurvey.md#get_overshoot2)
- [get\_path\_coords](neuron_feature_survey.NeuronFeatureSurvey.md#get_path_coords)
- [get\_polygon](neuron_feature_survey.NeuronFeatureSurvey.md#get_polygon)
- [get\_show\_waypoints](neuron_feature_survey.NeuronFeatureSurvey.md#get_show_waypoints)
- [get\_sidelap](neuron_feature_survey.NeuronFeatureSurvey.md#get_sidelap)
- [get\_spacing](neuron_feature_survey.NeuronFeatureSurvey.md#get_spacing)
- [get\_startpos](neuron_feature_survey.NeuronFeatureSurvey.md#get_startpos)
- [is\_flyable](neuron_feature_survey.NeuronFeatureSurvey.md#is_flyable-1)
- [move\_corner\_backwards](neuron_feature_survey.NeuronFeatureSurvey.md#move_corner_backwards)
- [move\_corner\_forwards](neuron_feature_survey.NeuronFeatureSurvey.md#move_corner_forwards)
- [remove\_feature](neuron_feature_survey.NeuronFeatureSurvey.md#remove_feature)
- [remove\_point\_by\_corner](neuron_feature_survey.NeuronFeatureSurvey.md#remove_point_by_corner)
- [select\_corner](neuron_feature_survey.NeuronFeatureSurvey.md#select_corner)
- [set\_altitude](neuron_feature_survey.NeuronFeatureSurvey.md#set_altitude)
- [set\_angle](neuron_feature_survey.NeuronFeatureSurvey.md#set_angle)
- [set\_change\_callback](neuron_feature_survey.NeuronFeatureSurvey.md#set_change_callback)
- [set\_distance](neuron_feature_survey.NeuronFeatureSurvey.md#set_distance)
- [set\_ground\_resolution](neuron_feature_survey.NeuronFeatureSurvey.md#set_ground_resolution)
- [set\_label](neuron_feature_survey.NeuronFeatureSurvey.md#set_label)
- [set\_leadin](neuron_feature_survey.NeuronFeatureSurvey.md#set_leadin)
- [set\_minLaneSeparation](neuron_feature_survey.NeuronFeatureSurvey.md#set_minlaneseparation)
- [set\_move\_callback](neuron_feature_survey.NeuronFeatureSurvey.md#set_move_callback)
- [set\_options\_subscriber](neuron_feature_survey.NeuronFeatureSurvey.md#set_options_subscriber)
- [set\_overlap](neuron_feature_survey.NeuronFeatureSurvey.md#set_overlap)
- [set\_overshoot1](neuron_feature_survey.NeuronFeatureSurvey.md#set_overshoot1)
- [set\_overshoot2](neuron_feature_survey.NeuronFeatureSurvey.md#set_overshoot2)
- [set\_planner](neuron_feature_survey.NeuronFeatureSurvey.md#set_planner)
- [set\_remove\_callback](neuron_feature_survey.NeuronFeatureSurvey.md#set_remove_callback)
- [set\_sidelap](neuron_feature_survey.NeuronFeatureSurvey.md#set_sidelap)
- [set\_spacing](neuron_feature_survey.NeuronFeatureSurvey.md#set_spacing)
- [set\_startpos](neuron_feature_survey.NeuronFeatureSurvey.md#set_startpos)
- [show\_help](neuron_feature_survey.NeuronFeatureSurvey.md#show_help)
- [show\_on\_plan](neuron_feature_survey.NeuronFeatureSurvey.md#show_on_plan)
- [to\_json](neuron_feature_survey.NeuronFeatureSurvey.md#to_json)
- [toggle\_visibility](neuron_feature_survey.NeuronFeatureSurvey.md#toggle_visibility)
- [update\_polygon](neuron_feature_survey.NeuronFeatureSurvey.md#update_polygon)
- [update\_show\_corners](neuron_feature_survey.NeuronFeatureSurvey.md#update_show_corners)
- [update\_show\_waypoints](neuron_feature_survey.NeuronFeatureSurvey.md#update_show_waypoints)
- [update\_survey](neuron_feature_survey.NeuronFeatureSurvey.md#update_survey)
- [zoom\_to\_feature](neuron_feature_survey.NeuronFeatureSurvey.md#zoom_to_feature)
- [from\_json](neuron_feature_survey.NeuronFeatureSurvey.md#from_json)
- [isObjectOfDataType](neuron_feature_survey.NeuronFeatureSurvey.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronFeatureSurvey**(`map`, `corners?`, `show_waypoints?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `map` | `Map` | `undefined` |
| `corners` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[] | `[]` |
| `show_waypoints` | `boolean` | `false` |

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[constructor](neuron_feature_polygon.NeuronFeaturePolygon.md#constructor)

#### Defined in

[neuron_feature_survey.ts:91](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L91)

## Properties

### HELP\_KEY

▪ `Static` **HELP\_KEY**: `string` = `'survey'`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[HELP_KEY](neuron_feature_polygon.NeuronFeaturePolygon.md#help_key)

#### Defined in

[neuron_feature_survey.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L37)

___

### IS\_FLYABLE

▪ `Static` **IS\_FLYABLE**: `boolean` = `true`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[IS_FLYABLE](neuron_feature_polygon.NeuronFeaturePolygon.md#is_flyable)

#### Defined in

[neuron_feature_survey.ts:38](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L38)

___

### NAME

▪ `Static` **NAME**: `string` = `"Survey"`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[NAME](neuron_feature_polygon.NeuronFeaturePolygon.md#name)

#### Defined in

[neuron_feature_survey.ts:34](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L34)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronFeatureSurvey"`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[TYPE](neuron_feature_polygon.NeuronFeaturePolygon.md#type)

#### Defined in

[neuron_feature_survey.ts:35](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L35)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'70bb75e0-d5a0-11ec-aaa0-9f86362bde1a'`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[VERSION](neuron_feature_polygon.NeuronFeaturePolygon.md#version)

#### Defined in

[neuron_feature_survey.ts:36](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L36)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_altitude_ratio](neuron_feature_polygon.NeuronFeaturePolygon.md#_altitude_ratio)

#### Defined in

[neuron_feature_base.ts:31](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L31)

___

### \_button\_sizes

▪ `Static` **\_button\_sizes**: `string`[]

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_button_sizes](neuron_feature_polygon.NeuronFeaturePolygon.md#_button_sizes)

#### Defined in

[neuron_feature_base.ts:34](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L34)

___

### \_gsd\_ratio

▪ `Static` **\_gsd\_ratio**: `number` = `0.01`

#### Defined in

[neuron_feature_survey.ts:88](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L88)

___

### \_xlap\_ratio

▪ `Static` **\_xlap\_ratio**: `number` = `0.01`

#### Defined in

[neuron_feature_survey.ts:89](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L89)

## Methods

### \_add\_layer\_to\_map

▸ **_add_layer_to_map**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Layer` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_add_layer_to_map](neuron_feature_polygon.NeuronFeaturePolygon.md#_add_layer_to_map)

#### Defined in

[neuron_feature_base.ts:58](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L58)

___

### \_create\_dom\_input\_button

▸ **_create_dom_input_button**(`text`, `on_change`): `HTMLButtonElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `on_change` | `any` |

#### Returns

`HTMLButtonElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_button](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_button)

#### Defined in

[neuron_dom_factory.ts:55](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L55)

___

### \_create\_dom\_input\_checkbox

▸ **_create_dom_input_checkbox**(`checked`, `on_change`): `HTMLInputElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked` | `boolean` |
| `on_change` | `any` |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_checkbox](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_checkbox)

#### Defined in

[neuron_dom_factory.ts:101](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L101)

___

### \_create\_dom\_input\_file

▸ **_create_dom_input_file**(`on_change`, `accepts?`): `HTMLInputElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `on_change` | `any` | `undefined` |
| `accepts` | `string` | `null` |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_file](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_file)

#### Defined in

[neuron_dom_factory.ts:45](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L45)

___

### \_create\_dom\_input\_number

▸ **_create_dom_input_number**(`value`, `on_change`, `min?`, `max?`, `step?`): `HTMLInputElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `on_change` | `any` | `undefined` |
| `min` | `number` | `null` |
| `max` | `number` | `null` |
| `step` | `number` | `null` |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_number](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_number)

#### Defined in

[neuron_dom_factory.ts:72](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L72)

___

### \_create\_dom\_input\_range

▸ **_create_dom_input_range**(`value`, `on_change`, `min`, `max`, `step?`): `HTMLInputElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `on_change` | `any` | `undefined` |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `step` | `number` | `null` |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_range](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_range)

#### Defined in

[neuron_dom_factory.ts:87](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L87)

___

### \_create\_dom\_input\_select

▸ **_create_dom_input_select**(`options`, `labels`, `on_change`, `selected_option?`): `HTMLSelectElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | `string`[] | `undefined` |
| `labels` | `string`[] | `undefined` |
| `on_change` | `any` | `undefined` |
| `selected_option` | `string` | `null` |

#### Returns

`HTMLSelectElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_select](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_select)

#### Defined in

[neuron_dom_factory.ts:110](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L110)

___

### \_create\_dom\_input\_textbox

▸ **_create_dom_input_textbox**(`value`, `on_change`): `HTMLInputElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `on_change` | `any` |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_input_textbox](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_textbox)

#### Defined in

[neuron_dom_factory.ts:63](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L63)

___

### \_create\_dom\_label

▸ **_create_dom_label**(`text`, `input`, `description?`, `hide_label?`): `HTMLLabelElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `input` | `HTMLInputElement` \| `HTMLSelectElement` \| `HTMLButtonElement` \| `HTMLOutputElement` | `undefined` |
| `description` | `string` | `null` |
| `hide_label` | `boolean` | `false` |

#### Returns

`HTMLLabelElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_label](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_label)

#### Defined in

[neuron_dom_factory.ts:10](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L10)

___

### \_create\_dom\_output

▸ **_create_dom_output**(`value?`): `HTMLOutputElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `string` | `null` |

#### Returns

`HTMLOutputElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_create_dom_output](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_output)

#### Defined in

[neuron_dom_factory.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L37)

___

### \_get\_dom

▸ **_get_dom**(`text?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `"Mission Feature"` |

#### Returns

`HTMLDivElement`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_get_dom](neuron_feature_polygon.NeuronFeaturePolygon.md#_get_dom)

#### Defined in

[neuron_feature_base.ts:125](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L125)

___

### \_remove\_layer\_from\_map

▸ **_remove_layer_from_map**(`m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Layer` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_remove_layer_from_map](neuron_feature_polygon.NeuronFeaturePolygon.md#_remove_layer_from_map)

#### Defined in

[neuron_feature_base.ts:80](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L80)

___

### \_set\_on\_change\_internal

▸ **_set_on_change_internal**(`on_change?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `on_change` | `CallableFunction` | `null` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_set_on_change_internal](neuron_feature_polygon.NeuronFeaturePolygon.md#_set_on_change_internal)

#### Defined in

[neuron_feature_polygon.ts:86](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L86)

___

### \_trigger\_on\_changed

▸ **_trigger_on_changed**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[_trigger_on_changed](neuron_feature_polygon.NeuronFeaturePolygon.md#_trigger_on_changed)

#### Defined in

[neuron_feature_base.ts:53](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L53)

___

### add\_corner

▸ **add_corner**(`corner`, `update_polygon?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `corner` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | `undefined` |
| `update_polygon` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[add_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#add_corner)

#### Defined in

[neuron_feature_polygon.ts:148](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L148)

___

### add\_corners

▸ **add_corners**(`corners?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `corners` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[] | `[]` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[add_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#add_corners)

#### Defined in

[neuron_feature_polygon.ts:196](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L196)

___

### add\_point\_at\_location

▸ **add_point_at_location**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[add_point_at_location](neuron_feature_polygon.NeuronFeaturePolygon.md#add_point_at_location)

#### Defined in

[neuron_feature_polygon.ts:239](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L239)

___

### corners\_visible

▸ **corners_visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[corners_visible](neuron_feature_polygon.NeuronFeaturePolygon.md#corners_visible)

#### Defined in

[neuron_feature_polygon.ts:64](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L64)

___

### get\_altitude

▸ **get_altitude**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:283](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L283)

___

### get\_angle

▸ **get_angle**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:295](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L295)

___

### get\_corners

▸ **get_corners**(): `Marker`<`any`\>[]

#### Returns

`Marker`<`any`\>[]

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#get_corners)

#### Defined in

[neuron_feature_polygon.ts:204](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L204)

___

### get\_corners\_as\_points

▸ **get_corners_as_points**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_corners_as_points](neuron_feature_polygon.NeuronFeaturePolygon.md#get_corners_as_points)

#### Defined in

[neuron_feature_polygon.ts:208](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L208)

___

### get\_distance

▸ **get_distance**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:287](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L287)

___

### get\_dom

▸ **get_dom**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_dom](neuron_feature_polygon.NeuronFeaturePolygon.md#get_dom)

#### Defined in

[neuron_feature_survey.ts:526](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L526)

___

### get\_features

▸ **get_features**(): `Layer`[]

#### Returns

`Layer`[]

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_features](neuron_feature_polygon.NeuronFeaturePolygon.md#get_features)

#### Defined in

[neuron_feature_base.ts:270](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L270)

___

### get\_ground\_resolution

▸ **get_ground_resolution**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:702](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L702)

___

### get\_image\_count

▸ **get_image_count**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:398](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L398)

___

### get\_label

▸ **get_label**(): `string`

#### Returns

`string`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_label](neuron_feature_polygon.NeuronFeaturePolygon.md#get_label)

#### Defined in

[neuron_feature_polygon.ts:387](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L387)

___

### get\_lane\_coords

▸ **get_lane_coords**(): [`NeuronFeatureSurveyLane`](../interfaces/neuron_feature_survey.NeuronFeatureSurveyLane.md)[]

#### Returns

[`NeuronFeatureSurveyLane`](../interfaces/neuron_feature_survey.NeuronFeatureSurveyLane.md)[]

#### Defined in

[neuron_feature_survey.ts:498](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L498)

___

### get\_leadin

▸ **get_leadin**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:315](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L315)

___

### get\_minLaneSeparation

▸ **get_minLaneSeparation**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:311](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L311)

___

### get\_overlap

▸ **get_overlap**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:698](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L698)

___

### get\_overshoot1

▸ **get_overshoot1**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:299](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L299)

___

### get\_overshoot2

▸ **get_overshoot2**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:303](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L303)

___

### get\_path\_coords

▸ **get_path_coords**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_path_coords](neuron_feature_polygon.NeuronFeaturePolygon.md#get_path_coords)

#### Defined in

[neuron_feature_survey.ts:493](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L493)

___

### get\_polygon

▸ **get_polygon**(): `Polygon`<`any`\>

#### Returns

`Polygon`<`any`\>

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[get_polygon](neuron_feature_polygon.NeuronFeaturePolygon.md#get_polygon)

#### Defined in

[neuron_feature_polygon.ts:144](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L144)

___

### get\_show\_waypoints

▸ **get_show_waypoints**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_feature_survey.ts:279](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L279)

___

### get\_sidelap

▸ **get_sidelap**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:694](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L694)

___

### get\_spacing

▸ **get_spacing**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_survey.ts:291](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L291)

___

### get\_startpos

▸ **get_startpos**(): [`StartPosition`](../enums/neuron_tools_survey.StartPosition.md)

#### Returns

[`StartPosition`](../enums/neuron_tools_survey.StartPosition.md)

#### Defined in

[neuron_feature_survey.ts:307](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L307)

___

### is\_flyable

▸ **is_flyable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[is_flyable](neuron_feature_polygon.NeuronFeaturePolygon.md#is_flyable-1)

#### Defined in

[neuron_feature_survey.ts:489](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L489)

___

### move\_corner\_backwards

▸ **move_corner_backwards**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[move_corner_backwards](neuron_feature_polygon.NeuronFeaturePolygon.md#move_corner_backwards)

#### Defined in

[neuron_feature_polygon.ts:120](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L120)

___

### move\_corner\_forwards

▸ **move_corner_forwards**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[move_corner_forwards](neuron_feature_polygon.NeuronFeaturePolygon.md#move_corner_forwards)

#### Defined in

[neuron_feature_polygon.ts:109](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L109)

___

### remove\_feature

▸ **remove_feature**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[remove_feature](neuron_feature_polygon.NeuronFeaturePolygon.md#remove_feature)

#### Defined in

[neuron_feature_survey.ts:483](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L483)

___

### remove\_point\_by\_corner

▸ **remove_point_by_corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[remove_point_by_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#remove_point_by_corner)

#### Defined in

[neuron_feature_polygon.ts:216](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L216)

___

### select\_corner

▸ **select_corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[select_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#select_corner)

#### Defined in

[neuron_feature_polygon.ts:130](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L130)

___

### set\_altitude

▸ **set_altitude**(`altitude`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `altitude` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:201](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L201)

___

### set\_angle

▸ **set_angle**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:249](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L249)

___

### set\_change\_callback

▸ **set_change_callback**(`on_change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_change` | `CallableFunction` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[set_change_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_change_callback)

#### Defined in

[neuron_feature_base.ts:262](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L262)

___

### set\_distance

▸ **set_distance**(`distance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:221](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L221)

___

### set\_ground\_resolution

▸ **set_ground_resolution**(`ground_resolution`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ground_resolution` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:721](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L721)

___

### set\_label

▸ **set_label**(`label`, `update_dom?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `label` | `string` | `undefined` |
| `update_dom` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[set_label](neuron_feature_polygon.NeuronFeaturePolygon.md#set_label)

#### Defined in

[neuron_feature_polygon.ts:391](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L391)

___

### set\_leadin

▸ **set_leadin**(`leadin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leadin` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L274)

___

### set\_minLaneSeparation

▸ **set_minLaneSeparation**(`minLaneSeparation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minLaneSeparation` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:269](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L269)

___

### set\_move\_callback

▸ **set_move_callback**(`on_move`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_move` | `CallableFunction` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[set_move_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_move_callback)

#### Defined in

[neuron_feature_base.ts:266](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L266)

___

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:158](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L158)

___

### set\_overlap

▸ **set_overlap**(`overlap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overlap` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:716](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L716)

___

### set\_overshoot1

▸ **set_overshoot1**(`overshoot1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overshoot1` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:254](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L254)

___

### set\_overshoot2

▸ **set_overshoot2**(`overshoot2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `overshoot2` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:259](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L259)

___

### set\_planner

▸ **set_planner**(`planner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[set_planner](neuron_feature_polygon.NeuronFeaturePolygon.md#set_planner)

#### Defined in

[neuron_feature_polygon.ts:82](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L82)

___

### set\_remove\_callback

▸ **set_remove_callback**(`on_remove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_remove` | `CallableFunction` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[set_remove_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_remove_callback)

#### Defined in

[neuron_feature_base.ts:258](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L258)

___

### set\_sidelap

▸ **set_sidelap**(`sidelap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sidelap` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:706](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L706)

___

### set\_spacing

▸ **set_spacing**(`spacing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spacing` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:244](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L244)

___

### set\_startpos

▸ **set_startpos**(`startpos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startpos` | [`StartPosition`](../enums/neuron_tools_survey.StartPosition.md) |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:264](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L264)

___

### show\_help

▸ **show_help**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[show_help](neuron_feature_polygon.NeuronFeaturePolygon.md#show_help)

#### Defined in

[neuron_feature_survey.ts:479](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L479)

___

### show\_on\_plan

▸ **show_on_plan**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[show_on_plan](neuron_feature_polygon.NeuronFeaturePolygon.md#show_on_plan)

#### Defined in

[neuron_feature_survey.ts:142](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L142)

___

### to\_json

▸ **to_json**(): [`NeuronFeatureSurveyData`](../interfaces/neuron_feature_survey.NeuronFeatureSurveyData.md)

#### Returns

[`NeuronFeatureSurveyData`](../interfaces/neuron_feature_survey.NeuronFeatureSurveyData.md)

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[to_json](neuron_feature_polygon.NeuronFeaturePolygon.md#to_json)

#### Defined in

[neuron_feature_survey.ts:811](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L811)

___

### toggle\_visibility

▸ **toggle_visibility**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[toggle_visibility](neuron_feature_polygon.NeuronFeaturePolygon.md#toggle_visibility)

#### Defined in

[neuron_feature_base.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L274)

___

### update\_polygon

▸ **update_polygon**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[update_polygon](neuron_feature_polygon.NeuronFeaturePolygon.md#update_polygon)

#### Defined in

[neuron_feature_polygon.ts:252](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L252)

___

### update\_show\_corners

▸ **update_show_corners**(`show_corners`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show_corners` | `boolean` |

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[update_show_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#update_show_corners)

#### Defined in

[neuron_feature_polygon.ts:68](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_polygon.ts#L68)

___

### update\_show\_waypoints

▸ **update_show_waypoints**(`show_waypoints`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show_waypoints` | `boolean` |

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:196](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L196)

___

### update\_survey

▸ **update_survey**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_survey.ts:319](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L319)

___

### zoom\_to\_feature

▸ **zoom_to_feature**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[zoom_to_feature](neuron_feature_polygon.NeuronFeaturePolygon.md#zoom_to_feature)

#### Defined in

[neuron_feature_base.ts:296](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L296)

___

### from\_json

▸ `Static` **from_json**(`j`, `map`): [`NeuronFeatureSurvey`](neuron_feature_survey.NeuronFeatureSurvey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronFeatureSurveyData`](../interfaces/neuron_feature_survey.NeuronFeatureSurveyData.md) |
| `map` | `Map` |

#### Returns

[`NeuronFeatureSurvey`](neuron_feature_survey.NeuronFeatureSurvey.md)

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[from_json](neuron_feature_polygon.NeuronFeaturePolygon.md#from_json)

#### Defined in

[neuron_feature_survey.ts:785](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L785)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronFeatureSurveyData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronFeatureSurveyData

#### Overrides

[NeuronFeaturePolygon](neuron_feature_polygon.NeuronFeaturePolygon.md).[isObjectOfDataType](neuron_feature_polygon.NeuronFeaturePolygon.md#isobjectofdatatype)

#### Defined in

[neuron_feature_survey.ts:777](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_survey.ts#L777)
