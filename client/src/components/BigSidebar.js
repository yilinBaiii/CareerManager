import Wrapper from "../wrappers/BigSidebar";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          // show sidebar at the begining
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
