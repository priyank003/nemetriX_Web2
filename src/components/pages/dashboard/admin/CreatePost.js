import classes from "./CreatePost.module.css";
import close from "../../../../assets/logos/close_black_24dp.svg";
import ReactPlayer from "react-player";
import { useState } from "react";
const CreatePost = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImg, setShareImg] = useState("");
  const [videolink, setVideoLink] = useState("");
  // eslint-disable-next-line
  const [assetArea, setAssetArea] = useState("");
  // eslint-disable-next-line
  const switchAssetArea = (area) => {
    setShareImg("");
    setVideoLink("");
    setAssetArea(area);
  };

  const hideModal = () => {
    props.hideCreatePost(true);
  };

  const handelChange = (e) => {
    const image = e.target.files[0];

    setShareImg(image);
  };

  // eslint-disable-next-line
  const rest = (e) => {
    setEditorText("");
    setShareImg("");
    setVideoLink("");
    setAssetArea("");
  };

  return (
    <div className={classes["create-post"]}>
      <div className={classes["create-content"]}>
        <div className={classes["content-header"]}>
          <h2>Create a Post</h2>
          <button>
            {" "}
            <img src={close} alt="close" onClick={hideModal} />
          </button>
        </div>

        <div className={classes["content-area"]}>
          <textarea
            value={editorText}
            onChange={(e) => setEditorText(e.target.value)}
            placeholder="Create Announemcement"
          />

          <div className={classes["upload-image"]}>
            <input
              type="file"
              accept="asset/gif,asset/jpeg, asset/png, asset/pdf"
              name="assest"
              id="file"
              style={{ display: "block" }}
              onChange={handelChange}
            />
            <p>
              <label htmlFor="file">Select an file to share</label>
            </p>
            {shareImg && <img src={URL.createObjectURL(shareImg)} alt=""></img>}

            <>
              <input
                type="text"
                placeholder="please upload video link"
                value={videolink}
                onChange={(e) => setVideoLink(e.target.value)}
              />

              {videolink && <ReactPlayer width="100%" url={videolink} />}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
