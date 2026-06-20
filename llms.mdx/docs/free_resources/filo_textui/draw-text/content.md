# DrawText (/docs/free_resources/filo_textui/draw-text)





Shows a screen-space prompt bar anchored to the bottom center of the screen. Accepts a table of options, a plain string, or a shorthand entity form. Calling `DrawText` again with identical options is a no-op.

## Signature [#signature]

```lua
exports.filo_textui:DrawText(options)
exports.filo_textui:DrawText(string)
exports.filo_textui:DrawText(string, { entity = entityId })
```

## Parameters [#parameters]

### Table form [#table-form]

```lua
exports.filo_textui:DrawText({
    options = {
        { key = 'E', label = 'Engine' },
        { key = 'G', label = 'Gear' },
    }
})
```

| Field     | Type    | Required | Description             |
| --------- | ------- | -------- | ----------------------- |
| `options` | `table` | ✓        | Array of label entries. |

### Options [#options]

| Field   | Type     | Required | Description                                              |
| ------- | -------- | -------- | -------------------------------------------------------- |
| `key`   | `string` | —        | Key badge character. Supported: `E`, `F`, `G`, `H`, `X`. |
| `label` | `string` | ✓        | Display text. Rendered uppercase.                        |

### String shorthand [#string-shorthand]

The key is parsed from square brackets in the string. Everything outside the brackets becomes the label.

```lua
exports.filo_textui:DrawText('[E] Interact')
```

### Entity shorthand [#entity-shorthand]

Passing a second argument with an `entity` field delegates to [`DrawText3D`](/filo_textui/draw-text-3d) instead of showing the bottom bar.

```lua
exports.filo_textui:DrawText('[E] Interact', { entity = entityId })
```

<Callout type="info">
  The entity shorthand is a convenience wrapper. It creates a single-row 3D label on the given entity — identical to calling `DrawText3D` directly.
</Callout>

## Examples [#examples]

### Multiple prompts [#multiple-prompts]

```lua
exports.filo_textui:DrawText({
    options = {
        { key = 'E', label = 'Enter' },
        { key = 'F', label = 'Flip' },
        { label = 'Stolen' },
    }
})
```

### String shorthand [#string-shorthand-1]

```lua
exports.filo_textui:DrawText('[E] Open Door')
```

### Updating the bar [#updating-the-bar]

Call `DrawText` again with different options to swap the prompts. If the options are identical to what's already showing, the call is ignored.

```lua
exports.filo_textui:DrawText({ options = { { key = 'E', label = 'Lock' } } })

-- swap later
exports.filo_textui:DrawText({ options = { { key = 'E', label = 'Unlock' } } })
```
