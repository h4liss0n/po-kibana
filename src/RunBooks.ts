export interface KibanaIndex {
  EU: string;
  US: string;
  CA: string;
}

export const KibanaIndexValue = {
  "po-dialer": {
    EU: "eu-central-1:td-meza-po-dialer-web-po-dialer-web",
    US: "us-east-1:td-meza-po-dialer-web-po-dialer-web",
    CA: "ca-central-1:td-meza-po-dialer-web-po-dialer-web",
  },
  "list-manager-api": {
    EU: "eu-central-1:td-meza-list-manager-api-list-manager-api",
    US: "us-east-1:td-meza-list-manager-api-list-manager-api",
    CA: "ca-central-1:td-meza-list-manager-api-list-manager-api",
  },
};

export type RunBook = {
  description: string;
  math: string;
  application: string;
  kibanaValue: KibanaIndex;
};

export const RunBooks: RunBook[] = [
  {
    application: "po-dialer",
    kibanaValue: KibanaIndexValue["po-dialer"],
    description: "Find start campaign by campaign id",
    math: `{accountId} and "Starting new campaign (campaign=Campaign(id= {campaingId},"`,    
  },
  {
    application: "list-manager-api",
    kibanaValue: KibanaIndexValue["list-manager-api"],
    description: "Find start campaign by campaign id",
    math: `{accountId} and "Started Campaign: Campaign(id={campaingId},"`,    
  },
];
