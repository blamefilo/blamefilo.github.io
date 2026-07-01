# Configuration (/docs/free_resources/filo_jack/configuration)



# Configuration [#configuration]

Open:

```
shared/sh-config.lua
```

## Debug [#debug]

```lua
Config.Debug = false
```

Enable console debugging.

***

## Allowed Jobs [#allowed-jobs]

```lua
Config.JobsAllowed = {
    "mechanic",
}
```

Set to `nil` to allow everyone.

Example:

```lua
Config.JobsAllowed = nil
```

***

## Required Item [#required-item]

```lua
Config.RequiredItem = "vehicle_jack"
```

Set to `nil` to disable the inventory requirement.

```lua
Config.RequiredItem = nil
```
