# Posts

```ts
const postsController = new PostsController(client);
```

## Class Name

`PostsController`

## Methods

* [Get All Posts](/doc/controllers/posts.md#get-all-posts)
* [Get Posts by I Ds](/doc/controllers/posts.md#get-posts-by-i-ds)
* [Get Comments by Post I Ds](/doc/controllers/posts.md#get-comments-by-post-i-ds)
* [Render Comment by Post ID](/doc/controllers/posts.md#render-comment-by-post-id)
* [Get Revisions of Posts by I Ds](/doc/controllers/posts.md#get-revisions-of-posts-by-i-ds)
* [Get Suggested Edits of Posts by I Ds](/doc/controllers/posts.md#get-suggested-edits-of-posts-by-i-ds)


# Get All Posts

```ts
async getAllPosts(
  postIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postIds = 'post-ids2';
try {
  const { result, ...httpResponse } = await postsController.getAllPosts(postIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Posts by I Ds

```ts
async getPostsByIDs(
  postIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postIds = 'post-ids2';
try {
  const { result, ...httpResponse } = await postsController.getPostsByIDs(postIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments by Post I Ds

```ts
async getCommentsByPostIDs(
  postIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postIds = 'post-ids2';
try {
  const { result, ...httpResponse } = await postsController.getCommentsByPostIDs(postIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Render Comment by Post ID

```ts
async renderCommentByPostID(
  postId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postId = 'post-id0';
try {
  const { result, ...httpResponse } = await postsController.renderCommentByPostID(postId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Revisions of Posts by I Ds

```ts
async getRevisionsOfPostsByIDs(
  postIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postIds = 'post-ids2';
try {
  const { result, ...httpResponse } = await postsController.getRevisionsOfPostsByIDs(postIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Suggested Edits of Posts by I Ds

```ts
async getSuggestedEditsOfPostsByIDs(
  postIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const postIds = 'post-ids2';
try {
  const { result, ...httpResponse } = await postsController.getSuggestedEditsOfPostsByIDs(postIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

