// import './AddInventoryItem.scss'

// function EditInventoryItem() {
//     return (
//         <>
//             <div>
//                 <img src="" alt="" />
//                 <h1>Edit Inventory Item</h1>
//             </div>
//             <div>
//                 <form className='form' action="">
//                     <div className="details-container">
//                         <h3>Item Details</h3>

//                         <label htmlFor="">Item Name</label>
//                         <input placeholder='Television'></input>
//                         <label htmlFor="">Description</label>
//                         <input placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'></input>
//                         <label htmlFor="">Category</label>
//                         <select value={selectedOption1} onChange={handleSelectChange1} required>
//                             {categoryNames.map(category => (
//                                 <option key={category} value={category}>{category}</option>
//                             ))}
//                         </select>


//                     </div>
//                     <div className="details-container">
//                         <h3>Item Availibity</h3>

//                         <h4>Status</h4>
//                         <div>
//                             <input type="radio" id="inStockButton" name="inStock-button" value="inStock" checked={selectedRadioButton === 'inStock'} onChange={handleRadioChange} />
//                             <label htmlFor="inStockButton">In Stock</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="OutOfStockButton" name="OutOfStock-button" value="outOfStock" checked={selectedRadioButton === 'outOfStock'} onChange={handleRadioChange} />
//                             <label htmlFor="OutOfStockButton">Out of Stock</label>
//                         </div>

//                         <label htmlFor="">Warehouse</label>
//                         <select value={selectedOption2} onChange={handleSelectChange2} required>
//                             {warehouseNames.map(warehouse => (
//                                 <option key={warehouse.id} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>
//                             ))}
//                         </select>


//                         <button>Cancel</button>
//                         <button>Save</button>




//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// export default EditInventoryItem




import React, { useState, useEffect } from 'react';
import './EditInventoryItem.scss';
import axios from 'axios';

function EditInventoryItem() {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [selectedRadioButton, setSelectedRadioButton] = useState("");
    const [warehouseNames, setWarehouseNames] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    const [selectedWarehouseId, setSelectedWarehouseId] = useState("");

    useEffect(() => {
        // Fetch inventory item details from server and populate the form
        const fetchInventoryItem = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/inventories/`); // Replace 'inventoryItemId' with the actual ID of the inventory item being edited
                const { item_name, description, category, status, quantity, warehouse_id } = response.data;
                setItemName(item_name);
                setItemDescription(description);
                setSelectedOption1(category);
                setSelectedRadioButton(status === 'In Stock' ? 'inStock' : 'outOfStock');
                setItemQuantity(quantity);
                setSelectedWarehouseId(warehouse_id);
                // Fetch warehouse names after setting the selected warehouse ID
                fetchWarehouseNames();
            } catch (error) {
                console.error('Error fetching inventory item:', error);
            }
        };

        // Fetch warehouse names
        const fetchWarehouseNames = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/inventories`);
                setWarehouseNames(response.data);
            } catch (error) {
                console.error('Error fetching warehouse names:', error);
            }
        };

        // Fetch category names
        const fetchCategoryNames = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/inventories`);
                const uniqueCategoryNames = Array.from(new Set(response.data.map(item => item.category)));
                setCategoryNames(uniqueCategoryNames);
            } catch (error) {
                console.error('Error fetching category names:', error);
            }
        };

        fetchInventoryItem();
        fetchCategoryNames();
    }, []);

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
        const selectedWarehouse = warehouseNames.find(warehouse => warehouse.warehouse_name.trim().toLowerCase() === selectedWarehouseName.toLowerCase());
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
        if (typeof itemName === 'string' && itemName.trim().length >= 5 && itemName.trim().length <= 30) {
            return true;
        } else {
            alert("Please re-enter the item name. It should be between 5 and 30 characters.");
            return false;
        }
    };

    const isItemDescriptionValid = (itemDescription) => {
        if (typeof itemDescription === 'string' && itemDescription.trim().length >= 10 && itemDescription.trim().length <= 150) {
            return true;
        } else {
            alert("Please re-enter the item description. It should be between 10 and 150 characters.");
            return false;
        }
    };

    // Similar functions for validating selected options and item quantity...
    const isSelectedItemValid1 = (selectedOption1) => {
        return selectedOption1 === '' ? (alert('Please select an option'), false) : true;
    };

    const isSelectedItemValid2 = (selectedOption2) => {
        return selectedOption2 === '' ? (alert('Please select an option'), false) : true;
    };

    const isItemQuantityValid = (itemQuantity) => {
        return Number.isInteger(Number(itemQuantity)) && itemQuantity >= 1 && itemQuantity <= 10000 ? true : (alert('Please enter a valid integer between 1 and 10000'), false);
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
        if (isItemNameValid(itemName) && isItemDescriptionValid(itemDescription) && isSelectedItemValid1(selectedOption1) && isSelectedItemValid2(selectedOption2) && isItemQuantityValid(itemQuantity)) {
            // Make PUT request to update inventory item
            try {
                // await axios.put(`${process.env.REACT_APP_BASE_URL}/inventories/${inventoryItemId}`, {
                await axios.put(`${process.env.REACT_APP_BASE_URL}/inventories/`, {
                    item_name: itemName,
                    description: itemDescription,
                    category: selectedOption1,
                    status: selectedRadioButton === 'inStock' ? 'In Stock' : 'Out of Stock',
                    quantity: itemQuantity,
                    warehouse_id: selectedWarehouseId
                });
                alert("Inventory item updated successfully");
                // Optionally, redirect to another page or perform additional actions after successful update
            } catch (error) {
                console.error("Error updating inventory item:", error);
                alert("Failed to update inventory item. Please try again later.");
            }
        };

        const handleCancel = (event) => {
            event.preventDefault();
            resetForm();
        };

        return (
            <>
                <div>

                    <img src="../../assets/Icons/arrow_back-24px.svg" alt="arrow back" />
                    <h1>Edit Inventory Item</h1>
                </div>
                <div>

                    <form className='form' onSubmit={handleSubmit}>
                        <div className="details-container">

                            <h3 className='item-title' >Item Details</h3>
                            <label htmlFor="">Item Name</label>
                            <input className='item-name' value={itemName} onChange={handleItemName} type='text' placeholder='Item Name' />
                            <label htmlFor="">Description</label>
                            <input value={itemDescription} onChange={handleDescription} type='text' placeholder='Please enter a brief description' />
                            <label htmlFor="">Category</label>
                            <select value={selectedOption1} onChange={handleSelectChange1} required>
                                {categoryNames.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="details-container">

                            <h3>Item Availability</h3>
                            <h4>Status</h4>
                            <div>
                                <input type="radio" id="inStockButton" name="inStock-button" value="inStock" checked={selectedRadioButton === 'inStock'} onChange={handleRadioChange} />
                                <label htmlFor="inStockButton">In Stock</label>
                            </div>
                            <div>
                                <input type="radio" id="OutOfStockButton" name="OutOfStock-button" value="outOfStock" checked={selectedRadioButton === 'outOfStock'} onChange={handleRadioChange} />
                                <label htmlFor="OutOfStockButton">Out of Stock</label>
                            </div>
                            <label htmlFor="">Quantity</label>
                            <input value={itemQuantity} onChange={handleItemQuantity} type='text' placeholder='0' />
                            <label htmlFor="">Warehouse</label>
                            <select value={selectedOption2} onChange={handleSelectChange2} required>
                                {warehouseNames.map(warehouse => (
                                    <option key={warehouse.id} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>
                                ))}
                            </select>

                            <button type='button' onClick={handleCancel}>Cancel</button>
                            <button type='submit'>Save</button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default EditInventoryItem;

//Inventory Item ID: Replace 'inventoryItemId' in the axios.put request with the actual ID of the inventory item being edited. This ID should be obtained either from props or from the component's state, depending on how the component is used within your application.
