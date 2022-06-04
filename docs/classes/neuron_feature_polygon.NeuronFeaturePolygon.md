[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_feature\_polygon](../modules/neuron_feature_polygon.md) / NeuronFeaturePolygon

# Class: NeuronFeaturePolygon

[neuron_feature_polygon](../modules/neuron_feature_polygon.md).NeuronFeaturePolygon

## Hierarchy

- [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)

  ↳ **`NeuronFeaturePolygon`**

  ↳↳ [`NeuronFeatureSurvey`](neuron_feature_survey.NeuronFeatureSurvey.md)

## Table of contents

### Constructors

- [constructor](neuron_feature_polygon.NeuronFeaturePolygon.md#constructor)

### Properties

- [HELP\_KEY](neuron_feature_polygon.NeuronFeaturePolygon.md#help_key)
- [IS\_FLYABLE](neuron_feature_polygon.NeuronFeaturePolygon.md#is_flyable)
- [NAME](neuron_feature_polygon.NeuronFeaturePolygon.md#name)
- [TYPE](neuron_feature_polygon.NeuronFeaturePolygon.md#type)
- [VERSION](neuron_feature_polygon.NeuronFeaturePolygon.md#version)
- [\_altitude\_ratio](neuron_feature_polygon.NeuronFeaturePolygon.md#_altitude_ratio)
- [\_button\_sizes](neuron_feature_polygon.NeuronFeaturePolygon.md#_button_sizes)

### Methods

- [\_add\_layer\_to\_map](neuron_feature_polygon.NeuronFeaturePolygon.md#_add_layer_to_map)
- [\_create\_dom\_input\_button](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_label)
- [\_create\_dom\_output](neuron_feature_polygon.NeuronFeaturePolygon.md#_create_dom_output)
- [\_get\_dom](neuron_feature_polygon.NeuronFeaturePolygon.md#_get_dom)
- [\_remove\_layer\_from\_map](neuron_feature_polygon.NeuronFeaturePolygon.md#_remove_layer_from_map)
- [\_set\_on\_change\_internal](neuron_feature_polygon.NeuronFeaturePolygon.md#_set_on_change_internal)
- [\_trigger\_on\_changed](neuron_feature_polygon.NeuronFeaturePolygon.md#_trigger_on_changed)
- [add\_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#add_corner)
- [add\_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#add_corners)
- [add\_point\_at\_location](neuron_feature_polygon.NeuronFeaturePolygon.md#add_point_at_location)
- [corners\_visible](neuron_feature_polygon.NeuronFeaturePolygon.md#corners_visible)
- [get\_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#get_corners)
- [get\_corners\_as\_points](neuron_feature_polygon.NeuronFeaturePolygon.md#get_corners_as_points)
- [get\_dom](neuron_feature_polygon.NeuronFeaturePolygon.md#get_dom)
- [get\_features](neuron_feature_polygon.NeuronFeaturePolygon.md#get_features)
- [get\_label](neuron_feature_polygon.NeuronFeaturePolygon.md#get_label)
- [get\_path\_coords](neuron_feature_polygon.NeuronFeaturePolygon.md#get_path_coords)
- [get\_polygon](neuron_feature_polygon.NeuronFeaturePolygon.md#get_polygon)
- [is\_flyable](neuron_feature_polygon.NeuronFeaturePolygon.md#is_flyable-1)
- [move\_corner\_backwards](neuron_feature_polygon.NeuronFeaturePolygon.md#move_corner_backwards)
- [move\_corner\_forwards](neuron_feature_polygon.NeuronFeaturePolygon.md#move_corner_forwards)
- [remove\_feature](neuron_feature_polygon.NeuronFeaturePolygon.md#remove_feature)
- [remove\_point\_by\_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#remove_point_by_corner)
- [select\_corner](neuron_feature_polygon.NeuronFeaturePolygon.md#select_corner)
- [set\_change\_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_change_callback)
- [set\_label](neuron_feature_polygon.NeuronFeaturePolygon.md#set_label)
- [set\_move\_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_move_callback)
- [set\_planner](neuron_feature_polygon.NeuronFeaturePolygon.md#set_planner)
- [set\_remove\_callback](neuron_feature_polygon.NeuronFeaturePolygon.md#set_remove_callback)
- [show\_help](neuron_feature_polygon.NeuronFeaturePolygon.md#show_help)
- [show\_on\_plan](neuron_feature_polygon.NeuronFeaturePolygon.md#show_on_plan)
- [to\_json](neuron_feature_polygon.NeuronFeaturePolygon.md#to_json)
- [toggle\_visibility](neuron_feature_polygon.NeuronFeaturePolygon.md#toggle_visibility)
- [update\_polygon](neuron_feature_polygon.NeuronFeaturePolygon.md#update_polygon)
- [update\_show\_corners](neuron_feature_polygon.NeuronFeaturePolygon.md#update_show_corners)
- [zoom\_to\_feature](neuron_feature_polygon.NeuronFeaturePolygon.md#zoom_to_feature)
- [from\_json](neuron_feature_polygon.NeuronFeaturePolygon.md#from_json)
- [isObjectOfDataType](neuron_feature_polygon.NeuronFeaturePolygon.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronFeaturePolygon**(`map`, `corners?`, `planner?`)

Creates a DOM factory that can be used to generate consistent style elements

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `map` | `Map` | `undefined` |
| `corners` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[] | `[]` |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) | `null` |

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[constructor](neuron_feature_base.NeuronFeatureBase.md#constructor)

#### Defined in

[neuron_feature_polygon.ts:40](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L40)

## Properties

### HELP\_KEY

▪ `Static` **HELP\_KEY**: `string` = `'polygon'`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[HELP_KEY](neuron_feature_base.NeuronFeatureBase.md#help_key)

#### Defined in

[neuron_feature_polygon.ts:22](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L22)

___

### IS\_FLYABLE

▪ `Static` **IS\_FLYABLE**: `boolean` = `false`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[IS_FLYABLE](neuron_feature_base.NeuronFeatureBase.md#is_flyable)

#### Defined in

[neuron_feature_base.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L20)

___

### NAME

▪ `Static` **NAME**: `string` = `"Polygon"`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[NAME](neuron_feature_base.NeuronFeatureBase.md#name)

#### Defined in

[neuron_feature_polygon.ts:19](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L19)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronFeaturePolygon"`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[TYPE](neuron_feature_base.NeuronFeatureBase.md#type)

#### Defined in

[neuron_feature_polygon.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L20)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'f0e9c050-e135-11ec-8ea0-c3c316816bb1'`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[VERSION](neuron_feature_base.NeuronFeatureBase.md#version)

#### Defined in

[neuron_feature_polygon.ts:21](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L21)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_altitude_ratio](neuron_feature_base.NeuronFeatureBase.md#_altitude_ratio)

#### Defined in

[neuron_feature_base.ts:33](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L33)

___

### \_button\_sizes

▪ `Static` **\_button\_sizes**: `string`[]

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_button_sizes](neuron_feature_base.NeuronFeatureBase.md#_button_sizes)

#### Defined in

[neuron_feature_base.ts:36](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L36)

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

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_add_layer_to_map](neuron_feature_base.NeuronFeatureBase.md#_add_layer_to_map)

#### Defined in

[neuron_feature_base.ts:60](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L60)

___

### \_create\_dom\_input\_button

▸ **_create_dom_input_button**(`text`, `on_change`): `HTMLButtonElement`

Creates a HTML button element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Label string to set for this element |
| `on_change` | (`event`: `Event`) => `void` | Callback to be run when the element input is changed by the user |

#### Returns

`HTMLButtonElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_button](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_button)

#### Defined in

[neuron_dom_factory.ts:66](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L66)

___

### \_create\_dom\_input\_checkbox

▸ **_create_dom_input_checkbox**(`checked`, `on_change`): `HTMLInputElement`

Creates a HTML checkbox element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `checked` | `boolean` | Initial checked status of the checkbox |
| `on_change` | (`event`: `Event`) => `void` | Callback to be run when the element input is changed by the user |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_checkbox](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_checkbox)

#### Defined in

[neuron_dom_factory.ts:135](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L135)

___

### \_create\_dom\_input\_file

▸ **_create_dom_input_file**(`on_change`, `accepts?`): `HTMLInputElement`

Creates a HTML file loader element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `on_change` | (`event`: `Event`) => `void` | `undefined` | Callback to be run when the element input is changed by the user |
| `accepts` | `string` | `null` | Classifier to force the user to select specific file types |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_file](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_file)

#### Defined in

[neuron_dom_factory.ts:51](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L51)

___

### \_create\_dom\_input\_number

▸ **_create_dom_input_number**(`value`, `on_change`, `min?`, `max?`, `step?`): `HTMLInputElement`

Creates a HTML number scroll element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | Value to set for this element |
| `on_change` | (`event`: `Event`) => `void` | `undefined` | Callback to be run when the element input is changed by the user |
| `min` | `number` | `null` | Minimum value that can be input for this element. Set to null for no minimum. |
| `max` | `number` | `null` | Maximum value that can be input for this element Set to null for no maximum. |
| `step` | `number` | `null` | Step value for scrolling/toggling for this element. Set to null for default. |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_number](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_number)

#### Defined in

[neuron_dom_factory.ts:94](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L94)

___

### \_create\_dom\_input\_range

▸ **_create_dom_input_range**(`value`, `on_change`, `min`, `max`, `step?`): `HTMLInputElement`

Creates a HTML slider element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | Value to set for this element |
| `on_change` | (`event`: `Event`) => `void` | `undefined` | Callback to be run when the element input is changed by the user |
| `min` | `number` | `undefined` | Minimum value that can be input for this element. Set to null for no minimum. |
| `max` | `number` | `undefined` | Maximum value that can be input for this element Set to null for no maximum. |
| `step` | `number` | `null` | Step value for scrolling/toggling for this element. Set to null for default. |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_range](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_range)

#### Defined in

[neuron_dom_factory.ts:117](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L117)

___

### \_create\_dom\_input\_select

▸ **_create_dom_input_select**(`options`, `labels`, `on_change`, `selected_option?`): `HTMLSelectElement`

Creates a HTML dropdown selector element.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `string`[] | `undefined` | List of option values for the dropdown list to be used internally. |
| `labels` | `string`[] | `undefined` | List of labels for the dropdown list to be shown to the user. |
| `on_change` | (`event`: `Event`) => `void` | `undefined` | Callback to be run when the element input is changed by the user. |
| `selected_option` | `string` | `null` | Initial option to be selected. Set to null to be unselected by default. |

#### Returns

`HTMLSelectElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_select](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_select)

#### Defined in

[neuron_dom_factory.ts:150](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L150)

___

### \_create\_dom\_input\_textbox

▸ **_create_dom_input_textbox**(`value`, `on_change`): `HTMLInputElement`

Creates a HTML textbox element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Label string to set for this element |
| `on_change` | (`event`: `Event`) => `void` | Callback to be run when the element input is changed by the user |

#### Returns

`HTMLInputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_input_textbox](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_textbox)

#### Defined in

[neuron_dom_factory.ts:78](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L78)

___

### \_create\_dom\_label

▸ **_create_dom_label**(`text`, `input`, `description?`, `hide_label?`): `HTMLLabelElement`

Creates a HTML label that is linked to a specific input/other DOM element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Label text to show |
| `input` | `HTMLInputElement` \| `HTMLSelectElement` \| `HTMLButtonElement` \| `HTMLOutputElement` | `undefined` | Input/other HTML element to link this label to |
| `description` | `string` | `null` | Mouse-over description for this label item |
| `hide_label` | `boolean` | `false` | Sets the visibility to hidden for this label if true (useful for building grid layouts with only one label but many inputs) |

#### Returns

`HTMLLabelElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_label](neuron_feature_base.NeuronFeatureBase.md#_create_dom_label)

#### Defined in

[neuron_dom_factory.ts:19](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L19)

___

### \_create\_dom\_output

▸ **_create_dom_output**(`value?`): `HTMLOutputElement`

Creates a HTML output element

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` | `null` | Value string to set for this element |

#### Returns

`HTMLOutputElement`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_create_dom_output](neuron_feature_base.NeuronFeatureBase.md#_create_dom_output)

#### Defined in

[neuron_dom_factory.ts:39](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_dom_factory.ts#L39)

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

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_get_dom](neuron_feature_base.NeuronFeatureBase.md#_get_dom)

#### Defined in

[neuron_feature_base.ts:127](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L127)

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

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_remove_layer_from_map](neuron_feature_base.NeuronFeatureBase.md#_remove_layer_from_map)

#### Defined in

[neuron_feature_base.ts:82](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L82)

___

### \_set\_on\_change\_internal

▸ **_set_on_change_internal**(`on_change?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `on_change` | () => `void` | `null` |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:88](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L88)

___

### \_trigger\_on\_changed

▸ **_trigger_on_changed**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_trigger_on_changed](neuron_feature_base.NeuronFeatureBase.md#_trigger_on_changed)

#### Defined in

[neuron_feature_base.ts:55](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L55)

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

#### Defined in

[neuron_feature_polygon.ts:150](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L150)

___

### add\_corners

▸ **add_corners**(`corners?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `corners` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[] | `[]` |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:199](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L199)

___

### add\_point\_at\_location

▸ **add_point_at_location**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:242](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L242)

___

### corners\_visible

▸ **corners_visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_feature_polygon.ts:66](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L66)

___

### get\_corners

▸ **get_corners**(): `Marker`<`any`\>[]

#### Returns

`Marker`<`any`\>[]

#### Defined in

[neuron_feature_polygon.ts:207](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L207)

___

### get\_corners\_as\_points

▸ **get_corners_as_points**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_feature_polygon.ts:211](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L211)

___

### get\_dom

▸ **get_dom**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[get_dom](neuron_feature_base.NeuronFeatureBase.md#get_dom)

#### Defined in

[neuron_feature_polygon.ts:325](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L325)

___

### get\_features

▸ **get_features**(): `Layer`[]

#### Returns

`Layer`[]

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[get_features](neuron_feature_base.NeuronFeatureBase.md#get_features)

#### Defined in

[neuron_feature_base.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L274)

___

### get\_label

▸ **get_label**(): `string`

#### Returns

`string`

#### Defined in

[neuron_feature_polygon.ts:390](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L390)

___

### get\_path\_coords

▸ **get_path_coords**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[get_path_coords](neuron_feature_base.NeuronFeatureBase.md#get_path_coords)

#### Defined in

[neuron_feature_base.ts:324](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L324)

___

### get\_polygon

▸ **get_polygon**(): `Polygon`<`any`\>

#### Returns

`Polygon`<`any`\>

#### Defined in

[neuron_feature_polygon.ts:146](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L146)

___

### is\_flyable

▸ **is_flyable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[is_flyable](neuron_feature_base.NeuronFeatureBase.md#is_flyable-1)

#### Defined in

[neuron_feature_base.ts:320](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L320)

___

### move\_corner\_backwards

▸ **move_corner_backwards**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:122](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L122)

___

### move\_corner\_forwards

▸ **move_corner_forwards**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:111](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L111)

___

### remove\_feature

▸ **remove_feature**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[remove_feature](neuron_feature_base.NeuronFeatureBase.md#remove_feature)

#### Defined in

[neuron_feature_polygon.ts:309](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L309)

___

### remove\_point\_by\_corner

▸ **remove_point_by_corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:219](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L219)

___

### select\_corner

▸ **select_corner**(`corner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `corner` | `Marker`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:132](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L132)

___

### set\_change\_callback

▸ **set_change_callback**(`on_change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_change` | (`feature`: [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)) => `void` |

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[set_change_callback](neuron_feature_base.NeuronFeatureBase.md#set_change_callback)

#### Defined in

[neuron_feature_base.ts:266](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L266)

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

#### Defined in

[neuron_feature_polygon.ts:394](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L394)

___

### set\_move\_callback

▸ **set_move_callback**(`on_move`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_move` | () => `void` |

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[set_move_callback](neuron_feature_base.NeuronFeatureBase.md#set_move_callback)

#### Defined in

[neuron_feature_base.ts:270](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L270)

___

### set\_planner

▸ **set_planner**(`planner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:84](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L84)

___

### set\_remove\_callback

▸ **set_remove_callback**(`on_remove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_remove` | (`feature`: [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)) => `void` |

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[set_remove_callback](neuron_feature_base.NeuronFeatureBase.md#set_remove_callback)

#### Defined in

[neuron_feature_base.ts:262](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L262)

___

### show\_help

▸ **show_help**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[show_help](neuron_feature_base.NeuronFeatureBase.md#show_help)

#### Defined in

[neuron_feature_polygon.ts:305](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L305)

___

### show\_on\_plan

▸ **show_on_plan**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:182](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L182)

___

### to\_json

▸ **to_json**(): [`NeuronFeaturePolygonData`](../interfaces/neuron_feature_polygon.NeuronFeaturePolygonData.md)

#### Returns

[`NeuronFeaturePolygonData`](../interfaces/neuron_feature_polygon.NeuronFeaturePolygonData.md)

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[to_json](neuron_feature_base.NeuronFeatureBase.md#to_json)

#### Defined in

[neuron_feature_polygon.ts:419](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L419)

___

### toggle\_visibility

▸ **toggle_visibility**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[toggle_visibility](neuron_feature_base.NeuronFeatureBase.md#toggle_visibility)

#### Defined in

[neuron_feature_base.ts:278](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L278)

___

### update\_polygon

▸ **update_polygon**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:255](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L255)

___

### update\_show\_corners

▸ **update_show_corners**(`show_corners`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `show_corners` | `boolean` |

#### Returns

`void`

#### Defined in

[neuron_feature_polygon.ts:70](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L70)

___

### zoom\_to\_feature

▸ **zoom_to_feature**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[zoom_to_feature](neuron_feature_base.NeuronFeatureBase.md#zoom_to_feature)

#### Defined in

[neuron_feature_base.ts:300](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L300)

___

### from\_json

▸ `Static` **from_json**(`j`, `map`): [`NeuronFeaturePolygon`](neuron_feature_polygon.NeuronFeaturePolygon.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronFeaturePolygonData`](../interfaces/neuron_feature_polygon.NeuronFeaturePolygonData.md) |
| `map` | `Map` |

#### Returns

[`NeuronFeaturePolygon`](neuron_feature_polygon.NeuronFeaturePolygon.md)

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[from_json](neuron_feature_base.NeuronFeatureBase.md#from_json)

#### Defined in

[neuron_feature_polygon.ts:408](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L408)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronFeaturePolygonData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronFeaturePolygonData

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[isObjectOfDataType](neuron_feature_base.NeuronFeatureBase.md#isobjectofdatatype)

#### Defined in

[neuron_feature_polygon.ts:400](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_polygon.ts#L400)
