# Installation (/docs/free_resources/filo_stealwheels/installation)



## 1. Install the resource [#1-install-the-resource]

Copy the resource into your server's resources folder.

```
resources/
    filo_stealwheels/
```

## 2. Add to server.cfg [#2-add-to-servercfg]

```
ensure filo_stealwheels
```

## 3. Install dependencies [#3-install-dependencies]

Required:

* [ox\_lib](https://github.com/overextended/ox_lib)
* [ox\_inventory](https://github.com/overextended/ox_inventory)
* [community\_bridge](https://github.com/TheOrderFivem/community_bridge)

Optional:

* [filo\_jack](https://filo.tebex.io/package/filo-jack)
* [filo\_bolt](https://filo.tebex.io/package/filo-bolt)

## 4. Import inventory items [#4-import-inventory-items]

The package includes an example item configuration.

```
INSTALL/ox_inventory.txt
```

Also import the provided item images.

```
INSTALL/item images/
```

Images included:

* tire\_iron.png
* vehicle\_wheel.png

## 5. Restart your server [#5-restart-your-server]

Restart the server after installation.
