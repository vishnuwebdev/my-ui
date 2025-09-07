import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../src";
import "../src/index.css";

const App = () => (
  <div className="p-6 space-y-4">
    <h1 className="text-2xl font-bold">Testing UI Library</h1>
    <Button variant="primary">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="danger" size="lg">
      Danger Large Button
    </Button>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
