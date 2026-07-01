# Exports (/docs/free_resources/filo_jack/exports)



## IsLifted [#islifted]

Checks whether a vehicle has been fully lifted.

### Client [#client]

```lua
local lifted = exports.filo_jack:IsLifted(vehicle)
```

Specify a side.

```lua
local lifted = exports.filo_jack:IsLifted(vehicle, "left")
```

### Parameters [#parameters]

| Name   | Type   | Description                      |
| ------ | ------ | -------------------------------- |
| entity | number | Vehicle entity                   |
| side   | string | `"left"` or `"right"` (optional) |

### Returns [#returns]

```lua
boolean
```
