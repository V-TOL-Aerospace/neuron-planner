[neuron-planner](../README.md) / [Modules](../modules.md) / interface\_leaflet

# Module: interface\_leaflet

## Table of contents

### Classes

- [LeafletContextMenuItem](../classes/interface_leaflet.LeafletContextMenuItem.md)

### Functions

- [create\_popup\_context\_dom](interface_leaflet.md#create_popup_context_dom)
- [get\_neuron\_map\_marker](interface_leaflet.md#get_neuron_map_marker)

## Functions

### create\_popup\_context\_dom

▸ **create_popup_context_dom**(`popup_title?`, `context_items?`, `marker_context?`): `HTMLDivElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `popup_title` | `string` | `"Marker"` |
| `context_items` | [`LeafletContextMenuItem`](../classes/interface_leaflet.LeafletContextMenuItem.md)[] | `[]` |
| `marker_context` | `Marker`<`any`\> | `null` |

#### Returns

`HTMLDivElement`

#### Defined in

[interface_leaflet.ts:49](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L49)

___

### get\_neuron\_map\_marker

▸ **get_neuron_map_marker**(`class_name`): `Icon`<{ `className`: `string` = class\_name }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `class_name` | `string` |

#### Returns

`Icon`<{ `className`: `string` = class\_name }\>

#### Defined in

[interface_leaflet.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L20)
