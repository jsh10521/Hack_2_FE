import PopularList from "./routes/popular_list"
import Navbar from "./Home/Navbar"

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
