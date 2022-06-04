[neuron-planner](../README.md) / [Modules](../modules.md) / [interface\_proj4](../modules/interface_proj4.md) / UTMLine

# Class: UTMLine

[interface_proj4](../modules/interface_proj4.md).UTMLine

## Table of contents

### Constructors

- [constructor](interface_proj4.UTMLine.md#constructor)

### Properties

- [base\_pnt](interface_proj4.UTMLine.md#base_pnt)
- [p1](interface_proj4.UTMLine.md#p1)
- [p2](interface_proj4.UTMLine.md#p2)

## Constructors

### constructor

• **new UTMLine**(`p1`, `p2`, `base_pnt`)

Creates a UTMLine which is a representation of a line that connects two locations in a UTM zone. Includes an identifier for determining which point is the starting location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p1` | [`UTMPos`](interface_proj4.UTMPos.md) | The first location of the line. |
| `p2` | [`UTMPos`](interface_proj4.UTMPos.md) | The second location of the line. |
| `base_pnt` | [`UTMPos`](interface_proj4.UTMPos.md) | Determines the starting point of the line |

#### Defined in

[interface_proj4.ts:154](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L154)

## Properties

### base\_pnt

• **base\_pnt**: [`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:147](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L147)

___

### p1

• **p1**: [`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:143](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L143)

___

### p2

• **p2**: [`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[interface_proj4.ts:145](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/interface_proj4.ts#L145)
