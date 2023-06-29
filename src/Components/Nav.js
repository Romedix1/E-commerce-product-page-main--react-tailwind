import React, { useState } from "react";


export default function Nav(props) {
    const [navStatus, setNavStatus] = useState(false);
    const [openedCartStatus, setOpenedCartStatus] = useState(false);

    // false == closed / true == opened

    const OpenedNavMenu = () => {
        return (
            <section className="fixed w-full h-full top-0 left-0 lg:hidden">
                <article className="nav--opened-menu-left-content  relative z-50 w-8/12 h-full pt-7 pl-5 overflow-x-hidden  sm:w-6/12 sm:pl-10 sm:pt-10">
                    <img src="./images/icon-close.svg" alt="close icon" className="cursor-pointer w-4 mb-10" onClick={() => setNavStatus(false)}/>
                
                    <ul className="font-bold">
                        <li className="mobile-nav--list-element    cursor-pointer w-fit text-xl mt-5 border-b-2 border-transparent border-solid hover:border-black">Collections</li>
                        <li className="mobile-nav--list-element    cursor-pointer w-fit text-xl mt-5 border-b-2 border-transparent border-solid hover:border-black">Menu</li>
                        <li className="mobile-nav--list-element    cursor-pointer w-fit text-xl mt-5 border-b-2 border-transparent border-solid hover:border-black">Women</li>
                        <li className="mobile-nav--list-element    cursor-pointer w-fit text-xl mt-5 border-b-2 border-transparent border-solid hover:border-black">About</li>
                        <li className="mobile-nav--list-element    cursor-pointer w-fit text-xl mt-5 border-b-2 border-transparent border-solid hover:border-black">Contact</li>
                    </ul>
                </article>
                <div className="nav--opened-menu-background w-full h-full z-40 fixed top-0"></div>
            </section>
        )
    }

    function toogleCartStatus(previousState) {
        setOpenedCartStatus(previousState => !previousState)
    }    



    return(
        <nav className="nav-section   w-full px-6 py-6 flex items-center justify-between relative z-40 lg:px-0 lg:w-10/12 lg:border-b-[1px] lg:border-gray-300 lg:border-solid lg:pb-0 ">
            <div className="flex items-center">
                <img src="./images/icon-menu.svg" alt="menu icon" className="cursor-pointer w-5 lg:hidden" onClick={() => setNavStatus(true)} />
                <img src="./images/logo.svg" alt="logo" className="w-15 ml-5" />

                <ul className="font-bold flex hidden lg:flex ml-8">
                    <li className="desktop-nav--list-element   duration-300 cursor-pointer w-fit text-xl mt-5 pb-3 border-b-2 hidden border-transparent border-solid hover:border-orange-500 lg:text-lg lg:block lg:mr-4">Collections</li>
                    <li className="desktop-nav--list-element   duration-300 cursor-pointer w-fit text-xl mt-5 pb-3 border-b-2 hidden border-transparent border-solid hover:border-orange-500 lg:text-lg lg:block lg:mr-4">Menu</li>
                    <li className="desktop-nav--list-element   duration-300 cursor-pointer w-fit text-xl mt-5 pb-3 border-b-2 hidden border-transparent border-solid hover:border-orange-500 lg:text-lg lg:block lg:mr-4">Women</li>
                    <li className="desktop-nav--list-element   duration-300 cursor-pointer w-fit text-xl mt-5 pb-3 border-b-2 hidden border-transparent border-solid hover:border-orange-500 lg:text-lg lg:block lg:mr-4">About</li>
                    <li className="desktop-nav--list-element   duration-300 cursor-pointer w-fit text-xl mt-5 pb-3 border-b-2 hidden border-transparent border-solid hover:border-orange-500 lg:text-lg lg:block lg:mr-4">Contact</li>
                </ul>
            </div>

            <div className="flex items-center relative">
                {props.cartArray.length>0 && <div className="cart--amount-information absolute px-1.5 text-[10px] rounded-full -top-1 left-2 text-white sm:px-2 sm:left-3 sm:top-0">{props.cartArray.length}</div>}
                <img src="./images/icon-cart.svg" alt="cart icon" className="cursor-pointer w-5 sm:w-7" onClick={() => toogleCartStatus()} />
                <img src="./images/image-avatar.png" alt="avatar" className="cursor-pointer w-6 ml-3 border-2 border-transparent border-solid rounded-full hover:border-orange-500 sm:w-9" />
            </div>
            
            {navStatus && <OpenedNavMenu />}


            {openedCartStatus===true &&
            <section className="cart--container   -z-10 absolute w-11/12 max-h-96 overflow-y-scroll bg-white top-20 mx-auto left-0 right-0 rounded-xl sm:w-6/12 sm:right-16 sm:top-[90px] sm:left-auto sm:mx-0 lg:w-5/12 lg:top-24 lg:right-8 2xl:w-3/12">
                <h4 className="ml-6 my-4 font-bold">Cart</h4>
                <hr />

                {props.cartArray.length > 0 ? 
                <>
                    {props.cartMappedArray}
                    <button className="cart--checkout w-11/12 mx-3 text-white rounded-md py-2 mb-5 cursor-pointer hover:opacity-70 duration-500">Checkout</button>
                </>:
                    <p className="nav--cart-empty-text font-bold mx-auto w-fit mt-16 mb-20">Your cart is empty</p>} 
            </section>}
        </nav>
    )
}