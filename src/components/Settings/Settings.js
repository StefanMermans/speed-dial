import { gql } from "graphql-request";
import React, { useEffect, useState } from "react";
import { client } from "../../gqlClient";

import useSiteList from "../../hooks/useSiteList";
import { getAuthHeader } from "../../utils/utils";
import Button from "../Form/Button";

import styles from "./settings.module.scss";

const useSitesJson = () => {
  const [sitesJson, setSitesJson] = useState("[]");
  const sites = useSiteList();

  useEffect(() => {
    setSitesJson(JSON.stringify(sites));
  }, [sites])

  return [sitesJson, setSitesJson];
}

export const Settings = () => {
  const [sitesJson, setSitesJson] = useSitesJson();

  const handleSave = () => {
    client.request(
      gql`
        mutation UpdateSites($sites: String!) {
          updateSites(sites: $sites) {
            name,
          }
        }
      `,
      {sites: sitesJson},
      getAuthHeader(),
    )
  };

  const handleChange = (event) => {
    setSitesJson(event.target.value);
  }

  return (
    <div className={styles.settingsPage}>
      <div className={styles.settingsWrapper}>
        <div className={styles.settingsContent}>
          <textarea
            type="textarea"
            value={sitesJson}
            onChange={handleChange}
          />
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  )
}