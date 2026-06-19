# Flows (/docs/paid_resources/filo_vehiclekeys/flows)





## Mechanical Key Cutting [#mechanical-key-cutting]

Used for non-electric vehicles. Can be triggered in two ways.

### From the Key Cutting Station [#from-the-key-cutting-station]

Target zone or textui interaction at configured `Interactions` coordinates.
Opens a menu listing all vehicle keys currently in the locksmith's inventory.

**Requirements:**

* Locksmith job, on duty
* At least one `vehiclekey` item in inventory
* `BlankKey` item in inventory

<Steps>
  <Step>
    Approach the key cutting bench and interact with it.
  </Step>

  <Step>
    Select a key from your inventory to duplicate.
  </Step>

  <Step>
    Choose whether to invalidate the owner's existing key.
  </Step>

  <Step>
    Complete the minigame and progress bar.
  </Step>

  <Step>
    A duplicate key is added to your inventory. The blank key is consumed.
  </Step>
</Steps>

### From the Key Cutting Tool Item [#from-the-key-cutting-tool-item]

Using the `KeyCuttingTool` item opens a combined menu of:

* Keys in the locksmith's inventory (non-keyless only)
* Any non-electric vehicles within `KeyCuttingDistance` metres

This allows duplication without needing the owner's physical key, as long as their vehicle
is present.

**Requirements:**

* Locksmith job, on duty
* `BlankKey` and `KeyCuttingTool` in inventory

<Callout type="info">
  If a vehicle is both in the locksmith's inventory and physically nearby, it only appears
  once in the menu — sourced from the inventory entry.
</Callout>

***

## OBD Key Fob Programming [#obd-key-fob-programming]

Used exclusively for electric vehicles. Triggered by using the `OBD` scanner item.

The locksmith connects the scanner under the dash, reads the vehicle's key programming, and
writes it to a blank key fob.

**Requirements:**

* Locksmith job, on duty
* Seated in the **driver's seat** of an electric vehicle
* `BlankKey` and `OBD` scanner in inventory

<Steps>
  <Step>
    Enter and sit in the driver's seat of an electric vehicle.
  </Step>

  <Step>
    Use the OBD scanner item from your inventory.
  </Step>

  <Step>
    Confirm the programming prompt and choose whether to invalidate the existing fob.
  </Step>

  <Step>
    A timed animation plays for `OBDConnectDuration` milliseconds while the scanner reads
    the key data.

    <Callout type="warn">
      Leaving the driver's seat during this window cancels the process immediately.
    </Callout>
  </Step>

  <Step>
    Complete the minigame.
  </Step>

  <Step>
    A programmed key fob is added to your inventory. The blank key and OBD scanner are consumed.
  </Step>
</Steps>

***

## NPC Locksmith [#npc-locksmith]

When the number of on-duty locksmiths is at or below `Config.Locksmith.OfflineStore.MininumDuty`,
NPC peds spawn at each configured location in `OfflineStore.Locations`.

Players can purchase spare keys directly from the NPC without a locksmith player present.

**Pricing:**

* Standard mechanical key — `OfflineStore.Prices.Mechanical`
* Wireless key fob (electric vehicles) — `OfflineStore.Prices.Wireless`

The NPC menu lists all vehicles owned by the interacting player. The player can choose
whether to invalidate their existing key when purchasing a spare.

<Callout type="info">
  NPC peds are automatically removed when a locksmith comes on duty, and re-spawned when
  the last locksmith goes off duty or disconnects. This is handled in real time via a
  GlobalState handler — no restart required.
</Callout>

***

## Key Invalidation [#key-invalidation]

Every duplication flow asks whether to invalidate the existing key. This is relevant when:

* A vehicle was stolen and the owner wants their key to stop working
* A locksmith is cutting a key for a customer who lost theirs

When invalidated:

* A new `keyId` is generated and written to the vehicle data
* If the vehicle is currently spawned, statebags are updated immediately so the old key
  stops working in the active session
* The owner's existing `vehiclekey` item becomes invalid as its stored `id` no longer
  matches the vehicle's current `keyId`

When not invalidated:

* The duplicate is cut with the same `keyId` as the existing key
* Both keys work simultaneously

***

## Minigame [#minigame]

All duplication flows use the same minigame sequence:

1. `exports.minigames:Play('locksmith', { difficulty = 3 })` — the skill check
2. `lib.progressBar` — a timed progress bar (5–10 seconds, randomly) representing the
   physical cutting or programming work

Cancelling the progress bar or failing the minigame aborts the flow with no item consumption
— except for the OBD flow, where the animation has already played.
