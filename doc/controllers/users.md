# Users

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Get All Users](/doc/controllers/users.md#get-all-users)
* [Get Users by I Ds](/doc/controllers/users.md#get-users-by-i-ds)
* [Get Answers by User I Ds](/doc/controllers/users.md#get-answers-by-user-i-ds)
* [Get Badges by User I Ds](/doc/controllers/users.md#get-badges-by-user-i-ds)
* [Get Comments by User I Ds](/doc/controllers/users.md#get-comments-by-user-i-ds)
* [Get Comments by User I Ds Replied to User ID](/doc/controllers/users.md#get-comments-by-user-i-ds-replied-to-user-id)
* [Get Favorites by User I Ds](/doc/controllers/users.md#get-favorites-by-user-i-ds)
* [Get Mentions by User I Ds](/doc/controllers/users.md#get-mentions-by-user-i-ds)
* [Get Network Activity by User ID](/doc/controllers/users.md#get-network-activity-by-user-id)
* [Get Posts by User I Ds](/doc/controllers/users.md#get-posts-by-user-i-ds)
* [Get Privileges by User ID](/doc/controllers/users.md#get-privileges-by-user-id)
* [Get Questions by User I Ds](/doc/controllers/users.md#get-questions-by-user-i-ds)
* [Get Featured Questions by User I Ds](/doc/controllers/users.md#get-featured-questions-by-user-i-ds)
* [Get Questions by User I Ds With No Answer](/doc/controllers/users.md#get-questions-by-user-i-ds-with-no-answer)
* [Get Questions by User I Ds With No Accepted Answer](/doc/controllers/users.md#get-questions-by-user-i-ds-with-no-accepted-answer)
* [Get Unanswered Questions by User I Ds](/doc/controllers/users.md#get-unanswered-questions-by-user-i-ds)
* [Get Reputation Changes by User I Ds](/doc/controllers/users.md#get-reputation-changes-by-user-i-ds)
* [Get Reputation History by User I Ds](/doc/controllers/users.md#get-reputation-history-by-user-i-ds)
* [Get Suggested Edits by User I Ds](/doc/controllers/users.md#get-suggested-edits-by-user-i-ds)
* [Get Tags by User I Ds](/doc/controllers/users.md#get-tags-by-user-i-ds)
* [Get Top Answers of User ID for Tags](/doc/controllers/users.md#get-top-answers-of-user-id-for-tags)
* [Get Top Questions of User ID for Tags](/doc/controllers/users.md#get-top-questions-of-user-id-for-tags)
* [Get Action Timelines by User I Ds](/doc/controllers/users.md#get-action-timelines-by-user-i-ds)
* [Get Top Answer Tags by User ID](/doc/controllers/users.md#get-top-answer-tags-by-user-id)
* [Get Top Question Tags by User ID](/doc/controllers/users.md#get-top-question-tags-by-user-id)
* [Get Top Tags by User ID](/doc/controllers/users.md#get-top-tags-by-user-id)
* [Get All Moderators](/doc/controllers/users.md#get-all-moderators)
* [Get Elected Moderators](/doc/controllers/users.md#get-elected-moderators)


# Get All Users

```ts
async getAllUsers(
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
  const { result, ...httpResponse } = await usersController.getAllUsers();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Users by I Ds

```ts
async getUsersByIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getUsersByIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Answers by User I Ds

```ts
async getAnswersByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getAnswersByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Badges by User I Ds

```ts
async getBadgesByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getBadgesByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments by User I Ds

```ts
async getCommentsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getCommentsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Comments by User I Ds Replied to User ID

```ts
async getCommentsByUserIDsRepliedToUserID(
  userIds: string,
  toUserId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `toUserId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
const toUserId = 'to-user-id8';
try {
  const { result, ...httpResponse } = await usersController.getCommentsByUserIDsRepliedToUserID(userIds, toUserId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Favorites by User I Ds

```ts
async getFavoritesByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getFavoritesByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Mentions by User I Ds

```ts
async getMentionsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getMentionsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Network Activity by User ID

```ts
async getNetworkActivityByUserID(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
try {
  const { result, ...httpResponse } = await usersController.getNetworkActivityByUserID(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Posts by User I Ds

```ts
async getPostsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getPostsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Privileges by User ID

```ts
async getPrivilegesByUserID(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
try {
  const { result, ...httpResponse } = await usersController.getPrivilegesByUserID(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Questions by User I Ds

```ts
async getQuestionsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getQuestionsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Featured Questions by User I Ds

```ts
async getFeaturedQuestionsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getFeaturedQuestionsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Questions by User I Ds With No Answer

```ts
async getQuestionsByUserIDsWithNoAnswer(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getQuestionsByUserIDsWithNoAnswer(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Questions by User I Ds With No Accepted Answer

```ts
async getQuestionsByUserIDsWithNoAcceptedAnswer(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getQuestionsByUserIDsWithNoAcceptedAnswer(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Unanswered Questions by User I Ds

```ts
async getUnansweredQuestionsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getUnansweredQuestionsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Reputation Changes by User I Ds

```ts
async getReputationChangesByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getReputationChangesByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Reputation History by User I Ds

```ts
async getReputationHistoryByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getReputationHistoryByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Suggested Edits by User I Ds

```ts
async getSuggestedEditsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getSuggestedEditsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Tags by User I Ds

```ts
async getTagsByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getTagsByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Answers of User ID for Tags

```ts
async getTopAnswersOfUserIDForTags(
  userId: string,
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await usersController.getTopAnswersOfUserIDForTags(userId, tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Questions of User ID for Tags

```ts
async getTopQuestionsOfUserIDForTags(
  userId: string,
  tagsList: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `tagsList` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
const tagsList = 'tags-list2';
try {
  const { result, ...httpResponse } = await usersController.getTopQuestionsOfUserIDForTags(userId, tagsList);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Action Timelines by User I Ds

```ts
async getActionTimelinesByUserIDs(
  userIds: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userIds` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userIds = 'user-ids0';
try {
  const { result, ...httpResponse } = await usersController.getActionTimelinesByUserIDs(userIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Answer Tags by User ID

```ts
async getTopAnswerTagsByUserID(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
try {
  const { result, ...httpResponse } = await usersController.getTopAnswerTagsByUserID(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Question Tags by User ID

```ts
async getTopQuestionTagsByUserID(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
try {
  const { result, ...httpResponse } = await usersController.getTopQuestionTagsByUserID(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Top Tags by User ID

```ts
async getTopTagsByUserID(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userId = 'user-id8';
try {
  const { result, ...httpResponse } = await usersController.getTopTagsByUserID(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Moderators

```ts
async getAllModerators(
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
  const { result, ...httpResponse } = await usersController.getAllModerators();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Elected Moderators

```ts
async getElectedModerators(
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
  const { result, ...httpResponse } = await usersController.getElectedModerators();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

