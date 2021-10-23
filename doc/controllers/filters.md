# Filters

```ts
const filtersController = new FiltersController(client);
```

## Class Name

`FiltersController`

## Methods

* [Create Filter](/doc/controllers/filters.md#create-filter)
* [Get Filter Fields](/doc/controllers/filters.md#get-filter-fields)
* [Create Filter Via POST](/doc/controllers/filters.md#create-filter-via-post)


# Create Filter

Creates a filter and assigns it a unique ID.
Filters are good for selecting subsets of attributes of a type (e.g. of an answer, post, etc.) to be returned by the server.

See also: `<your Stack instance's API server URL>/docs/filters`

```ts
async createFilter(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await filtersController.createFilter();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Filter Fields

Creates a filter and assigns it a unique ID.
Filters are good for selecting subsets of attributes of a type (e.g. of an answer, post, etc.) to be returned by the server.

See also: `<your Stack instance's API server URL>/docs/filters`

```ts
async getFilterFields(
  filterId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `filterId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const filterId = 'filter-id4';
try {
  const { result, ...httpResponse } = await filtersController.getFilterFields(filterId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Filter Via POST

Creates a filter via POST. This is useful, if the list of attributes to include or exclude becomes too long to specify as URL parameters.

Use form-data in the POST body to specify them instead.

See also: `<your Stack instance's API server URL>/docs/filters`

```ts
async createFilterViaPOST(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await filtersController.createFilterViaPOST();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

