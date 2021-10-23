
# Getting Started with Stack Overflow For Teams Read API

## Introduction

A set of requests enabling read-only access to Stack Overflow for Teams REST APIs.
The collection is configurable, allowing users to pass in their own API keys.

### Getting an API Access Key

To use this collection you will need an API access key from Stack Overflow for Teams.
You can get it using a self-service, as follows:

* In Stack Overflow for Teams, go to your own profile and click _Edit profile and Settings_.
* Under _Site Settings_ in the menu on the left, click _API Access Keys_.
* Enter a name for your key and click _Create Access Key_.

This will generate an API key. The key will be displayed in a table showing the key name, the (OAuth) client ID and the actual key. For read-only access, all you will need is the key value. For write access (not covered here) you will also need the client id.

### Configuring the Postman Collection

Once you have an API access key, you will need to add it to the configurations of this collection.

To do so, proceed as follows:

* Go to the _Variables_ of this collection
* Enter your API key as the _current value_ of the _api-key_ variable.
* Enter your Stack instance's server base URL as the _current value_ of the _server-base-url_ variable. The URL should include the API endpoint and look something like this: `https://<your domain>.stackenterprise.co/api/2.2`

With those configurations done, you are set and ready to use the collection.

### Executing Requests

> **Note:** This collection was developed for version 2.2 of Stack Overflow for Teams APIs. Newer (and older) versions may have additional or differing requests. Make sure to consult your current API documentation to get a list of all available requests and up to date information.

All (read-only) requests currently available in Stack Overflow for Teams' API are organized in folders according to the data type they are related to. This also corresponds to the official Stack Overflow API documentation's structure.

To execute a request, simply go to a folder, select the request you are interested in and click _Send_. Some the requests use variables within their request URLs. This is described in section [Using Request Environments](#using-request-environments).

#### Parameterized Requests

Many (if not all) of the Stack Overflow API requests use URL parameters. These differ by request and type, and have been reflected in every request contained in this collection.

To enable them select the request you are interested in and select the _Params_ tab.
There you will find a list of available parameters. To enable them, select the checkbox in front of the parameter name and specify a value.

Please consult the official API documentation for the semantics and possible values of the respective parameters.

### Using Request Environments

Some of the requests are parameterized, i.e. they contain variable placeholders as part of the call URLs. For example, the _Get Top Answerers for Tags in Period_ request in the _Tags_ folder uses a URL that looks like this:

```
{{server-base-url}}/tags/{{tag}}/top-answerers/{{period}}
```

The `server-base-url` is taken from the collection variables that you filled in the previous section. The `tag` and `period` variables will be taken from the _Stack Overflow Environment_ that comes with this collection.

Of course, you can also replace the variables in the URL with the actual values directly. But a more reusable approach is by adding these values to the _Stack Overflow Environment_ as follows:

* Click on the _Environments_ menu entry on the left side of the Postman window.
* Click on the _Stack Overflow Environment_ to open the list of available variables.
* Fill in the variables that are used in the request you are trying to fire.

Once done, you can execute your request and it will take the values from the environment and replace them within the URL.

### Common Request Parameters

Apart from the request / type specific parameters there are also a few common ones.

#### Paging

Almost all requests support **paging**. So, for most of them you can specify a `page` parameter to select the page of data you would like to fetch. Optionally, you can also specify a `page_size` to limit the amount of items returned per page.

> Note: you can also set the page size in the collection variables, if you prefer.
> You should then enable the checkbox in front of the `page_size` parameter for each request where you want the custom page size to be applied.

#### Filters

Stack Overflow's API supports filters. Filters are used to restrict the amount of attributes returned by the server.

For example, if you want to retrieve all posts available on stack overflow, but are only interested in the vote score and the person who created it, you could discard all other attributes from the response. That saves time and bandwidth and may also speed up response parsing in your client.

There are several filters already built in, these are described in `https://<your-domain>.stackenterprise.co/api/docs/filters``

Filters are created using Stack Overflow's filter REST API, i.e. you first create a filter, and later, when you send the request, you use that filter to customize the response returned by the server.

To specify a filter for a request, you use the `filter` parameter. As value you provide the name of the filter. For built-in filters the names are human-readable (like `default`, or `none`). For custom filters, names are auto-generated IDs (e.g. `!*My.u(yh0QU99zjh4R(`) the server creates and returns in the response when you create a filter.

##### Example: Creating a custom filter

Let's assume we would like to create a filter, that only returns the following information from a call to get all `posts` available on Stack Overflow.

* The post's owner
* The post's vote score
* Whether there are more pages of posts available (required for paging)

To create such a filter, various options exist. You could start with the built-in `default` filter and `exclude` all attributes you are not interested in.

An easier, but less properly documented approach is to use the `none` filter as a starting point and `include` all attributes, we want to see. We will show this approach here.

To create our custom filter, we need to create the following request:

* GET request to `{{server-base-url}}/filters/create`
* As parameters we include the following:

| Parameter Name | Value |
|----------------|-------|
| `include` | `.items;.has_more;post.owner;post.score;shallow_user.user_id;shallow_user.user_type;shallow_user.display_name;shallow_user.link;shallow_user.accept_rate;shallow_user.profile_image;shallow_user.reputation;shallow_user.badge_counts` |
| `base` | `none` |

What this does is tell the server to create a new filter that is based on the `none` filter. This filter removes everything from the response - including the so-called wrapper object that contains any attributes of a response.

To make sure that we get the attributes we want in the response, we therefore include the following attributes via the `include` parameter:

- `.items`
- `.has_more`
- `post.owner`
- `post.score`
- `shallow_user.user_id`
- `shallow_user.user_type`
- `shallow_user.display_name`
- `shallow_user.link`
- `shallow_user.accept_rate`
- `shallow_user.profile_image`
- `shallow_user.reputation`
- `shallow_user.badge_counts``

Wait a second! Why so many?! We only wanted the `score` and the `owner` of a post!

The reason is that we need attributes of the wrapper object (i.e. the JSON shell around the data we are interested in) first. `.items` and `.has_more` give us a list of data items - this will contain our owner and score data - and a hint on whether there are more pages to fetch from the server (there could be many posts!).

The `post.owner` and `post.score` attributes then specify the data we are actually interested in. However, `post.owner` is a complex type named `shallow_user`. To make sure that we get the attributes of a post's `owner` we therefore also need to whitelist the attributes of `shallow_user` that we are interested in.

That's all - no more, no less. Once you send the request to create the filter, you will receive a response like this one:

```
{
    "items": [
        {
            "included_fields": [
                ".has_more",
                ".items",
                "post.owner",
                "post.score",
                "shallow_user.accept_rate",
                "shallow_user.badge_counts",
                "shallow_user.display_name",
                "shallow_user.link",
                "shallow_user.profile_image",
                "shallow_user.reputation",
                "shallow_user.user_id",
                "shallow_user.user_type"
            ],
            "filter_type": "safe",
            "filter": "!*My.u(yh0QU99zjh4R("
        }
    ],
    "has_more": false,
    "quota_max": 50000,
    "quota_remaining": 49999
}
```

Note the `filter` attribute in the response! It defines the ID (name) of the filter you have just created. It is this ID that you will want to give as the value of the `filter` parameter in a request where you would like to apply this filter.

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=StackOverflowForTeamsReadAPI&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=StackOverflowForTeamsReadAPI&workspaceName=stack-overflow-for-teams-read-apilib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Stack Overflow For Teams Read APILib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add StackOverflowForTeamsReadApilib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=StackOverflowForTeamsReadAPI&workspaceName=stack-overflow-for-teams-read-apilib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install StackOverflowForTeamsReadApilib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

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

## Authorization

This API uses `Custom Header Signature`.

## List of APIs

* [Answers](/doc/controllers/answers.md)
* [Badges](/doc/controllers/badges.md)
* [Comments](/doc/controllers/comments.md)
* [Info](/doc/controllers/info.md)
* [Posts](/doc/controllers/posts.md)
* [Privileges](/doc/controllers/privileges.md)
* [Questions](/doc/controllers/questions.md)
* [Revisions](/doc/controllers/revisions.md)
* [Search](/doc/controllers/search.md)
* [Sites](/doc/controllers/sites.md)
* [Suggested Edits](/doc/controllers/suggested-edits.md)
* [Tags](/doc/controllers/tags.md)
* [Users](/doc/controllers/users.md)
* [Filters](/doc/controllers/filters.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

