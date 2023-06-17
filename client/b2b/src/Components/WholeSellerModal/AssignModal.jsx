import  { useState } from "react";
import styles from "./AssignModal.module.css";
import {
  useAssignGroupMutation,
  useUnAssignedGroupsQuery,
} from "../../REDUX/Reducers/groups/GroupSlice";

// eslint-disable-next-line react/prop-types
function AssignModal({ modalHandler, sellerData }) {
  const unAssignedGroups = useUnAssignedGroupsQuery();

  const [assignGroup] = useAssignGroupMutation();

  const [groups, setGroups] = useState([]);

  const groupSelector = (e) => {
    setGroups(e.target.value);
  };


  // Assignment Handler
  const assignmentHandler = async () => {
    try {
      const res = await assignGroup({
        groupID: groups,
        // eslint-disable-next-line react/prop-types
        userid: sellerData._id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.ModalBackground}>
        <div className={styles.ModalWrapper}>
          <div
            className={`${styles.heading} d-flex justify-content-between align-items-center w-100`}
          >
            <h3>Assign To Another group</h3>

            <h4 className="mt-4" onClick={modalHandler}>
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
                  {sellerData?.firstName +
                    " " +
                    sellerData?.lastName}
                </span>
              </p>
              <p>
                <strong>Email:</strong>
                <span> {sellerData.email}</span>
                <span> {sellerData.groupID}</span>
              </p>
            </div>
            <div className={`${styles.buttons} d-flex flex-column gap-4`}>
              <select onChange={groupSelector} name="group" id="groups">
                {unAssignedGroups?.data?.map((group) => (
                  <option key={group._id} value={group._id}>
                    {group.groupName}
                  </option>
                ))}
              </select>
              <button onClick={assignmentHandler}>Assign To This Group</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignModal;
