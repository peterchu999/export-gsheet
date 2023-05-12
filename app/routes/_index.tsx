import type { V2_MetaFunction } from "@remix-run/node";

import ExportCard from "~/components/blocks/ExportCard";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Export to Google Sheet" }];
};

export default function Index() {
  return (
    <div className="flex bg-[#f5f5f5] h-[100vh] justify-center items-center">
      <ExportCard />
    </div>
  );
}
