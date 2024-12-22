import { useState } from "react";
const ShopItem = ({ data, addToCart, cartItems }) => {
    const [Modal, SetModal] = useState(false);

    const ToggleModal = () => {
        SetModal(!Modal);
    };

    const isItemInCart = (cartItems || []).some(item => item.id === data.id);
    return (
        <div className="card">
            <div className="wrapper">
                <div className="img-container">
                    <img
                        className="card-image"
                        src={data.image}
                        alt={data.title}
                        width="200px"
                    />
                    <button onClick={ToggleModal} className="view-btn">
                        View
                    </button>

                    {Modal && (
                        <>
                            <div className="pop-up">
                                <img className="modal-img" src={data.modalImage} alt={data.title} />
                                <div className="inner-modal">
                                    <h1>{data.title}</h1>
                                    <h4>{data.subtitle}</h4>
                                    <p className="title price">${data.price}</p>
                                </div>
                                <button className="X-btn" onClick={ToggleModal}>
                                    X
                                </button>
                            </div>
                            <div onClick={ToggleModal} className="overlay" />
                        </>
                    )}
                </div>
                <div className="content">
                    <p className="title">{data.title}</p>
                    <p className="name">{data.subtitle}</p>
                    <p className="title price">${data.price}</p>
                </div>
                <button
                    className={isItemInCart ? 'card-btn filter-disabled' : 'card-btn'}
                    onClick={() => addToCart(data)}
                >
                    {isItemInCart ? "In Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
};

export default ShopItem;
