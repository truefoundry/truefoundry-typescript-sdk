# Reference

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

## V1 MlRepos

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
