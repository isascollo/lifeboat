import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Integration } from "./integrations/Integration";

const init = async () => {
  const integrationModule = await import(
    `./integrations/${process.env.REACT_APP_INTEGRATION_TYPE}Integration.ts`
  );

  const integration: Integration = integrationModule.default;
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <App integration={integration} />
    </React.StrictMode>,
  );
};

init();
