# Reference

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

<details><summary><code>client.v1.jobs.<a href="/src/api/resources/v1/resources/jobs/client/Client.ts">listRuns</a>(jobId, { ...params }) -> core.Page<TrueFoundry.JobRunDto></code></summary>
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

<details><summary><code>client.v1.artifacts.<a href="/src/api/resources/v1/resources/artifacts/client/Client.ts">get</a>(id) -> TrueFoundry.GetArtifactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifacts.get("id");
```

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

<details><summary><code>client.v1.artifacts.<a href="/src/api/resources/v1/resources/artifacts/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifacts.delete("id");
```

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

<details><summary><code>client.v1.artifacts.<a href="/src/api/resources/v1/resources/artifacts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Artifact></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.artifacts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.artifacts.list();
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

**request:** `TrueFoundry.v1.ArtifactsListRequest`

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

<details><summary><code>client.v1.artifacts.<a href="/src/api/resources/v1/resources/artifacts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetArtifactVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifacts.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

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

## V1 Agents

<details><summary><code>client.v1.agents.<a href="/src/api/resources/v1/resources/agents/client/Client.ts">get</a>(id) -> TrueFoundry.GetAgentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agents.get("id");
```

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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agents.<a href="/src/api/resources/v1/resources/agents/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agents.delete("id");
```

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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agents.<a href="/src/api/resources/v1/resources/agents/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Agent></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.agents.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.agents.list();
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

**request:** `TrueFoundry.v1.AgentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agents.<a href="/src/api/resources/v1/resources/agents/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetAgentVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agents.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 Prompts

<details><summary><code>client.v1.prompts.<a href="/src/api/resources/v1/resources/prompts/client/Client.ts">get</a>(id) -> TrueFoundry.GetPromptResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.prompts.get("id");
```

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

<details><summary><code>client.v1.prompts.<a href="/src/api/resources/v1/resources/prompts/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.prompts.delete("id");
```

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

<details><summary><code>client.v1.prompts.<a href="/src/api/resources/v1/resources/prompts/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Prompt></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.prompts.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.prompts.list();
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

**request:** `TrueFoundry.v1.PromptsListRequest`

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

<details><summary><code>client.v1.prompts.<a href="/src/api/resources/v1/resources/prompts/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetPromptVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.prompts.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

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

## V1 Tools

<details><summary><code>client.v1.tools.<a href="/src/api/resources/v1/resources/tools/client/Client.ts">get</a>(id) -> TrueFoundry.GetToolResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tools.get("id");
```

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

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tools.<a href="/src/api/resources/v1/resources/tools/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tools.delete("id");
```

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

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tools.<a href="/src/api/resources/v1/resources/tools/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Tool></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.tools.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.tools.list();
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

**request:** `TrueFoundry.v1.ToolsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tools.<a href="/src/api/resources/v1/resources/tools/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetToolVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tools.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 Models

<details><summary><code>client.v1.models.<a href="/src/api/resources/v1/resources/models/client/Client.ts">get</a>(id) -> TrueFoundry.GetModelResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.models.get("id");
```

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

<details><summary><code>client.v1.models.<a href="/src/api/resources/v1/resources/models/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.models.delete("id");
```

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

<details><summary><code>client.v1.models.<a href="/src/api/resources/v1/resources/models/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.Model></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.models.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.models.list();
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

**request:** `TrueFoundry.v1.ModelsListRequest`

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

<details><summary><code>client.v1.models.<a href="/src/api/resources/v1/resources/models/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetModelVersionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.models.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

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

## V1 ArtifactVersions

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetArtifactVersionResponse</code></summary>
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
await client.v1.artifactVersions.get("id");
```

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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.artifactVersions.delete("id");
```

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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.ArtifactVersion></code></summary>
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
const response = await client.v1.artifactVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.artifactVersions.list();
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

**request:** `TrueFoundry.v1.ArtifactVersionsListRequest`

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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">getSignedUrls</a>({ ...params }) -> TrueFoundry.GetSignedUrLsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifactVersions.getSignedUrls({
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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">createMultiPartUpload</a>({ ...params }) -> TrueFoundry.MultiPartUploadResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifactVersions.createMultiPartUpload({
    id: "id",
    path: "path",
    num_parts: 1,
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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">stage</a>({ ...params }) -> TrueFoundry.StageArtifactResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifactVersions.stage({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.v1.StageArtifactRequest`

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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">listFiles</a>({ ...params }) -> core.Page<TrueFoundry.FileInfo></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.artifactVersions.listFiles({
    id: "id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.artifactVersions.listFiles({
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

<details><summary><code>client.v1.artifactVersions.<a href="/src/api/resources/v1/resources/artifactVersions/client/Client.ts">markStageFailure</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.artifactVersions.markStageFailure({
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

**request:** `TrueFoundry.v1.MarkStageArtifactFailureRequest`

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

## V1 ModelVersions

<details><summary><code>client.v1.modelVersions.<a href="/src/api/resources/v1/resources/modelVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetModelVersionResponse</code></summary>
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
await client.v1.modelVersions.get("id");
```

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

<details><summary><code>client.v1.modelVersions.<a href="/src/api/resources/v1/resources/modelVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.modelVersions.delete("id");
```

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

<details><summary><code>client.v1.modelVersions.<a href="/src/api/resources/v1/resources/modelVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.ModelVersion></code></summary>
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
const response = await client.v1.modelVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.modelVersions.list();
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

**request:** `TrueFoundry.v1.ModelVersionsListRequest`

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

## V1 PromptVersions

<details><summary><code>client.v1.promptVersions.<a href="/src/api/resources/v1/resources/promptVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetPromptVersionResponse</code></summary>
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
await client.v1.promptVersions.get("id");
```

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

<details><summary><code>client.v1.promptVersions.<a href="/src/api/resources/v1/resources/promptVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.promptVersions.delete("id");
```

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

<details><summary><code>client.v1.promptVersions.<a href="/src/api/resources/v1/resources/promptVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.PromptVersion></code></summary>
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
const response = await client.v1.promptVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.promptVersions.list();
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

**request:** `TrueFoundry.v1.PromptVersionsListRequest`

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

## V1 ToolVersions

<details><summary><code>client.v1.toolVersions.<a href="/src/api/resources/v1/resources/toolVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetToolVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get tool version API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.toolVersions.get("id");
```

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

**requestOptions:** `ToolVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.toolVersions.<a href="/src/api/resources/v1/resources/toolVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete tool versions API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.toolVersions.delete("id");
```

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

**requestOptions:** `ToolVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.toolVersions.<a href="/src/api/resources/v1/resources/toolVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.ToolVersion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List tool versions API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.toolVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.toolVersions.list();
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

**request:** `TrueFoundry.v1.ToolVersionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ToolVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 AgentVersions

<details><summary><code>client.v1.agentVersions.<a href="/src/api/resources/v1/resources/agentVersions/client/Client.ts">resolve</a>({ ...params }) -> TrueFoundry.ResolveAgentAppResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agentVersions.resolve({
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

**request:** `TrueFoundry.v1.AgentVersionsResolveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agentVersions.<a href="/src/api/resources/v1/resources/agentVersions/client/Client.ts">get</a>(id) -> TrueFoundry.GetAgentVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get agent version API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agentVersions.get("id");
```

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

**requestOptions:** `AgentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agentVersions.<a href="/src/api/resources/v1/resources/agentVersions/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete agent versions API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.agentVersions.delete("id");
```

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

**requestOptions:** `AgentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.agentVersions.<a href="/src/api/resources/v1/resources/agentVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.AgentVersion></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List agent versions API

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.agentVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.agentVersions.list();
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

**request:** `TrueFoundry.v1.AgentVersionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AgentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 DataDirectories

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">get</a>(id) -> TrueFoundry.GetDataDirectoryResponse</code></summary>
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
await client.v1.dataDirectories.get("id");
```

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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">delete</a>(id, { ...params }) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.dataDirectories.delete("id");
```

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

**request:** `TrueFoundry.v1.DataDirectoriesDeleteRequest`

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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.DataDirectory></code></summary>
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
const response = await client.v1.dataDirectories.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.dataDirectories.list();
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

**request:** `TrueFoundry.v1.DataDirectoriesListRequest`

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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetDataDirectoryResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.dataDirectories.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">listFiles</a>({ ...params }) -> core.Page<TrueFoundry.FileInfo></code></summary>
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
const response = await client.v1.dataDirectories.listFiles({
    id: "id",
});
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.dataDirectories.listFiles({
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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">deleteFiles</a>({ ...params }) -> TrueFoundry.EmptyResponse</code></summary>
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
await client.v1.dataDirectories.deleteFiles({
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

**request:** `TrueFoundry.v1.DeleteFilesRequest`

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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">getSignedUrls</a>({ ...params }) -> TrueFoundry.GetSignedUrLsResponse</code></summary>
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
await client.v1.dataDirectories.getSignedUrls({
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

<details><summary><code>client.v1.dataDirectories.<a href="/src/api/resources/v1/resources/dataDirectories/client/Client.ts">createMultipartUpload</a>({ ...params }) -> TrueFoundry.MultiPartUploadResponse</code></summary>
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
await client.v1.dataDirectories.createMultipartUpload({
    id: "id",
    path: "path",
    num_parts: 1,
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

## V1 TracingProjects

<details><summary><code>client.v1.tracingProjects.<a href="/src/api/resources/v1/resources/tracingProjects/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.TracingProject></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.v1.tracingProjects.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.tracingProjects.list();
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

**request:** `TrueFoundry.v1.TracingProjectsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TracingProjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tracingProjects.<a href="/src/api/resources/v1/resources/tracingProjects/client/Client.ts">createOrUpdate</a>({ ...params }) -> TrueFoundry.GetTracingProjectResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tracingProjects.createOrUpdate({
    manifest: {
        name: "name",
        metadata: {
            key: "value",
        },
        ml_repo: "ml_repo",
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

**request:** `TrueFoundry.ApplyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TracingProjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tracingProjects.<a href="/src/api/resources/v1/resources/tracingProjects/client/Client.ts">get</a>(id) -> TrueFoundry.GetTracingProjectResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tracingProjects.get("id");
```

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

**requestOptions:** `TracingProjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.v1.tracingProjects.<a href="/src/api/resources/v1/resources/tracingProjects/client/Client.ts">delete</a>(id) -> TrueFoundry.EmptyResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.tracingProjects.delete("id");
```

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

**requestOptions:** `TracingProjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## V1 Internal Users

<details><summary><code>client.v1.internal.users.<a href="/src/api/resources/v1/resources/internal/resources/users/client/Client.ts">getInfo</a>() -> TrueFoundry.Session</code></summary>
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
await client.v1.internal.users.getInfo();
```

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

## V1 Internal Clusters

<details><summary><code>client.v1.internal.clusters.<a href="/src/api/resources/v1/resources/internal/resources/clusters/client/Client.ts">getAutoprovisioningState</a>(id) -> TrueFoundry.GetAutoProvisioningStateResponse</code></summary>
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
await client.v1.internal.clusters.getAutoprovisioningState("id");
```

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

## V1 Internal Deployments

<details><summary><code>client.v1.internal.deployments.<a href="/src/api/resources/v1/resources/internal/resources/deployments/client/Client.ts">getBuilds</a>(id, deploymentId) -> TrueFoundry.DeploymentBuild[]</code></summary>
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
await client.v1.internal.deployments.getBuilds("id", "deploymentId");
```

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

<details><summary><code>client.v1.internal.deployments.<a href="/src/api/resources/v1/resources/internal/resources/deployments/client/Client.ts">getCodeUploadUrl</a>({ ...params }) -> TrueFoundry.PresignedUrlObject</code></summary>
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
await client.v1.internal.deployments.getCodeUploadUrl({
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

**request:** `TrueFoundry.v1.internal.GenerateCodeUploadPresignedUrlRequestDto`

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

<details><summary><code>client.v1.internal.deployments.<a href="/src/api/resources/v1/resources/internal/resources/deployments/client/Client.ts">getSuggestedEndpoint</a>({ ...params }) -> TrueFoundry.GetSuggestedDeploymentEndpointResponse</code></summary>
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
await client.v1.internal.deployments.getSuggestedEndpoint({
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

**request:** `TrueFoundry.v1.internal.DeploymentsGetSuggestedEndpointRequest`

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

## V1 Internal Applications

<details><summary><code>client.v1.internal.applications.<a href="/src/api/resources/v1/resources/internal/resources/applications/client/Client.ts">getPodTemplateHashToDeploymentVersion</a>(id, { ...params }) -> Record<string, number></code></summary>
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
await client.v1.internal.applications.getPodTemplateHashToDeploymentVersion("id", {
    podTemplateHashes: "podTemplateHashes",
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

**id:** `string` — Id of the application

</dd>
</dl>

<dl>
<dd>

**request:** `TrueFoundry.v1.internal.ApplicationsGetPodTemplateHashToDeploymentVersionRequest`

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

## V1 Internal Vcs

<details><summary><code>client.v1.internal.vcs.<a href="/src/api/resources/v1/resources/internal/resources/vcs/client/Client.ts">getRepositoryDetails</a>({ ...params }) -> TrueFoundry.GitRepositoryExistsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.internal.vcs.getRepositoryDetails({
    repoURL: "repoURL",
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

**request:** `TrueFoundry.v1.internal.GitRepositoryExistsRequest`

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

<details><summary><code>client.v1.internal.vcs.<a href="/src/api/resources/v1/resources/internal/resources/vcs/client/Client.ts">getAuthenticatedUrl</a>({ ...params }) -> TrueFoundry.GetAuthenticatedVcsurlResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.v1.internal.vcs.getAuthenticatedUrl({
    repoURL: "repoURL",
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

**request:** `TrueFoundry.v1.internal.GetAuthenticatedVcsurlRequest`

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

## V1 Internal Metrics

<details><summary><code>client.v1.internal.metrics.<a href="/src/api/resources/v1/resources/internal/resources/metrics/client/Client.ts">getCharts</a>(workspaceId, { ...params }) -> TrueFoundry.GetChartsResponse</code></summary>
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
await client.v1.internal.metrics.getCharts("workspaceId", {
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

**request:** `TrueFoundry.v1.internal.MetricsGetChartsRequest`

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

## V1 Internal ArtifactVersions

<details><summary><code>client.v1.internal.artifactVersions.<a href="/src/api/resources/v1/resources/internal/resources/artifactVersions/client/Client.ts">list</a>({ ...params }) -> core.Page<TrueFoundry.InternalListArtifactVersionResponseDataItem></code></summary>
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
const response = await client.v1.internal.artifactVersions.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.v1.internal.artifactVersions.list();
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

**request:** `TrueFoundry.v1.internal.ArtifactVersionsListRequest`

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
