# Comments

```ts
const commentsController = new CommentsController(client);
```

## Class Name

`CommentsController`

## Methods

* [Get All Comments](/doc/controllers/comments.md#get-all-comments)
* [Get Comments by I Ds](/doc/controllers/comments.md#get-comments-by-i-ds)


# Get All Comments

```ts
async getAllComments(
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
  const { result, ...httpResponse } = await commentsController.getAllComments();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments by I Ds

```ts
async getCommentsByIDs(
  commentIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `commentIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const commentIds = 'comment-ids4';
try {
  const { result, ...httpResponse } = await commentsController.getCommentsByIDs(commentIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

