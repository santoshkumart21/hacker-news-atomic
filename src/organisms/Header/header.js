import Heading from "../../atoms/Heading/heading";
import Text from "../../atoms/Text/text";
import Navlink from "../../molecules/Navlink/navlink";
import "./style.css";

const Header = (props) => {
  const { navList } = props;

  return (
    <div>
      <Heading title={"Hacker News"} />
      <div className="navbar-css">
        {navList.map((ele) => (
          <>
            <Navlink link={ele} navTitle={ele} />
            <Text text={"|"} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Header;
