import { Suspense } from "react";
import Page from "../components/page.client";
import Info from "../components/info.client";
import ServerInfo from "../components/server-info.server";

export default function ServerOnlyComponent({}) {
  return (
    <Page>
      <div className="bg-gray-200 p-5 mb-10">
        <div className="text-lg pb-5">React component without js client</div>
        <Suspense fallback={"Loading..."}>
          <ServerInfo />
        </Suspense>
      </div>

      <div className="bg-gray-200 p-5">
        <div className="text-lg pb-5">ONlY Client</div>
        <div>
          <span>This component below is client</span>
          <Info />
        </div>
      </div>
    </Page>
  );
}
