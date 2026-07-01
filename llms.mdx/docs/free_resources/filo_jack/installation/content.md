# Installation (/docs/free_resources/filo_jack/installation)



# Installation [#installation]

## 1. Install the resource [#1-install-the-resource]

Place the resource inside your server's resources folder.

```
resources/
    filo_jack/
```

## 2. Ensure the resource [#2-ensure-the-resource]

Add the following to your `server.cfg`.

```
ensure ox_lib

# ensure frameworkName [qbx_core/qb-core]

ensure community_bridge
ensure filo_jack
```

## 3. Install dependencies [#3-install-dependencies]

Required:

* [ox\_lib](https://github.com/overextended/ox_lib)
* [community\_bridge](https://github.com/TheOrderFivem/community_bridge)

## 4. Inventory Item [#4-inventory-item]

Create the following inventory item.

```
['vehicle_jack'] = {
    label = 'Vehicle Jack',
    weight = 500,
},
```

An item image is included inside:

```
INSTALL/item images/
```

## 5. Restart the server [#5-restart-the-server]

Once installed, restart your server.
