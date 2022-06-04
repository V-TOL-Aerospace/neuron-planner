[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_settings](../modules/neuron_settings.md) / NeuronSettings

# Class: NeuronSettings

[neuron_settings](../modules/neuron_settings.md).NeuronSettings

## Hierarchy

- [`NeuronDOMFactory`](neuron_dom_factory.NeuronDOMFactory.md)

  ↳ **`NeuronSettings`**

## Table of contents

### Constructors

- [constructor](neuron_settings.NeuronSettings.md#constructor)

### Properties

- [\_camera\_focal\_length\_min](neuron_settings.NeuronSettings.md#_camera_focal_length_min)
- [\_camera\_image\_height\_min](neuron_settings.NeuronSettings.md#_camera_image_height_min)
- [\_camera\_image\_width\_min](neuron_settings.NeuronSettings.md#_camera_image_width_min)
- [\_camera\_sensor\_height\_min](neuron_settings.NeuronSettings.md#_camera_sensor_height_min)
- [\_camera\_sensor\_width\_min](neuron_settings.NeuronSettings.md#_camera_sensor_width_min)

### Methods

- [\_create\_dom\_input\_button](neuron_settings.NeuronSettings.md#_create_dom_input_button)
- [\_create\_dom\_input\_checkbox](neuron_settings.NeuronSettings.md#_create_dom_input_checkbox)
- [\_create\_dom\_input\_file](neuron_settings.NeuronSettings.md#_create_dom_input_file)
- [\_create\_dom\_input\_number](neuron_settings.NeuronSettings.md#_create_dom_input_number)
- [\_create\_dom\_input\_range](neuron_settings.NeuronSettings.md#_create_dom_input_range)
- [\_create\_dom\_input\_select](neuron_settings.NeuronSettings.md#_create_dom_input_select)
- [\_create\_dom\_input\_textbox](neuron_settings.NeuronSettings.md#_create_dom_input_textbox)
- [\_create\_dom\_label](neuron_settings.NeuronSettings.md#_create_dom_label)
- [\_create\_dom\_output](neuron_settings.NeuronSettings.md#_create_dom_output)
- [reset](neuron_settings.NeuronSettings.md#reset)
- [set\_camera](neuron_settings.NeuronSettings.md#set_camera)

## Constructors

### constructor

• **new NeuronSettings**(`element_name_options`)

Creates a DOM factory that can be used to generate consistent style elements

#### Parameters

| Name | Type |
| :------ | :------ |
| `element_name_options` | `string` |

#### Overrides

[NeuronDOMFactory](neuron_dom_factory.NeuronDOMFactory.md).[constructor](neuron_dom_factory.NeuronDOMFactory.md#constructor)

#### Defined in

[neuron_settings.ts:27](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L27)

## Properties

### \_camera\_focal\_length\_min

▪ `Static` **\_camera\_focal\_length\_min**: `number` = `0`

#### Defined in

[neuron_settings.ts:21](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L21)

___

### \_camera\_image\_height\_min

▪ `Static` **\_camera\_image\_height\_min**: `number` = `0`

#### Defined in

[neuron_settings.ts:25](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L25)

___

### \_camera\_image\_width\_min

▪ `Static` **\_camera\_image\_width\_min**: `number` = `0`

#### Defined in

[neuron_settings.ts:24](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L24)

___

### \_camera\_sensor\_height\_min

▪ `Static` **\_camera\_sensor\_height\_min**: `number` = `0`

#### Defined in

[neuron_settings.ts:23](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L23)

___

### \_camera\_sensor\_width\_min

▪ `Static` **\_camera\_sensor\_width\_min**: `number` = `0`

#### Defined in

[neuron_settings.ts:22](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L22)

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

[neuron_settings.ts:220](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L220)

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

[neuron_settings.ts:155](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_settings.ts#L155)
