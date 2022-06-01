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

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `""` |
| `icon` | [`NeuronIcons`](../enums/interface_fontawesome.NeuronIcons.md) | `null` |
| `callback` | (`contextTarget`: `Marker`<`any`\>) => ``null`` | `null` |

#### Defined in

[interface_leaflet.ts:40](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L40)

## Properties

### callback

• **callback**: (`contextTarget`: `Marker`<`any`\>) => ``null``

#### Type declaration

▸ (`contextTarget`): ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `contextTarget` | `Marker`<`any`\> |

##### Returns

``null``

#### Defined in

[interface_leaflet.ts:38](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L38)

___

### icon

• **icon**: [`NeuronIcons`](../enums/interface_fontawesome.NeuronIcons.md)

#### Defined in

[interface_leaflet.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L37)

___

### text

• **text**: `string` = `""`

#### Defined in

[interface_leaflet.ts:36](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/interface_leaflet.ts#L36)
