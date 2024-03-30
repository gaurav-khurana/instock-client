import "./WarehouseContactsCard.scss";

function WarehouseContactsCard(singlewarehouse) {
  // NOTE! Need to passdown data to show what to edit.
  return (
    <section className="warehouse-edit">
      <div className="warehouse-edit__details">
        <h2 className="warehouse-edit__header">Contacts Details</h2>
        <form className="warehouse-edit__form">
          <label htmlFor="warehouseContact">Contact Name</label>
          <input
            type="text"
            id="warehouseContact"
            name="warehouseContact"
            value={singlewarehouse.singleWarehouse.contact_name}
            onSubmit={""}
          />
          <label htmlFor="warehousePosition">Position</label>
          <input
            type="text"
            id="warehousePosition"
            name="warehousePosition"
            value={singlewarehouse.singleWarehouse.contact_position}
            onSubmit={""}
          />
          <label htmlFor="warehousePhone">Phone Number</label>
          <input
            type="text"
            id="warehousePhone"
            name="warehousePhone"
            value={singlewarehouse.singleWarehouse.contact_phone}
            onSubmit={""}
          />
          <label htmlFor="warehouseEmail">Email</label>
          <input
            type="email"
            id="warehouseEmail"
            name="warehouseEmail"
            value={singlewarehouse.singleWarehouse.contact_email}
            onSubmit={""}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseContactsCard;
