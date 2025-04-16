const { AppServerModule } = require("../../dist/YOUR_APP_NAME/server/main");
const { renderModule } = require("@angular/platform-server");

exports.handler = async (event) => {
  const html = await renderModule(AppServerModule, {
    document: "<app-root></app-root>",
    url: event.rawUrl,
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: html,
  };
};
