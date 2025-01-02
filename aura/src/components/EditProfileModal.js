import React, { useState, useEffect } from 'react';
import prof from '../images/prof.jpg'; 
import '../pages/styles/EditProfileModal.css';

const EditProfileModal = () => {
    // State variables for profile info and image
    const [profileImage, setProfileImage] = useState(prof);
    const [username, setUsername] = useState("Sara Qadi");
    const [bio, setBio] = useState("Hi, I’m Sara Qadi, a passionate painter with a love for capturing the beauty of the world through color and texture. My journey with art began in childhood, where I found joy in sketching the simplest moments around me. Over the years, I’ve honed my skills in oil paintings, blending traditional techniques with my unique vision. ✨");
    const [email, setEmail] = useState("sara.2002.qado@gmail.com");

    // Closes the modal by removing the 'active' class
    const closeModal = () => {
        document.getElementById('editProfileModal').classList.remove('active');
    };

    // Handles image preview when a new file is uploaded
    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setProfileImage(e.target.result); // Updates the profile picture preview
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        // Add event listener to open the modal when the button is clicked
        const button = document.getElementById('editProfileButton');
        if (button) {
            button.addEventListener('click', openModal);
        }

        // Clean up to avoid memory leaks
        return () => {
            if (button) {
                button.removeEventListener('click', openModal);
            }
        };
    }, []);

    // Opens the modal by adding the 'active' class
    const openModal = () => {
        document.getElementById('editProfileModal').classList.add('active');
    };

    return (
        <div className="edit-profile-modal" id="editProfileModal">
            {/* Overlay to close the modal when clicking outside */}
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
                {/* Modal header with title and close button */}
                <div className="modal-header">
                    <h3>Edit Profile</h3>
                    <button className="close-btn" onClick={closeModal}>&times;</button>
                </div>
                {/* Form for editing profile details */}
                <form>
                    {/* Profile Picture Section */}
                    <div className="form-group2">
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <div className="profile-picture-preview">
                            <img src={profileImage} alt="ProfilePic" id="profilePreview" />
                            {/* Button to trigger file input for updating picture */}
                            <button type="button" className="update-btn" onClick={() => document.getElementById('profilePicture').click()}>Update</button>
                            <input type="file" id="profilePicture" accept="image/*" onChange={previewImage} />
                        </div>
                    </div>
                    {/* Username Section */}
                    <div className="form-group2">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    {/* Bio Section */}
                    <div className="form-group2">
                        <label htmlFor="bio2">Bio</label>
                        <textarea id="bio2" name="bio2" rows="3" value={bio} onChange={(e) => setBio(e.target.value)} />
                    </div>
                    {/* Email Section */}
                    <div className="form-group2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* Action buttons for form submission or cancel */}
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                        <button type="submit" className="save-btn">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
