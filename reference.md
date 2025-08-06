# Reference

<details><summary><code>client.<a href="/src/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes resources of specific types, such as provider-account, cluster, workspace, or application.

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
        storageIntegrationFqn: "storage_integration_fqn",
        collaborators: [
            {
                subject: "subject",
                roleId: "role_id",
            },
        ],
    },
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

##

## Internal

<details><summary><code>client.internal.<a href="/src/api/resources/internal/client/Client.ts">getIdFromFqn</a>(type_, { ...params }) -> Record<string, unknown></code></summary>
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
    fqn: "fqn",
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

**type\_:** `string` — Entity Type

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.InternalGetIdFromFqnRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Internal.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.User></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all users of tenant filtered by query and showInvalidUsers. Pagination is available based on query parameters.

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
const response = await client.users.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.users.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Users.RequestOptions`

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

This endpoint allows tenant administrators to register users within their tenant.

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
    email: "email",
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

**requestOptions:** `Users.RequestOptions`

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

This endpoint allows tenant administrators to update the roles of a user within their tenant.

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
    email: "email",
    roles: ["roles"],
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

**requestOptions:** `Users.RequestOptions`

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

Get User associated with provided User id

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
await client.users.get("id");
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

**id:** `string` — User Id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

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

Invite a user to the tenant

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
    acceptInviteClientUrl: "<control plane url>/invite-accept",
    email: "email",
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

**requestOptions:** `Users.RequestOptions`

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

Deactivate user associated with the provided email within the tenant.

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
    email: "email",
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

**requestOptions:** `Users.RequestOptions`

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

Activate user associated with the provided email within the tenant.

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
    email: "email",
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

**requestOptions:** `Users.RequestOptions`

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

Change password for the authenticated user. Requires clientId and loginId in the request body.

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
    loginId: "loginId",
    newPassword: "newPassword",
    oldPassword: "oldPassword",
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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Teams

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Team></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all teams associated with the authenticated user. If the user is a tenant admin, returns all teams for the tenant. Pagination is available based on query parameters

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
const response = await client.teams.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.teams.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Teams.RequestOptions`

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

Creates a new team or updates an existing team. It ensures that the team name is unique, valid, and that the team has at least one member. The members of the team are added or updated based on the provided emails.

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
        members: ["members"],
    },
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

**requestOptions:** `Teams.RequestOptions`

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

Get Team associated with provided team id

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
await client.teams.get("id");
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

**id:** `string` — Team Id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

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

Deletes the Team associated with the provided Id.

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
await client.teams.delete("id");
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

**id:** `string` — Team Id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PersonalAccessTokens

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.VirtualAccount></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Personal Access Tokens created by the user in the current tenant.

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
const response = await client.personalAccessTokens.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.personalAccessTokens.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `PersonalAccessTokens.RequestOptions`

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

Create Personal Access Token

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
    name: "name",
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

**requestOptions:** `PersonalAccessTokens.RequestOptions`

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

Delete Personal Access Token associated with the provided serviceAccountId

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
await client.personalAccessTokens.delete("id");
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

**id:** `string` — serviceaccount id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PersonalAccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.personalAccessTokens.<a href="/src/api/resources/personalAccessTokens/client/Client.ts">get</a>(name) -> TrueFoundry.GetOrCreatePersonalAccessTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an existing Personal Access Token by name, if it doesn't exist, it will create a new one and return the PAT data along with a fresh token.

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
await client.personalAccessTokens.get("name");
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

**requestOptions:** `PersonalAccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## VirtualAccounts

<details><summary><code>client.virtualAccounts.<a href="/src/api/resources/virtualAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.VirtualAccount></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List virtual accounts for the tenant.

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
const response = await client.virtualAccounts.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.virtualAccounts.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `VirtualAccounts.RequestOptions`

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

Creates a new virtual account or updates an existing one based on the provided manifest.

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
        permissions: [
            {
                resourceFqn: "resource_fqn",
                resourceType: "resource_type",
                roleId: "role_id",
            },
        ],
    },
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

**requestOptions:** `VirtualAccounts.RequestOptions`

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

Get virtual account by id

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
await client.virtualAccounts.get("id");
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

**id:** `string` — serviceaccount id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccounts.RequestOptions`

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

Delete a virtual account associated with the provided virtual account id.

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
await client.virtualAccounts.delete("id");
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

**id:** `string` — serviceaccount id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VirtualAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Secrets

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Secret></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List secrets associated with a user filtered with optional parameters passed in the body.

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
const response = await client.secrets.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.secrets.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Secrets.RequestOptions`

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

Get Secret associated with provided id. The secret value is not returned if the control plane has `DISABLE_SECRET_VALUE_VIEW` set

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

**id:** `string` — Secret Id of the secret.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secrets.<a href="/src/api/resources/secrets/client/Client.ts">delete</a>(id) -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a secret and its versions along with its values.

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
await client.secrets.delete("id");
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

**id:** `string` — Secret Id of the secret.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Secrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## SecretGroups

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.SecretGroup></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the secret groups associated with a user along with the associated secrets for each group. Filtered with the options passed in the query fields. Note: This method does not return the secret values of the <em>associatedSecrets</em> in the response. A separate API call to `/v1/secrets/{id}` should be made to fetch the associated secret value.

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
const response = await client.secretGroups.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.secretGroups.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `SecretGroups.RequestOptions`

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

Creates a secret group with secrets in it. A secret version for each of the created secret is created with version number as 1. The returned secret group does not have any secret values in the <em>associatedSecrets</em> field. A separate API call to `/v1/secrets/{id}` should be made to fetch the associated secret value.

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
    secrets: [
        {
            key: "key",
            value: "value",
        },
    ],
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

**requestOptions:** `SecretGroups.RequestOptions`

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

Get Secret Group by id. This method does not return the secret values of the <em>associatedSecrets</em> in the response. A separate API call to `/v1/secrets/{id}` should be made to fetch the associated secret value.

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

**id:** `string` — Secret Id of the secret group.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroups.RequestOptions`

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

Updates the secrets in a secret group with new values. A new secret version is created for every secret that has a modified value and any omitted secrets are deleted. The returned updated secret group does not have any secret values in the <em>associatedSecrets</em> field. A separate API call to `/v1/secrets/{id}` should be made to fetch the associated secret value.

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
    secrets: [
        {
            key: "key",
        },
    ],
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

**id:** `string` — Secret Id of the secret group.

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.UpdateSecretGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.secretGroups.<a href="/src/api/resources/secretGroups/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the secret group, its associated secrets and secret versions of those secrets.

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
await client.secretGroups.delete("id");
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

**id:** `string` — Secret Id of the secret group.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SecretGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Clusters

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Cluster></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all latest Clusters. Pagination is available based on query parameters.

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
const response = await client.clusters.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.clusters.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Clusters.RequestOptions`

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

Create or Update cluster with provided manifest

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
        clusterType: "aws-eks",
        environmentNames: ["environment_names"],
        collaborators: [
            {
                subject: "subject",
                roleId: "role_id",
            },
        ],
    },
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

**requestOptions:** `Clusters.RequestOptions`

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

Get cluster associated with provided id

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

**id:** `string` — Cluster id of the cluster

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clusters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clusters.<a href="/src/api/resources/clusters/client/Client.ts">delete</a>(id) -> TrueFoundry.ClustersDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete cluster associated with provided cluster id

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

**id:** `string` — Cluster id of the cluster

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clusters.RequestOptions`

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

List addons for the provided cluster.Pagination is available based on query parameters.

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

**id:** `string` — Cluster id of the cluster

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.ClustersGetAddonsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clusters.RequestOptions`

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

Get the status of provided cluster

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

**id:** `string` — Cluster id of the cluster

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clusters.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Environments

<details><summary><code>client.environments.<a href="/src/api/resources/environments/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Environment></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List environments, if no environments are found, default environments are created and returned. Pagination is available based on query parameters

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
const response = await client.environments.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.environments.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Environments.RequestOptions`

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

Creates a new Environment or updates an existing Environment.

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
        optimizeFor: "COST",
    },
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

**requestOptions:** `Environments.RequestOptions`

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

Get Environment associated with the provided id.

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
await client.environments.get("id");
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

**id:** `string` — Environment id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

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

Delete Environment associated with the provided id.

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
await client.environments.delete("id");
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

**id:** `string` — Environment id

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Environments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Applications

<details><summary><code>client.applications.<a href="/src/api/resources/applications/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Application></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a list of all latest applications. Supports filtering by application ID, name, type, and other parameters. Pagination is available based on query parameters.

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
const response = await client.applications.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.applications.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Applications.RequestOptions`

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

Create a new Application Deployment based on the provided manifest.

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
        key: "value",
    },
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

**requestOptions:** `Applications.RequestOptions`

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

Get Application associated with the provided application ID.

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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

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

Delete Application associated with the provided application ID.

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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

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

Pause a running application by scaling to 0 replicas

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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

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

Resume a paused application by scaling back to the original number of replicas

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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

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

Cancel an ongoing deployment associated with the provided application ID and deployment ID.

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

**id:** `string` — Application id of the application

</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Deployment id of the deployment

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ApplicationVersions

<details><summary><code>client.applicationVersions.<a href="/src/api/resources/applicationVersions/client/Client.ts">list</a>(id, { ...params }) -> core.Page<TrueFoundry.Deployment></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch all deployments for a given application ID with optional filters such as deployment ID or version. Supports pagination.

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
const response = await client.applicationVersions.list("id", {
    limit: 10,
    offset: 0,
    version: "1",
    deploymentId: "deployment123",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.applicationVersions.list("id", {
    limit: 10,
    offset: 0,
    version: "1",
    deploymentId: "deployment123",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.ApplicationVersionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationVersions.RequestOptions`

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

Get Deployment associated with the provided application ID and deployment ID.

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

**id:** `string` — Application id of the application

</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Deployment id of the deployment

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">listRuns</a>(jobId, { ...params }) -> core.Page<TrueFoundry.JobRun></code></summary>
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
const response = await client.jobs.listRuns("jobId", {
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.jobs.listRuns("jobId", {
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Jobs.RequestOptions`

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

**requestOptions:** `Jobs.RequestOptions`

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

**requestOptions:** `Jobs.RequestOptions`

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

**requestOptions:** `Jobs.RequestOptions`

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
    jobRunName: "jobRunName",
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

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Workspaces

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Workspace></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List workspaces associated with the user. Optional filters include clusterId, fqn, and workspace name. Pagination is available based on query parameters.

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
const response = await client.workspaces.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.workspaces.list({
    limit: 10,
    offset: 0,
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Workspaces.RequestOptions`

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

Creates a new workspace or updates an existing one based on the provided manifest.

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
        clusterFqn: "cluster_fqn",
        name: "name",
    },
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

**request:** `TrueFoundry.WorkspaceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

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

Get workspace associated with provided workspace id

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
await client.workspaces.get("id");
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

**id:** `string` — Workspace id of the space

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workspaces.<a href="/src/api/resources/workspaces/client/Client.ts">delete</a>(id) -> TrueFoundry.WorkspacesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the workspace with the given workspace ID. - Removes the associated namespace from the cluster. - Deletes the corresponding authorization entry.

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
await client.workspaces.delete("id");
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

**id:** `string` — Workspace id of the space

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

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

Fetch logs for various workload components, including Services, Jobs, Workflows, Job Runs, and Pods. Logs are filtered based on the provided query parameters.

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
await client.logs.get();
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

**requestOptions:** `Logs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MlRepos

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
        storageIntegrationFqn: "storage_integration_fqn",
        collaborators: [
            {
                subject: "subject",
                roleId: "role_id",
            },
        ],
    },
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

**requestOptions:** `MlRepos.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">get</a>(id) -> TrueFoundry.GetMlRepoResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a ml repo by id
Args:
id: Unique identifier of the ml repo to get
user_info: Authenticated user information

Returns:
GetMLRepoResponse: The ml repo

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlRepos.RequestOptions`

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

Delete a ml repo
Args:
id: Unique identifier of the ml repo to delete
user_info: Authenticated user information

Returns:
EmptyResponse: Empty response indicating successful deletion

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlRepos.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.mlRepos.<a href="/src/api/resources/mlRepos/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.MlRepo></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List ml repos
Args:
filters: Filters for the ml repos
user_info: Authenticated user information

Returns:
ListMLReposResponse: List of ml repos

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
const response = await client.mlRepos.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.mlRepos.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `MlRepos.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Artifact></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.artifacts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifacts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Artifacts.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "artifact-version",
        source: {
            type: "truefoundry",
        },
    },
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

**requestOptions:** `Artifacts.RequestOptions`

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Prompt></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.prompts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.prompts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Prompts.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "chat_prompt",
        messages: [
            {
                role: "system",
                content: "content",
            },
        ],
    },
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

**requestOptions:** `Prompts.RequestOptions`

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Model></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.models.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.models.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `Models.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "model-version",
        source: {
            type: "truefoundry",
        },
    },
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

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ArtifactVersions

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetArtifactVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get artifact version API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersions.RequestOptions`

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

Delete artifact versions API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArtifactVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.ArtifactVersion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List artifact version API

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
const response = await client.artifactVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifactVersions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `ArtifactVersions.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.getSignedUrls({
    id: "id",
    paths: ["paths"],
    operation: "READ",
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

**requestOptions:** `ArtifactVersions.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.createMultiPartUpload({
    id: "id",
    path: "path",
    numParts: 1,
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

**requestOptions:** `ArtifactVersions.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.stage({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "model-version",
        source: {
            type: "truefoundry",
        },
    },
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

**requestOptions:** `ArtifactVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifactVersions.<a href="/src/api/resources/artifactVersions/client/Client.ts">listFiles</a>({ ...params }) -> core.Page<TrueFoundry.FileInfo></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.artifactVersions.listFiles({
    id: "id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.artifactVersions.listFiles({
    id: "id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `ArtifactVersions.RequestOptions`

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

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifactVersions.markStageFailure({
    id: "id",
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

**requestOptions:** `ArtifactVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ModelVersions

<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetModelVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get model version API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersions.RequestOptions`

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

Delete model versions API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ModelVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.modelVersions.<a href="/src/api/resources/modelVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.ModelVersion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List model version API

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
const response = await client.modelVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.modelVersions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `ModelVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PromptVersions

<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetPromptVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get prompt version API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersions.RequestOptions`

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

Delete prompt versions API

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PromptVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.promptVersions.<a href="/src/api/resources/promptVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.PromptVersion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List prompt version API

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
const response = await client.promptVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.promptVersions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `PromptVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DataDirectories

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">get</a>(id) -> TrueFoundry.GetDataDirectoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a data directory by its ID.

Args:
id (str): The ID of the data directory to retrieve
user_info: Current authenticated user info

Returns:
DataDirectoryResponse: Response containing the retrieved data directory

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">delete</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a data directory and optionally its contents.

Args:
id: Unique identifier of the data directory to delete
delete_contents: If True, also deletes the data directory's contents
user_info: Authenticated user information

Returns:
EmptyResponse: Empty response indicating successful deletion

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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.DataDirectoriesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataDirectories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.DataDirectory></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all data directories with optional filtering and pagination.

Args:
filters: Query parameters for filtering and pagination - ml_repo_id: Filter data directories by ml repo ID - name: Optional filter data directories by name - limit: Optional maximum number of data directories to return - offset: Optional number of data directories to skip
user_info: Authenticated user information

Returns:
ListDataDirectoriesResponse: List of data directories and pagination info

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
const response = await client.dataDirectories.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dataDirectories.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `DataDirectories.RequestOptions`

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
        mlRepo: "ml_repo",
        metadata: {
            key: "value",
        },
        source: {
            type: "truefoundry",
        },
    },
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

**requestOptions:** `DataDirectories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.dataDirectories.<a href="/src/api/resources/dataDirectories/client/Client.ts">listFiles</a>({ ...params }) -> core.Page<TrueFoundry.FileInfo></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List files in a dataset.

Args:
request_dto: Request containing dataset ID, path, page token and limit
user_info: Authenticated user information

Returns:
ListFilesResponse: Response containing files and pagination info

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
const response = await client.dataDirectories.listFiles({
    id: "id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.dataDirectories.listFiles({
    id: "id",
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `DataDirectories.RequestOptions`

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

Delete files from the dataset.

Args:
request_dto: Request containing dataset ID and paths
user_info: Authenticated user information

Returns:
EmptyResponse: Empty response indicating successful deletion

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
    paths: ["paths"],
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

**requestOptions:** `DataDirectories.RequestOptions`

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

Get signed URLs for a dataset.

Args:
request_dto: Request containing dataset ID, paths and operation
user_info: Authenticated user information

Returns:
GetSignedURLsResponse: Response containing signed URLs

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
    operation: "READ",
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

**requestOptions:** `DataDirectories.RequestOptions`

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

Create a multipart upload for a dataset

Args:
request_dto: Request containing dataset ID, path and number of parts
user_info: Authenticated user information

Returns:
MultiPartUploadResponse: Response containing multipart upload info

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
    numParts: 1,
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

**requestOptions:** `DataDirectories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Internal Users

<details><summary><code>client.internal.users.<a href="/src/api/resources/internal/resources/users/client/Client.ts">getInfo</a>() -> TrueFoundry.Session</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the user session details for the currently authenticated user

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
await client.internal.users.getInfo();
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

**requestOptions:** `Users.RequestOptions`

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

Get the auto provisioning status for the provided cluster

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

**id:** `string` — Cluster id of the cluster

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Clusters.RequestOptions`

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

This endpoint returns all statuses for a specific deployment in a given application.

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

**id:** `string` — Application id of the application

</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Deployment id of the deployment

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

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

This endpoint returns all build details associated with a specific deployment in a given application.

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

**id:** `string` — Application id of the application

</dd>
</dl>

<dl>
<dd>

**deploymentId:** `string` — Deployment id of the deployment

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

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
    workspaceFqn: "workspaceFqn",
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

**requestOptions:** `Deployments.RequestOptions`

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

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Internal Applications

<details><summary><code>client.internal.applications.<a href="/src/api/resources/internal/resources/applications/client/Client.ts">getPodTemplateHashToDeploymentVersion</a>(id, { ...params }) -> Record<string, number></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint fetches the pod template hash to deployment version map for a specific application.

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
await client.internal.applications.getPodTemplateHashToDeploymentVersion("id");
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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.internal.ApplicationsGetPodTemplateHashToDeploymentVersionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Applications.RequestOptions`

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

List charts for a given Application based on parameters passed in the query.

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
    filterEntity: "application",
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

**requestOptions:** `Metrics.RequestOptions`

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
    repoUrl: "repoURL",
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

**requestOptions:** `Vcs.RequestOptions`

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
    repoUrl: "repoURL",
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

**requestOptions:** `Vcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Internal DockerRegistries

<details><summary><code>client.internal.dockerRegistries.<a href="/src/api/resources/internal/resources/dockerRegistries/client/Client.ts">createRepository</a>({ ...params }) -> TrueFoundry.DockerRegistriesCreateRepositoryResponse</code></summary>
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
    workspaceFqn: "workspaceFqn",
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

**requestOptions:** `DockerRegistries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.internal.dockerRegistries.<a href="/src/api/resources/internal/resources/dockerRegistries/client/Client.ts">getCredentials</a>({ ...params }) -> TrueFoundry.DockerRegistriesGetCredentialsResponse</code></summary>
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
await client.internal.dockerRegistries.getCredentials();
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

**requestOptions:** `DockerRegistries.RequestOptions`

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

**requestOptions:** `Workflows.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Internal ArtifactVersions

<details><summary><code>client.internal.artifactVersions.<a href="/src/api/resources/internal/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.InternalListArtifactVersionsResponseDataItem></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List artifact version API

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
const response = await client.internal.artifactVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.internal.artifactVersions.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**requestOptions:** `ArtifactVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Internal Ml

<details><summary><code>client.internal.ml.<a href="/src/api/resources/internal/resources/ml/client/Client.ts">apply</a>({ ...params }) -> TrueFoundry.ApplyMlEntityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.ml.apply({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "model-version",
        source: {
            type: "truefoundry",
        },
    },
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

**request:** `TrueFoundry.internal.ApplyMlEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ml.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.internal.ml.<a href="/src/api/resources/internal/resources/ml/client/Client.ts">delete</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internal.ml.delete({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        mlRepo: "ml_repo",
        type: "model-version",
        source: {
            type: "truefoundry",
        },
    },
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

**request:** `TrueFoundry.internal.DeleteMlEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ml.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
