[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_brief](../modules/neuron_brief.md) / NeuronBrief

# Class: NeuronBrief

[neuron_brief](../modules/neuron_brief.md).NeuronBrief

## Table of contents

### Constructors

- [constructor](neuron_brief.NeuronBrief.md#constructor)

### Methods

- [get\_mission\_notables](neuron_brief.NeuronBrief.md#get_mission_notables)
- [get\_mission\_summary](neuron_brief.NeuronBrief.md#get_mission_summary)
- [reset](neuron_brief.NeuronBrief.md#reset)
- [update\_mission\_brief](neuron_brief.NeuronBrief.md#update_mission_brief)
- [get\_components\_from\_point](neuron_brief.NeuronBrief.md#get_components_from_point)

## Constructors

### constructor

• **new NeuronBrief**(`planner`, `brief_element_name`)

Creates a NeuronBrief object that controls the generation of the mission brief functions of the app

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) | NeuronPlanner to use for accessing the current mission plan |
| `brief_element_name` | `string` | Identifier for the document element to use when generating a brief |

#### Defined in

[neuron_brief.ts:46](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L46)

## Methods

### get\_mission\_notables

▸ **get_mission_notables**(`mission_features`): [`MissionBriefItem`](../interfaces/neuron_brief.MissionBriefItem.md)[]

Generates a list of mission brief items for non-flyable mission features

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mission_features` | [`MissionFeature`](../modules/neuron_planner.md#missionfeature)[] | List of features to analyze. |

#### Returns

[`MissionBriefItem`](../interfaces/neuron_brief.MissionBriefItem.md)[]

#### Defined in

[neuron_brief.ts:247](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L247)

___

### get\_mission\_summary

▸ **get_mission_summary**(`mission_features`): [`MissionSummary`](../interfaces/neuron_brief.MissionSummary.md)

Generates a mission summary for a set of mission features

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mission_features` | [`MissionFeature`](../modules/neuron_planner.md#missionfeature)[] | List of features to analyze. |

#### Returns

[`MissionSummary`](../interfaces/neuron_brief.MissionSummary.md)

#### Defined in

[neuron_brief.ts:291](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L291)

___

### reset

▸ **reset**(): `void`

Resets the internal state of this class and prepares any relevant variables

#### Returns

`void`

#### Defined in

[neuron_brief.ts:54](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L54)

___

### update\_mission\_brief

▸ **update_mission_brief**(): `void`

Generates and updates the mission brief element in the document with the current mission brief details

#### Returns

`void`

#### Defined in

[neuron_brief.ts:60](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L60)

___

### get\_components\_from\_point

▸ `Static` **get_components_from_point**(`point`): [`MissionBriefComponent`](../interfaces/neuron_brief.MissionBriefComponent.md)

Breaks down a NeuronInterfacePoint location into set field components for the mission summary

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) | Point to split into summary fields |

#### Returns

[`MissionBriefComponent`](../interfaces/neuron_brief.MissionBriefComponent.md)

#### Defined in

[neuron_brief.ts:236](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_brief.ts#L236)
