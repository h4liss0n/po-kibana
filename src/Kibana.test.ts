import { KibanaBuilder } from "./KibanaBuilder";

test("happy path", () => {
    const kibana = new KibanaBuilder().setIndex("ca-central-1:td-meza-central").build();
    const url = kibana.getURL()
    expect(url).toBe(`https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:'ca-central-1:td-meza-central',interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))`);
});


test("dialer find by campaign id", () => {
    const kibana = new KibanaBuilder().setIndex("eu-central-1:td-meza-po-dialer-web-po-dialer-web").setQuery(`61c5d7d196ebb0e483f81659 and "Starting new campaign (campaign=Campaign(id= 13698,"`).build();
    const url = kibana.getURL()
    //console.log(url)
    expect(url).toBe(`https://kibana-logging.svc.talkdeskapp.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:'eu-central-1:td-meza-po-dialer-web-po-dialer-web',interval:auto,query:(language:kuery,query:'61c5d7d196ebb0e483f81659%20and%20%22Starting%20new%20campaign%20(campaign=Campaign(id=%2013698,%22'),sort:!(!('@timestamp',desc)))`);    
});

