# Search

```ts
const searchController = new SearchController(client);
```

## Class Name

`SearchController`

## Methods

* [Search](/doc/controllers/search.md#search)
* [Search Advanced](/doc/controllers/search.md#search-advanced)
* [Search Similar Questions](/doc/controllers/search.md#search-similar-questions)
* [Excerpts](/doc/controllers/search.md#excerpts)


# Search

```ts
async search(
  pagesize: number,
  intitle: string,
  tagged: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pagesize` | `number` | Query, Required | - |
| `intitle` | `string` | Query, Required | Some text that should appear in the title of the post. |
| `tagged` | `string` | Query, Required | Semi-colon delimited list of tags that the post should include. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const pagesize = 30;
const intitle = 'value, e.g. CAP';
const tagged = 'value, e.g. CAP';
try {
  const { result, ...httpResponse } = await searchController.search(pagesize, intitle, tagged);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Advanced

```ts
async searchAdvanced(
  sort: string,
  order: string,
  fromdate: string,
  todate: string,
  min: number,
  max: number,
  filter: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sort` | `string` | Query, Required | activity \| creation \| votes \| relevance |
| `order` | `string` | Query, Required | asc \| desc |
| `fromdate` | `string` | Query, Required | refers to the creation date of the post |
| `todate` | `string` | Query, Required | refers to the creation date of the post |
| `min` | `number` | Query, Required | minimum value of the field specified by `sort` paramater. |
| `max` | `number` | Query, Required | maximum value of the field specified by `sort` paramater. |
| `filter` | `string` | Query, Required | Enable this filter to return just the total number of items. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const sort = 'votes';
const order = 'asc';
const fromdate = 'fromdate4';
const todate = 'todate2';
const min = 3;
const max = 7;
const filter = 'total';
try {
  const { result, ...httpResponse } = await searchController.searchAdvanced(sort, order, fromdate, todate, min, max, filter);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Search Similar Questions

```ts
async searchSimilarQuestions(
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
  const { result, ...httpResponse } = await searchController.searchSimilarQuestions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Excerpts

```ts
async excerpts(
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
  const { result, ...httpResponse } = await searchController.excerpts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

