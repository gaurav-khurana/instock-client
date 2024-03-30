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
          <label htmlFor="warehouseName">Warehouse Name</label>
          <input
            type="text"
            id="warehouseName"
            name="warehouseName"
            // value={singlewarehouse}
            value={singlewarehouse.singleWarehouse.warehouse_name}
            onSubmit={""}
          />

          <label htmlFor="warehouseAddress">Street Address</label>
          <input
            type="text"
            id="warehouseAddress"
            name="warehouseAddress"
            value={singlewarehouse.singleWarehouse.address}
            onSubmit={""}
          />
          <label htmlFor="warehouseCity">City</label>
          <input
            type="text"
            id="warehouseCity"
            name="warehouseCity"
            value={singlewarehouse.singleWarehouse.city}
            onSubmit={""}
          />
          <label htmlFor="warehouseCountry">Country</label>
          <input
            type="text"
            id="warehouseCountry"
            name="warehouseCountry"
            value={singlewarehouse.singleWarehouse.country}
            onSubmit={""}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseDetailsCard;
