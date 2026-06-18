# Exports (/docs/filo_vehiclekeys/exports)



# Exports [#exports]

## Server [#server]

### `GiveKeys` [#givekeys]

Give a player a key item for a vehicle.

```lua
exports.filo_vehiclekeys:GiveKeys(source --[[number]], vehicle --[[entity]])
```

***

### `GiveKeysByPlate` [#givekeysbyplate]

Give a player a key item by plate string directly.

```lua
exports.filo_vehiclekeys:GiveKeysByPlate(source --[[number]], plate --[[string]])
```

***

### `RemoveKeys` [#removekeys]

Remove a player's key item for a vehicle.

```lua
exports.filo_vehiclekeys:RemoveKeys(source --[[number]], vehicle --[[entity]])
```

***

### `RemoveKeysByPlate` [#removekeysbyplate]

```lua
exports.filo_vehiclekeys:RemoveKeysByPlate(source --[[number]], plate --[[string]])
```

***

### `GiveJobKeys` [#givejobkeys]

Grant job-restricted access to a vehicle. Does not give a physical key item — access is
checked at runtime against the player's current job.

```lua
exports.filo_vehiclekeys:GiveJobKeys(plate --[[string]], job --[[string]])
```

***

### `RemoveJobKeys` [#removejobkeys]

```lua
exports.filo_vehiclekeys:RemoveJobKeys(plate --[[string]], job --[[string]])
```

***

### `SetKeysInIgnition` [#setkeysinignition]

Set whether keys are currently in the ignition for a vehicle. Used to grant temporary
access without giving a permanent key item.

```lua
exports.filo_vehiclekeys:SetKeysInIgnition(
    plate         --[[string]],
    keysInIgnition --[[boolean]],
    canRemove     --[[boolean]]  -- whether the player can physically remove the keys
)
```

***

### `SetLockState` [#setlockstate]

Directly set the lock state of a vehicle by net ID.

```lua
exports.filo_vehiclekeys:SetLockState(netId --[[number]], state --[[boolean]])
```

***

## Client [#client]

### `GiveKeys` [#givekeys-1]

Give the local player a key for a vehicle entity.

```lua
exports.filo_vehiclekeys:GiveKeys(vehicle --[[entity]])
exports.filo_vehiclekeys:GiveKeysByPlate(plate --[[string]])
```

***

### `RemoveKeys` [#removekeys-1]

Remove the local player's key for a vehicle.

```lua
exports.filo_vehiclekeys:RemoveKeys(vehicle --[[entity]])
exports.filo_vehiclekeys:RemoveKeysByPlate(plate --[[string]])
```

***

### `HasKeys` [#haskeys]

Returns the key item if the local player has a valid key for the vehicle, or `false`.

```lua
local key = exports.filo_vehiclekeys:HasKeys(vehicle --[[entity]])
local key = exports.filo_vehiclekeys:HasKeysByPlate(plate --[[string]])
```

***

### `HasJobKeys` [#hasjobkeys]

Returns `true` if the local player's current job grants access to the vehicle.

```lua
local hasAccess = exports.filo_vehiclekeys:HasJobKeys(vehicle --[[entity]])
local hasAccess = exports.filo_vehiclekeys:HasJobKeysByPlate(plate --[[string]])
```

***

### `GiveJobKeys` [#givejobkeys-1]

```lua
exports.filo_vehiclekeys:GiveJobKeys(vehicle --[[entity]], job --[[string]])
exports.filo_vehiclekeys:GiveJobKeysByPlate(plate --[[string]], job --[[string]])
```

***

### `RemoveJobKeys` [#removejobkeys-1]

```lua
exports.filo_vehiclekeys:RemoveJobKeys(vehicle --[[entity]], job --[[string]])
exports.filo_vehiclekeys:RemoveJobKeysByPlate(plate --[[string]], job --[[string]])
```

***

### `SetKeysInIgnition` [#setkeysinignition-1]

```lua
exports.filo_vehiclekeys:SetKeysInIgnition(
    plate          --[[string]],
    keysInIgnition --[[boolean]],
    canRemove      --[[boolean]]
)
```

Shorthand helpers:

```lua
-- Insert keys into ignition (canRemove = false)
exports.filo_vehiclekeys:GiveTempKeys(vehicle --[[entity]])
exports.filo_vehiclekeys:GiveTempKeysByPlate(plate --[[string]])

-- Remove temp keys
exports.filo_vehiclekeys:RemoveTempKeys(vehicle --[[entity]])
exports.filo_vehiclekeys:RemoveTempKeysByPlate(plate --[[string]])
```
