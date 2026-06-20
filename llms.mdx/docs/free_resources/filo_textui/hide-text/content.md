# HideText (/docs/free_resources/filo_textui/hide-text)



Hides the bottom bar and stops the key-press polling thread.

## Signature [#signature]

```lua
exports.filo_textui:HideText()
```

## Example [#example]

```lua
local insideZone = false

-- On zone enter
exports.filo_textui:DrawText({ options = { { key = 'E', label = 'Interact' } } })
insideZone = true

-- On zone exit
if insideZone then
    exports.filo_textui:HideText()
    insideZone = false
end
```
