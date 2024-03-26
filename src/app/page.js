import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="main">
      <SideBar />
      <Feed />
    </div>
  );
}
