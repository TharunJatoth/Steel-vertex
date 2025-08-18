"use client";

import React from "react";
import Link from "next/link";

const PageTitle = ({ pageTitle, pagesub }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{pageTitle}</h2>
              <ol className="wpo-breadcumb-wrap">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    Home
                  </Link>
                </li>
                <li>{pageTitle}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {pagesub && (
        <div className="page-subtitle">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="subtitle-text">{pagesub}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PageTitle;
