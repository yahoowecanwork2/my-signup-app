import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import image from "../assets/Ellipse 114.png";
import camicon from "../assets/Group 1585.png";
import "../css-compoents/Profile.css"; // CSS import

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-body">
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <img src={image} alt="profile" className="profile-image" />
              <span className="camera-icon">
                <img src={camicon} alt="camera" className="camera-img" />
              </span>
            </div>

            <div>
              <p className="profile-name">{user?.name || "Marry Doe"}</p>
              <p className="profile-email">
                {user?.email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          <div className="profile-description">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          <div className="profile-divider"></div>
          <div className="profile-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
