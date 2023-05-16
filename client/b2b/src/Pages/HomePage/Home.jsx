import Header from "../../Components/Header";
import JoinedGroups from "../../Components/JoinedGroups";

// Import Swiper React components
import SuggestedGroups from "../../Components/SuggestedGroups";

function Home() {
  return (
    <>
      <Header />

      <SuggestedGroups />

      <JoinedGroups />
    </>
  );
}

export default Home;
