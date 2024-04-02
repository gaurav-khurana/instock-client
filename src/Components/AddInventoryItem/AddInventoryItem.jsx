import React, { useState, useEffect } from "react";
import "./AddInventoryItem.scss";
import axios from "axios";
import arrowback from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useNavigate } from "react-router-dom";

function AddInventoryItem() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  const [warehouseNames, setWarehouseNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);

  const [selectedWarehouseId, setSelectedWarehouseId] = useState("");

  const navigate = useNavigate();

  const handleItemName = (event) => {
    setItemName(event.target.value);
  };

  const handleDescription = (event) => {
    setItemDescription(event.target.value);
  };

  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelectChange2 = (event) => {
    const selectedWarehouseName = event.target.value.trim(); // Trim whitespace
    setSelectedOption2(selectedWarehouseName);
    const selectedWarehouse = warehouseNames.find(
      (warehouse) =>
        warehouse.warehouse_name.trim().toLowerCase() ===
        selectedWarehouseName.toLowerCase()
    );
    if (selectedWarehouse) {
      setSelectedWarehouseId(selectedWarehouse.id);
    }
  };
  const handleItemQuantity = (event) => {
    setItemQuantity(event.target.value);
  };

  const handleRadioChange = (event) => {
    setSelectedRadioButton(event.target.value);
  };

  const isItemNameValid = (itemName) => {
    if (
      typeof itemName === "string" &&
      itemName.trim().length >= 5 &&
      itemName.trim().length <= 30
    ) {
      return true;
    } else {
      alert(
        "Please re-enter the item name. It should be between 5 and 30 characters."
      );
      return false;
    }
  };

  const isItemDescriptionValid = (itemDescription) => {
    if (
      typeof itemDescription === "string" &&
      itemDescription.trim().length >= 10 &&
      itemDescription.trim().length <= 150
    ) {
      return true;
    } else {
      alert(
        "Please re-enter the item description. It should be between 10 and 150 characters."
      );
      return false;
    }
  };

  const isSelectedItemValid1 = (selectedOption1) => {
    return selectedOption1 === ""
      ? (alert("Please select an option"), false)
      : true;
  };

  const isSelectedItemValid2 = (selectedOption2) => {
    return selectedOption2 === ""
      ? (alert("Please select an option"), false)
      : true;
  };

  const isItemQuantityValid = (itemQuantity) => {
    return Number.isInteger(Number(itemQuantity)) &&
      itemQuantity >= 1 &&
      itemQuantity <= 10000
      ? true
      : (alert("Please enter a valid integer between 1 and 10000"), false);
  };

  useEffect(() => {
    const fetchWarehouseNames = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses/`
        );
        setWarehouseNames(response.data);
      } catch (error) {
        console.error("Error fetching warehouse names:", error);
      }
    };

    const fetchCategoryNames = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/inventories`
        );
        const uniqueCategoryNames = Array.from(
          new Set(response.data.map((item) => item.category))
        );
        setCategoryNames(uniqueCategoryNames);
      } catch (error) {
        console.error("Error fetching category names:", error);
      }
    };

    fetchWarehouseNames();
    fetchCategoryNames();
  }, []);

  const resetForm = () => {
    setItemName("");
    setItemDescription("");
    setSelectedOption1("");
    setSelectedOption2("");
    setItemQuantity("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      isItemNameValid(itemName) &&
      isItemDescriptionValid(itemDescription) &&
      isSelectedItemValid1(selectedOption1) &&
      isSelectedItemValid2(selectedOption2) &&
      isItemQuantityValid(itemQuantity)
    ) {
      try {
        await axios.post(`${process.env.REACT_APP_BASE_URL}/inventories`, {
          item_name: itemName,
          description: itemDescription,
          category: selectedOption1,
          status:
            selectedRadioButton === "inStock" ? "In Stock" : "Out of Stock",
          quantity: itemQuantity,
          warehouse_id: selectedWarehouseId,
        });
        alert("Added Successfully");
        resetForm();
        // window.location.href = "/inventory";
        navigate("/inventory");
      } catch (error) {
        console.error("Error Adding a new inventory item", error.response);
        alert("Failed to add a new inventory. Please try again later.");
      }
    } else {
      alert("Failed to add");
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    resetForm();
    navigate("/inventory");
  };

  return (
    <>
      <main className="main">
        <div className="main-container">
          <div className="inventory-title-container">
            <Link to={"/inventory"}>
              <img src={arrowback} alt="arrow back" />
            </Link>
            <h1 className="inventory-main-title">Add New Inventory Item</h1>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="details-container">
                <div className="details-container1">
                  <h3 className="item-title">Item Details</h3>
                  <label className="item-name" htmlFor="">
                    {" "}
                    Item Name{" "}
                  </label>
                  <input
                    className="item-name-input"
                    value={itemName}
                    onChange={handleItemName}
                    type="text"
                    placeholder="Item Name"
                  ></input>
                  <label className="item-description" htmlFor="">
                    Description
                  </label>
                  <input
                    className="item-description-input"
                    value={itemDescription}
                    onChange={handleDescription}
                    type="text"
                    placeholder="Please enter a brief description"
                  ></input>
                  <label className="item-category" htmlFor="">
                    Category
                  </label>
                  <select
                    className="item-category-input"
                    value={selectedOption1}
                    onChange={handleSelectChange1}
                    required
                  >
                    <option value="" disabled selected>
                      Please select
                    </option>
                    {categoryNames.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="details-container2">
                  <h3 className="details-container2__header">
                    Item Availability
                  </h3>
                  <h4 className="item-status">Status</h4>
                  <div className="radio-buttons">
                    <div>
                      <input
                        type="radio"
                        id="inStockButton"
                        name="inStock-button"
                        value="inStock"
                        checked={selectedRadioButton === "inStock"}
                        onChange={handleRadioChange}
                      />
                      <label className="in-stock" htmlFor="inStockButton">
                        In Stock
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="OutOfStockButton"
                        name="OutOfStock-button"
                        value="outOfStock"
                        checked={selectedRadioButton === "outOfStock"}
                        onChange={handleRadioChange}
                      />
                      <label
                        className="out-of-stock"
                        htmlFor="OutOfStockButton"
                      >
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  <label className="item-quantity" htmlFor="">
                    Quantity
                  </label>
                  <input
                    className="item-quantity-input"
                    value={itemQuantity}
                    onChange={handleItemQuantity}
                    type="text"
                    placeholder="0"
                  ></input>
                  <label className="item-warehouse" htmlFor="">
                    Warehouse
                  </label>
                  <select
                    className="item-warehouse-input"
                    value={selectedOption2}
                    onChange={handleSelectChange2}
                    required
                  >
                    <option value="" disabled selected>
                      Please select
                    </option>
                    {warehouseNames.map((warehouse) => (
                      <option
                        key={warehouse.id}
                        value={warehouse.warehouse_name}
                      >
                        {warehouse.warehouse_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="buttons-container">
                <button className="button" type="button" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="button add-button" type="submit">
                  {" "}
                  + Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddInventoryItem;
