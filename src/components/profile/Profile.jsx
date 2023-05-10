import "./Profile.css";
import Layout from "../layout";
import ImageUploader from "react-images-upload";
import axios from "axios";
import avatar from "../../icons/image-avatar.svg";
import React, {useRef, useState} from "react";

export const Profile = () => {
  const [progress, setProgress] = useState("getUpload");
  const [url, setImageURL] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");

  const onUrlChange = (e) => {
    setImageURL(e.target.value);
  };

  const onImage = async (failedImages, successImages) => {
    if (!url) {
      console.log("missing Url");
      setErrorMessage("missing a url to upload to");
      setProgress("uploadError");
      return;
    }

    setProgress("uploading");

    try {
      console.log("successImages", successImages);
      const parts = successImages[0].split(";");
      const mime = parts[0].split(":")[1];
      const name = parts[1].split("=")[1];
      const data = parts[2];
      const res = await axios.post(url, {mime, name, image: data});

      setImageURL(res.data.imageURL);
      setProgress("uploaded");
    } catch (error) {
      console.log("error in upload", error);
      setErrorMessage(error.message);
      setProgress("uploadError");
    }
  };

  const content = () => {
    switch (progress) {
      case "getUpload":
        return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />;
      case "uploading":
        return <h2>Uploading....</h2>;
      case "uploaded":
        return <img src={url} alt="uploaded" />;
      case "uploadError":
        return (
          <>
            <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url} />
          </>
        );
    }
  };
  // const [image, setImage] = useState({preview: "", raw: ""});

  // const handleChange = (e) => {
  //   if (e.target.files.length) {
  //     setImage({
  //       preview: URL.createObjectURL(e.target.files[0]),
  //       raw: e.target.files[0],
  //     });
  //   }
  // };

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image.raw);
  // };

  const UploadComponent = (props) => (
    <ImageUploader
      key="image-uploader"
      withIcon={false}
      singleImage={true}
      withPreview={true}
      buttonText="UPLOAD IMAGE"
      onChange={props.onImage}
      width="30px"
    ></ImageUploader>
  );

  return (
    <Layout title="Dashboard> " title2="Profile">
      <div className="profile">
        <div className="head-profile">
          <label htmlFor="">Edit Profile</label>
        </div>
        {/* <form action=""> */}
        <div className="formular">
          <div className="left-part-profile">
            <div className="form-full-name">
              <label htmlFor="" className="full-name">
                Enter full name
              </label>
              <input type="text" className="input-full-name" placeholder="Full name" />
            </div>
            <div className="form-enter-email">
              <label htmlFor="" className="enter-email">
                Enter email
              </label>
              <input type="text" className="input-enter-email" placeholder="Email" />
            </div>
            <div className="form-enter-password">
              <label htmlFor="" className="enter-password">
                Enter password
              </label>
              <input type="password" className="input-enter-password" placeholder="Password" />
            </div>

            <div className="all-fields">
              <label htmlFor="" className="fields">
                *All fields are mandatory
              </label>
            </div>
          </div>
          <div className="right-part-profile">
            <label htmlFor="" className="avatar-title">
              Avatar image
            </label>
            <div className="upload">
              <div className="upload-image">
                {/* <label htmlFor="" className="img-title">
                  AvatarImage.jpg
                </label> */}
                {/* {content()} */}
                {/* <input type="submit" value={"UPLOAD IMAGE"} /> */}
                {content()}
                {/* <input type="file" id="upload-button" style={{display: "none"}} accept="image/*" /> */}
              </div>
            </div>
            <div className="form-user-parole">
              <label htmlFor="" className="user-parole">
                Choose user role
              </label>
              <input type="text" className="input-user-parole" placeholder="Placeholder Text" />
            </div>
            <div className="reset-submit">
              <button className="reset">RESET</button>
              <button className="submit">SUBMIT</button>
            </div>
          </div>
        </div>
        {/* </form> */}
      </div>
    </Layout>
  );
};

export default Profile;
