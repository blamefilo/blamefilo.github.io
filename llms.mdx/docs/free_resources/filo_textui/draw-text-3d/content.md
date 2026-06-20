# DrawText3D (/docs/free_resources/filo_textui/draw-text-3d)





Spawns a DUI-backed label rendered as a billboard in the game world. Each call from a resource manages a single label — calling `DrawText3D` again from the same resource will **update** the existing label rather than spawn a new one.

## Signature [#signature]

```lua
exports.filo_textui:DrawText3D(data)
```

## Parameters [#parameters]

| Field          | Type      | Required | Description                                                  |
| -------------- | --------- | -------- | ------------------------------------------------------------ |
| `entity`       | `number`  | —        | Entity handle to attach the label to.                        |
| `coords`       | `vector3` | —        | World position for a static (non-entity) label.              |
| `options`      | `table`   | ✓        | Array of label entries. See [Options](#options).             |
| `distance`     | `number`  | —        | Visibility range in units. Default: `8.0`.                   |
| `entityOffset` | `vector3` | —        | Override the automatic anchor offset relative to the entity. |

<Callout type="warning">
  Either `entity` or `coords` must be provided.
</Callout>

### Options [#options]

Each entry in the `options` array:

| Field   | Type     | Required | Description                                              |
| ------- | -------- | -------- | -------------------------------------------------------- |
| `key`   | `string` | —        | Key badge character. Supported: `E`, `F`, `G`, `H`, `X`. |
| `label` | `string` | ✓        | Display text. Rendered uppercase.                        |

Omitting `key` renders a plain text pill with no badge.

## Auto anchor offsets [#auto-anchor-offsets]

When `entityOffset` is not provided, the anchor is calculated from the entity's bounding box:

| Entity type | Anchor offset                    |
| ----------- | -------------------------------- |
| Ped         | `vector3(maxX + 0.35, 0.0, 0.0)` |
| Vehicle     | `vector3(maxX + 0.55, 0.0, 0.3)` |

## Examples [#examples]

### Attached to an entity [#attached-to-an-entity]

```lua
exports.filo_textui:DrawText3D({
    entity  = entityId,
    options = {
        { key = 'E', label = 'Interact' },
        { key = 'G', label = 'Options' },
    },
})
```

### Multiple labels, one without a key [#multiple-labels-one-without-a-key]

```lua
exports.filo_textui:DrawText3D({
    entity  = entityId,
    options = {
        { key = 'E', label = 'Enter Vehicle' },
        { label = 'Locked' },
    },
})
```

### Fixed world coordinates [#fixed-world-coordinates]

```lua
exports.filo_textui:DrawText3D({
    coords   = vector3(100.0, 200.0, 30.0),
    distance = 5.0,
    options  = {
        { key = 'E', label = 'Open' },
    },
})
```

### Custom anchor offset [#custom-anchor-offset]

```lua
exports.filo_textui:DrawText3D({
    entity       = entityId,
    entityOffset = vector3(0.0, 0.0, 1.5),
    options      = {
        { key = 'F', label = 'Fuel' },
    },
})
```

### Updating an existing label [#updating-an-existing-label]

Calling `DrawText3D` from the same resource again will patch the label in-place:

```lua
-- Initial show
exports.filo_textui:DrawText3D({
    entity  = entityId,
    options = { { key = 'E', label = 'Lock' } },
})

-- Later — updates without spawning a new DUI
exports.filo_textui:DrawText3D({
    entity  = entityId,
    options = { { key = 'E', label = 'Unlock' } },
})
```
