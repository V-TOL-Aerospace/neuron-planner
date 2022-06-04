[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_feature\_base](../modules/neuron_feature_base.md) / NeuronFeatureBase

# Class: NeuronFeatureBase

[neuron_feature_base](../modules/neuron_feature_base.md).NeuronFeatureBase

## Hierarchy

- [`NeuronDOMFactory`](neuron_dom_factory.NeuronDOMFactory.md)

  ↳ **`NeuronFeatureBase`**

  ↳↳ [`NeuronFeaturePoint`](neuron_feature_point.NeuronFeaturePoint.md)

  ↳↳ [`NeuronFeaturePolygon`](neuron_feature_polygon.NeuronFeaturePolygon.md)

  ↳↳ [`NeuronFeatureWaypoint`](neuron_feature_waypoint.NeuronFeatureWaypoint.md)

## Table of contents

### Constructors

- [constructor](neuron_feature_base.NeuronFeatureBase.md#constructor)

### Properties

- [HELP\_KEY](neuron_feature_base.NeuronFeatureBase.md#help_key)
- [IS\_FLYABLE](neuron_feature_base.NeuronFeatureBase.md#is_flyable)
- [NAME](neuron_feature_base.NeuronFeatureBase.md#name)
- [TYPE](neuron_feature_base.NeuronFeatureBase.md#type)
- [VERSION](neuron_feature_base.NeuronFeatureBase.md#version)
- [\_altitude\_ratio](neuron_feature_base.NeuronFeatureBase.md#_altitude_ratio)
- [\_button\_sizes](neuron_feature_base.NeuronFeatureBase.md#_button_sizes)

### Methods

- [\_add\_layer\_to\_map](neuron_feature_base.NeuronFeatureBase.md#_add_layer_to_map)
- [\_create\_dom\_input\_button](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_feature_base.NeuronFeatureBase.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_feature_base.NeuronFeatureBase.md#_create_dom_label)
- [\_create\_dom\_output](neuron_feature_base.NeuronFeatureBase.md#_create_dom_output)
- [\_get\_dom](neuron_feature_base.NeuronFeatureBase.md#_get_dom)
- [\_remove\_layer\_from\_map](neuron_feature_base.NeuronFeatureBase.md#_remove_layer_from_map)
- [\_trigger\_on\_changed](neuron_feature_base.NeuronFeatureBase.md#_trigger_on_changed)
- [get\_dom](neuron_feature_base.NeuronFeatureBase.md#get_dom)
- [get\_features](neuron_feature_base.NeuronFeatureBase.md#get_features)
- [get\_path\_coords](neuron_feature_base.NeuronFeatureBase.md#get_path_coords)
- [is\_flyable](neuron_feature_base.NeuronFeatureBase.md#is_flyable-1)
- [remove\_feature](neuron_feature_base.NeuronFeatureBase.md#remove_feature)
- [set\_change\_callback](neuron_feature_base.NeuronFeatureBase.md#set_change_callback)
- [set\_move\_callback](neuron_feature_base.NeuronFeatureBase.md#set_move_callback)
- [set\_remove\_callback](neuron_feature_base.NeuronFeatureBase.md#set_remove_callback)
- [show\_help](neuron_feature_base.NeuronFeatureBase.md#show_help)
- [to\_json](neuron_feature_base.NeuronFeatureBase.md#to_json)
- [toggle\_visibility](neuron_feature_base.NeuronFeatureBase.md#toggle_visibility)
- [zoom\_to\_feature](neuron_feature_base.NeuronFeatureBase.md#zoom_to_feature)
- [from\_json](neuron_feature_base.NeuronFeatureBase.md#from_json)
- [isObjectOfDataType](neuron_feature_base.NeuronFeatureBase.md#isobjectofdatatype)

## Constructors

### constructor

• **new NeuronFeatureBase**(`map`)

Creates a DOM factory that can be used to generate consistent style elements

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Overrides

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

#### Defined in

[neuron_feature_base.ts:41](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L41)

## Properties

### HELP\_KEY

▪ `Static` **HELP\_KEY**: `string` = `'base'`

#### Defined in

[neuron_feature_base.ts:19](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L19)

___

### IS\_FLYABLE

▪ `Static` **IS\_FLYABLE**: `boolean` = `false`

#### Defined in

[neuron_feature_base.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L20)

___

### NAME

▪ `Static` **NAME**: `string` = `"[BASE FEATURE]"`

#### Defined in

[neuron_feature_base.ts:16](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L16)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronFeatureBase"`

#### Defined in

[neuron_feature_base.ts:17](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L17)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'5caf31f0-d243-11ec-bbb3-df25a4f645e3'`

#### Defined in

[neuron_feature_base.ts:18](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L18)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Defined in

[neuron_feature_base.ts:33](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L33)

___

### \_button\_sizes

▪ `Static` **\_button\_sizes**: `string`[]

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_button](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_button)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_checkbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_checkbox)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_file](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_file)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_number](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_number)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_range](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_range)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_select](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_select)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_textbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_textbox)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_label](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_label)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_output](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_output)

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

#### Defined in

[neuron_feature_base.ts:82](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L82)

___

### \_trigger\_on\_changed

▸ **_trigger_on_changed**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:55](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L55)

___

### get\_dom

▸ **get_dom**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[neuron_feature_base.ts:330](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L330)

___

### get\_features

▸ **get_features**(): `Layer`[]

#### Returns

`Layer`[]

#### Defined in

[neuron_feature_base.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L274)

___

### get\_path\_coords

▸ **get_path_coords**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_feature_base.ts:324](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L324)

___

### is\_flyable

▸ **is_flyable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_feature_base.ts:320](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L320)

___

### remove\_feature

▸ **remove_feature**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:314](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L314)

___

### set\_change\_callback

▸ **set_change_callback**(`on_change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_change` | (`feature`: [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)) => `void` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:266](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L266)

___

### set\_move\_callback

▸ **set_move_callback**(`on_move`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_move` | () => `void` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:270](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L270)

___

### set\_remove\_callback

▸ **set_remove_callback**(`on_remove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_remove` | (`feature`: [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)) => `void` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:262](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L262)

___

### show\_help

▸ **show_help**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:308](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L308)

___

### to\_json

▸ **to_json**(): [`NeuronFeatureBaseData`](../interfaces/neuron_feature_base.NeuronFeatureBaseData.md)

#### Returns

[`NeuronFeatureBaseData`](../interfaces/neuron_feature_base.NeuronFeatureBaseData.md)

#### Defined in

[neuron_feature_base.ts:351](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L351)

___

### toggle\_visibility

▸ **toggle_visibility**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:278](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L278)

___

### zoom\_to\_feature

▸ **zoom_to_feature**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:300](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L300)

___

### from\_json

▸ `Static` **from_json**(`j`, `map`): [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronFeatureBaseData`](../interfaces/neuron_feature_base.NeuronFeatureBaseData.md) |
| `map` | `Map` |

#### Returns

[`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)

#### Defined in

[neuron_feature_base.ts:343](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L343)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronFeatureBaseData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronFeatureBaseData

#### Defined in

[neuron_feature_base.ts:335](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_feature_base.ts#L335)
