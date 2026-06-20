# filo_textui (/docs/free_resources/filo_textui)





A lightweight text UI library for FiveM. Render interactive key prompts attached to entities or world coordinates, or display a contextual bottom bar — both with live key-press feedback.

## Display modes [#display-modes]

**3D world labels** are rendered directly in the game world as billboarded DUI textures. They scale with distance, auto-orient to the entity's forward vector, and clean up automatically when the tracked entity is removed.

**2D bottom bar** is a screen-space prompt bar anchored to the bottom center of the screen. It slides in on show and supports the same key badge system.

Both modes support optional key badges (`E` `F` `G` `H` `X`) that visually highlight when the player holds the corresponding key, making them well suited for interaction prompts.

## Dependencies [#dependencies]

* [`ox_lib`](https://github.com/overextended/ox_lib)

## Installation [#installation]

1. Drop `filo_textui` into your resources folder.
2. Add `ensure filo_textui` to your `server.cfg` **before** any resource that uses it.

<Callout type="info">
  `filo_textui` must start before any resource that calls its exports.
</Callout>

## Configuration [#configuration]

```lua title="config.lua"
Config.FollowCamera = false
```

| Option         | Type      | Default | Description                                                                                 |
| -------------- | --------- | ------- | ------------------------------------------------------------------------------------------- |
| `FollowCamera` | `boolean` | `false` | When `true`, labels on entities rotate their anchor to always face the camera horizontally. |
