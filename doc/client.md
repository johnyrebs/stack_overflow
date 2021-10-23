
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `xAPIKey` | `string` | *Default*: `'{{api-key}}'` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production,
  xAPIKey: '{{api-key}}',
})
```

## Stack Overflow For Teams Read API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| answers | Gets AnswersController |
| badges | Gets BadgesController |
| comments | Gets CommentsController |
| info | Gets InfoController |
| posts | Gets PostsController |
| privileges | Gets PrivilegesController |
| questions | Gets QuestionsController |
| revisions | Gets RevisionsController |
| search | Gets SearchController |
| sites | Gets SitesController |
| suggestedEdits | Gets SuggestedEditsController |
| tags | Gets TagsController |
| users | Gets UsersController |
| filters | Gets FiltersController |

