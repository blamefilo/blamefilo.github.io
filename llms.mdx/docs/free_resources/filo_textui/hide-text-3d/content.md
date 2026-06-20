# HideText3D (/docs/free_resources/filo_textui/hide-text-3d)



Removes the DUI and cleans up the render thread for a 3D label. Safe to call even if the label is not currently visible.

## Signature [#signature]

```lua
exports.filo_textui:HideText3D()
```

No arguments are required. The label owned by the calling resource is destroyed.

## Example [#example]

```lua
exports.filo_textui:DrawText3D({
    entity  = entityId,
    options = { { key = 'E', label = 'Interact' } },
})

-- Later, when the interaction zone is left
exports.filo_textui:HideText3D()
```
