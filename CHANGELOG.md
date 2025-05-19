# ChangeLog
# V1.0.3

* Implemented Debug watchpoints (watch breakpoints).
  - use Breakpoints window and tap + to give the name of the variable to watch
* Fix: showServerOutput default = switch

# V1.0.2
* Implemented default port setting for GDB - server communication
     - use "gdbPort" setting in launch.json to change the default port.
* Improved server output.

# V1.0.1
* Implemented forwarding of server's stdout and stdin to VS Code Debug Console
    - use "showServerOutput" setting in launch.json to change the behaviour.

# V1.0.0
Initial release forked from Marus cortex-debug V1.13.0-pre6.