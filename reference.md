# Reference
<details><summary><code>client.<a href="/src/Client.ts">apply</a>({ ...params }) -> TrueFoundry.TrueFoundryApplyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply a manifest to create or update a resource.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.apply({
    manifest: {
        type: "ml-repo",
        name: "name",
        storage_integration_fqn: "storage_integration_fqn",
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.TrueFoundryApplyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrueFoundryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.<a href="/src/Client.ts">delete</a>({ ...params }) -> TrueFoundry.TrueFoundryDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a resource identified by the provided manifest.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.delete({
    manifest: {
        type: "ml-repo",
        name: "name",
        storage_integration_fqn: "storage_integration_fqn",
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.TrueFoundryDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrueFoundryClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal
<details><summary><code>client.internal.<a href="/src/api/resources/internal/client/Client.ts">getIdFromFqn</a>(type, { ...params }) -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get IDs associated with the FQN for various entity types, such as deployment, application, workspace, or cluster.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.getIdFromFqn("type", {
    fqn: "fqn"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**type:** `string` — Entity Type
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.InternalGetIdFromFqnRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Users
<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.User, TrueFoundry.ListUsersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List users in the current tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.users.list({
    limit: 10,
    offset: 0,
    query: "john@example.com",
    showInvalidUsers: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.list({
    limit: 10,
    offset: 0,
    query: "john@example.com",
    showInvalidUsers: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.UsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">preRegisterUsers</a>({ ...params }) -> TrueFoundry.RegisterUsersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pre-register a user in the current tenant. Optionally sends an invite email if the auth provider is managed by TrueFoundry.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.preRegisterUsers({
    email: "user@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.RegisterUsersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">updateRoles</a>({ ...params }) -> TrueFoundry.UpdateUserRolesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the role assigned to a user in the current tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.updateRoles({
    email: "user@example.com",
    roles: ["tenant-admin"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.UpdateUserRolesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">get</a>(id) -> TrueFoundry.GetUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single user by their ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated user ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">delete</a>(id, { ...params }) -> TrueFoundry.DeleteUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a user by ID. The user must not be a collaborator on any resource and must not belong to any team other than "everyone".
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.delete("jqfwg345gi25n5ju2yz5iz6m", {
    tenantName: "tenantName"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated user ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.UsersDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">inviteUser</a>({ ...params }) -> TrueFoundry.InviteUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Invite a new user to the current tenant by email. Only available when the auth provider is managed by TrueFoundry.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.inviteUser({
    acceptInviteClientUrl: "https://app.example.com/invite-accept",
    email: "user@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.InviteUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">deactivate</a>({ ...params }) -> TrueFoundry.DeactivateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deactivate a user by email in the current tenant. The user will no longer be able to log in.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.deactivate({
    email: "user@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.DeactivateUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">activate</a>({ ...params }) -> TrueFoundry.ActivateUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-activate a previously deactivated user by email in the current tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.activate({
    email: "user@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ActivateUserRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">changePassword</a>({ ...params }) -> TrueFoundry.ChangePasswordResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change the password for the authenticated user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.changePassword({
    loginId: "user@example.com",
    newPassword: "newPassword",
    oldPassword: "oldPassword"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ChangePasswordRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.TeamDto, TrueFoundry.ListTeamsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List teams accessible to the current user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.teams.list({
    limit: 10,
    offset: 0,
    type: "team",
    role: "manager",
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.teams.list({
    limit: 10,
    offset: 0,
    type: "team",
    role: "manager",
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.TeamsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetTeamResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new team or update an existing one using the provided TeamManifest. Matching is by name — if the name matches an existing team it is updated, otherwise a new one is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.createOrUpdate({
    manifest: {
        type: "team",
        name: "name",
        members: ["members"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyTeamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">listMembers</a>(id, { ...params }) -> core.Page&lt;TrueFoundry.TeamSubjectRow, TrueFoundry.ListTeamMembersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List users who are members of a team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.teams.listMembers("jqfwg345gi25n5ju2yz5iz6m", {
    limit: 10,
    offset: 0,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"email\",\"op\":\"STRING_CONTAINS\",\"value\":\"@example.com\"}]}"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.teams.listMembers("jqfwg345gi25n5ju2yz5iz6m", {
    limit: 10,
    offset: 0,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"email\",\"op\":\"STRING_CONTAINS\",\"value\":\"@example.com\"}]}"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated team ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.TeamsListMembersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">listManagers</a>(id, { ...params }) -> core.Page&lt;TrueFoundry.TeamSubjectRow, TrueFoundry.ListTeamManagersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List users who hold the team-manager role on a team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.teams.listManagers("jqfwg345gi25n5ju2yz5iz6m", {
    limit: 10,
    offset: 0,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"email\",\"op\":\"STRING_CONTAINS\",\"value\":\"@example.com\"}]}"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.teams.listManagers("jqfwg345gi25n5ju2yz5iz6m", {
    limit: 10,
    offset: 0,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"email\",\"op\":\"STRING_CONTAINS\",\"value\":\"@example.com\"}]}"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated team ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.TeamsListManagersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">get</a>(id) -> TrueFoundry.GetTeamResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single team by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated team ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteTeamResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the team with the given ID. This action is irreversible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated team ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">getPermissions</a>(id) -> TrueFoundry.GetTeamPermissionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all role bindings associated with a team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.getPermissions("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated team ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## GatewayConfigs
<details><summary><code>client.gatewayConfigs.<a href="/src/api/resources/gatewayConfigs/client/Client.ts">get</a>(type) -> TrueFoundry.GatewayConfiguration</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the AI Gateway configuration for the given type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayConfigs.get("gateway-rate-limiting-config");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**type:** `TrueFoundry.GatewayConfigsGetRequestType` — The type of gateway configuration to retrieve or delete.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GatewayConfigsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.gatewayConfigs.<a href="/src/api/resources/gatewayConfigs/client/Client.ts">getBudgetUsage</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the current budget usage for every budget rule configured in the tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.gatewayConfigs.getBudgetUsage();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `GatewayConfigsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PersonalAccessTokens
<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.VirtualAccount, TrueFoundry.ListPersonalAccessTokenResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List personal access tokens created by the current user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.personalAccessTokens.list({
    limit: 10,
    offset: 0,
    nameSearchQuery: "ci-token"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.personalAccessTokens.list({
    limit: 10,
    offset: 0,
    nameSearchQuery: "ci-token"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.PersonalAccessTokensListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">create</a>({ ...params }) -> TrueFoundry.CreatePersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new personal access token for the current user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.personalAccessTokens.create({
    name: "my-ci-token"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreatePersonalAccessTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">revokeAll</a>({ ...params }) -> TrueFoundry.RevokeAllPersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke all personal access tokens belonging to the user with the given email. Requires tenant admin.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.personalAccessTokens.revokeAll({
    email: "alice@example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.RevokeAllPersonalAccessTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">delete</a>(id) -> TrueFoundry.DeletePersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the personal access token with the given ID. This action is irreversible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.personalAccessTokens.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">get</a>(name, { ...params }) -> TrueFoundry.GetOrCreatePersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an existing personal access token by name. If none exists, a new one is created and returned with a fresh token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.personalAccessTokens.get("name", {
    teamName: "teamName"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**name:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.PersonalAccessTokensGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokensClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## VirtualAccounts
<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.VirtualAccount, TrueFoundry.ListVirtualAccountResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List virtual accounts accessible to the current user.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.virtualAccounts.list({
    limit: 10,
    offset: 0,
    nameSearchQuery: "staging-bot",
    ownedByTeams: ["ownedByTeams"],
    isExpired: true,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"name\",\"op\":\"STRING_CONTAINS\",\"value\":\"bot\"}]}"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.virtualAccounts.list({
    limit: 10,
    offset: 0,
    nameSearchQuery: "staging-bot",
    ownedByTeams: ["ownedByTeams"],
    isExpired: true,
    filter: "{\"type\":\"AND\",\"children\":[{\"column\":\"name\",\"op\":\"STRING_CONTAINS\",\"value\":\"bot\"}]}"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.VirtualAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetVirtualAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new virtual account or update an existing one using the provided VirtualAccountManifest. Matching is by name — if the name matches an existing virtual account it is updated, otherwise a new one is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.createOrUpdate({
    manifest: {
        name: "name",
        type: "virtual-account",
        permissions: [{
                resource_fqn: "resource_fqn",
                resource_type: "resource_type",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyVirtualAccountRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">get</a>(id) -> TrueFoundry.GetVirtualAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single virtual account by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteVirtualAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the virtual account with the given ID. This action is irreversible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">getToken</a>(id) -> TrueFoundry.GetTokenForVirtualAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the current authentication token for a virtual account by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.getToken("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">syncToSecretStore</a>(id) -> TrueFoundry.SyncVirtualAccountTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sync the virtual account token to the configured secret store. Returns the sync metadata including timestamp and error (if any).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.syncToSecretStore("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">regenerateToken</a>(id, { ...params }) -> TrueFoundry.GetTokenForVirtualAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Regenerate the authentication token for a virtual account. The old token remains valid for the specified grace period.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.regenerateToken("jqfwg345gi25n5ju2yz5iz6m", {
    gracePeriodInDays: 30
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated service account ID.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.RegenerateVirtualAccountTokenRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">deleteJwt</a>(id, jwtId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific JWT token belonging to a virtual account. The virtual account itself is not affected.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.virtualAccounts.deleteJwt("jqfwg345gi25n5ju2yz5iz6m", "jwt_abc123def456");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated virtual account ID that owns the JWT.
    
</dd>
</dl>

<dl>
<dd>

**jwtId:** `string` — System-generated JWT ID to delete.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Clusters
<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Cluster, TrueFoundry.ListClustersResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List clusters the caller can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.clusters.list({
    limit: 10,
    offset: 0,
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.clusters.list({
    limit: 10,
    offset: 0,
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ClustersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetClusterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new cluster or update an existing one using the provided `ClusterManifest`. Matching is by `name` — if a cluster with the same name exists it is updated, otherwise a new one is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clusters.createOrUpdate({
    manifest: {
        type: "cluster",
        name: "name",
        cluster_type: "aws-eks",
        environment_names: ["environment_names"],
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateOrUpdateClusterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">get</a>(id) -> TrueFoundry.GetClusterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single cluster by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clusters.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the cluster.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteClusterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the cluster with the given ID. This action is irreversible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clusters.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the cluster.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">getAddons</a>(id, { ...params }) -> TrueFoundry.ListClusterAddonsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List addons installed on the cluster.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clusters.getAddons("id", {
    limit: 10,
    offset: 0,
    attributes: ["attributes"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the cluster.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.ClustersGetAddonsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">isConnected</a>(id) -> TrueFoundry.IsClusterConnectedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the connection status of the cluster agent to the control plane.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clusters.isConnected("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the cluster.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Applications
<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Application, TrueFoundry.ListApplicationsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List applications the caller can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.applications.list({
    limit: 10,
    offset: 0,
    applicationId: "applicationId",
    workspaceId: "workspaceId",
    applicationName: "applicationName",
    fqn: "fqn",
    workspaceFqn: "workspaceFqn",
    applicationType: "async-service",
    nameSearchQuery: "nameSearchQuery",
    environmentId: "environmentId",
    clusterId: "clusterId",
    applicationSetId: "applicationSetId",
    paused: true,
    deviceTypeFilter: "cpu",
    lastDeployedBySubjects: "lastDeployedBySubjects",
    lifecycleStage: "active",
    isRecommendationPresentAndVisible: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.applications.list({
    limit: 10,
    offset: 0,
    applicationId: "applicationId",
    workspaceId: "workspaceId",
    applicationName: "applicationName",
    fqn: "fqn",
    workspaceFqn: "workspaceFqn",
    applicationType: "async-service",
    nameSearchQuery: "nameSearchQuery",
    environmentId: "environmentId",
    clusterId: "clusterId",
    applicationSetId: "applicationSetId",
    paused: true,
    deviceTypeFilter: "cpu",
    lastDeployedBySubjects: "lastDeployedBySubjects",
    lifecycleStage: "active",
    isRecommendationPresentAndVisible: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplicationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetApplicationDeploymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deploy an application from a manifest. Create the application if it does not exist, otherwise create a new deployment version. Return the resulting deployment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.createOrUpdate({
    manifest: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateDeploymentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">get</a>(id) -> TrueFoundry.GetApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single application by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete an application. This action cannot be undone.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">redeploy</a>(id, deploymentId) -> TrueFoundry.GetApplicationDeploymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redeploy an application by creating a new deployment version using the same manifest as the specified deployment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.redeploy("id", "deploymentId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Unique identifier of the deployment
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">scaleToZero</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pause a running application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.scaleToZero("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">scaleToOriginal</a>(id) -> TrueFoundry.Deployment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resume a paused application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.scaleToOriginal("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">cancelDeployment</a>(id, deploymentId) -> TrueFoundry.ApplicationsCancelDeploymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel an in-progress deployment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applications.cancelDeployment("id", "deploymentId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Unique identifier of the deployment
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ApplicationVersions
<details><summary><code>client.applicationVersions.<a href="/src/api/resources/applicationVersions/client/Client.ts">list</a>(id, { ...params }) -> core.Page&lt;TrueFoundry.Deployment, TrueFoundry.ListApplicationDeploymentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List deployments for a given application. Each deployment is a new version of the application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.applicationVersions.list("id", {
    limit: 10,
    offset: 0,
    version: "1",
    deploymentId: "deployment123"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.applicationVersions.list("id", {
    limit: 10,
    offset: 0,
    version: "1",
    deploymentId: "deployment123"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.ApplicationVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.applicationVersions.<a href="/src/api/resources/applicationVersions/client/Client.ts">get</a>(id, deploymentId) -> TrueFoundry.GetApplicationDeploymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single deployment by application ID and deployment ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.applicationVersions.get("id", "deploymentId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Unique identifier of the deployment
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Jobs
<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">listRuns</a>(jobId, { ...params }) -> core.Page&lt;TrueFoundry.JobRun, TrueFoundry.ListJobRunResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Job Runs for provided Job Id. Filter the data based on parameters passed in the query
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.jobs.listRuns("jobId", {
    limit: 10,
    offset: 0,
    searchPrefix: "searchPrefix",
    sortBy: "startTime",
    order: "asc",
    triggeredBy: ["triggeredBy"],
    status: ["CREATED"],
    versionNumbers: [1.1]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.jobs.listRuns("jobId", {
    limit: 10,
    offset: 0,
    searchPrefix: "searchPrefix",
    sortBy: "startTime",
    order: "asc",
    triggeredBy: ["triggeredBy"],
    status: ["CREATED"],
    versionNumbers: [1.1]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — Job id of the application
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.JobsListRunsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">getRun</a>(jobId, jobRunName) -> TrueFoundry.GetJobRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Job Run for provided jobRunName and jobId
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.getRun("jobId", "jobRunName");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — Application Id of JOB
    
</dd>
</dl>

<dl>
<dd>

**jobRunName:** `string` — Job run name of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">deleteRun</a>(jobId, jobRunName) -> TrueFoundry.DeleteJobRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete Job Run for provided jobRunName and jobId
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.deleteRun("jobId", "jobRunName");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string` — Application Id of JOB
    
</dd>
</dl>

<dl>
<dd>

**jobRunName:** `string` — Job run name of the application
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">trigger</a>({ ...params }) -> TrueFoundry.TriggerJobRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger Job for provided deploymentId or applicationId
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.trigger();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.TriggerJobRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">terminate</a>({ ...params }) -> TrueFoundry.TerminateJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Terminate Job for provided deploymentId and jobRunName
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.terminate({
    deploymentId: "deploymentId",
    jobRunName: "jobRunName"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.JobsTerminateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Workspaces
<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Workspace, TrueFoundry.ListWorkspacesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List workspaces the caller can read.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.workspaces.list({
    limit: 10,
    offset: 0,
    clusterId: "jqfwg345gi25n5ju2yz5iz6m",
    name: "name",
    fqn: "fqn",
    includeCluster: true,
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.workspaces.list({
    limit: 10,
    offset: 0,
    clusterId: "jqfwg345gi25n5ju2yz5iz6m",
    name: "name",
    fqn: "fqn",
    includeCluster: true,
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.WorkspacesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetWorkspaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new workspace or update an existing one using the provided WorkspaceManifest. Matching is by name and cluster — if both match an existing workspace it is updated, otherwise a new one is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaces.createOrUpdate({
    manifest: {
        type: "workspace",
        cluster_fqn: "cluster_fqn",
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateOrUpdateWorkspaceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">search</a>({ ...params }) -> core.Page&lt;TrueFoundry.Workspace, TrueFoundry.ListWorkspacesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search workspaces using a structured filter expression. Return a paginated list of workspaces matching the filter criteria.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.workspaces.search({
    limit: 10,
    offset: 0,
    filter: "[{\"type\":\"name\",\"operator\":\"STRING_CONTAINS\",\"value\":\"prod\"}]",
    includeCluster: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.workspaces.search({
    limit: 10,
    offset: 0,
    filter: "[{\"type\":\"name\",\"operator\":\"STRING_CONTAINS\",\"value\":\"prod\"}]",
    includeCluster: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.WorkspacesSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">get</a>(id) -> TrueFoundry.GetWorkspaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single workspace by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaces.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated workspace ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteWorkspaceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the workspace with the given ID. This action is irreversible.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaces.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated workspace ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspacesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Environments
<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Environment, TrueFoundry.ListEnvironmentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List environments the caller can read within the tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.environments.list({
    limit: 10,
    offset: 0
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.environments.list({
    limit: 10,
    offset: 0
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.EnvironmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnvironmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetEnvironmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new environment or update an existing one using the provided `EnvironmentManifest`. Matching is by `name` — if an environment with the same name exists it is updated, otherwise a new one is created.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.createOrUpdate({
    manifest: {
        type: "environment",
        name: "name",
        color: {},
        isProduction: true,
        optimizeFor: "COST"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateOrUpdateEnvironmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnvironmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">get</a>(id) -> TrueFoundry.GetEnvironmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a single environment by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated environment ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnvironmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">delete</a>(id) -> boolean</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete the environment with the given ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.environments.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated environment ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EnvironmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Secrets
<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Secret, TrueFoundry.ListSecretsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List secrets the caller has access to.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.secrets.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.secrets.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ListSecretsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">get</a>(id) -> TrueFoundry.GetSecretResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the secret with the specified ID. The secret value is omitted if value viewing is disabled on the control plane.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secrets.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the secret.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">delete</a>(id, { ...params }) -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the secret and all its versions permanently.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secrets.delete("id", {
    forceDelete: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the secret.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.SecretsDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## SecretGroups
<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.SecretGroup, TrueFoundry.ListSecretGroupResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List secret groups the caller has access to, along with associated secrets for each group. Secret values are not included in the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.secretGroups.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    search: "search",
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.secretGroups.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    search: "search",
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.SecretGroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">create</a>({ ...params }) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a secret group with initial secrets.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secretGroups.create({
    name: "name",
    integrationId: "integrationId",
    secrets: [{
            key: "key",
            value: "value"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateSecretGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new secret group or update an existing one using the provided manifest. Matching is by name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secretGroups.createOrUpdate({
    manifest: {
        type: "secret-group",
        name: "name",
        integration_fqn: "integration_fqn",
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateOrUpdateSecretGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">get</a>(id) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a secret group by ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secretGroups.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the secret group.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">update</a>(id, { ...params }) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update secrets in a secret group. A new version is created for each secret with a modified value. Omitted secrets are deleted. Secret values are not returned in the response.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secretGroups.update("id", {
    secrets: [{
            key: "key"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the secret group.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.UpdateSecretGroupRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">delete</a>(id, { ...params }) -> TrueFoundry.DeleteSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the secret group and all its associated secrets and secret versions permanently.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.secretGroups.delete("id", {
    forceDelete: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the secret group.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.SecretGroupsDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">get</a>({ ...params }) -> TrueFoundry.GetEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get events for an application, filtered by pod names, job run, or time range.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.get({
    startTs: "startTs",
    endTs: "endTs",
    applicationId: "applicationId",
    applicationFqn: "applicationFqn",
    podNames: ["podNames"],
    jobRunName: "jobRunName"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.EventsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Alerts
<details><summary><code>client.alerts.<a href="/src/api/resources/alerts/client/Client.ts">list</a>({ ...params }) -> TrueFoundry.GetAlertsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get alerts for a given application or cluster filtered by start and end timestamp
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.alerts.list({
    startTs: "startTs",
    endTs: "endTs",
    clusterId: "clusterId",
    applicationId: "applicationId",
    alertStatus: "firing"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.AlertsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AlertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Agents
<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Agent, TrueFoundry.ListAgentsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all Agents for a tenant.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agents.list({
    limit: 10,
    offset: 0,
    name: "name",
    namePrefix: "namePrefix",
    type: "remote-agent",
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agents.list({
    limit: 10,
    offset: 0,
    name: "name",
    namePrefix: "namePrefix",
    type: "remote-agent",
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.AgentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetAgentVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or Update an Agent.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.createOrUpdate({
    manifest: {
        type: "truefoundry-agent",
        name: "name",
        description: "description",
        model: {
            name: "name"
        },
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateOrUpdateAgentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">get</a>(id) -> TrueFoundry.GetAgentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific Agent by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated agent ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">delete</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an Agent by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated agent ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AgentVersions
<details><summary><code>client.agentVersions.<a href="/src/api/resources/agentVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.AgentVersion, TrueFoundry.ListAgentVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Agent Versions for the provided agent id
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agentVersions.list({
    limit: 10,
    offset: 0,
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agentVersions.list({
    limit: 10,
    offset: 0,
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.AgentVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Prompts
<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">get</a>(id) -> TrueFoundry.GetPromptResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a prompt by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the prompt.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a prompt by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the prompt.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Prompt, TrueFoundry.ListPromptsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List prompts with optional filtering by FQN, ML Repo, or name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.prompts.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    include_empty_prompts: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.prompts.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    include_empty_prompts: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.PromptsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetPromptVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a prompt version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.createOrUpdate({
    manifest: {
        metadata: {
            "key": "value"
        },
        type: "chat_prompt",
        messages: [{
                role: "system",
                content: "content"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyPromptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PromptVersions
<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.PromptVersion, TrueFoundry.ListPromptVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List prompt versions with optional filtering by tag, FQN, prompt ID, ML Repo, name, or version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.promptVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    prompt_id: "prompt_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.promptVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    prompt_id: "prompt_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.PromptVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">applyTags</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply tags to a prompt version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promptVersions.applyTags({
    prompt_version_id: "prompt_version_id",
    tags: ["tags"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyPromptVersionTagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetPromptVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a prompt version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promptVersions.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Prompt version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a prompt version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.promptVersions.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Prompt version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Artifacts
<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">get</a>(id) -> TrueFoundry.GetArtifactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an artifact by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.get("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated artifact ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an artifact by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.delete("jqfwg345gi25n5ju2yz5iz6m");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated artifact ID.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Artifact, TrueFoundry.ListArtifactsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List artifacts with optional filtering by FQN, ML Repo, name, or run ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.artifacts.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    run_id: "run_id",
    include_empty_artifacts: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifacts.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    run_id: "run_id",
    include_empty_artifacts: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ArtifactsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetArtifactVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update an artifact version from a manifest.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.createOrUpdate({
    manifest: {
        metadata: {
            "key": "value"
        },
        type: "artifact-version",
        source: {
            type: "truefoundry"
        },
        step: 1
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyArtifactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ArtifactVersions
<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.ArtifactVersion, TrueFoundry.ListArtifactVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List artifact versions with optional filtering by tag, FQN, artifact ID, ML Repo, name, version, run IDs, or run steps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.artifactVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    artifact_id: "artifact_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifactVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    artifact_id: "artifact_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ArtifactVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">applyTags</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply tags to an artifact version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.applyTags({
    artifact_version_id: "artifact_version_id",
    tags: ["tags"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyArtifactVersionTagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">getSignedUrls</a>({ ...params }) -> TrueFoundry.GetSignedUrLsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get pre-signed URLs for reading or writing files in an artifact version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.getSignedUrls({
    id: "id",
    paths: ["paths"],
    operation: "READ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.GetSignedUrLsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">createMultiPartUpload</a>({ ...params }) -> TrueFoundry.MultiPartUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a multipart upload for large files in an artifact version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.createMultiPartUpload({
    id: "id",
    path: "path",
    num_parts: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateMultiPartUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">listFiles</a>({ ...params }) -> core.Page&lt;TrueFoundry.FileInfo, TrueFoundry.ListFilesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List files and directories in an artifact version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.artifactVersions.listFiles({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifactVersions.listFiles({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ListFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">stage</a>({ ...params }) -> TrueFoundry.StageArtifactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stage an artifact version for upload, returning storage location and version ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.stage({
    manifest: {
        metadata: {
            "key": "value"
        },
        type: "artifact-version",
        source: {
            type: "truefoundry"
        },
        step: 1
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.StageArtifactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">markStageFailure</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a staged artifact version as failed.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.markStageFailure({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.MarkStageArtifactFailureRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetArtifactVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an artifact version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Artifact version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an artifact version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Artifact version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## MlRepos
<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">get</a>(id) -> TrueFoundry.GetMlRepoResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an ML Repo by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mlRepos.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ML Repo Id
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlReposClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an ML Repo by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mlRepos.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — ML Repo Id
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlReposClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.MlRepo, TrueFoundry.ListMlReposResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List ML Repos with optional filtering by name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.mlRepos.list({
    limit: 10,
    offset: 0,
    name: "name",
    attributes: ["attributes"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.mlRepos.list({
    limit: 10,
    offset: 0,
    name: "name",
    attributes: ["attributes"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.MlReposListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlReposClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetMlRepoResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates an MLRepo entity based on the provided manifest.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mlRepos.createOrUpdate({
    manifest: {
        type: "ml-repo",
        name: "name",
        storage_integration_fqn: "storage_integration_fqn",
        collaborators: [{
                subject: "subject",
                role_id: "role_id"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyMlRepoRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlReposClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## DataDirectories
<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.DataDirectory, TrueFoundry.ListDataDirectoriesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List data directories with optional filtering by FQN, ML Repo, or name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.dataDirectories.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dataDirectories.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.DataDirectoriesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetDataDirectoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a data directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.createOrUpdate({
    manifest: {
        type: "data-dir",
        name: "name",
        ml_repo: "ml_repo",
        metadata: {
            "key": "value"
        },
        source: {
            type: "truefoundry"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyDataDirectoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">listFiles</a>({ ...params }) -> core.Page&lt;TrueFoundry.FileInfo, TrueFoundry.ListFilesResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List files and directories in a data directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.dataDirectories.listFiles({
    id: "id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dataDirectories.listFiles({
    id: "id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ListFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">deleteFiles</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete files from a data directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.deleteFiles({
    id: "id",
    paths: ["paths"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.DeleteFilesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">createMultipartUpload</a>({ ...params }) -> TrueFoundry.MultiPartUploadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a multipart upload for large files in a data directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.createMultipartUpload({
    id: "id",
    path: "path",
    num_parts: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateMultiPartUploadRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">getSignedUrls</a>({ ...params }) -> TrueFoundry.GetSignedUrLsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get pre-signed URLs for reading or writing files in a data directory.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.getSignedUrls({
    id: "id",
    paths: ["paths"],
    operation: "READ"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.GetSignedUrLsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">get</a>(id) -> TrueFoundry.GetDataDirectoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a data directory by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Data directory ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a data directory, optionally including its contents.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataDirectories.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Data directory ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Runs
<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">create</a>({ ...params }) -> TrueFoundry.CreateRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new run within an ML Repo.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.create({
    experiment_id: "experiment_id",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.CreateRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">getColumns</a>({ ...params }) -> TrueFoundry.GetRunColumnsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List distinct metric, parameter, and tag keys for runs in an ML Repo.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.getColumns({
    experiment_id: "experiment_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.RunsGetColumnsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">get</a>(id) -> TrueFoundry.GetRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get metadata, metrics, params, and tags for a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">update</a>(id, { ...params }) -> TrueFoundry.UpdateRunResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update run status, end time, or description.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.update("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.UpdateRunRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete a run and its metadata.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">search</a>({ ...params }) -> core.Page&lt;TrueFoundry.Run, TrueFoundry.SearchRunsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search runs across ML Repos with optional filters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.runs.search();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.runs.search();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.SearchRunsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">archive</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.archive("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">restore</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Restore an archived run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.restore("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">getMetricHistory</a>(id, { ...params }) -> TrueFoundry.GetMetricHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get full time-series history for a metric key on a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.getMetricHistory("id", {
    metric_key: "metric_key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.RunsGetMetricHistoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">listMetricHistory</a>(id, { ...params }) -> TrueFoundry.ListMetricHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List metric histories for a run, optionally filtered by keys and step.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.listMetricHistory("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.ListMetricHistoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">logMetric</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Log a metric for a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.logMetric("id", {
    key: "key",
    value: 1.1,
    timestamp: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.LogMetricRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">logParameter</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Log a parameter for a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.logParameter("id", {
    key: "key",
    value: "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.LogParamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">setTag</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Set a tag on a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.setTag("id", {
    key: "key",
    value: "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.SetTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">deleteTag</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a tag from a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.deleteTag("id", {
    key: "key"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.DeleteTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">logBatch</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Log a batch of metrics, params, and tags for a run.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.logBatch("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — System-generated unique identifier for the run.
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.LogBatchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Models
<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">get</a>(id) -> TrueFoundry.GetModelResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a model by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the model.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a model by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the model.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.Model, TrueFoundry.ListModelsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List models with optional filtering by FQN, ML Repo, name, or run ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.models.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    run_id: "run_id",
    include_empty_models: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.models.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    run_id: "run_id",
    include_empty_models: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ModelsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetModelVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a model version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.createOrUpdate({
    manifest: {
        metadata: {
            "key": "value"
        },
        type: "model-version",
        source: {
            type: "truefoundry"
        },
        step: 1
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyModelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ModelVersions
<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.ModelVersion, TrueFoundry.ListModelVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List model versions with optional filtering by tag, FQN, model ID, ML Repo, name, version, run IDs, or run steps.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.modelVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    model_id: "model_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.modelVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    model_id: "model_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ModelVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">applyTags</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply tags to a model version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelVersions.applyTags({
    model_version_id: "model_version_id",
    tags: ["tags"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyModelVersionTagsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetModelVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a model version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelVersions.get("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Model version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a model version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.modelVersions.delete("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Model version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Logs
<details><summary><code>client.logs.<a href="/src/api/resources/logs/client/Client.ts">get</a>({ ...params }) -> TrueFoundry.GetLogsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get runtime logs (stdout/stderr) emitted by the pods of a deployed application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.logs.get({
    startTs: "1779262323000000000",
    endTs: "1779348723000000000",
    limit: 1,
    direction: "asc",
    numLogsToIgnore: 1,
    applicationId: "applicationId",
    applicationFqn: "applicationFqn",
    deploymentId: "deploymentId",
    jobRunName: "jobRunName",
    podName: "podName",
    containerName: "containerName",
    podNames: ["podNames"],
    podNamesRegex: "podNamesRegex",
    searchFilters: "[{\"string\":\"error\",\"type\":\"substring\",\"operator\":\"equal\"}]",
    searchString: "searchString",
    searchType: "regex",
    searchOperator: "equal"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.LogsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AgentSkills
<details><summary><code>client.agentSkills.<a href="/src/api/resources/agentSkills/client/Client.ts">get</a>(agent_skill_id) -> TrueFoundry.GetAgentSkillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an agent skill by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentSkills.get("agent_skill_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_skill_id:** `string` — Identifier of the agent skill.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agentSkills.<a href="/src/api/resources/agentSkills/client/Client.ts">delete</a>(agent_skill_id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an agent skill by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentSkills.delete("agent_skill_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_skill_id:** `string` — Identifier of the agent skill.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agentSkills.<a href="/src/api/resources/agentSkills/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.AgentSkill, TrueFoundry.ListAgentSkillsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List agent skills with optional filtering by FQN, ML Repo, or name.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agentSkills.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    include_empty_agent_skills: true
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agentSkills.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    ml_repo_id: "ml_repo_id",
    name: "name",
    include_empty_agent_skills: true
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.AgentSkillsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agentSkills.<a href="/src/api/resources/agentSkills/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetAgentSkillVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update an agent skill version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentSkills.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            "key": "value"
        },
        ml_repo: "ml_repo",
        type: "agent-skill",
        source: {
            type: "inline",
            skill_md: "skill_md"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.ApplyAgentSkillRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AgentSkillVersions
<details><summary><code>client.agentSkillVersions.<a href="/src/api/resources/agentSkillVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.AgentSkillVersion, TrueFoundry.ListAgentSkillVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List agent skill versions with optional filtering by FQN, agent skill ID, ML Repo, name, or version.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.agentSkillVersions.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    agent_skill_id: "agent_skill_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: "latest"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.agentSkillVersions.list({
    limit: 10,
    offset: 0,
    fqn: "fqn",
    agent_skill_id: "agent_skill_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: "latest"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.AgentSkillVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agentSkillVersions.<a href="/src/api/resources/agentSkillVersions/client/Client.ts">get</a>(agent_skill_version_id) -> TrueFoundry.GetAgentSkillVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an agent skill version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentSkillVersions.get("agent_skill_version_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_skill_version_id:** `string` — Agent skill version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.agentSkillVersions.<a href="/src/api/resources/agentSkillVersions/client/Client.ts">delete</a>(agent_skill_version_id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an agent skill version by its ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agentSkillVersions.delete("agent_skill_version_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agent_skill_version_id:** `string` — Agent skill version ID
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentSkillVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Traces
<details><summary><code>client.traces.<a href="/src/api/resources/traces/client/Client.ts">querySpans</a>({ ...params }) -> core.Page&lt;TrueFoundry.TraceSpan, TrueFoundry.QuerySpansResponse&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.traces.querySpans({
    startTime: "startTime"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.traces.querySpans({
    startTime: "startTime"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.QuerySpansRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TracesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Clusters
<details><summary><code>client.internal.clusters.<a href="/src/api/resources/internal/resources/clusters/client/Client.ts">getAutoprovisioningState</a>(id) -> TrueFoundry.GetAutoProvisioningStateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the auto-provisioning status for the specified cluster.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.clusters.getAutoprovisioningState("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the cluster.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClustersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Deployments
<details><summary><code>client.internal.deployments.<a href="/src/api/resources/internal/resources/deployments/client/Client.ts">getDeploymentStatuses</a>(id, deploymentId) -> TrueFoundry.DeploymentStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all statuses for a specific deployment of an application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.deployments.getDeploymentStatuses("id", "deploymentId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Unique identifier of the deployment
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.deployments.<a href="/src/api/resources/internal/resources/deployments/client/Client.ts">getBuilds</a>(id, deploymentId) -> TrueFoundry.DeploymentBuild[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all builds associated with a specific deployment of an application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.deployments.getBuilds("id", "deploymentId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Unique identifier of the deployment
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.deployments.<a href="/src/api/resources/internal/resources/deployments/client/Client.ts">getCodeUploadUrl</a>({ ...params }) -> TrueFoundry.PresignedUrlObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate presigned URL to upload code for given serviceName and workspaceFqn
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.deployments.getCodeUploadUrl({
    serviceName: "serviceName",
    workspaceFqn: "workspaceFqn"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.GenerateCodeUploadPresignedUrlRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.deployments.<a href="/src/api/resources/internal/resources/deployments/client/Client.ts">getSuggestedEndpoint</a>({ ...params }) -> TrueFoundry.GetSuggestedDeploymentEndpointResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate deployment endpoint based on the provided query parameters.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.deployments.getSuggestedEndpoint({
    applicationType: "async-service",
    applicationName: "applicationName",
    workspaceId: "workspaceId",
    baseDomain: "baseDomain",
    port: "port",
    preferWildcard: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.DeploymentsGetSuggestedEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DeploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Applications
<details><summary><code>client.internal.applications.<a href="/src/api/resources/internal/resources/applications/client/Client.ts">promoteRollout</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Promote an application rollout for canary and blue-green.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.applications.promoteRollout("id", {
    full: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.ApplicationsPromoteRolloutRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.applications.<a href="/src/api/resources/internal/resources/applications/client/Client.ts">getPodTemplateHashToDeploymentVersion</a>(id, { ...params }) -> Record&lt;string, number&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the pod template hash to deployment version map for a specific application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.applications.getPodTemplateHashToDeploymentVersion("id", {
    podTemplateHashes: "podTemplateHashes"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Unique identifier of the application
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.ApplicationsGetPodTemplateHashToDeploymentVersionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Metrics
<details><summary><code>client.internal.metrics.<a href="/src/api/resources/internal/resources/metrics/client/Client.ts">getCharts</a>(workspaceId, { ...params }) -> TrueFoundry.GetChartsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List metric charts available for an application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.metrics.getCharts("workspaceId", {
    applicationId: "applicationId",
    startTs: "startTs",
    endTs: "endTs",
    filterEntity: "application",
    filterQuery: "{\"pod\":\"my-app-abc123-xyz\"}"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**workspaceId:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.MetricsGetChartsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MetricsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Vcs
<details><summary><code>client.internal.vcs.<a href="/src/api/resources/internal/resources/vcs/client/Client.ts">getRepositoryDetails</a>({ ...params }) -> TrueFoundry.GitRepositoryExistsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.vcs.getRepositoryDetails({
    repoURL: "repoURL"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.GitRepositoryExistsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VcsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.vcs.<a href="/src/api/resources/internal/resources/vcs/client/Client.ts">getAuthenticatedUrl</a>({ ...params }) -> TrueFoundry.GetAuthenticatedVcsurlResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.vcs.getAuthenticatedUrl({
    repoURL: "repoURL"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.GetAuthenticatedVcsurlRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VcsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal ArtifactVersions
<details><summary><code>client.internal.artifactVersions.<a href="/src/api/resources/internal/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;TrueFoundry.InternalListArtifactVersionsResponseDataItem, TrueFoundry.InternalListArtifactVersionsResponse&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List artifact versions with internal metadata, optionally including model versions.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.internal.artifactVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    artifact_id: "artifact_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true,
    include_model_versions: true,
    artifact_types: ["artifact"]
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.internal.artifactVersions.list({
    limit: 10,
    offset: 0,
    tag: "tag",
    fqn: "fqn",
    artifact_id: "artifact_id",
    ml_repo_id: "ml_repo_id",
    name: "name",
    version: 1,
    run_ids: ["run_ids"],
    run_steps: [1.1],
    include_internal_metadata: true,
    include_model_versions: true,
    artifact_types: ["artifact"]
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.ArtifactVersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal DockerRegistries
<details><summary><code>client.internal.dockerRegistries.<a href="/src/api/resources/internal/resources/dockerRegistries/client/Client.ts">createRepository</a>({ ...params }) -> TrueFoundry.CreateDockerRepositoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a docker repository in the provided workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.dockerRegistries.createRepository({
    fqn: "fqn",
    applicationName: "applicationName",
    workspaceFqn: "workspaceFqn"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.CreateDockerRepositoryRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DockerRegistriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internal.dockerRegistries.<a href="/src/api/resources/internal/resources/dockerRegistries/client/Client.ts">getCredentials</a>({ ...params }) -> TrueFoundry.GetDockerRegistryCredentialsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get docker registry credentials for building and pushing an image.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.dockerRegistries.getCredentials({
    fqn: "fqn",
    clusterId: "clusterId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.internal.DockerRegistriesGetCredentialsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DockerRegistriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Workflows
<details><summary><code>client.internal.workflows.<a href="/src/api/resources/internal/resources/workflows/client/Client.ts">executeWorkflow</a>(applicationId, { ...params }) -> TrueFoundry.WorkflowsExecuteWorkflowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Execute a workflow for the specified application
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.workflows.executeWorkflow("applicationId");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**applicationId:** `string` — Id of the application
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.ExecuteWorkflowRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal BuildLogs
<details><summary><code>client.internal.buildLogs.<a href="/src/api/resources/internal/resources/buildLogs/client/Client.ts">get</a>(pipelineRunName, { ...params }) -> TrueFoundry.LogsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get logs emitted by the image build and deploy pipeline for a specific build of an application.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.buildLogs.get("pipelineRunName", {
    startTs: "1635467890123456789",
    endTs: "1635467891123456789",
    limit: "limit",
    direction: "direction",
    filterQuery: "{\"matchString\":\"error\",\"type\":\"substring\",\"operator\":\"equal\"}",
    numLogsToIgnore: 1.1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**pipelineRunName:** `string` — PipelineRun Name
    
</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.BuildLogsGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BuildLogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

