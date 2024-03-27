import './Header.scss'
import Logo from '../../assets/Logo/InStock-Logo_1x.png'

function Header() {

    return (
        <div className='header'>
            <div className='header__logo-and-nav-bar'>


                <div className='header__logo' >
                    <img src={Logo} alt="InStock Logo" className='header__logo--image' />
                </div>
                <div className='header__nav-bar'>
                    <div className='header__warehouses header__nav-link'>
                        <button className='header__button button__warehouse'>Warehouses</button>
                    </div>
                    <div className='header__inventory header__nav-link'>
                        <button className='header__button button__inventory'>Inventory</button>
                    </div>

                </div>
            </div>
            <div className='header__blank-space'>

            </div>

        </div>
    )

}

export default Header;