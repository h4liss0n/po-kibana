export class Kibana {
  private filter: string;
  private refreshInterval: string;
  private time: string;

  private columns: string;
  private filters: string;
  private index: string;
  private interval: string;
  private query: string;
  private sort: string;

  constructor(
    filter: string,
    refreshInterval: string,
    time: string,
    columns: string,
    filters: string,
    index: string,
    interval: string,
    query: string,
    sort: string
  ) {
    this.filter = filter;
    this.refreshInterval = refreshInterval;
    this.time = time;
    this.columns = columns;
    this.filters = filters;
    this.index = index;
    this.interval = interval;
    this.query = query;
    this.sort = sort;
  }

  public getURL(): string {
    return encodeURI(
      `https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(${this.filter}${this.refreshInterval}${this.time})&_a=(${this.columns}${this.filters}${this.index}${this.interval}${this.query}${this.sort})`
    );
  }
}

export class KibanaBuilder {
  private filter: string;
  private refreshInterval: string;
  private time: string;
  private columns: string;
  private filters: string;
  private index: string;
  private interval: string;
  private query: string;
  private sort: string;

  constructor() {
    this.filter = "filters:!(),";
    this.refreshInterval = "refreshInterval:(pause:!t,value:0),";
    this.time = "time:(from:now-15m,to:now)";
    this.columns = "columns:!(),";
    this.filters = "filters:!(),";
    this.index = "index:'ca-central-1:td-meza-central',";
    this.interval = "interval:auto,";
    this.query = "query:(language:kuery,query:''),";
    this.sort = "sort:!(!('@timestamp',desc))";
  }

  public setFilter(value: string): KibanaBuilder {
    this.filter = this.filter.replace("?value?", value);
    return this;
  }

  public setIndex(value: string): KibanaBuilder {
    const defaultValue = "index:'?value?',";
    this.index = defaultValue.replace("?value?", value);
    return this;
  }

  public setQuery(value: string): KibanaBuilder {
    const defaultValue = "query:(language:kuery,query:'?value?'),";
    this.query = defaultValue.replace("?value?", value);
    return this;
  }

  public build(): Kibana {
    return new Kibana(
      this.filter,
      this.refreshInterval,
      this.time,
      this.columns,
      this.filters,
      this.index,
      this.interval,
      this.query,
      this.sort
    );
  }
}
// https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:'ca-central-1:td-meza-central',interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))
// https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:'ca-central-1:td-meza-central',interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))
