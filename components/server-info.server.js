import { Suspense } from "react";

export default function ServerInfo() {
  return (
    <div>
      Rendered from server at {new Date().toTimeString()} with Edge Middleware.
    </div>
  );
}
