import { JSX } from "solid-js";
import Footer from "~/ui/components/footer/footer";
import Navbar from "~/ui/components/navbar/navbar";
import Styled from "./main.css";

interface IMainLayout {
  children: JSX.Element;
}

const MainLayout = (props: IMainLayout) => {
  return (
    <div class={Styled.Wrapper}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
