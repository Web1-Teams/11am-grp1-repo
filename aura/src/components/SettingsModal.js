import React, { useEffect } from "react";
import '../pages/styles/SettingsModal.css';

const SettingsModal = () => {
  useEffect(() => {
    const settingsModal = document.getElementById("settingsModal");
    const gearIcon = document.querySelector(".fa-gear");
    const closeSettingsBtn = document.querySelector(".close-settings");
    const saveSettingsBtn = document.querySelector(".save-settings");

    const openModal = () => {
      settingsModal.style.display = "flex";
    };

    const closeModal = () => {
      settingsModal.style.display = "none";
    };

    const saveSettings = () => {
      const notifications = document.getElementById("notifications")?.checked;
      const darkMode = document.getElementById("darkModes")?.checked;
      const language = document.getElementById("language")?.value;

      console.log("Settings saved:");
      console.log("Notifications: " + notifications);
      console.log("Dark Mode: " + darkMode);
      console.log("Language: " + language);

      settingsModal.style.display = "none";
    };

    if (gearIcon) {
      gearIcon.addEventListener("click", openModal);
    }

    if (closeSettingsBtn) {
      closeSettingsBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (e) => {
      if (e.target === settingsModal) {
        closeModal();
      }
    });

    if (saveSettingsBtn) {
      saveSettingsBtn.addEventListener("click", saveSettings);
    }

    return () => {
      if (gearIcon) gearIcon.removeEventListener("click", openModal);
      if (closeSettingsBtn) closeSettingsBtn.removeEventListener("click", closeModal);
      window.removeEventListener("click", (e) => {
        if (e.target === settingsModal) {
          closeModal();
        }
      });
      if (saveSettingsBtn) saveSettingsBtn.removeEventListener("click", saveSettings);
    };
  }, []);

  return (
    <div id="settingsModal">
      <div className="modal-contentSettings">
        <span className="close-settings">&times;</span>
        <h3>Settings</h3>
        <div className="settings-option">
          <label htmlFor="notifications">Enable Notifications</label>
          <input type="checkbox" id="notifications" defaultChecked />
        </div>
        <div className="settings-option">
          <label htmlFor="privacy">Set as private page</label>
          <input type="checkbox" id="darkModes" />
        </div>
        <div className="settings-option">
          <label htmlFor="language">Language</label>
          <select id="language">
            <option value="en">English</option>
            <option value="es">Arabic</option>
            <option value="fr">Turkish</option>
          </select>
        </div>
        <button className="save-settings">Save</button>
      </div>
    </div>
  );
};

export default SettingsModal;
