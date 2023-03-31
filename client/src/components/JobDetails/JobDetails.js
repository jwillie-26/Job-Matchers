import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import "./JobDetails.css";
import { Textarea } from "evergreen-ui";

function JobDetails({ user }) {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("info");
  const [reviews, setReviews] = useState();
  const [comment, setComment] = useState();
  const [errors, setErrors] = useState([]);
  const [saveBtn, setSaveBtn] = useState(true);
  const [idToBeUpdated, setIdToBeUpdated] = useState(0);

  useEffect(() => {
    fetch("/jobs/" + params.id)
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        setReviews(data.reviews);
      });
  }, [params.id]);

  let id = 1;

  {
    user ? (id = user.id) : (id = 1);
  }

  async function handleSubmit() {
    setErrors([]);

    {
      user ? (id = user.id) : (id = 1);
    }

    const formData = {
      user_id: id,
      job_id: params.id,
      review: comment,
    };

    const response = await fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      setComment("");
      setReviews([...reviews, data]);
    } else {
      setErrors(data.errors);
    }
  }

  function handleDelete(idd) {
    fetch("/reviews/" + idd, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => updateAfterDelete(idd));
  }

  function updateAfterDelete(idd) {
    const updated = reviews.filter((review) => review.id !== idd);
    setReviews(updated);
  }

  function handleUpdate() {
    // alert(idToBeUpdated);

    const form_data = {
      review: comment,
    };

    fetch("/reviews/" + idToBeUpdated, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_data),
    })
      .then((r) => r.json())
      .then((updatedItem) => updateList(updatedItem));
  }

  function updateList(updatedItem) {
    const updatedItems = reviews.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setReviews(updatedItems);
    setComment("");
    setSaveBtn(true);
  }

  return (
    <DetailWrapper style={{ margin: "10% 20%" }}>
      <div>
        {/* <h2>{details.company}</h2> */}
        <img style={{ width: "20vh" }} src={details.company_logo} />
      </div>
      <Info style={{ padding: "0% 20%" }}>
        <Button
          className={activeTab === "info" ? "active" : ""}
          onClick={() => setActiveTab("info")}
        >
          Info
        </Button>
        <Button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </Button>
        {activeTab === "info" && (
          <div>
            <br></br>
            <h2>
              <u>{details.company_name}</u>
            </h2>
            <h5>Job Title :</h5>
            <p>
              <i>{details.job_type}</i>
            </p>
            <h5>Description :</h5>
            <p>
              <i>{details.description}</i>
            </p>
            <h5>Location :</h5>
            <p>
              <i>{details.location}</i>
            </p>
            <h5>Job Mode :</h5>
            <p>
              <i>{details.job_mode}</i>
            </p>
            <h5>Salary :</h5>
            <p>
              <i>Ksh. {details.salary} p.m</i>
            </p>

            {/* <ul>
              <li>{details.company_name}</li>
              <li>{details.job_type}</li>
            </ul> */}
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            {reviews.length > 0 && (
              <ul
                style={{
                  color: "#313131",
                }}
              >
                {reviews.map((review_obj) => (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <li
                      style={{
                        color: "#313131",
                        padding: "2px",
                        margin: "5px",
                      }}
                      key={review_obj.id}
                    >
                      {review_obj.review}
                    </li>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "space-between",
                      }}
                    >
                      {review_obj.user_id == id ? (
                        <>
                          <p
                            onClick={() => {
                              setComment(review_obj.review);
                              setSaveBtn(false);
                              setIdToBeUpdated(review_obj.id);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            ✏️
                          </p>
                          <p
                            onClick={() => handleDelete(review_obj.id)}
                            style={{ cursor: "pointer" }}
                          >
                            🗑
                          </p>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </ul>
            )}
            <div
              style={{
                display: "block",
                width: 700,
                paddingLeft: 30,
              }}
            >
              <br></br>
              <br></br>
              <h4>ADD COMMENT</h4>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter your comment if you are logged in"
              />{" "}
              <br></br>
              <br></br>
              {user ? (
                <button
                  onClick={() => (saveBtn ? handleSubmit() : handleUpdate())}
                >
                  {saveBtn ? "Save" : "Update"}
                </button>
              ) : (
                <button onClick={() => alert("Please Login First")}>
                  Save
                </button>
              )}
              {/* if ny err */}
              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default JobDetails;
