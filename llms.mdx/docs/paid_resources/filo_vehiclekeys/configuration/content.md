# Configuration (/docs/paid_resources/filo_vehiclekeys/configuration)





## General [#general]

```lua
Config.InteractionType = 'target'   -- 'target' or 'textui'

Config.LockDistance    = 5.0        -- Distance (metres) the lock keybind scans for vehicles
Config.KeyfobDistance  = 15.0       -- Distance (metres) the keyfob scans for the target vehicle

Config.VehicleDataRetentionMonths = 3  -- Inactive vehicle records older than this are pruned

Config.AutoDriveSpeed       = 5.0      -- Speed used when summoning a vehicle via keyfob
Config.AutoDriveDrivingFlag = 786603   -- TaskVehicleDriveToCoord driving flag for summon
```

## Locksmith [#locksmith]

```lua
Config.Locksmith = {
    Job = 'locksmith',          -- Job name as defined in your framework

    OBDConnectDuration  = 4000, -- ms the OBD connection animation plays before the minigame
    KeyCuttingDistance  = 5.0,  -- Radius (metres) to scan for nearby vehicles when using the cutting tool

    Items = {
        BlankKey       = 'blank_key',   -- Consumed on every successful duplication
        KeyCuttingTool = 'key_cutter',  -- Required for mechanical key cutting
        OBD            = 'obd_scanner', -- Required for electric vehicle fob programming
    },
```

## Offline Store [#offline-store]

The NPC locksmith spawns when the number of on-duty locksmiths is at or below `MininumDuty`.

```lua
    OfflineStore = {
        Enabled     = true,
        MininumDuty = 0,        -- NPC spawns when active locksmith count <= this value

        Prices = {
            Mechanical = 500,   -- Price for a standard mechanical key
            Wireless   = 1000,  -- Price for a wireless key fob (electric vehicles)
        },

        Locations = {
            {
                model    = 's_m_y_autoshop_02',             -- Ped model
                coords   = vector4(0.0, 0.0, 0.0, 0.0),    -- x, y, z, heading
                scenario = 'WORLD_HUMAN_CLIPBOARD',         -- Idle scenario (optional)
                -- anim = { dict = '...', name = '...', flag = 1 } -- Or use an anim instead
            },
        },
    },
```

## Blips [#blips]

```lua
    Blips = {
        {
            label  = 'Locksmith',
            sprite = 446,
            scale  = 0.8,
            color  = 0,
            coords = vector3(0.0, 0.0, 0.0),
        },
    },
```

## Interactions [#interactions]

Interaction zones are where the key cutting bench is located. Locksmiths can use these to
open the duplication menu from their inventory keys.

```lua
    Interactions = {
        {
            coords = vector3(0.0, 0.0, 0.0),
        },
    },
}
```

## Hotwire [#hotwire]

```lua
Config.Hotwire = {
    Enabled    = true,
    Key        = 'H',           -- Default keybind
    AlarmChance = 0.3,          -- 0.0–1.0 chance of triggering the vehicle alarm on attempt
    Item       = 'hotwire_kit', -- Required item to attempt hotwire (set to nil to disable)
}
```

## Lockpick [#lockpick]

```lua
Config.Lockpick = {
    AlarmChance = 0.2,
}

Config.AdvancedLockpick = {
    AlarmChance = 0.05,
}
```

## Keyless System [#keyless-system]

Electric vehicles are detected automatically on game build 3258+. For older builds, you can
define models manually.

```lua
Config.KeylessSystem = {
    Models = {
        `volta`,
        `imorgon`,
        `cyclone`,
        -- add model hashes here
    },
}
```

<Callout type="info">
  On game build 3258 and above, `GetIsVehicleElectric` is used natively and the `Models`
  list is ignored.
</Callout>

## Job Keys [#job-keys]

```lua
Config.JobKeys = true   -- Allow job-restricted key access (e.g. police vehicles)
```
