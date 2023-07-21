import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [dataPost, setDataPost] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [tagsSelected, setTagsSelected] = useState("Html");
  const [tags, setTags] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const token = localStorage.getItem("token");
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    fetch(
      `https://test-react.agiletech.vn/posts?page=${String(
        page
      )}&title=${title}&tags=${tagsSelected}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setDataPost(data.posts);
        setTotalPost(data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, title, tagsSelected]);

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

  const handleRemove = (id) => {
    const confirm = window.confirm("Are you sure delete post?");
    if (confirm) {
      fetch(`https://test-react.agiletech.vn/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setDataPost(dataPost.filter((i) => i.id !== id));
    }
  };
  return (
    <div className="profile-wrapper">
      <div className="table">
        <div className="table-top">
          <button onClick={() => navigate("create")}>Add new</button>
          <div className="table-top-input">
            <input
              id="email"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <select
              id="cars"
              placeholder="Tags"
              onChange={(e) => setTagsSelected(e.target.value)}
            >
              {tags?.map((tag, index) => (
                <option key={index + 1} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataPost?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.tags.join(",")}</td>
                  <td className="actions">
                    <BsPencil
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      onClick={() => navigate(`edit/${item.id}`)}
                    />
                    <FaTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-custom">
          <ul id="page-numbers">
            {pageNumbers.map((number) => {
              return (
                <li
                  key={number}
                  id={number}
                  value={number}
                  onClick={(e) => setPage(e.target.value)}
                  className={page === number ? "active" : ""}
                >
                  {number}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
