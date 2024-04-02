import "./WarehouseEdit.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import WarehouseDetailsCard from "../../Components/WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseContactsCard from "../../Components/WarehouseContactsCard/WarehouseContactsCard";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseEdit() {
  // get state from global location obj in window

  const [singleWarehouse, setSingleWarehouse] = useState({});
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // get params
  const warehouseId = useParams();

  // useEffect func to get single warehouse & all inventories for it
  useEffect(() => {
    // func to single warehouse & set state

    try {
      async function getSingleWarehouse() {
        // console.log("i made axios call");
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId.warehouseId}`
        );

        setSingleWarehouse(response.data);
      }
      getSingleWarehouse();
    } catch (error) {
      console.log("Cant get Single warehouse & its data", error);
    }
  }, [setSingleWarehouse, warehouseId.warehouseId]);

  const resetForm = () => {
    setWarehouseName("");
    setAddress("");
    setCity("");
    setCountry("");
    setName("");
    setPosition("");
    setNumber("");
    setEmail("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newWarehouse = {
      warehouse_name: warehouseName,
      address: address,
      city: city,
      country: country,
      contact_name: name,
      contact_position: position,
      contact_phone: number,
      contact_email: email,
    };
    console.log(newWarehouse);

    try {
      //todo post new warehouse
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId.warehouseId}`,
        newWarehouse
      );
      console.log("Put request sent to server.");
      alert("Added Successfully");
      resetForm();
      navigate("/");
    } catch (error) {
      console.log("Error Modifiying a new warehouse item", error);
      alert("Failed to Modifiying the new warehouse. Please try again later.");
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    resetForm();
    alert("Form submission cancelled");
    navigate("/");
  };

  return (
    singleWarehouse && (
      <>
        <main className="warehouse-edit-main">
          <div className="warehouse-edit-main__content">
            <article className="warehouse-edit-header">
              <div className="warehouse-edit__name-container">
                <Link to={"/"}>
                  <img
                    className="warehouse-edit__image"
                    src={BackArrow}
                    alt="Back Arrow"
                  />
                </Link>

                <h1 className="warehouse-edit__title">Edit Warehouse</h1>
              </div>
            </article>
            <WarehouseDetailsCard
              singleWarehouse={singleWarehouse}
              setWarehouseName={setWarehouseName}
              setAddress={setAddress}
              setCity={setCity}
              setCountry={setCountry}
            />

            <WarehouseContactsCard
              singleWarehouse={singleWarehouse}
              setName={setName}
              setPosition={setPosition}
              setNumber={setNumber}
              setEmail={setEmail}
            />
            <div className="buttons-container">
              <Link to={"/"}>
                <button className="button" type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </Link>
              <button
                className="button add-button"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </main>
      </>
    )
  );
}

export default WarehouseEdit;
