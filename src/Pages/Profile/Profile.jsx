import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Profile.module.css";
import ProfileContent from "../../Components/Profile/ProfileContent";
function Profile() {
  return (
    <div className={styles.Profile}>
      <Navbar />
      <ProfileContent />
    </div>
  );
}

export default Profile;
