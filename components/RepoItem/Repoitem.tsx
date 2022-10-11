import { faStar, faCodeFork, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import styles from "../../styles/RepoItem.module.css";
import { RepoItemsResults } from "../../types/types";

interface RepoItemProps {
  data: RepoItemsResults;
}

const RepoItem: React.FC<RepoItemProps> = ({ data }) => {
  return (
    <div className={styles.itemContainer}>
      <div className="h-100 d-flex flex-column m-0 p-1 justify-content-around align-items-center">
        <div className="d-flex w-100 flex-column justify-content-center align-items-center">
          <div className="text-center column w-100 justify-content-center align-items-center">
            <Image
              width={75}
              height={75}
              src={data.owner.avatar_url ?? ""}
              className="rounded-circle"
              alt="User"
            />
            <h3 className="mb-3 fs-3 fw-bolder ">{data.full_name}</h3>
            <h3 className="fs-6 bg-secondary badge mb-3">
              {data.private ? "Private" : "Public"}
            </h3>
            <div className="row w-100 m-0 mb-3 justify-content-around align-items-center">
              <div
                className={`${styles.counters} w-25 col-sm-12 rounded px-4 py-2 row m-0 fs-6 bg-secondary text-light fw-bold`}
              >
                <FontAwesomeIcon
                  className={`w-50 ${styles.icon}`}
                  icon={faStar}
                  fontSize={25}
                  color="#fff"
                />
                <p className="w-50 m-0 p-0">{data.stargazers_count}</p>
              </div>
              <div
                className={`${styles.counters} w-25 col-sm-12 rounded px-4 py-2 row m-0 fs-6 bg-secondary text-light fw-bold`}
              >
                <FontAwesomeIcon
                  className={`w-50 ${styles.icon}`}
                  icon={faCodeFork}
                  fontSize={25}
                  color="#fff"
                />
                <p className="w-50 m-0 p-0">{data.forks_count}</p>
              </div>
              <div
                className={`${styles.counters} w-25 col-sm-12 rounded px-4 py-2 row m-0 fs-6 bg-secondary text-light fw-bold`}
              >
                <FontAwesomeIcon
                  className={`w-50 ${styles.icon}`}
                  icon={faEye}
                  fontSize={25}
                  color="#fff"
                />
                <p className="w-50 m-0 p-0">{data.watchers_count}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <a href={data.html_url} target="_blank" rel="noreferrer">
            <button type="submit" className="btn btn-dark ">
              View Repository
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
