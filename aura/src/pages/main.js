import React, { useState, useEffect } from "react";
import Menuebar from "../components/menuebar"
import Navbar from "../components/shop-navbar"
import "./styles/menuebar.css"

import GalleryItem from "../components/gallery-item";
import "../pages/styles/gallery-style.css"


const Main = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://via.placeholder.com/300x400", owner: "Owner 1", title: "Beautiful Landscape", price: "$50" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 2", title: "Sunset View", price: "$40" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 3", title: "Mountain Peak", price: "$60" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 4", title: "Ocean Wave", price: "$70" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 1", title: "Beautiful Landscape", price: "$50" },
        { src: "https://via.placeholder.com/200x300", owner: "Owner 4", title: "Ocean Wave", price: "$70" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 3", title: "Mountain Peak", price: "$60" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 4", title: "Ocean Wave", price: "$70" },
        { src: "https://via.placeholder.com/300x400", owner: "Owner 1", title: "Beautiful Landscape", price: "$50" },
    ];
    const setGridRowSpan = (img) => {
        const rowHeight = 10; // نفس قيمة grid-auto-rows
        const height = img.getBoundingClientRect().height;
        const span = Math.ceil(height / rowHeight);
        img.parentElement.style.gridRowEnd = `span ${span}`;
    };

    useEffect(() => {
        const images = document.querySelectorAll('.card img');
        images.forEach((img) => {
            if (img.complete) {
                setGridRowSpan(img);
            } else {
                img.onload = () => setGridRowSpan(img);
            }
        });
    }, []);


    const openModal = (image) => {
        setSelectedImage(image);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedImage(null);
    };

    return (

        <div>

            <Menuebar />
            <div className="container">
                {images.map((image, index) => (
                    <GalleryItem
                        key={index}
                        image={image}
                        onImageClick={openModal}
                    />
                ))}
            </div>

            {modalVisible && selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={selectedImage.src} alt={selectedImage.title} />
                        <div className="modal-details">
                            <h1>{selectedImage.title}</h1>
                            <p><strong>Owner:</strong> {selectedImage.owner}</p>
                            <p><strong>Price:</strong> {selectedImage.price}</p>
                        </div>
                        <button className="close-btn" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Main;