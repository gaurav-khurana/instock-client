import "./WarehouseDetailsAdd.scss";

function WarehouseDetailsAdd({
  setWarehouseName,
  setAddress,
  setCity,
  setCountry,
}) {
  // // TODO get warehouse details
  // const handleWarehouseForm = async (event) => {
  //   console.log("i got warehouse form");
  //   console.log(event);
  // };

  const handlewarehouseName = (event) => {
    setWarehouseName(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  return (
    <section className="warehouse-add">
      <div className="warehouse-add__details">
        <h2 className="warehouse-add__header">Warehouse Details</h2>
        <form
          className="warehouse-add__form"
          // onSubmit={handleWarehouseForm}
        >
          <label htmlFor="warehouseName" className="warehouse-name">
            Warehouse Name
          </label>
          <input
            className="warehouse-name__input"
            type="text"
            id="warehouseName"
            name="warehouseName"
            onChange={handlewarehouseName}
          />
          <label htmlFor="warehouseAddress" className="warehouse-address">
            Street Address
          </label>
          <input
            className="warehouse-address__input"
            type="text"
            id="warehouseAddress"
            name="warehouseAddress"
            onChange={handleAddress}
          />
          <label htmlFor="warehouseCity" className="warehouse-city">
            City
          </label>
          <input
            className="warehouse-city__input"
            type="text"
            id="warehouseCity"
            name="warehouseCity"
            onChange={handleCity}
          />
          <label htmlFor="warehouseCountry" className="warehouse-country">
            Country
          </label>
          <input
            className="warehouse-country__input"
            type="text"
            id="warehouseCountry"
            name="warehouseCountry"
            onChange={handleCountry}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseDetailsAdd;
