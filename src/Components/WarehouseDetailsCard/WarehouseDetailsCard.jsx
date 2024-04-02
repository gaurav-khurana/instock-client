import "./WarehouseDetailsCard.scss";

function WarehouseDetailsCard({
  singleWarehouse,
  setWarehouseName,
  setAddress,
  setCity,
  setCountry,
}) {
  const handlewarehouseName = (event) => {
    if (event.target.value === "") {
      setWarehouseName(singleWarehouse.warehouse_name);
    } else {
      setWarehouseName(event.target.value);
    }
  };

  const handleAddress = (event) => {
    if (event.target.value === "") {
      setAddress(singleWarehouse.address);
    } else {
      setAddress(event.target.value);
    }
  };

  const handleCity = (event) => {
    if (event.target.value === "") {
      setCity(singleWarehouse.city);
    } else {
      setCity(event.target.value);
    }
  };

  const handleCountry = (event) => {
    if (event.target.value === "") {
      setCountry(singleWarehouse.country);
    } else {
      setCountry(event.target.value);
    }
  };

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
            defaultValue={singleWarehouse.warehouse_name}
            onChange={handlewarehouseName}
            onSelect={handlewarehouseName}
          />

          <label htmlFor="warehouseAddress" className="warehouse-address">
            Street Address
          </label>
          <input
            className="warehouse-address__input"
            type="text"
            id="warehouseAddress"
            name="warehouseAddress"
            defaultValue={singleWarehouse.address}
            onChange={handleAddress}
            onSelect={handleAddress}
          />
          <label htmlFor="warehouseCity" className="warehouse-city">
            City
          </label>
          <input
            className="warehouse-city__input"
            type="text"
            id="warehouseCity"
            name="warehouseCity"
            defaultValue={singleWarehouse.city}
            onChange={handleCity}
            onSelect={handleCity}
          />
          <label htmlFor="warehouseCountry" className="warehouse-country">
            Country
          </label>
          <input
            className="warehouse-country__input"
            type="text"
            id="warehouseCountry"
            name="warehouseCountry"
            defaultValue={singleWarehouse.country}
            onChange={handleCountry}
            onSelect={handleCountry}
          />
        </form>
      </div>
    </section>
  );
}

export default WarehouseDetailsCard;
