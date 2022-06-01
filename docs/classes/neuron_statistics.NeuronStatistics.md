[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_statistics](../modules/neuron_statistics.md) / NeuronStatistics

# Class: NeuronStatistics

[neuron_statistics](../modules/neuron_statistics.md).NeuronStatistics

## Hierarchy

- [`NeuronDOMFactory`](neuron_dom_factory.NeuronDOMFactory.md)

  ↳ **`NeuronStatistics`**

## Table of contents

### Constructors

- [constructor](neuron_statistics.NeuronStatistics.md#constructor)

### Properties

- [\_camera\_focal\_length\_min](neuron_statistics.NeuronStatistics.md#_camera_focal_length_min)
- [\_camera\_image\_height\_min](neuron_statistics.NeuronStatistics.md#_camera_image_height_min)
- [\_camera\_image\_width\_min](neuron_statistics.NeuronStatistics.md#_camera_image_width_min)
- [\_camera\_sensor\_height\_min](neuron_statistics.NeuronStatistics.md#_camera_sensor_height_min)
- [\_camera\_sensor\_width\_min](neuron_statistics.NeuronStatistics.md#_camera_sensor_width_min)

### Methods

- [\_create\_dom\_input\_button](neuron_statistics.NeuronStatistics.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_statistics.NeuronStatistics.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_statistics.NeuronStatistics.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_statistics.NeuronStatistics.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_statistics.NeuronStatistics.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_statistics.NeuronStatistics.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_statistics.NeuronStatistics.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_statistics.NeuronStatistics.md#_create_dom_label)
- [\_create\_dom\_output](neuron_statistics.NeuronStatistics.md#_create_dom_output)
- [reset](neuron_statistics.NeuronStatistics.md#reset)
- [set\_camera](neuron_statistics.NeuronStatistics.md#set_camera)
- [set\_options\_subscriber](neuron_statistics.NeuronStatistics.md#set_options_subscriber)
- [update\_statistics](neuron_statistics.NeuronStatistics.md#update_statistics)

## Constructors

### constructor

• **new NeuronStatistics**(`planner`, `brief`, `stats_element_prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |
| `brief` | [`NeuronBrief`](neuron_brief.NeuronBrief.md) |
| `stats_element_prefix` | `string` |

#### Overrides

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

#### Defined in

[neuron_statistics.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L46)

## Properties

### \_camera\_focal\_length\_min

▪ `Static` **\_camera\_focal\_length\_min**: `number` = `0`

#### Defined in

[neuron_statistics.ts:38](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L38)

___

### \_camera\_image\_height\_min

▪ `Static` **\_camera\_image\_height\_min**: `number` = `0`

#### Defined in

[neuron_statistics.ts:42](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L42)

___

### \_camera\_image\_width\_min

▪ `Static` **\_camera\_image\_width\_min**: `number` = `0`

#### Defined in

[neuron_statistics.ts:41](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L41)

___

### \_camera\_sensor\_height\_min

▪ `Static` **\_camera\_sensor\_height\_min**: `number` = `0`

#### Defined in

[neuron_statistics.ts:40](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L40)

___

### \_camera\_sensor\_width\_min

▪ `Static` **\_camera\_sensor\_width\_min**: `number` = `0`

#### Defined in

[neuron_statistics.ts:39](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L39)

## Methods

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:362](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L362)

___

### set\_camera

▸ **set_camera**(`camera`, `update_settings?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `camera` | [`NeuronCameraSpecifications`](neuron_interfaces.NeuronCameraSpecifications.md) | `undefined` |
| `update_settings` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:279](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L279)

___

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:78](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L78)

___

### update\_statistics

▸ **update_statistics**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:94](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_statistics.ts#L94)
