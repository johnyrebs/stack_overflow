# Sites

```ts
const sitesController = new SitesController(client);
```

## Class Name

`SitesController`


# Get All Sites

```ts
async getAllSites(
  pagesize: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pagesize` | `number` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const pagesize = 30;
try {
  const { result, ...httpResponse } = await sitesController.getAllSites(pagesize);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

