# Configuration (/docs/free_resources/filo_stealwheels/configuration)



Configuration is located in:

```
shared/sh-config.lua
```

## Wheel Item [#wheel-item]

```lua
Config.WheelItem = "vehicle_wheel"
```

Inventory item received after removing a wheel.

***

## Filo Jack Integration [#filo-jack-integration]

```lua
Config.UseFiloJack = true
```

When enabled, players must lift vehicles using **Filo Jack** before wheels can be removed.

Disable if you don't use Filo Jack.

```lua
Config.UseFiloJack = false
```

***

## Filo Bolt Integration [#filo-bolt-integration]

```lua
Config.UseFiloBolt = true
```

When enabled, players must remove bolts using **Filo Bolt** before wheels can be removed.

Disable if you don't use Filo Bolt.

```lua
Config.UseFiloBolt = false
```

***

## Required Tool [#required-tool]

```lua
Config.RequiredItem = "tire_iron"
```

Tool required for wheel removal.

Set to `nil` to disable.

```lua
Config.RequiredItem = nil
```

***

## Item Durability [#item-durability]

```lua
Config.DecreaseDurability = {
    enabled = true,
    amount = 10
}
```

Decrease the durability of the tire iron after each use.

* `enabled` enables durability loss.
* `amount` specifies how much durability is removed.
