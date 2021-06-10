import _ from "lodash";
import "./style.css";

const Items = (props) => {
  if (!_.isEmpty(props.items)) {
    return props.items.map((item) => (
      <div>
        <div className="closet-layout col-md-3" >
          <div className="items">
            <img className="closet-item" src={item.imageUrl} alt="new" height="150" />
          </div>
        </div>
      </div>
    ))   
  }
  return <div>Nothing here</div>
};

export default Items;
