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

#### Parameters

| Name | Type |
| :------ | :------ |
| `planner` | [`NeuronPlanner`](neuron_planner.NeuronPlanner.md) |
| `brief_element_name` | `string` |

#### Defined in

[neuron_brief.ts:44](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L44)

## Methods

### get\_mission\_notables

▸ **get_mission_notables**(`mission_features`): [`MissionBriefItem`](../interfaces/neuron_brief.MissionBriefItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `mission_features` | [`MissionFeature`](../modules/neuron_planner.md#missionfeature)[] |

#### Returns

[`MissionBriefItem`](../interfaces/neuron_brief.MissionBriefItem.md)[]

#### Defined in

[neuron_brief.ts:258](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L258)

___

### get\_mission\_summary

▸ **get_mission_summary**(`mission_features`): [`MissionSummary`](../interfaces/neuron_brief.MissionSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mission_features` | [`MissionFeature`](../modules/neuron_planner.md#missionfeature)[] |

#### Returns

[`MissionSummary`](../interfaces/neuron_brief.MissionSummary.md)

#### Defined in

[neuron_brief.ts:299](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L299)

___

### reset

▸ **reset**(): `void`

Resets the internal state of this class and prepares any relevant variables

#### Returns

`void`

#### Defined in

[neuron_brief.ts:52](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L52)

___

### update\_mission\_brief

▸ **update_mission_brief**(): `void`

Generates and updates the mission brief element in the document with the current mission brief details

#### Returns

`void`

#### Defined in

[neuron_brief.ts:58](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L58)

___

### get\_components\_from\_point

▸ `Static` **get_components_from_point**(`point`): [`MissionBriefComponent`](../interfaces/neuron_brief.MissionBriefComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) |

#### Returns

[`MissionBriefComponent`](../interfaces/neuron_brief.MissionBriefComponent.md)

#### Defined in

[neuron_brief.ts:249](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_brief.ts#L249)
