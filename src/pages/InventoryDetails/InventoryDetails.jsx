// import './InventoryDetails.scss';
// import EditPic from '../../assets/Icons/edit-24px.svg';
// import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
// import { useParams, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function InventoryDetails({ inventory}) {

//     const [inventoryDetails, setInventoryDetails] = useState({});
//     // const [currentInventoryDetails, setCurrentInventoryDetails] = useState([]);
//     const inventoryId = useParams();

// console.log(typeof inventoryId);
// console.log(inventoryId);
// console.log(inventoryId.id);


//     useEffect(() => {
//         try {
//                 async function getInventoryDetails() {

//                 console.log(inventoryId)
//                 const response = await axios.get(
//                     `http://localhost:8080/inventories/${inventoryId.id}`
//                     );
//                     console.log(response.data);
//                         setInventoryDetails(response.data);
//                  const inventoryData = response.data;
//                 console.log(inventoryData.foundInventory)
//                 // setInventoryDetails(inventoryData.foundInventory);

//             } 

//             getInventoryDetails();

//          } catch (error) {
//                 console.error("No Inventory Details for you, my friend: ", error);
//             }
//         }, [setInventoryDetails]);
//     //     getInventoryDetails();
//     // }, [inventoryId]);



//     return (
//         inventoryDetails && (

//         <div>

//                 <div className='inventory-details' key={inventoryDetails.id}>

//                     <div className='inventory-details__item' >
//                         <img className='inventory-details__back-arrow' src={BackArrow} ></img>
//                         <h1 className='inventory-details__product-name'>
//                             {/* Television  */}
//                             {inventoryDetails.item_name}
//                             </h1>
//                         {/* need to change this to accept API call */}
//                         <img className='inventory-details__edit-pic' src={EditPic} ></img>
//                     </div>

//                     <form action="" className='inventory-details__info'>

//                         <div className='details__description-and-category'
//                         // key={inventory.id}
//                         >
//                             <div className='details__item-description'>
//                                 ITEM DESCRIPTION
//                             </div>
//                             <div className='details__description--data'>
//                                 {inventoryDetails.description}
//                                 {/* This 50", 4K LED TV provides a crystal-clear picture and vivid colors. */}
//                             </div>
//                             <div className='details__category'>
//                                 CATEGORY
//                             </div>
//                             <div className='details__category--data'>
//                                 {inventoryDetails.category}
//                                 {/* Electronics */}
//                             </div>
//                         </div>

//                         <div className='details__status-quantity-warehouse'>
//                             <div className='details__status-quantity'>
//                                 <div className='details__status'>
//                                     STATUS: <br />
//                                     <button>IN STOCK</button>
//                                 </div>
//                                 <div className='details__quantity'>
//                                     QUANTITY:
//                                     <div className='details__quantity--data'>
//                                         {inventoryDetails.quantity}
//                                         {/* 500 */}
//                                     </div>
//                                 </div>

//                             </div>
//                             <div className='details__warehouse'>
//                                 WAREHOUSE
//                                 <div className='details__warehouse--data'>
//                                 </div>Manhattan
//                             </div>

//                         </div>
//                     </form>
//                 </div>

//         </div>
//     )
//     );
// }

// export default InventoryDetails;



import './InventoryDetails.scss';
import EditIcon from "../../assets/Icons/edit-white-24dp.svg";
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SortIcon from "../../assets/Icons/sort-24px.svg";


function InventoryDetails({ inventory }) {
    // console.log(inventory.id);

    const [inventoryDetails, setInventoryDetails] = useState([]);
    // const [currentInventoryDetails, setCurrentInventoryDetails] = useState([]);
    // const inventoryId = useParams();




    useEffect(() => {
        const getInventoryDetails = async () => {
            try {
                // console.log(inventoryId)
                const response = await axios.get(`http://localhost:8080/inventories/${inventory.id}`)
                const inventoryData = response.data;
                console.log(inventoryData.foundInventory)
                console.log("working");
                setInventoryDetails(inventoryData.foundInventory);
                // console.log(inventoryData.foundInventory)
                // setInventoryDetails(inventoryData.foundInventory);
            } catch (error) {
                console.error("No Inventory Details for you, my friend: ", error);
            }
        }
        getInventoryDetails();
    }, []);
    // }, [inventoryId]);

    // useEffect(() => {
    //     const defaultId = "0";
    //     const enableDefault = inventoryId || defaultId;

    //     const getCurrentInventoryDetails = async (id) => {
    //         try {
    //             // const response = await axios.get(`http://localhost:8080/warehouses/${id}/inventories/`);
    //             const response = await axios.get(`http://localhost:8080/inventories/${id}`);
    //             setCurrentInventoryDetails(response.data);
    //         } catch (error) {
    //             console.error("Failed to fetch current inventory: ", error);
    //         }
    //     };
    //     getCurrentInventoryDetails(enableDefault);
    // }, [inventoryId]);


    // useEffect(() => {
    //     try {
    //         async function getInventoryDetails() {
    //             const response = await axios.get(
    //                 `http://localhost:8080/inventories/${inventoryId.id}/inventories`
    //             );
    //             console.log(response.data);
    //             setInventoryDetails(response.data);
    //         }

    //         getInventoryDetails();
    //     } catch (error) {
    //         console.log(`no go, dude`, error);
    //     }
    // }, [setInventoryDetails]);

    return (

        //         <div>

        //                 <div className='inventory-details' key={inventoryDetails.id}>

        //                     <div className='inventory-details__item' >
        //                         <img className='inventory-details__back-arrow' src={BackArrow} ></img>
        //                         <h1 className='inventory-details__product-name'>
        //                             {/* Television  */}
        //                             {inventoryDetails.item_name}
        //                             </h1>
        //                         {/* need to change this to accept API call */}
        //                         <img className='inventory-details__edit-pic' src={EditPic} ></img>
        //                     </div>

        //                     <form action="" className='inventory-details__info'>

        //                         <div className='details__description-and-category'
        //                         // key={inventory.id}
        //                         >
        //                             <div className='details__item-description'>
        //                                 ITEM DESCRIPTION
        //                             </div>
        //                             <div className='details__description--data'>
        //                                 {inventoryDetails.description}
        //                                 {/* This 50", 4K LED TV provides a crystal-clear picture and vivid colors. */}
        //                             </div>
        //                             <div className='details__category'>
        //                                 CATEGORY
        //                             </div>
        //                             <div className='details__category--data'>
        //                                 {inventoryDetails.category}
        //                                 {/* Electronics */}
        //                             </div>
        //                         </div>

        //                         <div className='details__status-quantity-warehouse'>
        //                             <div className='details__status-quantity'>
        //                                 <div className='details__status'>
        //                                     STATUS: <br />
        //                                     <button>IN STOCK</button>
        //                                 </div>
        //                                 <div className='details__quantity'>
        //                                     QUANTITY:
        //                                     <div className='details__quantity--data'>
        //                                         {inventoryDetails.quantity}
        //                                         {/* 500 */}
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                             <div className='details__warehouse'>
        //                                 WAREHOUSE
        //                                 <div className='details__warehouse--data'>
        //                                 </div>Manhattan
        //                             </div>

        //                         </div>
        //                     </form>
        //                 </div>

        //         </div>
        //     )
        // }

        // export default InventoryDetails;

        <>
            <main className="inventory-details-main">
                <div className="inventory-details-main__content">
                    <article className="inventory-details-header">
                        <div className="inventory-details__name-container">
                            <Link to={"/inventory"}>
                                <img
                                    className="inventory-details__image"
                                    src={BackArrow}
                                    alt="Back Arrow"
                                />
                            </Link>

                            <h1 className="inventory-details__title">
                                Television
                                {/* TODO */}
                                {/* {singleWarehouse.warehouse_name} */}
                                {/* Television {inventory} */}
                            </h1>
                        </div>

                        {/* path here to edit inventory page */}
                        {/* <Link
      TODO
        to={"/editwarehouse"}
        state={{ singleWarehouse: singleWarehouse }}
      > */}

                        <div className="inventory-details__icon-container">
                            <img
                                className="inventory-details__icon"
                                src={EditIcon}
                                alt="Edit Icon"
                            />
                            <p className="inventory-details__text">Edit</p>
                        </div>
                        {/* </Navigate> */}
                        {/* </Link> */}
                    </article>

                        <section className="inventory-card">
                            <article className="inventory-category-container">
                                <div className="inventory-container">
                                    <div className="inventory__title-container">
                                        <h3 className="inventory__title"> ITEM DESCRIPTION:</h3>
                                        {/* TODO {inventory.description} */}
                                        It's a really big TV
                                    </div>

                                </div>

                                <div className="category">
                                    <div className="category-container">
                                        <h3 className="category__title">CATEGORY:</h3>

                                        <img
                                            className="inventory__icon inventory__icon--mobile"
                                            src={SortIcon}
                                            alt="Sort Icon"
                                        />
                                    </div>

                                    <p className="category__text">
                                        {/* TODO {inventory.category} */}
                                        Electronicas
                                    </p>

                                </div>
                            </article>

                            <article className="status-QTY-container">
                                <div className="status">
                                    <div className="status-container">
                                        <h3 className="status__title">STATUS:</h3>

                                        <img
                                            className="inventory__icon inventory__icon--mobile"
                                            src={SortIcon}
                                            alt="Sort Icon"
                                        />
                                    </div>
                                    In Stock

                                    {/* TODO {inventory.status === "In Stock" ? (
                <div className="status__text status__text--green">
                  {inventory.status}
                </div>
              ) : (
                <div className="status__text status__text--red">
                  {inventory.status}
                </div>
              )} */}

                                </div>

                                <div className="QTY">
                                    <div className="QTY-container">
                                        <h3 className="QTY__title">QUANTITY:</h3>

                                        <img
                                            className="inventory__icon inventory__icon--mobile"
                                            src={SortIcon}
                                            alt="Sort Icon"
                                        />
                                    </div>

                                    <p className="QTY__text">
                                        LOTS
                                        {/* {inventory.quantity} */}
                                    </p>
                                    {/* <p className="QTY__text">500</p> */}
                                    {/* <p className="QTY__text">{warehouse.contact_phone}</p> */}
                                </div>
                            </article>

                            <article>


                                <div className="warehouse-name">
                                    <div className="warehouse-name__container">
                                        <h3 className="warehouse-name__title">WAREHOUSE:</h3>

                                    </div>

                                    <p className="warehouse-name__text">
                                        Manhattan
                                        {/* TODO {inventory.warehouse} */}
                                    </p>
                                </div>

                            </article>
                        </section>
                </div>
            </main>
        </>

    );
}

export default InventoryDetails;
