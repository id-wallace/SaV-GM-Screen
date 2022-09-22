Hooks.on("renderJournalSheet", (app, html, data) => {
  const title = app.title;
  if (title !== "!GM Screen" || title !== "!Player Screen") {
    return;
  }

  app.setPosition({
    width: 770,
    height: 1050
  });
});