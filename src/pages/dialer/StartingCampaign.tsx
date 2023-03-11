import React, { useContext, useMemo } from "react";
import { Box, Link, Typography } from "@mui/material";
import { GlobalValue } from "../../context/Context";
import { KibanaBuilder } from "../../KibanaBuilder";
import { RunBook } from "../../RunBooks";

export type PropsStartingCampaign = {
  runBook: RunBook;
};

export const StartingCampaign: React.FC<PropsStartingCampaign> = ({
  runBook: { description, math },
}) => {
  const globalValue = useContext(GlobalValue);
  const { value } = globalValue;

  const expression = useMemo(() => {
    return math
      .replace("{accountId}", value.accountId)
      .replace("{campaingId}", value.accountId);
  }, [math, value.accountId]);

  const url = useMemo(() => {
    const application = {
      EU: "eu-central-1:td-meza-po-dialer-web-po-dialer-web",
      US: "us-east-1:td-meza-po-dialer-web-po-dialer-web",
      CA: "ca-central-1:td-meza-po-dialer-web-po-dialer-web-*",
    };

    const applicationName = value.country ? application[value.country] : "";

    const kibana = new KibanaBuilder()
      .setIndex(applicationName)
      .setQuery(expression)
      .build();
    return kibana.getURL();
  }, [expression, value.country]);

  return (
    <Box>
      <Typography paragraph>{description}</Typography>
      <Link href={url} variant="body2">
        Link
      </Link>
    </Box>
  );
};
