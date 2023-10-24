import React, { useEffect } from "react";
import MenuButton from "@/components/MenuButton/MenuButton";
import styles from "./the-company.module.scss";
import { theCompanyData } from "../../utils/the-company-data";
import Image from "next/image";

const TheCompany = () => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("fadeIn");

    setTimeout(() => {
      body.classList.remove("fadeOut");
      body.classList.remove("fadeIn");
    }, 500);
  });

  return (
    <>
      <MenuButton />
      <div className={styles.contentContainer}>
        <div className={styles.companyDescription}>
          <h1>Tongue Dance Project</h1>
          <p>
            Tongue Dance Project was formed in 2014 by Stephanie Gilliland and
            Lauren Smith as a vehicle for choreographic exploration and artistic
            development in contemporary dance. Known for innovation in the realm
            of extreme physicality and athleticism, choreographer and multimedia
            artist, Gilliland is the former artistic director of the critically
            acclaimed Tongue/ contemporary dance based in Los Angeles from 1997
            to 2006. The focus of the company is the evolution, creation and
            production of the artistic work of Gilliland in collaboration with
            the dancers. The company also has a strong commitment to teaching
            and community outreach and has been offering free community classes
            since its inception. Tongue Dance Project is currently working on
            building a base in both Southern California and Portland, Or.
          </p>
          <a href="/the-company#bios">
            <i id="bios" className="fa fa-chevron-down" />
          </a>
        </div>
        {theCompanyData.map((member, index) => {
          return (
            <div key={index} className={styles.memberDetails}>
              <Image
                width={240}
                height={0}
                style={{
                  width: "240px",
                  height: "auto",
                  filter: "grayscale(1)",
                }}
                src={member.image}
                alt={member.name}
              />
              <div className={styles.memberCopy}>
                <h2>
                  {member.name} // <span className="nowrap">{member.role}</span>
                </h2>
                {member.bio}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TheCompany;
