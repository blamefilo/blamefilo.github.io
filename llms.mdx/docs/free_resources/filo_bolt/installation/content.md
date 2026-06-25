# Installation (/docs/free_resources/filo_bolt/installation)





## Requirements [#requirements]

Before installing, make sure the following resource is running on your server:

* [`ox_lib`](https://github.com/overextended/ox_lib) — must be started before `filo_bolt`

## Steps [#steps]

<Steps>
  ### Download the resource [#download-the-resource]

  Purchase and download `filo_bolt` from [filo-studios.tebex.io](https://filo-studios.tebex.io). Extract the archive — you should have a single folder named `filo_bolt`.

  ### Add to your resources [#add-to-your-resources]

  Move the `filo_bolt` folder into your server's `resources` directory (or whichever sub-folder you organise resources into).

  ```
  resources/
  └── [filo]/
      └── filo_bolt/
  ```

  ### Add the audio bank [#add-the-audio-bank]

  Place the custom audio files at the following path inside the resource:

  ```
  filo_bolt/audiodirectory/filo_bolt_sounds.awc
  ```

  This file is included in the download. The resource will not throw an error if it is missing, but bolt sounds will not play.

  ### Ensure in server.cfg [#ensure-in-servercfg]

  Add the following line to your `server.cfg`, **after** `ox_lib`:

  ```
  ensure ox_lib
  ensure filo_bolt
  ```

  ### Restart or start the resource [#restart-or-start-the-resource]

  ```
  start filo_bolt
  ```
</Steps>

<Callout type="warn">
  Do not rename the resource folder. The export is registered under `filo_bolt` and callers reference it by that name.
</Callout>
