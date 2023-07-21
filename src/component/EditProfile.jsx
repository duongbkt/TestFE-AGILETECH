import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://test-react.agiletech.vn/posts/tags`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setTagsSelected(selectedOptions);
  };

  const onCreate = (e) => {
    e.preventDefault();
    const dataSubmit = {
      title: title,
      description: description,
      tags: tagsSelected,
    };
    if (!id) {
      fetch(`https://test-react.agiletech.vn/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(dataSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Create successfully");
          navigate("/profile");
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      fetch(`https://test-react.agiletech.vn/posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(dataSubmit),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Update successfully");
          navigate("/profile");
        })
        .catch((error) => {
          alert(error);
        }); 
    }
  };

  return (
    <div className="edit-wrapper">
      <h2>{!id ? "Create Profile" : "Edit Profile"}</h2>
      <form>
        <div className="input-edit">
          <label>Title</label>
          <input
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-edit">
          <label>Description</label>
          <input
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="input-edit">
          <label
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            Tags
            <input
              id="my-input"
              data-dropdown="true"
              data-tags="true"
              value={tagsSelected?.join(",")}
              onClick={() => setHidden(!hidden)}
              onChange={(e) => setTagsSelected(e.target.value.split(","))}
              readOnly
            />
          </label>
          <select
            id="multiple-select"
            placeholder="Tags"
            onChange={(e) => handleSelectChange(e)}
            hidden={hidden}
            multiple
          >
            {tags?.map((tag, index) => (
              <option key={index + 1} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <button
          className={
            !title || !description || !tagsSelected
              ? "btn-create-disable"
              : "btn-create"
          }
          onClick={(e) => onCreate(e)}
          disabled={!title || !description || !tagsSelected}
        >
          {id ? "Edit" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
