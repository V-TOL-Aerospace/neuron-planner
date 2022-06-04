[neuron-planner](../README.md) / [Modules](../modules.md) / [interface\_leaflet](../modules/interface_leaflet.md) / LeafletContextMenuItem

# Class: LeafletContextMenuItem

[interface_leaflet](../modules/interface_leaflet.md).LeafletContextMenuItem

## Table of contents

### Constructors

- [constructor](interface_leaflet.LeafletContextMenuItem.md#constructor)

### Properties

- [callback](interface_leaflet.LeafletContextMenuItem.md#callback)
- [icon](interface_leaflet.LeafletContextMenuItem.md#icon)
- [text](interface_leaflet.LeafletContextMenuItem.md#text)

## Constructors

### constructor

• **new LeafletContextMenuItem**(`text?`, `icon?`, `callback?`)

Creates a LeafletContextMenuItem object for use when creating consistent popup context menus

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `""` | Text to display on on the context menu item |
| `icon` | [`NeuronIcons`](../enums/interface_fontawesome.NeuronIcons.md) | `null` | Icon to display next to the context menu item |
| `callback` | (`contextTarget`: `Marker`<`any`\>) => `void` | `null` | Callback to run when the context menu item is clicked |

#### Defined in

[interface_leaflet.ts:45](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L45)

## Properties

### callback

• **callback**: (`contextTarget`: `Marker`<`any`\>) => `void`

#### Type declaration

▸ (`contextTarget`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `contextTarget` | `Marker`<`any`\> |

##### Returns

`void`

#### Defined in

[interface_leaflet.ts:38](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L38)

___

### icon

• **icon**: [`NeuronIcons`](../enums/interface_fontawesome.NeuronIcons.md)

#### Defined in

[interface_leaflet.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L37)

___

### text

• **text**: `string` = `""`

#### Defined in

[interface_leaflet.ts:36](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_leaflet.ts#L36)
