[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_feature\_waypoint](../modules/neuron_feature_waypoint.md) / NeuronFeatureWaypoint

# Class: NeuronFeatureWaypoint

[neuron_feature_waypoint](../modules/neuron_feature_waypoint.md).NeuronFeatureWaypoint

## Hierarchy

- [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)

  ↳ **`NeuronFeatureWaypoint`**

## Table of contents

### Constructors

- [constructor](neuron_feature_waypoint.NeuronFeatureWaypoint.md#constructor)

### Properties

- [HELP\_KEY](neuron_feature_waypoint.NeuronFeatureWaypoint.md#help_key)
- [IS\_FLYABLE](neuron_feature_waypoint.NeuronFeatureWaypoint.md#is_flyable)
- [NAME](neuron_feature_waypoint.NeuronFeatureWaypoint.md#name)
- [TYPE](neuron_feature_waypoint.NeuronFeatureWaypoint.md#type)
- [VERSION](neuron_feature_waypoint.NeuronFeatureWaypoint.md#version)
- [\_altitude\_ratio](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_altitude_ratio)
- [\_button\_sizes](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_button_sizes)
- [\_gsd\_ratio](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_gsd_ratio)

### Methods

- [\_add\_layer\_to\_map](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_add_layer_to_map)
- [\_create\_dom\_input\_button](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_label)
- [\_create\_dom\_output](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_create_dom_output)
- [\_get\_dom](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_get_dom)
- [\_remove\_layer\_from\_map](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_remove_layer_from_map)
- [\_trigger\_on\_changed](neuron_feature_waypoint.NeuronFeatureWaypoint.md#_trigger_on_changed)
- [get\_capture\_image](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_capture_image)
- [get\_dom](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_dom)
- [get\_features](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_features)
- [get\_ground\_resolution](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_ground_resolution)
- [get\_image\_count](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_image_count)
- [get\_path\_coords](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_path_coords)
- [get\_wait\_duration](neuron_feature_waypoint.NeuronFeatureWaypoint.md#get_wait_duration)
- [is\_flyable](neuron_feature_waypoint.NeuronFeatureWaypoint.md#is_flyable-1)
- [remove\_feature](neuron_feature_waypoint.NeuronFeatureWaypoint.md#remove_feature)
- [remove\_point\_by\_context](neuron_feature_waypoint.NeuronFeatureWaypoint.md#remove_point_by_context)
- [set\_capture\_image](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_capture_image)
- [set\_change\_callback](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_change_callback)
- [set\_ground\_resolution](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_ground_resolution)
- [set\_move\_callback](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_move_callback)
- [set\_options\_subscriber](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_options_subscriber)
- [set\_point](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_point)
- [set\_remove\_callback](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_remove_callback)
- [set\_wait\_duration](neuron_feature_waypoint.NeuronFeatureWaypoint.md#set_wait_duration)
- [show\_help](neuron_feature_waypoint.NeuronFeatureWaypoint.md#show_help)
- [show\_on\_plan](neuron_feature_waypoint.NeuronFeatureWaypoint.md#show_on_plan)
- [to\_json](neuron_feature_waypoint.NeuronFeatureWaypoint.md#to_json)
- [toggle\_visibility](neuron_feature_waypoint.NeuronFeatureWaypoint.md#toggle_visibility)
- [zoom\_to\_feature](neuron_feature_waypoint.NeuronFeatureWaypoint.md#zoom_to_feature)
- [from\_json](neuron_feature_waypoint.NeuronFeatureWaypoint.md#from_json)
- [isObjectOfDataType](neuron_feature_waypoint.NeuronFeatureWaypoint.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronFeatureWaypoint**(`map`, `point?`)

Creates a DOM factory that can be used to generate consistent style elements

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `map` | `Map` | `undefined` |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | `null` |

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[constructor](neuron_feature_base.NeuronFeatureBase.md#constructor)

#### Defined in

[neuron_feature_waypoint.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L46)

## Properties

### HELP\_KEY

▪ `Static` **HELP\_KEY**: `string` = `'waypoint'`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[HELP_KEY](neuron_feature_base.NeuronFeatureBase.md#help_key)

#### Defined in

[neuron_feature_waypoint.ts:23](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L23)

___

### IS\_FLYABLE

▪ `Static` **IS\_FLYABLE**: `boolean` = `true`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[IS_FLYABLE](neuron_feature_base.NeuronFeatureBase.md#is_flyable)

#### Defined in

[neuron_feature_waypoint.ts:24](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L24)

___

### NAME

▪ `Static` **NAME**: `string` = `"Waypoint"`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[NAME](neuron_feature_base.NeuronFeatureBase.md#name)

#### Defined in

[neuron_feature_waypoint.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L20)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronFeatureWaypoint"`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[TYPE](neuron_feature_base.NeuronFeatureBase.md#type)

#### Defined in

[neuron_feature_waypoint.ts:21](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L21)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'1066fce0-dd80-11ec-b085-f96e36263ede'`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[VERSION](neuron_feature_base.NeuronFeatureBase.md#version)

#### Defined in

[neuron_feature_waypoint.ts:22](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L22)

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

___

### \_gsd\_ratio

▪ `Static` **\_gsd\_ratio**: `number` = `0.01`

#### Defined in

[neuron_feature_waypoint.ts:44](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L44)

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

### \_trigger\_on\_changed

▸ **_trigger_on_changed**(): `void`

#### Returns

`void`

#### Inherited from

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[_trigger_on_changed](neuron_feature_base.NeuronFeatureBase.md#_trigger_on_changed)

#### Defined in

[neuron_feature_base.ts:55](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L55)

___

### get\_capture\_image

▸ **get_capture_image**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_feature_waypoint.ts:202](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L202)

___

### get\_dom

▸ **get_dom**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[get_dom](neuron_feature_base.NeuronFeatureBase.md#get_dom)

#### Defined in

[neuron_feature_waypoint.ts:278](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L278)

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

### get\_ground\_resolution

▸ **get_ground_resolution**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_waypoint.ts:360](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L360)

___

### get\_image\_count

▸ **get_image_count**(): ``0`` \| ``1``

#### Returns

``0`` \| ``1``

#### Defined in

[neuron_feature_waypoint.ts:198](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L198)

___

### get\_path\_coords

▸ **get_path_coords**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[get_path_coords](neuron_feature_base.NeuronFeatureBase.md#get_path_coords)

#### Defined in

[neuron_feature_waypoint.ts:270](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L270)

___

### get\_wait\_duration

▸ **get_wait_duration**(): `number`

#### Returns

`number`

#### Defined in

[neuron_feature_waypoint.ts:185](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L185)

___

### is\_flyable

▸ **is_flyable**(): `boolean`

#### Returns

`boolean`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[is_flyable](neuron_feature_base.NeuronFeatureBase.md#is_flyable-1)

#### Defined in

[neuron_feature_waypoint.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L274)

___

### remove\_feature

▸ **remove_feature**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[remove_feature](neuron_feature_base.NeuronFeatureBase.md#remove_feature)

#### Defined in

[neuron_feature_waypoint.ts:263](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L263)

___

### remove\_point\_by\_context

▸ **remove_point_by_context**(`context`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `Marker`<`any`\> |

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:92](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L92)

___

### set\_capture\_image

▸ **set_capture_image**(`capture_image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `capture_image` | `boolean` |

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:206](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L206)

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

### set\_ground\_resolution

▸ **set_ground_resolution**(`ground_resolution`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ground_resolution` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:339](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L339)

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

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:71](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L71)

___

### set\_point

▸ **set_point**(`point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) |

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:111](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L111)

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

### set\_wait\_duration

▸ **set_wait_duration**(`wait_duration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wait_duration` | `number` |

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:189](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L189)

___

### show\_help

▸ **show_help**(): `void`

#### Returns

`void`

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[show_help](neuron_feature_base.NeuronFeatureBase.md#show_help)

#### Defined in

[neuron_feature_waypoint.ts:259](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L259)

___

### show\_on\_plan

▸ **show_on_plan**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_waypoint.ts:135](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L135)

___

### to\_json

▸ **to_json**(): [`NeuronFeaturePointData`](../interfaces/neuron_feature_waypoint.NeuronFeaturePointData.md)

#### Returns

[`NeuronFeaturePointData`](../interfaces/neuron_feature_waypoint.NeuronFeaturePointData.md)

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[to_json](neuron_feature_base.NeuronFeatureBase.md#to_json)

#### Defined in

[neuron_feature_waypoint.ts:385](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L385)

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

▸ `Static` **from_json**(`j`, `map`): [`NeuronFeatureWaypoint`](neuron_feature_waypoint.NeuronFeatureWaypoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronFeaturePointData`](../interfaces/neuron_feature_waypoint.NeuronFeaturePointData.md) |
| `map` | `Map` |

#### Returns

[`NeuronFeatureWaypoint`](neuron_feature_waypoint.NeuronFeatureWaypoint.md)

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[from_json](neuron_feature_base.NeuronFeatureBase.md#from_json)

#### Defined in

[neuron_feature_waypoint.ts:372](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L372)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronFeaturePointData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronFeaturePointData

#### Overrides

[NeuronFeatureBase](neuron_feature_base.NeuronFeatureBase.md).[isObjectOfDataType](neuron_feature_base.NeuronFeatureBase.md#isobjectofdatatype)

#### Defined in

[neuron_feature_waypoint.ts:364](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_waypoint.ts#L364)
