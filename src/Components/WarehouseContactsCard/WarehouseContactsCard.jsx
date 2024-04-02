import "./WarehouseContactsCard.scss";

function WarehouseContactsCard({
  singleWarehouse,
  setName,
  setPosition,
  setNumber,
  setEmail,
}) {
  const handleName = (event) => {
    // setName(event.target.value);
    if (event.target.value === "") {
      setName(singleWarehouse.contact_name);
    } else {
      setName(event.target.value);
    }
  };

  const handlePosition = (event) => {
    if (event.target.value === "") {
      setPosition(singleWarehouse.contact_position);
    } else {
      setPosition(event.target.value);
    }
  };
  const handleNumber = (event) => {
    if (event.target.value === "") {
      setNumber(singleWarehouse.contact_phone);
    } else {
      setNumber(event.target.value);
    }
  };
  const handleEmail = (event) => {
    if (event.target.value === "") {
      setEmail(singleWarehouse.contact_email);
    } else {
      setEmail(event.target.value);
    }
  };
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
            defaultValue={singleWarehouse.contact_name}
            onChange={handleName}
            onSelect={handleName}
          />
          <label htmlFor="warehousePosition" className="warehouse-position">
            Position
          </label>
          <input
            className="warehouse-position__input"
            type="text"
            id="warehousePosition"
            name="warehousePosition"
            defaultValue={singleWarehouse.contact_position}
            onChange={handlePosition}
            onSelect={handlePosition}
          />
          <label htmlFor="warehousePhone" className="warehouse-phone">
            Phone Number
          </label>
          <input
            className="warehouse-phone__input"
            type="text"
            id="warehousePhone"
            name="warehousePhone"
            defaultValue={singleWarehouse.contact_phone}
            onChange={handleNumber}
            onSelect={handleNumber}
          />
          <label htmlFor="warehouseEmail" className="warehouse-email">
            Email
          </label>
          <input
            className="warehouse-email__input"
            type="email"
            id="warehouseEmail"
            name="warehouseEmail"
            defaultValue={singleWarehouse.contact_email}
            onChange={handleEmail}
            onSelect={handleEmail}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseContactsCard;
