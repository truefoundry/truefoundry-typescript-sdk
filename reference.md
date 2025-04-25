# Reference

## V1 Users

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.User></code></summary>
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
const response = await client.v1.users.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.users.list({
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

**request:** `TrueFoundry.v1.UsersListRequest`

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

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">updateRoles</a>({ ...params }) -> TrueFoundry.UpdateUserRolesResponse</code></summary>
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
await client.v1.users.updateRoles({
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

**request:** `TrueFoundry.v1.UpdateUserRolesRequest`

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

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">get</a>(id) -> TrueFoundry.GetUserResponse</code></summary>
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
await client.v1.users.get("id");
```

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

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">inviteUser</a>({ ...params }) -> TrueFoundry.InviteUserResponse</code></summary>
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
await client.v1.users.inviteUser({
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

**request:** `TrueFoundry.v1.InviteUserRequest`

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

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">deactivate</a>({ ...params }) -> TrueFoundry.DeactivateUserResponse</code></summary>
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
await client.v1.users.deactivate({
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

**request:** `TrueFoundry.v1.DeactivateUserRequest`

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

<details><summary><code>client.v1.users.<a href="/src/api/resources/v1/resources/users/client/Client.ts">activate</a>({ ...params }) -> TrueFoundry.ActivateUserResponse</code></summary>
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
await client.v1.users.activate({
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

**request:** `TrueFoundry.v1.ActivateUserRequest`

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

## V1 Teams

<details><summary><code>client.v1.teams.<a href="/src/api/resources/v1/resources/teams/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Team></code></summary>
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
const response = await client.v1.teams.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.teams.list({
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

**request:** `TrueFoundry.v1.TeamsListRequest`

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

<details><summary><code>client.v1.teams.<a href="/src/api/resources/v1/resources/teams/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetTeamResponse</code></summary>
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
await client.v1.teams.createOrUpdate({
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

**request:** `TrueFoundry.v1.ApplyTeamRequest`

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

<details><summary><code>client.v1.teams.<a href="/src/api/resources/v1/resources/teams/client/Client.ts">get</a>(id) -> TrueFoundry.GetTeamResponse</code></summary>
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
await client.v1.teams.get("id");
```

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

<details><summary><code>client.v1.teams.<a href="/src/api/resources/v1/resources/teams/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteTeamResponse</code></summary>
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
await client.v1.teams.delete("id");
```

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

## V1 PersonalAccessTokens

<details><summary><code>client.v1.personalAccessTokens.<a href="/src/api/resources/v1/resources/personalAccessTokens/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.VirtualAccount></code></summary>
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
const response = await client.v1.personalAccessTokens.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.personalAccessTokens.list({
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

**request:** `TrueFoundry.v1.PersonalAccessTokensListRequest`

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

<details><summary><code>client.v1.personalAccessTokens.<a href="/src/api/resources/v1/resources/personalAccessTokens/client/Client.ts">create</a>({ ...params }) -> TrueFoundry.CreatePersonalAccessTokenResponse</code></summary>
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
await client.v1.personalAccessTokens.create({
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

**request:** `TrueFoundry.v1.CreatePersonalAccessTokenRequest`

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

<details><summary><code>client.v1.personalAccessTokens.<a href="/src/api/resources/v1/resources/personalAccessTokens/client/Client.ts">delete</a>(id) -> TrueFoundry.DeletePersonalAccessTokenResponse</code></summary>
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
await client.v1.personalAccessTokens.delete("id");
```

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

## V1 VirtualAccounts

<details><summary><code>client.v1.virtualAccounts.<a href="/src/api/resources/v1/resources/virtualAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.VirtualAccount></code></summary>
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
const response = await client.v1.virtualAccounts.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.virtualAccounts.list({
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

**request:** `TrueFoundry.v1.VirtualAccountsListRequest`

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

<details><summary><code>client.v1.virtualAccounts.<a href="/src/api/resources/v1/resources/virtualAccounts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetVirtualAccountResponse</code></summary>
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
await client.v1.virtualAccounts.createOrUpdate({
    manifest: {
        name: "name",
        type: "virtual-account",
        permissions: [
            {
                resource_fqn: "resource_fqn",
                resource_type: "resource_type",
                role_id: "role_id",
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

**request:** `TrueFoundry.v1.ApplyVirtualAccountRequest`

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

<details><summary><code>client.v1.virtualAccounts.<a href="/src/api/resources/v1/resources/virtualAccounts/client/Client.ts">get</a>(id) -> TrueFoundry.GetVirtualAccountResponse</code></summary>
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
await client.v1.virtualAccounts.get("id");
```

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

<details><summary><code>client.v1.virtualAccounts.<a href="/src/api/resources/v1/resources/virtualAccounts/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteVirtualAccountResponse</code></summary>
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
await client.v1.virtualAccounts.delete("id");
```

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

## V1 Secrets

<details><summary><code>client.v1.secrets.<a href="/src/api/resources/v1/resources/secrets/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Secret></code></summary>
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
const response = await client.v1.secrets.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.secrets.list();
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

**request:** `TrueFoundry.v1.ListSecretsRequest`

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

<details><summary><code>client.v1.secrets.<a href="/src/api/resources/v1/resources/secrets/client/Client.ts">get</a>(id) -> TrueFoundry.GetSecretResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Secret associated with provided id

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
await client.v1.secrets.get("id");
```

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

<details><summary><code>client.v1.secrets.<a href="/src/api/resources/v1/resources/secrets/client/Client.ts">delete</a>(id) -> number</code></summary>
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
await client.v1.secrets.delete("id");
```

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

## V1 SecretGroups

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.SecretGroup></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the secret groups associated with a user along with the associated secrets for each group. Filtered with the options passed in the query fields.

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
const response = await client.v1.secretGroups.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.secretGroups.list({
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

**request:** `TrueFoundry.v1.SecretGroupsListRequest`

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

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">create</a>({ ...params }) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a secret group with secrets in it. A secret version for each of the created secret is created with version number as 1. The returned secret group does not have any secrets in the <em>associatedSecrets</em> field. A separate API call should be made to fetch the associated secrets.

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
await client.v1.secretGroups.create({
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

**request:** `TrueFoundry.v1.CreateSecretGroupRequest`

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

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">get</a>(id) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Secret Group associated with provided secretGroup id

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
await client.v1.secretGroups.get("id");
```

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

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">update</a>(id, { ...params }) -> TrueFoundry.GetSecretGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the secrets in a secret group with new values. A new secret version is created for every secret that has a modified value. Returns the updated secret group. The returned secret group does not have any secrets in the <em>associatedSecrets</em> field. A separate API call should be made to fetch the associated secrets.

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
await client.v1.secretGroups.update("id", {
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

**id:** `string` — Secret Id of the secret group.

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.v1.UpdateSecretGroupRequest`

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

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteSecretGroupResponse</code></summary>
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
await client.v1.secretGroups.delete("id");
```

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

<details><summary><code>client.v1.secretGroups.<a href="/src/api/resources/v1/resources/secretGroups/client/Client.ts">listSecrets</a>(id) -> TrueFoundry.Secret[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Secrets associated with a Secret Group.

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
await client.v1.secretGroups.listSecrets("id");
```

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

## V1 Clusters

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Cluster></code></summary>
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
const response = await client.v1.clusters.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.clusters.list({
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

**request:** `TrueFoundry.v1.ClustersListRequest`

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

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetClusterResponse</code></summary>
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
await client.v1.clusters.createOrUpdate({
    manifest: {
        type: "cluster",
        name: "name",
        cluster_type: "aws-eks",
        environment_names: ["environment_names"],
        collaborators: [
            {
                subject: "subject",
                role_id: "role_id",
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

**request:** `TrueFoundry.v1.CreateOrUpdateClusterRequest`

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

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">get</a>(id) -> TrueFoundry.GetClusterResponse</code></summary>
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
await client.v1.clusters.get("id");
```

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

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">delete</a>(id) -> TrueFoundry.ClustersDeleteResponse</code></summary>
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
await client.v1.clusters.delete("id");
```

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

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">getAddons</a>(id, { ...params }) -> TrueFoundry.ListClusterAddonsResponse</code></summary>
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
await client.v1.clusters.getAddons("id", {
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

**request:** `TrueFoundry.v1.ClustersGetAddonsRequest`

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

<details><summary><code>client.v1.clusters.<a href="/src/api/resources/v1/resources/clusters/client/Client.ts">isConnected</a>(id) -> TrueFoundry.IsClusterConnectedResponse</code></summary>
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
await client.v1.clusters.isConnected("id");
```

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

## V1 Environments

<details><summary><code>client.v1.environments.<a href="/src/api/resources/v1/resources/environments/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Environment></code></summary>
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
const response = await client.v1.environments.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.environments.list({
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

**request:** `TrueFoundry.v1.EnvironmentsListRequest`

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

<details><summary><code>client.v1.environments.<a href="/src/api/resources/v1/resources/environments/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetEnvironmentResponse</code></summary>
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
await client.v1.environments.createOrUpdate({
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

**request:** `TrueFoundry.v1.CreateOrUpdateEnvironmentRequest`

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

<details><summary><code>client.v1.environments.<a href="/src/api/resources/v1/resources/environments/client/Client.ts">get</a>(id) -> TrueFoundry.GetEnvironmentResponse</code></summary>
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
await client.v1.environments.get("id");
```

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

<details><summary><code>client.v1.environments.<a href="/src/api/resources/v1/resources/environments/client/Client.ts">delete</a>(id) -> boolean</code></summary>
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
await client.v1.environments.delete("id");
```

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

## V1 Applications

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Application></code></summary>
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
const response = await client.v1.applications.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.applications.list({
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

**request:** `TrueFoundry.v1.ApplicationsListRequest`

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetApplicationDeploymentResponse</code></summary>
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
await client.v1.applications.createOrUpdate({
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

**request:** `TrueFoundry.v1.CreateDeploymentRequest`

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">get</a>(id) -> TrueFoundry.GetApplicationResponse</code></summary>
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
await client.v1.applications.get("id");
```

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">delete</a>(id) -> TrueFoundry.DeleteApplicationResponse</code></summary>
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
await client.v1.applications.delete("id");
```

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">scaleToZero</a>(id) -> void</code></summary>
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
await client.v1.applications.scaleToZero("id");
```

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">scaleToOriginal</a>(id) -> TrueFoundry.Deployment</code></summary>
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
await client.v1.applications.scaleToOriginal("id");
```

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

<details><summary><code>client.v1.applications.<a href="/src/api/resources/v1/resources/applications/client/Client.ts">cancelDeployment</a>(id, deploymentId) -> TrueFoundry.ApplicationsCancelDeploymentResponse</code></summary>
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
await client.v1.applications.cancelDeployment("id", "deploymentId");
```

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

## V1 ApplicationVersions

<details><summary><code>client.v1.applicationVersions.<a href="/src/api/resources/v1/resources/applicationVersions/client/Client.ts">list</a>(id, { ...params }) -> core.Page<TrueFoundry.Deployment></code></summary>
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
const response = await client.v1.applicationVersions.list("id", {
    limit: 10,
    offset: 0,
    version: "1",
    deploymentId: "deployment123",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.applicationVersions.list("id", {
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

**request:** `TrueFoundry.v1.ApplicationVersionsListRequest`

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

<details><summary><code>client.v1.applicationVersions.<a href="/src/api/resources/v1/resources/applicationVersions/client/Client.ts">get</a>(id, deploymentId) -> TrueFoundry.GetApplicationDeploymentResponse</code></summary>
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
await client.v1.applicationVersions.get("id", "deploymentId");
```

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

## V1 Jobs

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">listRuns</a>(jobId, { ...params }) -> core.Page<TrueFoundry.JobRun></code></summary>
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
const response = await client.v1.jobs.listRuns("jobId", {
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.jobs.listRuns("jobId", {
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

**request:** `TrueFoundry.v1.JobsListRunsRequest`

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

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">getRun</a>(jobId, jobRunName) -> TrueFoundry.GetJobRunResponse</code></summary>
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
await client.v1.jobs.getRun("jobId", "jobRunName");
```

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

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">deleteRun</a>(jobId, jobRunName) -> TrueFoundry.DeleteJobRunResponse</code></summary>
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
await client.v1.jobs.deleteRun("jobId", "jobRunName");
```

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

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">trigger</a>({ ...params }) -> TrueFoundry.TriggerJobRunResponse</code></summary>
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
await client.v1.jobs.trigger();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.v1.TriggerJobRequest`

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

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">terminate</a>({ ...params }) -> TrueFoundry.TerminateJobResponse</code></summary>
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
await client.v1.jobs.terminate({
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

**request:** `TrueFoundry.v1.JobsTerminateRequest`

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

## V1 Workspaces

<details><summary><code>client.v1.workspaces.<a href="/src/api/resources/v1/resources/workspaces/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Workspace></code></summary>
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
const response = await client.v1.workspaces.list({
    limit: 10,
    offset: 0,
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.workspaces.list({
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

**request:** `TrueFoundry.v1.WorkspacesListRequest`

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

<details><summary><code>client.v1.workspaces.<a href="/src/api/resources/v1/resources/workspaces/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetWorkspaceResponse</code></summary>
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
await client.v1.workspaces.createOrUpdate({
    manifest: {
        type: "workspace",
        cluster_fqn: "cluster_fqn",
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

**request:** `TrueFoundry.v1.WorkspaceRequest`

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

<details><summary><code>client.v1.workspaces.<a href="/src/api/resources/v1/resources/workspaces/client/Client.ts">get</a>(id) -> TrueFoundry.GetWorkspaceResponse</code></summary>
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
await client.v1.workspaces.get("id");
```

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

<details><summary><code>client.v1.workspaces.<a href="/src/api/resources/v1/resources/workspaces/client/Client.ts">delete</a>(id) -> TrueFoundry.WorkspacesDeleteResponse</code></summary>
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
await client.v1.workspaces.delete("id");
```

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

## V1 Events

<details><summary><code>client.v1.events.<a href="/src/api/resources/v1/resources/events/client/Client.ts">get</a>({ ...params }) -> TrueFoundry.GetEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Events for Pod, Job Run, Application. The events are sourced from Kubernetes as well as events captured by truefoundry. Optional query parameters include startTs, endTs for filtering.

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
await client.v1.events.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.v1.EventsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 Alerts

<details><summary><code>client.v1.alerts.<a href="/src/api/resources/v1/resources/alerts/client/Client.ts">list</a>({ ...params }) -> TrueFoundry.GetAlertsResponse</code></summary>
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
await client.v1.alerts.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.v1.AlertsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Alerts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 Logs

<details><summary><code>client.v1.logs.<a href="/src/api/resources/v1/resources/logs/client/Client.ts">get</a>({ ...params }) -> TrueFoundry.GetLogsResponse</code></summary>
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
await client.v1.logs.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `TrueFoundry.v1.LogsGetRequest`

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

## V1 MlRepos

<details><summary><code>client.v1.mlRepos.<a href="/src/api/resources/v1/resources/mlRepos/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetMlRepoResponse</code></summary>
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
await client.v1.mlRepos.createOrUpdate({
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

**request:** `TrueFoundry.v1.ApplyMlRepoRequest`

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

<details><summary><code>client.v1.mlRepos.<a href="/src/api/resources/v1/resources/mlRepos/client/Client.ts">get</a>(id) -> TrueFoundry.GetMlRepoResponse</code></summary>
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
await client.v1.mlRepos.get("id");
```

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

<details><summary><code>client.v1.mlRepos.<a href="/src/api/resources/v1/resources/mlRepos/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.mlRepos.delete("id");
```

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

<details><summary><code>client.v1.mlRepos.<a href="/src/api/resources/v1/resources/mlRepos/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.MlRepo></code></summary>
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
const response = await client.v1.mlRepos.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.mlRepos.list();
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

**request:** `TrueFoundry.v1.MlReposListRequest`

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

## V1 Artifacts
