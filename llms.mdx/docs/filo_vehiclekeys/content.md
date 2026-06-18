# filo_vehiclekeys (/docs/filo_vehiclekeys)





# filo\_vehiclekeys [#filo_vehiclekeys]

[![Buy on Tebex](https://img.shields.io/badge/Tebex-blue?style=for-the-badge\&logo=tebex)](https://filo-studios.tebex.io/package/filo-vehiclekeys)

Duplicate keys, program key fobs, and manage locksmith interactions for FiveM servers.
Supports both mechanical key cutting and OBD-based fob programming for electric vehicles,
with an NPC fallback store when no locksmiths are on duty.

<Callout type="info">
  This is a full rewrite of the original `filo_vehiclekeys` release. The codebase has been
  refactored from the ground up — MySQL-backed storage, cleaner architecture, and properly
  separated client and server logic.
</Callout>

## Features [#features]

* Mechanical key cutting from inventory keys or nearby vehicles
* OBD-based key fob programming for electric vehicles
* Locksmith job integration with on-duty checks
* NPC locksmith fallback when no players are on duty
* Configurable offline store with separate pricing for mechanical and wireless keys
* Optional key invalidation when duplicating
* ox\_target and textui interaction support
* filo\_blips integration with native blip fallback
* MySQL-backed vehicle data storage with automatic table creation
* One-time migration from legacy `.bin` storage
* Drop-in compatibility with qb-vehiclekeys, qbx\_vehiclekeys, and plrs\_vehiclekeys

## Pages [#pages]

<Cards>
  <Card title="Installation" href="/docs/filo_vehiclekeys/installation" description="Dependencies, setup steps, and migration from the legacy BIN format." />

  <Card title="Configuration" href="/docs/filo_vehiclekeys/configuration" description="Full breakdown of every config option available." />

  <Card title="Flows" href="/docs/filo_vehiclekeys/flows" description="How mechanical key cutting, OBD programming, and the NPC store work." />

  <Card title="Exports" href="/docs/filo_vehiclekeys/exports" description="Client and server exports for use in other resources." />

  <Card title="Compatibility" href="/docs/filo_vehiclekeys/compatibility" description="Drop-in support for qb-vehiclekeys, qbx_vehiclekeys, and plrs_vehiclekeys." />
</Cards>
