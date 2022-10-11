import Image from "next/image";
import React from "react";
import styles from "../../styles/UserItem.module.css";
import { ItemsResults } from "../../types/types";

interface UserItemProps {
  data: ItemsResults;
}

const UserItem: React.FC<UserItemProps> = ({ data }) => {
  return (
    <div className={styles.itemContainer}>
      <div className="h-100 d-flex flex-column m-0 p-1 justify-content-around align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="text-center column w-100 justify-content-center align-items-center">
            <Image
              width={75}
              height={75}
              src={data.avatar_url}
              className="rounded-circle"
              alt="User"
            />
            <h3 className="mb-3 fs-3 fw-bolder ">{data.login}</h3>
            <h3 className="mb-0 fs-6 bg-secondary badge">{data.type}</h3>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <button type="submit" className="btn btn-dark ">
              View Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
