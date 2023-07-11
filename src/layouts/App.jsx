import { Head } from "@router";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Head
        title="CONFIDELITY CO"
        image="/favicon.svg"
        url="https://vitefilerouter.com"
        description="CONFIDELITY CO"
      />
      <Outlet />
    </>
  );
}
