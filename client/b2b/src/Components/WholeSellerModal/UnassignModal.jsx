import React, { useState } from "react";
import styles from "./AssignModal.module.css";
import { groups } from "../../Pages/ManageData/ManageDataAssets/ManageUserData.json";
import {
  useAssignGroupMutation,
  useUnAssignedGroupsQuery,
} from "../../REDUX/Reducers/groups/GroupSlice";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function UnassignModal({ UnassignmodalHandler, sellerData }) {
  const [assignGroup] = useAssignGroupMutation();

  const navigate = useNavigate();

  console.log(sellerData._id, "seller id");

  // Assignment Handler
  const assignmentHandler = async () => {
    try {
      const res = await assignGroup({
        groupID: groups,
        userid: sellerData._id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const visitGroup = (grpID) => {
    navigate(`/Group-Content/${grpID}`);
  };

  console.log(groups);

  return (
    <>
      <div className={styles.ModalBackground}>
        <div className={styles.ModalWrapper}>
          <div
            className={`${styles.heading} d-flex justify-content-between align-items-center w-100`}
          >
            <h3>Unassign Member</h3>

            <h4 className="mt-4" onClick={UnassignmodalHandler}>
              X
            </h4>
          </div>
          <div
            className={`${styles.Wrapper} d-flex flex-column justify-content-evenly align-items-center w-100 gap-4 height-100`}
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt=""
              className={styles.AssignModalImg}
            />
            <div
              className={`${styles.DetailDiv} d-flex align-items-center justify-content-center gap-4 w-100 flex-column`}
            >
              <p>
                <strong>FullName:</strong>
                <span>
                  {sellerData?.firstName + " " + sellerData?.lastName}
                </span>
              </p>
              <p>
                <strong>Email:</strong>
                <span> {sellerData.email}</span>
              </p>
            </div>
            <div className={`${styles.buttons} d-flex flex-column gap-4`}>
              <button onClick={assignmentHandler}>Unassign Member</button>
            </div>
            <div className={`${styles.buttons} d-flex flex-column gap-4`}>
              <button onClick={() => visitGroup(sellerData.groupID)}>
                Visit Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnassignModal;
