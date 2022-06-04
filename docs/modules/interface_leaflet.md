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

Creates a consistent popup context menu for a leaflet marker

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `popup_title` | `string` | `"Marker"` | Title to put at the top of the popup |
| `context_items` | [`LeafletContextMenuItem`](../classes/interface_leaflet.LeafletContextMenuItem.md)[] | `[]` | List of context menu items to load in |
| `marker_context` | `Marker`<`any`\> | `null` | Marker context to use when calling the context menu item callbacks (passed as argument) |

#### Returns

`HTMLDivElement`

#### Defined in

[interface_leaflet.ts:59](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L59)

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

[interface_leaflet.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L20)
