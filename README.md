# Release Demo Module

A tiny do-nothing FoundryVTT module used to demonstrate the release process, first by hand, then with [foundry-release-action](https://github.com/thejoester/foundry-release-action).

All it does is print "Hello, world!" to the console when Foundry starts, and show a notification when the game is ready. The point is not the module, it is the release.

## Installation

Use the manifest URL from the latest release:

```
https://github.com/thejoester/release-demo-module/releases/latest/download/module.json
```

## What this is for

This module exists to show two things side by side:

1. The manual way to cut a release: edit `module.json` by hand, zip the files, create a GitHub release, attach the zip, then register the build on foundryvtt.com.
2. The automated way: publish a GitHub release and let `foundry-release-action` do the version stamping, zipping, attaching, and Foundry website publish for you.
