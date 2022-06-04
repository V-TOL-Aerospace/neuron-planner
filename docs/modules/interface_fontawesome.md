[neuron-planner](../README.md) / [Modules](../modules.md) / interface\_fontawesome

# Module: interface\_fontawesome

## Table of contents

### Enumerations

- [NeuronIcons](../enums/interface_fontawesome.NeuronIcons.md)

### Functions

- [neuron\_get\_icon](interface_fontawesome.md#neuron_get_icon)
- [neuron\_load\_dom\_icons](interface_fontawesome.md#neuron_load_dom_icons)

## Functions

### neuron\_get\_icon

▸ **neuron_get_icon**(`neuron_icon`, `is_small?`): `HTMLCollection`

Returns the FA icon for use or adding to the document.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `neuron_icon` | [`NeuronIcons`](../enums/interface_fontawesome.NeuronIcons.md) | `undefined` | Icon to retrieve from the library |
| `is_small` | `boolean` | `false` | Modifier to retrieve a small-scale icon |

#### Returns

`HTMLCollection`

#### Defined in

[interface_fontawesome.ts:152](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_fontawesome.ts#L152)

___

### neuron\_load\_dom\_icons

▸ **neuron_load_dom_icons**(): `void`

Skims the DOM and loads any hard-linked FA icons

#### Returns

`void`

#### Defined in

[interface_fontawesome.ts:134](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_fontawesome.ts#L134)
