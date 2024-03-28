import './AddInventoryItem.scss'

function AddInventoryItem() {
    return (
        <>
            <div>
                <img src="" alt="" />
                <h1>Add New Inventory Item</h1>
            </div>
            <div className="details-container">
                <h3>Item Details</h3>
                <form className='form' action="">
                    <label htmlFor="">Item Name</label>
                    <input placeholder='Item Name'></input>
                    <label htmlFor="">Description</label>
                    <input placeholder='Please enter a brief description'></input>
                    <label htmlFor="">Category</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </form>

            </div>
            <div className="details-container">
                <h3>Item Availibity</h3>
                <form className='form' action="">
                    <label htmlFor="">Quanity</label>
                    <input placeholder='0'></input>
                    <label htmlFor="">Warehouse</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button>Cancel</button>
                    <button>Add Item</button>


                </form>

            </div>
        </>
    )
}
export default AddInventoryItem
