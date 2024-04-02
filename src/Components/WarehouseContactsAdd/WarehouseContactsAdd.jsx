import "./WarehouseContactsAdd.scss";

function WarehouseContactsAdd({ setName, setPosition, setNumber, setEmail }) {
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleNumber = (event) => {
    setNumber(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="warehouse-add">
      <div className="warehouse-add__details">
        <h2 className="warehouse-add__header">Contacts Details</h2>
        <form className="warehouse-add__form">
          <label htmlFor="warehouseContact" className="warehouse-contact">
            Contact Name
          </label>
          <input
            className="warehouse-contact__input"
            type="text"
            id="warehouseContact"
            name="warehouseContact"
            onChange={handleName}
          />
          <label htmlFor="warehousePosition" className="warehouse-position">
            Position
          </label>
          <input
            className="warehouse-position__input"
            type="text"
            id="warehousePosition"
            name="warehousePosition"
            onChange={handlePosition}
          />
          <label htmlFor="warehousePhone" className="warehouse-phone">
            Phone Number
          </label>
          <input
            className="warehouse-phone__input"
            type="text"
            id="warehousePhone"
            name="warehousePhone"
            onChange={handleNumber}
          />
          <label htmlFor="warehouseEmail" className="warehouse-email">
            Email
          </label>
          <input
            className="warehouse-email__input"
            type="email"
            id="warehouseEmail"
            name="warehouseEmail"
            onChange={handleEmail}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseContactsAdd;
