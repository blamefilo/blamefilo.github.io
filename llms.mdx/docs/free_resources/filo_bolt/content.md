# filo_bolt (/docs/free_resources/filo_bolt)



`filo_bolt` is a standalone FiveM resource that renders physical lug nut entities on a vehicle wheel and lets players interact with each one individually using a 3D cursor.

It is designed to slot into any mechanic, tyre, or vehicle repair workflow via a single blocking export — no framework coupling, no NUI overhead.

## How it works [#how-it-works]

When `Start()` is called, the resource:

1. Spawns bolt entities evenly distributed around the target wheel bone
2. Locks input and enables the mouse cursor
3. Raycasts from the cursor each frame to detect which bolt is hovered
4. On click, animates the bolt rotating around its Y-axis
5. Resolves the promise once all bolts are rotated (or the player cancels)
6. Cleans up all entities and restores the camera

Bolts that are loosened detach and fall with physics. Bolts that are tightened lock in place.

## Dependencies [#dependencies]

* [`ox_lib`](https://github.com/overextended/ox_lib) — required for `cache.ped`
* No framework (ESX / QBCore / etc.) required

## File structure [#file-structure]

```
filo_bolt/
├── client/
│   ├── cl-init.lua       -- Global constants
│   ├── cl-camera.lua     -- Scripted camera
│   ├── cl-bolt.lua       -- Bolt spawning, animation, cleanup
│   ├── cl-raycast.lua    -- Cursor raycast utility
│   ├── cl-sound.lua      -- Audio bank + playback
│   └── cl-main.lua       -- Orchestration + export
├── config.lua
└── fxmanifest.lua
```
