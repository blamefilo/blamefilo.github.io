# Error: syntax error near <\1> (/docs/common_escrow/parsing)



### Error Example [#error-example]

```bash
[script:filo_vehiclekeys] Error parsing script @filo_vehiclekeys/server/sv-main.lua in resource filo_vehiclekeys: @filo_vehiclekeys/server/sv-main.lua:1: syntax error near '<\1>'
[    c-scripting-core] Failed to load script server/sv-main.lua.
```

### Solutions [#solutions]

* **You are using FileZilla and files have been corrupted during transfer** - try using an alternative FTP client such as [WinSCP](https://winscp.net/eng/index.php)
* You are transferring the folder to your server file by file — **you must upload the .zip file as-is** and then extract it **after** it has been transferred to your VPS
* Your server version is too old, the minimum version is 4752
  * You can download updated server artifacts [here](https://runtime.fivem.net/artifacts/fivem/build_server_windows/master/)
  * ...or check out the official [FiveM guide](https://docs.fivem.net/docs/server-manual/setting-up-a-server/)
