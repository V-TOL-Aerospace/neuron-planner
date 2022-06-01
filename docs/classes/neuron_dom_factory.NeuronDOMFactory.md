[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_dom\_factory](../modules/neuron_dom_factory.md) / NeuronDOMFactory

# Class: NeuronDOMFactory

[neuron_dom_factory](../modules/neuron_dom_factory.md).NeuronDOMFactory

## Hierarchy

- **`NeuronDOMFactory`**

  ↳ [`NeuronFeatureBase`](neuron_feature_base.NeuronFeatureBase.md)

  ↳ [`NeuronStatistics`](neuron_statistics.NeuronStatistics.md)

## Table of contents

### Constructors

- [constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

### Methods

- [\_create\_dom\_input\_button](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_label)
- [\_create\_dom\_output](neuron_dom_factory.NeuronDOMFactory.md#_create_dom_output)

## Constructors

### constructor

• **new NeuronDOMFactory**(`css_prefix`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `css_prefix` | `string` |

#### Defined in

[neuron_dom_factory.ts:6](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L6)

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

#### Defined in

[neuron_dom_factory.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_dom_factory.ts#L37)
