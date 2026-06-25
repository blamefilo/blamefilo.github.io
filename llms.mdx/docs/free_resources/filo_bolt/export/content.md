# Export (/docs/free_resources/filo_bolt/export)





## Start [#start]

Starts the bolt minigame for a specific vehicle wheel. The call **blocks** until the player either rotates all bolts or cancels.

```lua
local success = exports.filo_bolt:Start(data)
```

### Parameters [#parameters]

`data` is a table with the following fields:

<TypeTable
  type="{
  vehicle: {
    description: &#x22;Entity handle of the vehicle the wheel belongs to.&#x22;,
    type: &#x22;integer&#x22;,
    required: true,
  },
  wheelBone: {
    description: 'Bone name (&#x22;wheel_lf&#x22;, &#x22;wheel_rf&#x22;, &#x22;wheel_lr&#x22;, &#x22;wheel_rr&#x22;) or a numeric bone index. If a bone index is passed it will be resolved to the matching name automatically.',
    type: &#x22;string | integer&#x22;,
    required: true,
  },
  lugnutCount: {
    description: &#x22;How many bolt entities to spawn around the wheel.&#x22;,
    type: &#x22;integer&#x22;,
    default: &#x22;5&#x22;,
  },
  isTightening: {
    description: &#x22;Direction of rotation. true rotates clockwise (tighten) and locks the bolt on completion. false rotates counter-clockwise (loosen) and enables physics so the bolt falls away.&#x22;,
    type: &#x22;boolean&#x22;,
    default: &#x22;false&#x22;,
  },
  canCancel: {
    description: &#x22;Whether the player can exit the minigame early by pressing Escape or Backspace.&#x22;,
    type: &#x22;boolean&#x22;,
    default: &#x22;true&#x22;,
  },
}"
/>

### Return value [#return-value]

| Value   | Meaning                               |
| ------- | ------------------------------------- |
| `true`  | All bolts were successfully rotated   |
| `false` | The player cancelled before finishing |

### Valid wheel bones [#valid-wheel-bones]

| Bone name  | Position    |
| ---------- | ----------- |
| `wheel_lf` | Front-left  |
| `wheel_rf` | Front-right |
| `wheel_lr` | Rear-left   |
| `wheel_rr` | Rear-right  |

<Callout>
  `Start` uses `Citizen.Await` internally. Call it inside a `CreateThread` — do not call it at the top level of a script or inside an event handler without a thread wrapper.
</Callout>

### Input bindings (while active) [#input-bindings-while-active]

| Input                  | Action                                               |
| ---------------------- | ---------------------------------------------------- |
| **Left Mouse Button**  | Rotate the hovered bolt                              |
| **Escape / Backspace** | Cancel and return `false` (if `canCancel` is `true`) |
