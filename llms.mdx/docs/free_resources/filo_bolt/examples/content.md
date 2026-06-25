# Examples (/docs/free_resources/filo_bolt/examples)





## Loosen a wheel [#loosen-a-wheel]

The most common use case — called before removing a tyre or wheel.

```lua
CreateThread(function()
    local vehicle = GetVehiclePedIsIn(cache.ped, false)
    if not DoesEntityExist(vehicle) then return end

    local success = exports.filo_bolt:Start({
        vehicle      = vehicle,
        wheelBone    = "wheel_lf",
        lugnutCount  = 5,
        isTightening = false,
    })

    if success then
        -- all bolts removed, proceed with wheel removal
    end
end)
```

***

## Tighten after fitting a wheel [#tighten-after-fitting-a-wheel]

Called after a new wheel has been attached. `canCancel = false` forces the player to complete the task.

```lua
CreateThread(function()
    local vehicle = GetVehiclePedIsIn(cache.ped, false)

    local success = exports.filo_bolt:Start({
        vehicle      = vehicle,
        wheelBone    = "wheel_rr",
        lugnutCount  = 6,
        isTightening = true,
        canCancel    = false,
    })

    if success then
        -- wheel secured
    end
end)
```

***

## Passing a bone index [#passing-a-bone-index]

If your resource works with bone indices rather than names, pass the index directly — `filo_bolt` resolves it internally.

```lua
local boneIdx = GetEntityBoneIndexByName(vehicle, "wheel_lr")

local success = exports.filo_bolt:Start({
    vehicle   = vehicle,
    wheelBone = boneIdx,
})
```

***

## Checking the result in a job flow [#checking-the-result-in-a-job-flow]

`Start` returns a plain boolean, so it fits cleanly into any sequential job logic.

```lua
CreateThread(function()
    local vehicle = GetVehiclePedIsIn(cache.ped, false)

    local wheels = { "wheel_lf", "wheel_rf", "wheel_lr", "wheel_rr" }

    for _, bone in ipairs(wheels) do
        local ok = exports.filo_bolt:Start({
            vehicle      = vehicle,
            wheelBone    = bone,
            lugnutCount  = 5,
            isTightening = false,
        })

        if not ok then
            -- player cancelled mid-job
            return
        end
    end

    -- all four wheels loosened
end)
```

<Callout type="warn">
  Always call `Start` inside a `CreateThread`. It blocks via `Citizen.Await` and will freeze your script if called outside a thread.
</Callout>
