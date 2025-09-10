import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "../src";
import "../src/index.css";

const App = () => (
  <div className="p-6 space-y-4 gap-2">
    <h1 className="text-2xl font-bold">Testing UI Library</h1>
    <div className="flex flex-col gap-2 flex-wrap">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger" size="lg">
        Danger Large Button
      </Button>
      <Button variant="primary" loading loadingText="Loading..."></Button>
      <Button variant="danger" size="md" loading></Button>
      <Button variant="outline" size="md">
        Outline Button
      </Button>
      <Button variant="outline" size="sm" loading loadingText="Loading..." />
      <Button variant="outline" size="lg" ripple>
        Ripple Outline
      </Button>
      <Button color="bg-green-600 text-white hover:bg-green-700">
        Custom Green
      </Button>

      <Button color="bg-purple-500 text-white hover:bg-purple-600">
        Purple Power
      </Button>
      <Button color="" style={{ backgroundColor: "#FF5722", color: "white" }}>
        Hex Orange
      </Button>
      <Button variant="primary" loading loadingText="Deleting..." />
      <Button variant="primary" title="Rounded" shape="rounded" />
      <Button variant="secondary" title="Pill Button" shape="pill" />
      <Button variant="danger" shape="circle">
        test
      </Button>
      <Button variant="primary" title="Square" shape="square" />
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
