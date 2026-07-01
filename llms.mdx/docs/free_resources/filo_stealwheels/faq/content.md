# FAQ (/docs/free_resources/filo_stealwheels/faq)



## I can't remove wheels. [#i-cant-remove-wheels]

Make sure:

* You have a tire iron.
* The vehicle is accessible.
* If Filo Jack integration is enabled, the vehicle is lifted.

***

## Can I use this without Filo Jack? [#can-i-use-this-without-filo-jack]

Yes.

Set:

```lua
Config.UseFiloJack = false
```

***

## Can I disable the required item? [#can-i-disable-the-required-item]

Yes.

```lua
Config.RequiredItem = nil
```

***

## Can I disable durability loss? [#can-i-disable-durability-loss]

Yes.

```lua
Config.DecreaseDurability.enabled = false
```
