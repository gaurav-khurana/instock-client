import "./InventoryDetails.scss";
import EditPic from "../../assets/Icons/edit-24px.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";

function InventoryDetails() {
  return (
    <div className="inventory-details">
      <div className="inventory-details__item">
        <img className="inventory-details__back-arrow" src={BackArrow}></img>
        <h1 className="inventory-details__product-name">Television</h1>
        {/* need to change this to accept API call */}
        <img className="inventory-details__edit-pic" src={EditPic}></img>
      </div>
      <div className="inventory-details__info">
        <div className="details__description-and-category">
          <div className="details__item-description">ITEM DESCRIPTION</div>
          <div className="details__description--data">
            This 50", 4K LED TV provides a crystal-clear picture and vivid
            colors.
          </div>
          <div className="details__category">CATEGORY</div>
          <div className="details__category--data">Electronics</div>
        </div>
        <div className="details__status-quantity-warehouse">
          <div className="details__status-quantity">
            <div className="details__status">
              STATUS:
              <button>IN STOCK</button>
            </div>
            <div className="details__quantity">
              QUANTITY:
              <div className="details__quantity--data">500</div>
            </div>
          </div>
          <div className="details__warehouse">
            WAREHOUSE
            <div className="details__warehouse--data"></div>Manhattan
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;
