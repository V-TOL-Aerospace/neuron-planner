[neuron-planner](../README.md) / [Modules](../modules.md) / neuron\_tools\_survey

# Module: neuron\_tools\_survey

## Table of contents

### Enumerations

- [GridPointTags](../enums/neuron_tools_survey.GridPointTags.md)
- [StartPosition](../enums/neuron_tools_survey.StartPosition.md)

### Classes

- [Rect](../classes/neuron_tools_survey.Rect.md)

### Functions

- [CreateGrid](neuron_tools_survey.md#creategrid)

## Functions

### CreateGrid

▸ **CreateGrid**(`polygon`, `altitude`, `distance`, `spacing`, `angle`, `overshoot1`, `overshoot2`, `startpos`, `minLaneSeparation`, `leadin`): [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[]

Creates listing of points that form a survey grid of a provided area

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `polygon` | [`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[] | List of points that define the survey polygon |
| `altitude` | `number` | altitude to map to the final points |
| `distance` | `number` | distance between lines |
| `spacing` | `number` | Additional spacing between polygon and turns?  TODO: Figure out what this is meant to do? |
| `angle` | `number` | angle of the survey pattern to follow (lane angle) |
| `overshoot1` | `number` | overshoot distance at the first "end" of the survey pattern |
| `overshoot2` | `number` | overshoot distance at the second "end" of the survey pattern |
| `startpos` | [`StartPosition`](../enums/neuron_tools_survey.StartPosition.md) | selector for where the starting position should be |
| `minLaneSeparation` | `number` | minimum lane separation/skip parameter (causes the lanes to alternate) |
| `leadin` | `number` | additional lead-in to assist with mission planning for planes (allows more time for the plane to complete the turn before entering the survey stretch) |

#### Returns

[`NeuronInterfacePoint`](../classes/neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_tools_survey.ts:301](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_survey.ts#L301)
