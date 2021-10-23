# Answers

```ts
const answersController = new AnswersController(client);
```

## Class Name

`AnswersController`

## Methods

* [Get All Answers](/doc/controllers/answers.md#get-all-answers)
* [Get Answers by I Ds](/doc/controllers/answers.md#get-answers-by-i-ds)
* [Get Comments by Answer I Ds](/doc/controllers/answers.md#get-comments-by-answer-i-ds)
* [Get Questions by Answer I Ds](/doc/controllers/answers.md#get-questions-by-answer-i-ds)


# Get All Answers

```ts
async getAllAnswers(
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
  const { result, ...httpResponse } = await answersController.getAllAnswers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Answers by I Ds

```ts
async getAnswersByIDs(
  answerIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `answerIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const answerIds = 'answer-ids6';
try {
  const { result, ...httpResponse } = await answersController.getAnswersByIDs(answerIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments by Answer I Ds

```ts
async getCommentsByAnswerIDs(
  answerIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `answerIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const answerIds = 'answer-ids6';
try {
  const { result, ...httpResponse } = await answersController.getCommentsByAnswerIDs(answerIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Questions by Answer I Ds

```ts
async getQuestionsByAnswerIDs(
  answerIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `answerIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const answerIds = 'answer-ids6';
try {
  const { result, ...httpResponse } = await answersController.getQuestionsByAnswerIDs(answerIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

