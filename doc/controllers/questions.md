# Questions

```ts
const questionsController = new QuestionsController(client);
```

## Class Name

`QuestionsController`

## Methods

* [Get All Questions](/doc/controllers/questions.md#get-all-questions)
* [Get Question by I Ds](/doc/controllers/questions.md#get-question-by-i-ds)
* [Get Answers to Questions by I Ds](/doc/controllers/questions.md#get-answers-to-questions-by-i-ds)
* [Render Answers to Question With ID](/doc/controllers/questions.md#render-answers-to-question-with-id)
* [Get Comments to Questions by I Ds](/doc/controllers/questions.md#get-comments-to-questions-by-i-ds)
* [Get Linked Questions by Question I Ds](/doc/controllers/questions.md#get-linked-questions-by-question-i-ds)
* [Get Related Questions by Question I Ds](/doc/controllers/questions.md#get-related-questions-by-question-i-ds)
* [Get Timelines by Question I Ds](/doc/controllers/questions.md#get-timelines-by-question-i-ds)
* [Get Featured Questions](/doc/controllers/questions.md#get-featured-questions)
* [Get Questions With NO Answers](/doc/controllers/questions.md#get-questions-with-no-answers)
* [Get Unanswered Questions](/doc/controllers/questions.md#get-unanswered-questions)


# Get All Questions

```ts
async getAllQuestions(
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
  const { result, ...httpResponse } = await questionsController.getAllQuestions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Question by I Ds

```ts
async getQuestionByIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getQuestionByIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Answers to Questions by I Ds

```ts
async getAnswersToQuestionsByIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getAnswersToQuestionsByIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Render Answers to Question With ID

```ts
async renderAnswersToQuestionWithID(
  questionId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionId = 'question-id2';
try {
  const { result, ...httpResponse } = await questionsController.renderAnswersToQuestionWithID(questionId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments to Questions by I Ds

```ts
async getCommentsToQuestionsByIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getCommentsToQuestionsByIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Linked Questions by Question I Ds

```ts
async getLinkedQuestionsByQuestionIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getLinkedQuestionsByQuestionIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Related Questions by Question I Ds

```ts
async getRelatedQuestionsByQuestionIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getRelatedQuestionsByQuestionIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Timelines by Question I Ds

```ts
async getTimelinesByQuestionIDs(
  questionIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `questionIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const questionIds = 'question-ids6';
try {
  const { result, ...httpResponse } = await questionsController.getTimelinesByQuestionIDs(questionIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Featured Questions

```ts
async getFeaturedQuestions(
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
  const { result, ...httpResponse } = await questionsController.getFeaturedQuestions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Questions With NO Answers

```ts
async getQuestionsWithNOAnswers(
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
  const { result, ...httpResponse } = await questionsController.getQuestionsWithNOAnswers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Unanswered Questions

```ts
async getUnansweredQuestions(
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
  const { result, ...httpResponse } = await questionsController.getUnansweredQuestions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

