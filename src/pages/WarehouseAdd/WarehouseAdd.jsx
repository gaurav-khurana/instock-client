import "./WarehouseAdd.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import WarehouseDetailsAdd from "../../Components/WarehouseDetailsAdd/WarehouseDetailsAdd";
import WarehouseContactsAdd from "../../Components/WarehouseContactsAdd/WarehouseContactsAdd";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseAdd() {
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const isItemNameValid = (
    warehouseName,
    address,
    city,
    country,
    name,
    position
  ) => {
    if (
      typeof (warehouseName, address, city, country, name, position) ===
        "string" &&
      (warehouseName, address, city, country, name, position).trim().length >=
        5 &&
      (warehouseName, address, city, country, name, position).trim().length <=
        30
    ) {
      return true;
    } else {
      alert(
        "Please re-enter the item name. It should be between 5 and 30 characters."
      );
      return false;
    }
  };

  const isNumberValid = (number) => {
    return Number.isInteger(Number(number)) && number.length === 10
      ? true
      : (alert("Please enter a valid phone number"), false);
  };

  const isEmailValid = (email) => {
    if (email.includes("@")) {
      return true;
    } else {
      return false;
    }
  };

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

    if (
      isItemNameValid(warehouseName, address, city, country, name, position) &&
      isNumberValid(number) &&
      isEmailValid(email)
    ) {
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
        await axios.post(
          `${process.env.REACT_APP_BASE_URL}/warehouses`,
          newWarehouse
        );
        console.log("post sent to server.");
        alert("Added Successfully");
        resetForm();
        navigate("/");
      } catch (error) {
        console.error("Error Adding a new warehouse item", error.response);
        alert("Failed to add a new warehouse. Please try again later.");
      }
    } else {
      alert("Failed to add");
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    resetForm();
    alert("Form submission cancelled");
    navigate("/");
  };

  return (
    <>
      <main className="warehouse-add-main">
        <div className="warehouse-add-main__content">
          <article className="warehouse-add-header">
            <div className="warehouse-add__name-container">
              <Link to={"/"}>
                <img
                  className="warehouse-add__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="warehouse-add__title">Add Warehouse</h1>
            </div>
          </article>
          <WarehouseDetailsAdd
            setWarehouseName={setWarehouseName}
            setAddress={setAddress}
            setCity={setCity}
            setCountry={setCountry}
          />
          <WarehouseContactsAdd
            setName={setName}
            setPosition={setPosition}
            setNumber={setNumber}
            setEmail={setEmail}
          />
          <div className="buttons-container">
            <button className="button" type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="button add-button"
              type="submit"
              onClick={handleSubmit}
            >
              Add Warehouse
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseAdd;
