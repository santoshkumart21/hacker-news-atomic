import Text from "../../atoms/Text/text";
import { NavLink } from "react-router-dom";

const Navlink = (props) => {
  const { navTitle, link } = props;

  return (
    <div>
      <NavLink to={"/" + link} activeClassName="active">
        <Text text={navTitle} />
      </NavLink>
    </div>
  );
};

export default Navlink;
