/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from "react";
import styles from "../study-destination/StudyDestination.module.css";
import Link from "next/link";
import Image from "next/image";
import { pageMap } from "./config";
import { useParams } from "next/navigation";

const StudyDestination = () => {
  const params = useParams();
  const { destination  }:any = params || {};
  const pageDetails = pageMap[destination];
  const {
    bannerTile,
    title,
    about,
    univercityTitle,
    UKUniversity,
    coursesTitle,
    topCourses,
  } = pageDetails;
  return (
    <div>
      {/* head */}
      <div className={styles.main}>
        <div className={styles.submain}>
          <h1 className={styles.heading}>{bannerTile}</h1>
          <p className={styles.breadcrumbs}>
            <span>
              <Link href="#" className={styles.breadcrumbs}>
                HOME <i className="ion-ios-arrow-forward"></i>
              </Link>
            </span>{" "}
          </p>
        </div>
      </div>
      {/* Why Choose */}
      <div className={styles.destination}>
        <h2 className={styles.h2}>{title}</h2>
        <ul className={styles.ul}>
          {about.map((item:string, index:number) => {
            const title = item.split(":")[0];
            item = item.split(":")[1];
            return (
              <li key={index}>
                <span>{title}: </span>
                {item}
              </li>
            );
          })}
        </ul>
        {/* Top Universities */}
        <h3 className={styles.h3}>{univercityTitle}</h3>
        <div className={styles.university}>
          {UKUniversity.map((item:any, index:number) => (
            <div key={index} className={styles.MainUniversity}>
              <Image src={item.image} height={70} width={70} alt="UCL Logo" />
              <p>{item.link}</p>
            </div>
          ))}
        </div>
        {/* Courses */}
        <h3 className={styles.h3}>{coursesTitle}</h3>
        <ul className={styles.Course}>
          {topCourses.map((item:string, index:number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyDestination;
