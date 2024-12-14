
import { useState } from "react";


const ShopItem = () => {


    const [Modal, SetModal] = useState(false);

    const ToggleModal = () => {
        SetModal(!Modal);
    }

    return (
        <div className="card">
            <div className="wrapper">
                <div className="img-container">
                    <img className="card-image" src="https://placehold.co/600x400" width="200px" />
                    <button onClick={ToggleModal} className="view-btn">
                        View
                    </button>

                    {Modal && (
                        <>
                            <div className="pop-up">
                                <img className="modal-img" src="https://placehold.co/600x400" />
                                <div className="inner-modal">
                                    <h1>Tiltle</h1>
                                    <h4>subtitle</h4>
                                    <p className="title price">$3</p>
                                </div>
                                <div className="side-panel">

                                </div>
                                <button className="X-btn" onClick={ToggleModal}>X</button>
                            </div>
                            <div onClick={ToggleModal} className="overlay" />
                        </>

                    )}

                </div>
                <div className="content">
                    <p className="title">UIVERSE PREMIUM FONT (REGULAR)<br /></p><br />
                    <p className="name">By<br /> Artist</p>
                    <p className="title price">$3</p>
                    <p></p>
                </div>
                <button className="card-btn">Add to cart</button>
            </div>
        </div>
    )
}

export default ShopItem;