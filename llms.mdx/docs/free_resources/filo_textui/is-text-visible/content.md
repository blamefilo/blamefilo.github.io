# IsTextVisible (/docs/free_resources/filo_textui/is-text-visible)



Returns `true` if a 3D label spawned by the calling resource is currently active.

## Signature [#signature]

```lua
local visible = exports.filo_textui:IsTextVisible()
```

## Returns [#returns]

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `boolean` | `true` if a label is active, `false` otherwise. |

## Example [#example]

```lua
if not exports.filo_textui:IsTextVisible() then
    exports.filo_textui:DrawText3D({
        entity  = entityId,
        options = { { key = 'E', label = 'Interact' } },
    })
end
```
