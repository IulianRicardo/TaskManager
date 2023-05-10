import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EditUser.css";
import { useFormControl } from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import image from "../../Images/Rectangle 190.svg";

import { Button } from "@mui/material";
import { MenuUnstyledContext } from "@mui/base";

export const EditUser = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "drawin");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/iulianricardo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };
  return (
    <div className="prj02">
      <p className="Title02">Edit user: {"  "}</p>
      <p className="user02">John Tom</p>

      <Grid container spacing={3} className="grid-user02">
        <Grid item xs={0}>
          <div className="first02">
            <div className="FullName02">
              <p className="label02">Enter full name</p>

              <input className="input02" type="name" Placeholder="Full Name" />
            </div>
            <div className="Gmail02">
              <p className="label02">Enter email</p>
              <input className="input02" type="email" Placeholder="Email" />
            </div>
            <div className="Password02">
              <p className="label02">Enter password</p>
              <input
                className="input02"
                type="password"
                Placeholder="Password"
              />
              <p className="required02">*All fields are mandatory</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <p className="label02">Avatar image</p>
          <div className="add02">
            <div className="container02">
              <div className="img02">
                {loading ? (
                  <h3>Loading...</h3>
                ) : (
                  <img
                    style={{
                      width: "108px",
                      height: "108px",
                      borderRadius: "55.5px",
                    }}
                    src={image}
                    alt="Image"
                  />
                )}
              </div>

              <p className="label02" style={{ margin: "31px 0 11px 0px" }}>
                AvatarImage.jpg
              </p>

              <Button
                style={{
                  width: "178px",
                  height: "48px",
                  fontFamily: "Almarai",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "16px",
                  borderRadius: "50px",
                  color: "#FFFFFF",
                  background: "#00C7C7",
                }}
                component="label"
                variant="contained"
              >
                UPLOAD IMAGE
                <input type="file" hidden onChange={uploadImage} />
              </Button>
            </div>
            <div className="Role02">
              <p className="label02">Choose user role</p>

              <input
                className="input02"
                type="name"
                Placeholder="Placeholder Text"
              />
              <div className="check02">
                <Button
                  style={{
                    width: "179px",
                    height: "48px",
                    fontFamily: "Almarai",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                    borderRadius: "50px",
                    color: "#EFAC00",
                    borderColor: "#EFAC00",
                    border: "2px solid #EFAC00",
                    boxSizing: "border-box",
                    margin: "0px 13px 0px 0px",
                  }}
                  variant="outlined"
                >
                  RESET
                </Button>
                <Button
                  style={{
                    width: "178px",
                    height: "48px",
                    fontFamily: "Almarai",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "16px",
                    borderRadius: "50px",
                    color: "#FFFFFF",
                    background: "#EFAC00",
                  }}
                  variant="contained"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
