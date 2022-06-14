import Story from "./story";
import DatafromApi from "../utils/datafetch";
import Text from "../atoms/Text/text";

const Stories = (props) => {
  const { isLoading, stories } = DatafromApi(props.type);

  return (
    <div>
      {isLoading ? (
        <p className="loading">
          <Text text={"...Loading"} />
        </p>
      ) : (
        <>
          {Object(stories).map(({ data } = stories, id) => (
            <Story key={id} contentId={id} story={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default Stories;
