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

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map` |

#### Overrides

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

#### Defined in

[neuron_feature_base.ts:39](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L39)

## Properties

### HELP\_KEY

▪ `Static` **HELP\_KEY**: `string` = `'base'`

#### Defined in

[neuron_feature_base.ts:17](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L17)

___

### IS\_FLYABLE

▪ `Static` **IS\_FLYABLE**: `boolean` = `false`

#### Defined in

[neuron_feature_base.ts:18](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L18)

___

### NAME

▪ `Static` **NAME**: `string` = `"[BASE FEATURE]"`

#### Defined in

[neuron_feature_base.ts:14](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L14)

___

### TYPE

▪ `Static` **TYPE**: `string` = `"NeuronFeatureBase"`

#### Defined in

[neuron_feature_base.ts:15](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L15)

___

### VERSION

▪ `Static` **VERSION**: `string` = `'5caf31f0-d243-11ec-bbb3-df25a4f645e3'`

#### Defined in

[neuron_feature_base.ts:16](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L16)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Defined in

[neuron_feature_base.ts:31](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L31)

___

### \_button\_sizes

▪ `Static` **\_button\_sizes**: `string`[]

#### Defined in

[neuron_feature_base.ts:34](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L34)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_button](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_button)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_checkbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_checkbox)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_file](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_file)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_number](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_number)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_range](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_range)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_select](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_select)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_input_textbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_textbox)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_label](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_label)

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

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[_create_dom_output](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_output)

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

#### Defined in

[neuron_feature_base.ts:80](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L80)

___

### \_trigger\_on\_changed

▸ **_trigger_on_changed**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:53](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L53)

___

### get\_dom

▸ **get_dom**(): `HTMLDivElement`

#### Returns

`HTMLDivElement`

#### Defined in

[neuron_feature_base.ts:326](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L326)

___

### get\_features

▸ **get_features**(): `Layer`[]

#### Returns

`Layer`[]

#### Defined in

[neuron_feature_base.ts:270](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L270)

___

### get\_path\_coords

▸ **get_path_coords**(): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_feature_base.ts:320](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L320)

___

### is\_flyable

▸ **is_flyable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[neuron_feature_base.ts:316](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L316)

___

### remove\_feature

▸ **remove_feature**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:310](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L310)

___

### set\_change\_callback

▸ **set_change_callback**(`on_change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_change` | `CallableFunction` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:262](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L262)

___

### set\_move\_callback

▸ **set_move_callback**(`on_move`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_move` | `CallableFunction` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:266](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L266)

___

### set\_remove\_callback

▸ **set_remove_callback**(`on_remove`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `on_remove` | `CallableFunction` |

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:258](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L258)

___

### show\_help

▸ **show_help**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:304](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L304)

___

### to\_json

▸ **to_json**(): [`NeuronFeatureBaseData`](../interfaces/neuron_feature_base.NeuronFeatureBaseData.md)

#### Returns

[`NeuronFeatureBaseData`](../interfaces/neuron_feature_base.NeuronFeatureBaseData.md)

#### Defined in

[neuron_feature_base.ts:347](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L347)

___

### toggle\_visibility

▸ **toggle_visibility**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:274](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L274)

___

### zoom\_to\_feature

▸ **zoom_to_feature**(): `void`

#### Returns

`void`

#### Defined in

[neuron_feature_base.ts:296](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L296)

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

[neuron_feature_base.ts:339](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L339)

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

[neuron_feature_base.ts:331](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_feature_base.ts#L331)
