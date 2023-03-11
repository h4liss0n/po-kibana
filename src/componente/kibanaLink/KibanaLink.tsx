import React, { useContext, useMemo } from "react";
import { Grid, Link, Typography } from "@mui/material";
import { GlobalValue } from "../../context/Context";
import { KibanaBuilder } from "../../KibanaBuilder";
import { RunBook } from "../../RunBooks";

export type PropsStartingCampaign = {
  runBook: RunBook;
};

export const KibanaLink: React.FC<PropsStartingCampaign> = ({
  runBook: { description, math, application, kibanaValue },
}) => {
  const globalValue = useContext(GlobalValue);
  const { value } = globalValue;

  const expression = useMemo(() => {
    return math
      .replace("{accountId}", value.accountId)
      .replace("{campaingId}", value.campaignId);
  }, [math, value.accountId, value.campaignId]);

  const url = useMemo(() => {
    const applicationName = value.country ? kibanaValue[value.country] : "";

    const kibana = new KibanaBuilder()
      .setIndex(applicationName)
      .setQuery(expression)
      .build();
    return kibana.getURL();
  }, [expression, kibanaValue, value.country]);

  return (
    <Grid container spacing={1}>
      <Grid xs={2}>
        <Typography paragraph>{application}</Typography>
      </Grid>
      <Grid xs={8}>
        <Typography paragraph>{description}</Typography>
      </Grid>
      <Grid xs={1}>
        <Link href={url} variant="body2">
          Link
        </Link>
      </Grid>
    </Grid>
  );
};
