[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_statistics](../modules/neuron_statistics.md) / NeuronStatistics

# Class: NeuronStatistics

[neuron_statistics](../modules/neuron_statistics.md).NeuronStatistics

## Hierarchy

- [`NeuronDOMFactory`](neuron_dom_factory.NeuronDOMFactory.md)

  ↳ **`NeuronStatistics`**

## Table of contents

### Constructors

- [constructor](neuron_statistics.NeuronStatistics.md#constructor)

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
- [set\_options\_subscriber](neuron_statistics.NeuronStatistics.md#set_options_subscriber)
- [update\_statistics](neuron_statistics.NeuronStatistics.md#update_statistics)

## Constructors

### constructor

• **new NeuronStatistics**(`planner`, `brief`, `element_name_stats`)

Creates a DOM factory that can be used to generate consistent style elements

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |
| `brief` | [`NeuronBrief`](neuron_brief.NeuronBrief.md) |
| `element_name_stats` | `string` |

#### Overrides

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

#### Defined in

[neuron_statistics.ts:22](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_statistics.ts#L22)

## Methods

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

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:103](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_statistics.ts#L103)

___

### set\_options\_subscriber

▸ **set_options_subscriber**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:39](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_statistics.ts#L39)

___

### update\_statistics

▸ **update_statistics**(): `void`

#### Returns

`void`

#### Defined in

[neuron_statistics.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_statistics.ts#L46)
