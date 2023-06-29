import React from "react";

export default function Details(props) {

    const increaseAmount = () => {
        props.changeAmount(props.amountValue + 1)
    }

    const descreaseAmount = () => {
        props.changeAmount(props.amountValue - 1)

        if(props.amountValue === 0)
        {
            props.changeAmount(0)
        }
    }

    return (
        <section className="w-full relative -top-8 z-20 bg-white grid place-items-center sm: top-6 lg:w-7/12 lg:place-items-start lg:ml-24 xl:ml-0 xl:w-5/12 2xl:w-4/12">
            <article className="w-[89%]">
                <h2 className="details--company  uppercase text-xs font-bold mt-4 tracking-widest 2xl:text-lg">Sneaker company</h2>
                <h1 className="details--product-name mt-4 font-bold text-2xl lg:text-4xl 2xl:text-5xl">Fall Limited Edition Sneakers</h1>

                <p className="details--text  w-11/12 mt-4 text-[15px] lg:w-full 2xl:text-lg">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className="flex items-center justify-between mt-6 lg:block">
                    <div className="flex items-center w-[53%]">
                        <h3 className="font-bold text-2xl">$125.00</h3>

                        <p className="details--discount-value font-bold px-2 py-[1px] rounded-md ml-5">50%</p>
                    </div>

                    <p className="details--previous-price text-md font-bold line-through lg:mt-3">$250.00</p>
                </div>

                <div className="sm:flex sm:items-center sm:mt-10 sm:mb-10 ">
                    <div className="details--amount-box flex items-center justify-between mt-6 rounded-xl sm:mt-0 sm:w-5/12 sm:mr-6">

                        <button className="px-5 py-6 cursor-pointer hover:opacity-70 duration-500" onClick={()=>descreaseAmount()}>
                            <svg className="w-3 h-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a"/></svg>
                        </button>

                        <p className="font-bold">{props.amountValue}</p>

                        <button className="px-5 py-5 hover:opacity-70 cursor-pointer duration-500" onClick={()=>increaseAmount()}>
                            <svg className="w-3 h-3"  xmlns="http://www.w3.org/2000/svg"   xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b"/></svg>
                        </button>
                    </div>


                    <button className="details--addToCard-button flex items-center justify-center mt-4 rounded-xl w-full py-3 cursor-pointer hover:opacity-70 duration-500 mb-10 sm:mt-0 sm:mb-0 sm:w-7/12  lg:w-8/12" onClick={() => props.setCartItems()}>
                        <svg className="mr-4 w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg>
                        <p className="text-white font-bold">Add to cart</p>
                    </button>
                </div>
            </article>
        </section>
    )
}