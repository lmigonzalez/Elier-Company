import { type ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: { children: ReactNode }) => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <div className="flex min-h-screen w-screen flex-col ">
        <NavBar />
        <div className="mx-4 py-10 px-4">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
