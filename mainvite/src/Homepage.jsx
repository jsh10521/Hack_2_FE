import PopularList from "./routes/popular_list"
import Navbar from "./Home/Navbar"
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <PopularList />
      </main>
    </>
  );
}
