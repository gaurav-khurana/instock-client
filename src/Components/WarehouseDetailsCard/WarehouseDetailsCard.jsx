import "./WarehouseDetailsCard.scss";

function WarehouseDetailsCard() {
  // NOTE! Need to passdown data to show what to edit.
  return (
    <section className="warehouse-edit">
      <div className="warehouse-edit__details">
        <h2 className="warehouse-edit__header">Warehouse Details</h2>
        <form className="warehouse-edit__form">
          <label htmlFor="warehouseName">Warehouse Name</label>
          <input
            type="text"
            id="warehouseName"
            name="warehouseName"
            value=""
            onSubmit={""}
          />
          <label htmlFor="warehouseAddress">Street Address</label>
          <input
            type="text"
            id="warehouseAddress"
            name="warehouseAddress"
            value=""
            onSubmit={""}
          />
          <label htmlFor="warehouseCity">City</label>
          <input
            type="text"
            id="warehouseCity"
            name="warehouseCity"
            value=""
            onSubmit={""}
          />
          <label htmlFor="warehouseCountry">Country</label>
          <input
            type="text"
            id="warehouseCountry"
            name="warehouseCountry"
            value=""
            onSubmit={""}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseDetailsCard;
