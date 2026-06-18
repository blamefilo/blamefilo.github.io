# Installation (/docs/filo_vehiclekeys/installation)





# Installation [#installation]

## Dependencies [#dependencies]

| Resource                                                           | Required | Notes                               |
| ------------------------------------------------------------------ | -------- | ----------------------------------- |
| [oxmysql](https://github.com/overextended/oxmysql)                 | Yes      |                                     |
| [ox\_lib](https://github.com/overextended/ox_lib)                  | Yes      |                                     |
| [community\_bridge](https://github.com/thelindat/community_bridge) | Yes      | Framework abstraction layer         |
| [filo\_blips](https://github.com/blamefilo/filo_blips)             | No       | Falls back to native FiveM blips    |
| ox\_target / qb-target                                             | No       | Falls back to textui if not present |
| [xsound](https://github.com/Xogy/xsound)                           | No       | Ignition and hotwire sound effects  |

## Setup [#setup]

<Steps>
  <Step>
    Download and extract `filo_vehiclekeys` into your resources folder.
  </Step>

  <Step>
    Add the following to your `server.cfg`, **after** your framework and oxmysql:

    ```
    ensure filo_vehiclekeys
    ```
  </Step>

  <Step>
    Start your server. The SQL table is created automatically on first boot — no manual database imports required.
  </Step>

  <Step>
    Configure the resource to match your server setup. See the [Configuration](/docs/filo_vehiclekeys/configuration) page.
  </Step>
</Steps>

## SQL Table [#sql-table]

The following table is created automatically. You do not need to run this manually.

```sql
CREATE TABLE IF NOT EXISTS `filo_vehiclekeys` (
    `plate`      VARCHAR(15) NOT NULL,
    `data`       LONGTEXT    NOT NULL,
    `updated_at` TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
                              ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`plate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Inactive vehicle records are pruned automatically based on the `VehicleDataRetentionMonths`
config value. Only vehicles owned by a player are ever written to the table.
