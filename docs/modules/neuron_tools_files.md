[neuron-planner](../README.md) / [Modules](../modules.md) / neuron\_tools\_files

# Module: neuron\_tools\_files

## Table of contents

### Functions

- [download\_file](neuron_tools_files.md#download_file)
- [get\_filename](neuron_tools_files.md#get_filename)

## Functions

### download\_file

▸ **download_file**(`filename`, `data`): `Promise`<`void`\>

Initiates a file download for a given data blob

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | `string` | Filename preset of the downloaded file |
| `data` | `Blob` | File data to be downloaded |

#### Returns

`Promise`<`void`\>

#### Defined in

[neuron_tools_files.ts:12](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_files.ts#L12)

___

### get\_filename

▸ **get_filename**(`ext`): `string`

Generates a generic file name based on the current time and date

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ext` | `string` | file extension to give the file |

#### Returns

`string`

#### Defined in

[neuron_tools_files.ts:4](https://github.com/vtol-neuron/neuron-planner/blob/4c781e4/src/js/neuron_tools_files.ts#L4)
