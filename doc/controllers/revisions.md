# Revisions

```ts
const revisionsController = new RevisionsController(client);
```

## Class Name

`RevisionsController`


# New Request

```ts
async newRequest(
  revisionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `revisionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const revisionIds = 'revision-ids8';
try {
  const { result, ...httpResponse } = await revisionsController.newRequest(revisionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

