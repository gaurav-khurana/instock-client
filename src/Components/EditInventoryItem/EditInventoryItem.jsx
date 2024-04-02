import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./EditInventoryItem.scss";
import axios from "axios";

function EditInventoryItem() {
  const { inventoryId } = useParams();
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

  useEffect(() => {
    const fetchInventoryItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/inventories/${inventoryId}`
        );
        // const { item_name, description, category, status, quantity, warehouse_id } = response.data;
        const inventory = response.data.foundInventory;
        console.log(response.data.foundInventory.item_name);
        setItemName(inventory.item_name);
        setItemDescription(inventory.description);
        setSelectedOption1(inventory.category);
        setSelectedRadioButton(
          inventory.status === "In Stock" ? "inStock" : "outOfStock"
        );
        setItemQuantity(inventory.quantity);
        setSelectedWarehouseId(inventory.warehouse_id);
        fetchWarehouseNames();
      } catch (error) {
        console.error("Error fetching inventory item:", error);
      }
    };

    const fetchWarehouseNames = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses`
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

    fetchInventoryItem();
    fetchCategoryNames();
  }, [inventoryId]);

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
    const selectedWarehouseName = event.target.value.trim();
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
    const trimmedItemName = itemName.trim();
    if (trimmedItemName.length >= 5 && trimmedItemName.length <= 30) {
      return true;
    } else {
      alert(
        "Please re-enter the item name. It should be between 5 and 30 characters."
      );
      return false;
    }
  };

  const isItemDescriptionValid = (itemDescription) => {
    const trimmedItemDescription = itemDescription.trim();
    if (
      trimmedItemDescription.length >= 10 &&
      trimmedItemDescription.length <= 150
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

  const resetForm = () => {
    setItemName("");
    setItemDescription("");
    setSelectedOption1("");
    setSelectedOption2("");
    setItemQuantity("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quantity = parseInt(itemQuantity, 10);
    console.log("Submitting form...");

    if (
      isItemNameValid(itemName) &&
      isItemDescriptionValid(itemDescription) &&
      isSelectedItemValid1(selectedOption1) &&
      isSelectedItemValid2(selectedOption2) &&
      isItemQuantityValid(itemQuantity)
    ) {
      try {
        await axios.put(
          `${process.env.REACT_APP_BASE_URL}/inventories/${inventoryId}`,
          {
            item_name: itemName,
            description: itemDescription,
            category: selectedOption1,
            status:
              selectedRadioButton === "inStock" ? "In Stock" : "Out of Stock",
            quantity: quantity,
            warehouse_id: selectedWarehouseId,
          }
        );
        alert("Inventory item updated successfully");

        navigate("/inventory");
      } catch (error) {
        console.error("Error updating inventory item:", error);
        alert("Failed to update inventory item. Please try again later.");
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    resetForm();
    navigate("/inventory");
  };

  return (
    <>
      <div className="main-container">
        <div className="inventory-title-container">
          <Link to={"/inventory"}>
            <img
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="arrow back"
            />
          </Link>
          <h1 className="inventory-main-title">Edit Inventory Item</h1>
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
                  defaultValue={itemName}
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
                  <option value="" disabled hidden>
                    Select Category
                  </option>
                  {categoryNames.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="details-container2">
                <h3 className="item-title">Item Availibility</h3>
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
                    <label className="out-of-stock" htmlFor="OutOfStockButton">
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
                  type="number"
                  placeholder="Enter Quantity"
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
                  <option value="" disabled hidden>
                    Warehouse
                  </option>
                  {warehouseNames.map((warehouse, index) => (
                    <option key={index} value={warehouse.warehouse_name}>
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditInventoryItem;
