# Configuration (/docs/free_resources/filo_bolt/configuration)





## config.lua [#configlua]

All static options live in `config.lua` at the root of the resource. Changes take effect on the next resource restart.

```lua title="config.lua"
Config = {}

-- RGBA colour applied to the draw-outline on a hovered bolt.
-- Values: 0–255 per channel.
Config.OutlineColor = { r = 255, g = 255, b = 255, a = 255 }

-- When true, the player must wait for the current bolt to finish
-- rotating before they can click another one.
Config.OneAtATime = false
```

## Options [#options]

<TypeTable
  type="{
  OutlineColor: {
    description: &#x22;RGBA table controlling the colour of the bolt hover outline.&#x22;,
    type: &#x22;{ r: number, g: number, b: number, a: number }&#x22;,
    default: &#x22;{ r = 255, g = 255, b = 255, a = 255 }&#x22;,
  },
  OneAtATime: {
    description: &#x22;Restricts the player to animating one bolt at a time. Useful for slower, more deliberate gameplay.&#x22;,
    type: &#x22;boolean&#x22;,
    default: &#x22;false&#x22;,
  },
}"
/>

## Notes [#notes]

* `OutlineColor` uses the same RGBA range (0–255) as `SetEntityDrawOutlineColor`.
* `OneAtATime` only blocks the *start* of a new rotation — it does not cancel an animation already in progress.
