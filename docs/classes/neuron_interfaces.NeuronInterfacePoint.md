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

[neuron_interfaces.ts:25](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L25)

## Properties

### altitude

• **altitude**: `number`

#### Defined in

[neuron_interfaces.ts:19](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L19)

___

### heading

• **heading**: `number`

#### Defined in

[neuron_interfaces.ts:20](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L20)

___

### latitude

• **latitude**: `number`

#### Defined in

[neuron_interfaces.ts:17](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L17)

___

### longitude

• **longitude**: `number`

#### Defined in

[neuron_interfaces.ts:18](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L18)

___

### tag

• **tag**: `string`

#### Defined in

[neuron_interfaces.ts:21](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L21)

___

### \_altitude\_ratio

▪ `Static` **\_altitude\_ratio**: `number` = `0.3048`

#### Defined in

[neuron_interfaces.ts:23](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L23)

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

[neuron_interfaces.ts:37](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L37)

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

[neuron_interfaces.ts:106](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L106)

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

[neuron_interfaces.ts:118](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L118)

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

[neuron_interfaces.ts:110](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L110)

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

[neuron_interfaces.ts:114](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L114)

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

[neuron_interfaces.ts:52](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L52)

___

### to\_json

▸ **to_json**(): [`NeuronInterfacePointData`](../interfaces/neuron_interfaces.NeuronInterfacePointData.md)

#### Returns

[`NeuronInterfacePointData`](../interfaces/neuron_interfaces.NeuronInterfacePointData.md)

#### Defined in

[neuron_interfaces.ts:87](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L87)

___

### to\_leaflet

▸ **to_leaflet**(): `LatLng`

#### Returns

`LatLng`

#### Defined in

[neuron_interfaces.ts:44](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L44)

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

[neuron_interfaces.ts:56](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L56)

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

[neuron_interfaces.ts:60](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L60)

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

[neuron_interfaces.ts:74](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L74)

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

[neuron_interfaces.ts:48](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L48)

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

[neuron_interfaces.ts:64](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L64)

___

### projection\_code

▸ `Static` **projection_code**(): `string`

#### Returns

`string`

#### Defined in

[neuron_interfaces.ts:33](https://github.com/vtol-neuron/neuron-planner/blob/4fe8ba4/src/js/neuron_interfaces.ts#L33)
