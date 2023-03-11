import React, { useContext, useMemo } from "react";
import { Box, Link } from "@mui/material";
import { GlobalValue } from "../../context/Context";

export const StartingCampaign = () => {
  const globalValue = useContext(GlobalValue);
  const { value } = globalValue;

  const url = useMemo(() => {
    const application = {
      EU: "eu-central-1:td-meza-po-dialer-web-po-dialer-web",
      US: "us-east-1:td-meza-po-dialer-web-po-dialer-web",
      CA: "ca-central-1:td-meza-po-dialer-web-po-dialer-web",
    };

    const applicationName = value.country ? application[value.country] : "";

    return encodeURI(
      `https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(json.message,json.campaign_id),filters:!(),index:'${applicationName}',interval:auto,query:(language:kuery,query:'${value.accountId} and "Starting new campaign (campaign=Campaign(id= 13698,"'),sort:!(!('@timestamp',desc)))`
    );
  }, [value.accountId, value.country]);

  return (
    <Box>
      <Link href={url} variant="body2">
        {`DIALER Starting new campaign ${value.country}`}
      </Link>      
    </Box>
  );
};
