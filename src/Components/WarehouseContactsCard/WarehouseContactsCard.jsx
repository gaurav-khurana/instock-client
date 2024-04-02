import "./WarehouseContactsCard.scss";

function WarehouseContactsCard(singlewarehouse) {
  // NOTE! Need to passdown data to show what to edit.
  return (
    <section className="warehouse-edit">
      <div className="warehouse-edit__details">
        <h2 className="warehouse-edit__header">Contacts Details</h2>
        <form className="warehouse-edit__form">
          <label htmlFor="warehouseContact" className="warehouse-contact">
            Contact Name
          </label>
          <input
            className="warehouse-contact__input"
            type="text"
            id="warehouseContact"
            name="warehouseContact"
            defaultValue={singlewarehouse.singleWarehouse.contact_name}
            onSubmit={""}
          />
          <label htmlFor="warehousePosition" className="warehouse-position">
            Position
          </label>
          <input
            className="warehouse-position__input"
            type="text"
            id="warehousePosition"
            name="warehousePosition"
            defaultValue={singlewarehouse.singleWarehouse.contact_position}
            onSubmit={""}
          />
          <label htmlFor="warehousePhone" className="warehouse-phone">
            Phone Number
          </label>
          <input
            className="warehouse-phone__input"
            type="text"
            id="warehousePhone"
            name="warehousePhone"
            defaultValue={singlewarehouse.singleWarehouse.contact_phone}
            onSubmit={""}
          />
          <label htmlFor="warehouseEmail" className="warehouse-email">
            Email
          </label>
          <input
            className="warehouse-email__input"
            type="email"
            id="warehouseEmail"
            name="warehouseEmail"
            defaultValue={singlewarehouse.singleWarehouse.contact_email}
            onSubmit={""}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseContactsCard;
