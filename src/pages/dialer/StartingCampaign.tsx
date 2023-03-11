import React, { useContext, useMemo } from "react";
import { Box, Link } from "@mui/material";
import { GlobalValue } from "../../context/Context";
import { KibanaBuilder } from "../../KibanaBuilder";


export const StartingCampaign = () => {
  const globalValue = useContext(GlobalValue);
  const { value } = globalValue;

  const url = useMemo(() => {
    const application = {
      EU: "eu-central-1:td-meza-po-dialer-web-po-dialer-web",
      US: "us-east-1:td-meza-po-dialer-web-po-dialer-web",
      CA: "ca-central-1:td-meza-po-dialer-web-po-dialer-web-*",
    };

    const applicationName = value.country ? application[value.country] : "";

    const kibana = new KibanaBuilder().setIndex(applicationName).setQuery(`${value.accountId} and "Starting new campaign (campaign=Campaign(id= ${value.campaignId},"`).build();
    return kibana.getURL()    
  }, [value.accountId, value.campaignId, value.country]);

  return (
    <Box>
      <Link href={url} variant="body2">
        {`DIALER Starting new campaign ${value.country}`}
      </Link>      
    </Box>
  );
};
