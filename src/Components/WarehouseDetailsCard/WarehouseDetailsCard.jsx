import "./WarehouseDetailsCard.scss";

function WarehouseDetailsCard(singlewarehouse) {
  console.log(singlewarehouse.singleWarehouse.warehouse_name);
  console.log(singlewarehouse.warehouse_name);
  // NOTE! Need to passdown data to show what to edit.
  return (
    <section className="warehouse-edit">
      <div className="warehouse-edit__details">
        <h2 className="warehouse-edit__header">Warehouse Details</h2>
        <form className="warehouse-edit__form">
          <label htmlFor="warehouseName" className="warehouse-name">
            Warehouse Name
          </label>
          <input
            className="warehouse-name__input"
            type="text"
            id="warehouseName"
            name="warehouseName"
            // value={singlewarehouse}
            defaultValue={singlewarehouse.singleWarehouse.warehouse_name}
            onSubmit={""}
          />

          <label htmlFor="warehouseAddress" className="warehouse-address">
            Street Address
          </label>
          <input
            className="warehouse-address__input"
            type="text"
            id="warehouseAddress"
            name="warehouseAddress"
            defaultValue={singlewarehouse.singleWarehouse.address}
            onSubmit={""}
          />
          <label htmlFor="warehouseCity" className="warehouse-city">
            City
          </label>
          <input
            className="warehouse-city__input"
            type="text"
            id="warehouseCity"
            name="warehouseCity"
            defaultValue={singlewarehouse.singleWarehouse.city}
            onSubmit={""}
          />
          <label htmlFor="warehouseCountry" className="warehouse-country">
            Country
          </label>
          <input
            className="warehouse-country__input"
            type="text"
            id="warehouseCountry"
            name="warehouseCountry"
            defaultValue={singlewarehouse.singleWarehouse.country}
            onSubmit={""}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseDetailsCard;
