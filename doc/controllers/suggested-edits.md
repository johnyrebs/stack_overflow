# Suggested Edits

```ts
const suggestedEditsController = new SuggestedEditsController(client);
```

## Class Name

`SuggestedEditsController`

## Methods

* [Get Suggested Edits](/doc/controllers/suggested-edits.md#get-suggested-edits)
* [Get Suggested Edits by I Ds Paged](/doc/controllers/suggested-edits.md#get-suggested-edits-by-i-ds-paged)


# Get Suggested Edits

```ts
async getSuggestedEdits(
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
  const { result, ...httpResponse } = await suggestedEditsController.getSuggestedEdits();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Suggested Edits by I Ds Paged

```ts
async getSuggestedEditsByIDsPaged(
  editIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `editIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const editIds = 'edit-ids2';
try {
  const { result, ...httpResponse } = await suggestedEditsController.getSuggestedEditsByIDsPaged(editIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

