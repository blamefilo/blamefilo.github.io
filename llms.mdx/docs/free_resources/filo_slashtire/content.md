# filo_slashtire (/docs/free_resources/filo_slashtire)



`filo_slashtire` allows players to puncture vehicle tires using configurable melee weapons. The resource automatically detects the nearest tire, synchronizes the damage across all clients, and integrates with **ox\_target** for seamless interaction.

## Features [#features]

* Lightweight and optimized
* Automatic closest tire detection
* Configurable allowed weapons
* Fully synchronized tire damage
* Framework independent

## Requirements [#requirements]

* [ox\_lib](https://github.com/overextended/ox_lib)
* [ox\_target](https://github.com/overextended/ox_target)

## Installation [#installation]

1. Place `filo_slashtire` in your `resources` folder.
2. Ensure the required dependencies before the resource.

```
ensure ox_lib
ensure ox_target
ensure filo_slashtire
```

## Configuration [#configuration]

### Allowed Weapons [#allowed-weapons]

Configure which weapons can slash tires in:

```text
shared/sh-config.lua
```

Example:

```lua
Config.AllowedWeapons = {
    `WEAPON_KNIFE`,
    `WEAPON_SWITCHBLADE`,
    `WEAPON_DAGGER`
}
```

Any GTA V weapon hash can be added or removed from this table.

## Usage [#usage]

1. Equip one of the configured weapons.
2. Walk up to a vehicle tire.
3. Target the tire using **ox\_target**.
4. Select **Slash Tire**.
5. The tire will be punctured for everyone on the server.

## Compatibility [#compatibility]

| Resource   | Required |
| ---------- | -------- |
| ox\_lib    | ✅        |
| ox\_target | ✅        |

## Support [#support]

If you encounter an issue, please include:

* Server artifacts version
* Resource version
* Console errors
* Steps to reproduce

For support and updates:

* **Discord**: [https://discord.gg/ReEE9HgA4c](https://discord.gg/ReEE9HgA4c)
* **Store**: [https://filo-studios.tebex.io](https://filo-studios.tebex.io)

```
```
