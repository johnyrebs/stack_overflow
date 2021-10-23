# Tags

```ts
const tagsController = new TagsController(client);
```

## Class Name

`TagsController`

## Methods

* [Get All Tags](/doc/controllers/tags.md#get-all-tags)
* [Get Tags Infos](/doc/controllers/tags.md#get-tags-infos)
* [Get Moderator-Only Tags](/doc/controllers/tags.md#get-moderator-only-tags)
* [Get Required Tags](/doc/controllers/tags.md#get-required-tags)
* [Get Tag Synonyms](/doc/controllers/tags.md#get-tag-synonyms)
* [Get FA Qs by Tags](/doc/controllers/tags.md#get-fa-qs-by-tags)
* [Get Related Tags for Tags](/doc/controllers/tags.md#get-related-tags-for-tags)
* [Get Synonyms for Tags](/doc/controllers/tags.md#get-synonyms-for-tags)
* [Get Top Answerers for Tags in Period](/doc/controllers/tags.md#get-top-answerers-for-tags-in-period)
* [Get Tag Wikis](/doc/controllers/tags.md#get-tag-wikis)


# Get All Tags

```ts
async getAllTags(
  pagesize: number,
  filter: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pagesize` | `number` | Query, Required | - |
| `filter` | `string` | Query, Required | Enable this filter to return just the total number of items. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const pagesize = 30;
const filter = 'total';
try {
  const { result, ...httpResponse } = await tagsController.getAllTags(pagesize, filter);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Tags Infos

```ts
async getTagsInfos(
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await tagsController.getTagsInfos(tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Moderator-Only Tags

```ts
async getModeratorOnlyTags(
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
  const { result, ...httpResponse } = await tagsController.getModeratorOnlyTags();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Required Tags

```ts
async getRequiredTags(
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
  const { result, ...httpResponse } = await tagsController.getRequiredTags();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Tag Synonyms

```ts
async getTagSynonyms(
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
  const { result, ...httpResponse } = await tagsController.getTagSynonyms();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get FA Qs by Tags

```ts
async getFAQsByTags(
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await tagsController.getFAQsByTags(tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Related Tags for Tags

```ts
async getRelatedTagsForTags(
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await tagsController.getRelatedTagsForTags(tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Synonyms for Tags

```ts
async getSynonymsForTags(
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await tagsController.getSynonymsForTags(tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Answerers for Tags in Period

```ts
async getTopAnswerersForTagsInPeriod(
  tag: string,
  period: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tag` | `string` | Template, Required | - |
| `period` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tag = 'tag6';
const period = 'period8';
try {
  const { result, ...httpResponse } = await tagsController.getTopAnswerersForTagsInPeriod(tag, period);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Tag Wikis

```ts
async getTagWikis(
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await tagsController.getTagWikis(tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

