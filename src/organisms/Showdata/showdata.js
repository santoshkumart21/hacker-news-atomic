import "./style.css";

const Showdata = (props) => {
  const { storyId, storyurl, storyTitle, storyTime, storyScore, storyBy } =
    props;
  return (
    <div>
      <table>
        <tr>
          <td>{storyId + 1}.</td>
          <td className="title">
            <a href={storyurl}> {storyTitle}</a>
          </td>
        </tr>
        <tr>
          <td></td>
          <td className="sub-texts">
            {storyScore + " points by " + storyBy + " " + storyTime}
          </td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Showdata;
