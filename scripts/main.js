// Release Demo Module - minimal entry point for the release walkthrough.

Hooks.once("init", () => {
  console.log("Release Demo Module | Hello, world!");
});

Hooks.once("ready", () => {
  ui.notifications?.info("Release Demo Module is loaded. Hello, world!");
});
