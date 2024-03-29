import './InventoryDetails.scss';
import EditPic from '../../assets/Icons/edit-24px.svg';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function InventoryDetails() {

    const [inventoryDetails, setInventoryDetails] = useState([]);
    // const [currentInventoryDetails, setCurrentInventoryDetails] = useState([]);
    const { inventoryId } = useParams();



    useEffect(() => {
        const getInventoryDetails = async () => {
            try {
                console.log(inventoryId)
                const response = await axios.get(`http://localhost:8080/inventories/${inventoryId}`)
                const inventoryData = response.data;
                console.log(inventoryData.foundInventory)
                setInventoryDetails(inventoryData.foundInventory);
                // console.log(inventoryData.foundInventory)
                // setInventoryDetails(inventoryData.foundInventory);
            } catch (error) {
                console.error("No Inventory Details for you, my friend: ", error);
            }
        }
        getInventoryDetails();
    }, [inventoryId]);

    // useEffect(() => {
    //     const defaultId = "0";
    //     const enableDefault = inventoryId || defaultId;

    //     const getCurrentInventoryDetails = async (id) => {
    //         try {
    //             // const response = await axios.get(`http://localhost:8080/warehouses/${id}/inventories/`);
    //             const response = await axios.get(`http://localhost:8080/inventories/${id}//`);
    //             setCurrentInventoryDetails(response.data);
    //         } catch (error) {
    //             console.error("Failed to fetch current inventory: ", error);
    //         }
    //     };
    //     getCurrentInventoryDetails(enableDefault);
    // }, [inventoryId]);

    return (

        <div>
            
                <div className='inventory-details' key={inventoryDetails.id}>

                    <div className='inventory-details__item' >
                        <img className='inventory-details__back-arrow' src={BackArrow} ></img>
                        <h1 className='inventory-details__product-name'>
                            {/* Television  */}
                            {inventoryDetails.item_name}
                            </h1>
                        {/* need to change this to accept API call */}
                        <img className='inventory-details__edit-pic' src={EditPic} ></img>
                    </div>

                    <form action="" className='inventory-details__info'>

                        <div className='details__description-and-category'
                        // key={inventory.id}
                        >
                            <div className='details__item-description'>
                                ITEM DESCRIPTION
                            </div>
                            <div className='details__description--data'>
                                {inventoryDetails.description}
                                {/* This 50", 4K LED TV provides a crystal-clear picture and vivid colors. */}
                            </div>
                            <div className='details__category'>
                                CATEGORY
                            </div>
                            <div className='details__category--data'>
                                {inventoryDetails.category}
                                {/* Electronics */}
                            </div>
                        </div>

                        <div className='details__status-quantity-warehouse'>
                            <div className='details__status-quantity'>
                                <div className='details__status'>
                                    STATUS: <br />
                                    <button>IN STOCK</button>
                                </div>
                                <div className='details__quantity'>
                                    QUANTITY:
                                    <div className='details__quantity--data'>
                                        {inventoryDetails.quantity}
                                        {/* 500 */}
                                    </div>
                                </div>

                            </div>
                            <div className='details__warehouse'>
                                WAREHOUSE
                                <div className='details__warehouse--data'>
                                </div>Manhattan
                            </div>

                        </div>
                    </form>
                </div>
            
        </div>
    )
}

export default InventoryDetails;

