import './AddInventoryItem.scss'

function EditInventoryItem() {
    return (
        <>
            <div>
                <img src="" alt="" />
                <h1>Edit Inventory Item</h1>
            </div>
            <div className="details-container">
                <h3>Item Details</h3>
                <form className='form' action="">
                    <label htmlFor="">Item Name</label>
                    <input placeholder='Television'></input>
                    <label htmlFor="">Description</label>
                    <input placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors'></input>
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

                    <label htmlFor="">Warehouse</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button>Cancel</button>
                    <button>Save</button>


                </form>

            </div>
        </>
    )
}
export default EditInventoryItem
