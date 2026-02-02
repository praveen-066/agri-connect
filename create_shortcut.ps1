$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$HOME\Desktop\AgriStore.lnk")
$Shortcut.TargetPath = "cmd.exe"
$Shortcut.Arguments = "/c start http://localhost:8001"
$Shortcut.IconLocation = "shell32.dll,13"
$Shortcut.Description = "Launch AgriStore Application"
$Shortcut.Save()
