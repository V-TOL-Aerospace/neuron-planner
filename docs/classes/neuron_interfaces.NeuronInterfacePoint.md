[neuron-planner](../README.md) / [Modules](../modules.md) / [neuron\_interfaces](../modules/neuron_interfaces.md) / NeuronInterfacePoint

# Class: NeuronInterfacePoint

[neuron_interfaces](../modules/neuron_interfaces.md).NeuronInterfacePoint

## Table of contents

### Constructors

- [constructor](neuron_interfaces.NeuronInterfacePoint.md#constructor)

### Properties

- [altitude](neuron_interfaces.NeuronInterfacePoint.md#altitude)
- [heading](neuron_interfaces.NeuronInterfacePoint.md#heading)
- [latitude](neuron_interfaces.NeuronInterfacePoint.md#latitude)
- [longitude](neuron_interfaces.NeuronInterfacePoint.md#longitude)
- [tag](neuron_interfaces.NeuronInterfacePoint.md#tag)
- [\_altitude\_ratio](neuron_interfaces.NeuronInterfacePoint.md#_altitude_ratio)

### Methods

- [equals](neuron_interfaces.NeuronInterfacePoint.md#equals)
- [toString](neuron_interfaces.NeuronInterfacePoint.md#tostring)
- [toStringAltitude](neuron_interfaces.NeuronInterfacePoint.md#tostringaltitude)
- [toStringLatitude](neuron_interfaces.NeuronInterfacePoint.md#tostringlatitude)
- [toStringLongitude](neuron_interfaces.NeuronInterfacePoint.md#tostringlongitude)
- [to\_UTM](neuron_interfaces.NeuronInterfacePoint.md#to_utm)
- [to\_json](neuron_interfaces.NeuronInterfacePoint.md#to_json)
- [to\_leaflet](neuron_interfaces.NeuronInterfacePoint.md#to_leaflet)
- [from\_UTM](neuron_interfaces.NeuronInterfacePoint.md#from_utm)
- [from\_UTMs](neuron_interfaces.NeuronInterfacePoint.md#from_utms)
- [from\_json](neuron_interfaces.NeuronInterfacePoint.md#from_json)
- [from\_leaflet](neuron_interfaces.NeuronInterfacePoint.md#from_leaflet)
- [isObjectOfDataType](neuron_interfaces.NeuronInterfacePoint.md#isobjectofdatatype)
- [projection\_code](neuron_interfaces.NeuronInterfacePoint.md#projection_code)

## Constructors

### constructor

• **new NeuronInterfacePoint**(`latitude?`, `longitude?`, `altitude?`, `heading?`, `tag?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `latitude` | `number` | `0.0` |
| `longitude` | `number` | `0.0` |
| `altitude` | `number` | `0.0` |
| `heading` | `number` | `0.0` |
| `tag` | `string` | `""` |

#### Defined in

[neuron_interfaces.ts:49](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L49)

## Properties

### altitude

• **altitude**: `number`

#### Defined in

[neuron_interfaces.ts:43](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L43)

___

### heading

• **heading**: `number`

#### Defined in

[neuron_interfaces.ts:44](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L44)

___

### latitude

• **latitude**: `number`

#### Defined in

[neuron_interfaces.ts:41](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L41)

___

### longitude

• **longitude**: `number`

#### Defined in

[neuron_interfaces.ts:42](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L42)

___

### tag

• **tag**: `string`

#### Defined in

[neuron_interfaces.ts:45](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L45)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Defined in

[neuron_interfaces.ts:47](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L47)

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md) |

#### Returns

`boolean`

#### Defined in

[neuron_interfaces.ts:61](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L61)

___

### toString

▸ **toString**(`use_imperial?`, `use_decimal?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `use_imperial` | `boolean` | `true` |
| `use_decimal` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:130](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L130)

___

### toStringAltitude

▸ **toStringAltitude**(`use_imperial?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `use_imperial` | `boolean` | `true` |

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:142](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L142)

___

### toStringLatitude

▸ **toStringLatitude**(`use_decimal?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `use_decimal` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:134](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L134)

___

### toStringLongitude

▸ **toStringLongitude**(`use_decimal?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `use_decimal` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:138](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L138)

___

### to\_UTM

▸ **to_UTM**(`zone?`): [`UTMPos`](interface_proj4.UTMPos.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `zone` | `number` | `null` |

#### Returns

[`UTMPos`](interface_proj4.UTMPos.md)

#### Defined in

[neuron_interfaces.ts:76](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L76)

___

### to\_json

▸ **to_json**(): [`NeuronInterfacePointData`](../interfaces/neuron_interfaces.NeuronInterfacePointData.md)

#### Returns

[`NeuronInterfacePointData`](../interfaces/neuron_interfaces.NeuronInterfacePointData.md)

#### Defined in

[neuron_interfaces.ts:111](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L111)

___

### to\_leaflet

▸ **to_leaflet**(): `LatLng`

#### Returns

`LatLng`

#### Defined in

[neuron_interfaces.ts:68](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L68)

___

### from\_UTM

▸ `Static` **from_UTM**(`utm`): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `utm` | [`UTMPos`](interface_proj4.UTMPos.md) |

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Defined in

[neuron_interfaces.ts:80](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L80)

___

### from\_UTMs

▸ `Static` **from_UTMs**(`positions`): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `positions` | [`UTMPos`](interface_proj4.UTMPos.md)[] |

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)[]

#### Defined in

[neuron_interfaces.ts:84](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L84)

___

### from\_json

▸ `Static` **from_json**(`j`): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `j` | [`NeuronInterfacePointData`](../interfaces/neuron_interfaces.NeuronInterfacePointData.md) |

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Defined in

[neuron_interfaces.ts:98](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L98)

___

### from\_leaflet

▸ `Static` **from_leaflet**(`latlng`): [`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `latlng` | `LatLng` |

#### Returns

[`NeuronInterfacePoint`](neuron_interfaces.NeuronInterfacePoint.md)

#### Defined in

[neuron_interfaces.ts:72](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L72)

___

### isObjectOfDataType

▸ `Static` **isObjectOfDataType**(`object`): object is NeuronInterfacePointData

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is NeuronInterfacePointData

#### Defined in

[neuron_interfaces.ts:88](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L88)

___

### projection\_code

▸ `Static` **projection_code**(): `string`

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:57](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_interfaces.ts#L57)
