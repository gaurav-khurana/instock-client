

// import { useState } from 'react';
// import './AddInventoryItem.scss';
// import axios from 'axios';

// function AddInventoryItem() {
//     const [itemName, setItemName] = useState("");
//     const [itemDescription, setItemDescription] = useState("");
//     const [selectedOption1, setSelectedOption1] = useState("");
//     const [selectedOption2, setSelectedOption2] = useState("");
//     const [itemQuantity, setItemQuantity] = useState("");
//     const [selectedRadioButton, setSelectedRadioButton] = useState("");

//     const handleItemName = (event) => {
//         setItemName(event.target.value);
//     };
//     const handleDescription = (event) => {
//         setItemDescription(event.target.value);
//     };
//     const handleSelectChange1 = (event) => {
//         setSelectedOption1(event.target.value);
//     };
//     const handleSelectChange2 = (event) => {
//         setSelectedOption2(event.target.value);
//     };
//     const handleItemQuantity = (event) => {
//         setItemQuantity(event.target.value);
//     };
//     const handleRadioChange = (event) => {
//         setSelectedRadioButton(event.target.value);
//     };

//     const isItemNameValid = (itemName) => {
//         if (typeof itemName === 'string' && itemName.trim().length >= 5 && itemName.trim().length <= 30) {
//             return true;
//         } else {
//             alert("Please re-enter the item name. It should be between 5 and 30 characters.");
//             return false;
//         }
//     };
//     const isItemDescriptionValid = (itemDescription) => {
//         if (typeof itemDescription === 'string' && itemDescription.trim().length >= 10 && itemDescription.trim().length <= 150) {
//             return true;
//         } else {
//             alert("Please re-enter the item description. It should be between 10 and 150 characters.");
//             return false;
//         }
//     };
//     const isSelectedItemValid1 = (selectedOption1) => {
//         return selectedOption1 === '' ? (alert('Please select an option'), false) : true;
//     };
//     const isSelectedItemValid2 = (selectedOption2) => {
//         return selectedOption2 === '' ? (alert('Please select an option'), false) : true;
//     };
//     const isItemQuantityValid = (itemQuantity) => {
//         return Number.isInteger(Number(itemQuantity)) && itemQuantity >= 1 && itemQuantity <= 10000 ? true : (alert('Please enter a valid integer between 1 and 10000'), false);
//     };

//     ///
//     const [warehouseNames, setWarehouseNames] = useState("");

//     useEffect(() => {
//         const fetchWarehouseNames = async () => {
//             try {

//                 const response = await axios.get(`http://localhost:8080/warehouses/`);
//                 setWarehouseNames(response.data);
//             } catch (error) {
//                 console.error('Error fetching warehouse names:', error);
//             }
//         };

//         fetchWarehouseNames();
//     }, []);

//     ///

//     const resetForm = () => {
//         setItemName("");
//         setItemDescription("");
//         setSelectedOption1("");
//         setSelectedOption2("");
//         setItemQuantity("");
//     };
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (isItemNameValid(itemName) && isItemDescriptionValid(itemDescription) && isSelectedItemValid1(selectedOption1) && isSelectedItemValid2(selectedOption2) && isItemQuantityValid(itemQuantity)) {
//             try {
//                 await axios.post("http://localhost:8080/inventories", {
//                     item_name: itemName,
//                     description: itemDescription,
//                     category: selectedOption1,
//                     status: selectedRadioButton === 'inStock' ? 'In Stock' : 'Out of Stock',
//                     quantity: itemQuantity,
//                     warehouse: selectedOption2
//                 });
//                 alert("Added Successfully");
//                 resetForm();
//                 window.location.href = "/";
//             } catch (error) {
//                 console.error("Error Adding a new inventory item", error);
//                 alert("Failed to add a new inventory. Please try again later.");
//             }
//         } else {
//             alert("Failed to add");
//         }
//     };
//     const handleCancel = (event) => {
//         event.preventDefault();
//         resetForm();
//     };
//     return (
//         <>
//             <div>
//                 <img src="../../assets/Icons/arrow_back-24px.svg" alt="arrow back" />
//                 <h1>Add New Inventory Item</h1>
//             </div>
//             <div>
//                 <form className='form' onSubmit={handleSubmit}>
//                     <div className="details-container1">
//                         <h3>Item Details</h3>
//                         <label htmlFor="">Item Name</label>
//                         <input value={itemName} onChange={handleItemName} type='text' placeholder='Item Name'></input>
//                         <label htmlFor="">Description</label>
//                         <input value={itemDescription} onChange={handleDescription} type='text' placeholder='Please enter a brief description'></input>
//                         <label htmlFor="">Category</label>
//                         <select value={selectedOption1} onChange={handleSelectChange1} required>
//                             <option value="volvo">Volvo</option>
//                             <option value="saab">Saab</option>
//                             <option value="mercedes">Mercedes</option>
//                             <option value="audi">Audi</option>
//                         </select>
//                     </div>
//                     <div className="details-container2">
//                         <h3>Item Availability</h3>
//                         <h4>Status</h4>
//                         <div>
//                             <input type="radio" id="inStockButton" name="inStock-button" value="inStock" checked={selectedRadioButton === 'inStock'} onChange={handleRadioChange} />
//                             <label htmlFor="inStockButton">In Stock</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="OutOfStockButton" name="OutOfStock-button" value="outOfStock" checked={selectedRadioButton === 'outOfStock'} onChange={handleRadioChange} />
//                             <label htmlFor="OutOfStockButton">Out of Stock</label>
//                         </div>
//                         <label htmlFor="">Quantity</label>
//                         <input value={itemQuantity} onChange={handleItemQuantity} type='text' placeholder='0'></input>
//                         <label htmlFor="">Warehouse</label>
//                         <select value={selectedOption2} onChange={handleSelectChange2} required>
//                             <option value="volvo">Volvo</option>
//                             <option value="saab">Saab</option>
//                             <option value="mercedes">Mercedes</option>
//                             <option value="audi">Audi</option>
//                         </select>
//                         <button type='button' onClick={handleCancel}>Cancel</button>
//                         <button type='submit'>Add Item</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default AddInventoryItem;

////

// import React, { useState, useEffect } from 'react';
// import './AddInventoryItem.scss';
// import axios from 'axios';

// function AddInventoryItem() {
//     const [itemName, setItemName] = useState("");
//     const [itemDescription, setItemDescription] = useState("");
//     const [selectedOption1, setSelectedOption1] = useState("");
//     const [selectedOption2, setSelectedOption2] = useState("");
//     const [itemQuantity, setItemQuantity] = useState("");
//     const [selectedRadioButton, setSelectedRadioButton] = useState("");
//     const [warehouseNames, setWarehouseNames] = useState([]);

//     const handleItemName = (event) => {
//         setItemName(event.target.value);
//     };

//     const handleDescription = (event) => {
//         setItemDescription(event.target.value);
//     };

//     const handleSelectChange1 = (event) => {
//         setSelectedOption1(event.target.value);
//     };

//     const handleSelectChange2 = (event) => {
//         setSelectedOption2(event.target.value);
//     };

//     const handleItemQuantity = (event) => {
//         setItemQuantity(event.target.value);
//     };

//     const handleRadioChange = (event) => {
//         setSelectedRadioButton(event.target.value);
//     };

//     const isItemNameValid = (itemName) => {
//         if (typeof itemName === 'string' && itemName.trim().length >= 5 && itemName.trim().length <= 30) {
//             return true;
//         } else {
//             alert("Please re-enter the item name. It should be between 5 and 30 characters.");
//             return false;
//         }
//     };

//     const isItemDescriptionValid = (itemDescription) => {
//         if (typeof itemDescription === 'string' && itemDescription.trim().length >= 10 && itemDescription.trim().length <= 150) {
//             return true;
//         } else {
//             alert("Please re-enter the item description. It should be between 10 and 150 characters.");
//             return false;
//         }
//     };

//     const isSelectedItemValid1 = (selectedOption1) => {
//         return selectedOption1 === '' ? (alert('Please select an option'), false) : true;
//     };

//     const isSelectedItemValid2 = (selectedOption2) => {
//         return selectedOption2 === '' ? (alert('Please select an option'), false) : true;
//     };

//     const isItemQuantityValid = (itemQuantity) => {
//         return Number.isInteger(Number(itemQuantity)) && itemQuantity >= 1 && itemQuantity <= 10000 ? true : (alert('Please enter a valid integer between 1 and 10000'), false);
//     };

//     useEffect(() => {
//         const fetchWarehouseNames = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/warehouses/`);
//                 setWarehouseNames(response.data);
//             } catch (error) {
//                 console.error('Error fetching warehouse names:', error);
//             }
//         };

//         fetchWarehouseNames();
//     }, []);

//     const resetForm = () => {
//         setItemName("");
//         setItemDescription("");
//         setSelectedOption1("");
//         setSelectedOption2("");
//         setItemQuantity("");
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (isItemNameValid(itemName) && isItemDescriptionValid(itemDescription) && isSelectedItemValid1(selectedOption1) && isSelectedItemValid2(selectedOption2) && isItemQuantityValid(itemQuantity)) {
//             try {
//                 await axios.post("http://localhost:8080/inventories", {
//                     item_name: itemName,
//                     description: itemDescription,
//                     category: selectedOption1,
//                     status: selectedRadioButton === 'inStock' ? 'In Stock' : 'Out of Stock',
//                     quantity: itemQuantity,
//                     warehouse: selectedOption2
//                 });
//                 alert("Added Successfully");
//                 resetForm();
//                 window.location.href = "/";
//             } catch (error) {
//                 console.error("Error Adding a new inventory item", error);
//                 alert("Failed to add a new inventory. Please try again later.");
//             }
//         } else {
//             alert("Failed to add");
//         }
//     };

//     const handleCancel = (event) => {
//         event.preventDefault();
//         resetForm();
//     };

//     return (
//         <>
//             <div>
//                 <img src="../../assets/Icons/arrow_back-24px.svg" alt="arrow back" />
//                 <h1>Add New Inventory Item</h1>
//             </div>
//             <div>
//                 <form className='form' onSubmit={handleSubmit}>
//                     <div className="details-container1">
//                         <h3>Item Details</h3>
//                         <label htmlFor="">Item Name</label>
//                         <input value={itemName} onChange={handleItemName} type='text' placeholder='Item Name'></input>
//                         <label htmlFor="">Description</label>
//                         <input value={itemDescription} onChange={handleDescription} type='text' placeholder='Please enter a brief description'></input>
//                         <label htmlFor="">Category</label>
//                         <select value={selectedOption1} onChange={handleSelectChange1} required>
//                             <option value="volvo">Volvo</option>
//                             <option value="saab">Saab</option>
//                             <option value="mercedes">Mercedes</option>
//                             <option value="audi">Audi</option>
//                         </select>
//                     </div>
//                     <div className="details-container2">
//                         <h3>Item Availability</h3>
//                         <h4>Status</h4>
//                         <div>
//                             <input type="radio" id="inStockButton" name="inStock-button" value="inStock" checked={selectedRadioButton === 'inStock'} onChange={handleRadioChange} />
//                             <label htmlFor="inStockButton">In Stock</label>
//                         </div>
//                         <div>
//                             <input type="radio" id="OutOfStockButton" name="OutOfStock-button" value="outOfStock" checked={selectedRadioButton === 'outOfStock'} onChange={handleRadioChange} />
//                             <label htmlFor="OutOfStockButton">Out of Stock</label>
//                         </div>
//                         <label htmlFor="">Quantity</label>
//                         <input value={itemQuantity} onChange={handleItemQuantity} type='text' placeholder='0'></input>
//                         <label htmlFor="">Warehouse</label>
//                         <select value={selectedOption2} onChange={handleSelectChange2} required>
//                             {warehouseNames.map(warehouse => (
//                                 <option key={warehouse.id} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>
//                             ))}
//                         </select>
//                         <button type='button' onClick={handleCancel}>Cancel</button>
//                         <button type='submit'>Add Item</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default AddInventoryItem;

import React, { useState, useEffect } from 'react';
import './AddInventoryItem.scss';
import axios from 'axios';

function AddInventoryItem() {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [selectedRadioButton, setSelectedRadioButton] = useState("");
    const [warehouseNames, setWarehouseNames] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);

    //state added
    const [selectedWarehouseId, setSelectedWarehouseId] = useState("");

    const handleItemName = (event) => {
        setItemName(event.target.value);
    };

    const handleDescription = (event) => {
        setItemDescription(event.target.value);
    };

    const handleSelectChange1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    // const handleSelectChange2 = (event) => {
    //     setSelectedOption2(event.target.value);
    // };
    const handleSelectChange2 = (event) => {
        const selectedWarehouseName = event.target.value;
        setSelectedOption2(selectedWarehouseName);

        // Find the corresponding warehouse ID
        const selectedWarehouse = warehouseNames.find(warehouse => warehouse.warehouse_name === selectedWarehouseName);
        if (selectedWarehouse) {
            setSelectedWarehouseId(selectedWarehouse.warehouse_id);
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

    const isSelectedItemValid1 = (selectedOption1) => {
        return selectedOption1 === '' ? (alert('Please select an option'), false) : true;
    };

    const isSelectedItemValid2 = (selectedOption2) => {
        return selectedOption2 === '' ? (alert('Please select an option'), false) : true;
    };

    const isItemQuantityValid = (itemQuantity) => {
        return Number.isInteger(Number(itemQuantity)) && itemQuantity >= 1 && itemQuantity <= 10000 ? true : (alert('Please enter a valid integer between 1 and 10000'), false);
    };

    useEffect(() => {
        const fetchWarehouseNames = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/warehouses/`);
                setWarehouseNames(response.data);
            } catch (error) {
                console.error('Error fetching warehouse names:', error);
            }
        };

        const fetchCategoryNames = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/inventories/`);
                const uniqueCategoryNames = Array.from(new Set(response.data.map(item => item.category)));
                setCategoryNames(uniqueCategoryNames);
            } catch (error) {
                console.error('Error fetching category names:', error);
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
        if (isItemNameValid(itemName) && isItemDescriptionValid(itemDescription) && isSelectedItemValid1(selectedOption1) && isSelectedItemValid2(selectedOption2) && isItemQuantityValid(itemQuantity)) {
            try {
                await axios.post("http://localhost:8080/inventories", {
                    item_name: itemName,
                    description: itemDescription,
                    category: selectedOption1,
                    status: selectedRadioButton === 'inStock' ? 'In Stock' : 'Out of Stock',
                    quantity: itemQuantity,
                    // warehouse: selectedOption2
                    warehouse_id: selectedWarehouseId
                });
                alert("Added Successfully");
                resetForm();
                window.location.href = "/";
            } catch (error) {
                console.error("Error Adding a new inventory item", error);
                alert("Failed to add a new inventory. Please try again later.");
            }
        } else {
            alert("Failed to add");
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
                <h1>Add New Inventory Item</h1>
            </div>
            <div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className="details-container1">
                        <h3>Item Details</h3>
                        <label htmlFor="">Item Name</label>
                        <input value={itemName} onChange={handleItemName} type='text' placeholder='Item Name'></input>
                        <label htmlFor="">Description</label>
                        <input value={itemDescription} onChange={handleDescription} type='text' placeholder='Please enter a brief description'></input>
                        <label htmlFor="">Category</label>
                        <select value={selectedOption1} onChange={handleSelectChange1} required>
                            {categoryNames.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="details-container2">
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
                        <input value={itemQuantity} onChange={handleItemQuantity} type='text' placeholder='0'></input>
                        <label htmlFor="">Warehouse</label>
                        <select value={selectedOption2} onChange={handleSelectChange2} required>
                            {warehouseNames.map(warehouse => (
                                <option key={warehouse.id} value={warehouse.warehouse_name}>{warehouse.warehouse_name}</option>
                            ))}
                        </select>
                        <button type='button' onClick={handleCancel}>Cancel</button>
                        <button type='submit'>Add Item</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddInventoryItem;
