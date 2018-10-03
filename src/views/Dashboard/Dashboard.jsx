import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from "axios";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      registerCount: 0,
      value: 0,
      top10Exportadores: [
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 }
      ],
      top10Labs: [
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 }
      ],
      top10Descartaveis: [
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 },
        { Nome: "", Count: 0 }
      ],
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    var self = this;
    axios
      .get("http://localhost:50336/api/Filters/getRegistroCount")
      .then(function(response) {
        self.setState({ registerCount: JSON.parse(response.data) });
      })
      .catch(function(error) {});

    axios
      .get("http://localhost:50336/api/Filters/getTopFabricantes")
      .then(function(response) {
        self.setState({
          top10Exportadores: JSON.parse(response.data)
        });
      })
      .catch(function(error) {});

    axios
      .get("http://localhost:50336/api/Filters/getLabCount")
      .then(function(response) {
        self.setState({
          top10Labs: JSON.parse(response.data)
        });
      })
      .catch(function(error) {});

      axios
      .get("http://localhost:50336/api/Filters/getDescartaveis")
      .then(function(response) {
        self.setState({
          top10Descartaveis: JSON.parse(response.data)
        });
      })
      .catch(function(error) {});
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          {/* <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()} />
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>
                  Contagem de registros ANVISA
                </p>
                <h3 className={classes.cardTitle}>
                  {this.state.registerCount}
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  {/* Last 24 Hours */}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
          {/* <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
        </GridContainer>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Sales</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem> */}
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>
                  Maior número de descartáveis
                </h4>
                <p className={classes.cardCategoryWhite}>
                  {/* New employees on 15th September, 2016 */}
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="success"
                  tableHead={["Nome", "Qtd. Descartáveis"]}
                  tableData={[
                    [
                      this.state.top10Descartaveis[0].Nome,
                      this.state.top10Descartaveis[0].Count
                    ],
                    [
                      this.state.top10Descartaveis[1].Nome,
                      this.state.top10Descartaveis[1].Count
                    ],
                    [
                      this.state.top10Descartaveis[2].Nome,
                      this.state.top10Descartaveis[2].Count
                    ],
                    [
                      this.state.top10Descartaveis[3].Nome,
                      this.state.top10Descartaveis[3].Count
                    ],
                    [
                      this.state.top10Descartaveis[4].Nome,
                      this.state.top10Descartaveis[4].Count
                    ],
                    [
                      this.state.top10Descartaveis[5].Nome,
                      this.state.top10Descartaveis[5].Count
                    ],
                    [
                      this.state.top10Descartaveis[6].Nome,
                      this.state.top10Descartaveis[6].Count
                    ],
                    [
                      this.state.top10Descartaveis[7].Nome,
                      this.state.top10Descartaveis[7].Count
                    ],
                    [
                      this.state.top10Descartaveis[8].Nome,
                      this.state.top10Descartaveis[8].Count
                    ],
                    [
                      this.state.top10Descartaveis[9].Nome,
                      this.state.top10Descartaveis[9].Count
                    ]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="danger">
                <h4 className={classes.cardTitleWhite}>
                  Laboratórios com mais medicamentos registrados
                </h4>
                <p className={classes.cardCategoryWhite}>
                  {/* New employees on 15th September, 2016 */}
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="danger"
                  tableHead={["Nome", "Qtd. Medicamentos"]}
                  tableData={[
                    [
                      this.state.top10Labs[0].Nome,
                      this.state.top10Labs[0].Count
                    ],
                    [
                      this.state.top10Labs[1].Nome,
                      this.state.top10Labs[1].Count
                    ],
                    [
                      this.state.top10Labs[2].Nome,
                      this.state.top10Labs[2].Count
                    ],
                    [
                      this.state.top10Labs[3].Nome,
                      this.state.top10Labs[3].Count
                    ],
                    [
                      this.state.top10Labs[4].Nome,
                      this.state.top10Labs[4].Count
                    ],
                    [
                      this.state.top10Labs[5].Nome,
                      this.state.top10Labs[5].Count
                    ],
                    [
                      this.state.top10Labs[6].Nome,
                      this.state.top10Labs[6].Count
                    ],
                    [
                      this.state.top10Labs[7].Nome,
                      this.state.top10Labs[7].Count
                    ],
                    [
                      this.state.top10Labs[8].Nome,
                      this.state.top10Labs[8].Count
                    ],
                    [
                      this.state.top10Labs[9].Nome,
                      this.state.top10Labs[9].Count
                    ]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Países fabricantes</h4>
                <p className={classes.cardCategoryWhite}>
                  {/* New employees on 15th September, 2016 */}
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["Nome", "Qtd. Exportada"]}
                  tableData={[
                    [
                      this.state.top10Exportadores[0].Nome,
                      this.state.top10Exportadores[0].Count
                    ],
                    [
                      this.state.top10Exportadores[1].Nome,
                      this.state.top10Exportadores[1].Count
                    ],
                    [
                      this.state.top10Exportadores[2].Nome,
                      this.state.top10Exportadores[2].Count
                    ],
                    [
                      this.state.top10Exportadores[3].Nome,
                      this.state.top10Exportadores[3].Count
                    ],
                    [
                      this.state.top10Exportadores[4].Nome,
                      this.state.top10Exportadores[4].Count
                    ],
                    [
                      this.state.top10Exportadores[5].Nome,
                      this.state.top10Exportadores[5].Count
                    ],
                    [
                      this.state.top10Exportadores[6].Nome,
                      this.state.top10Exportadores[6].Count
                    ],
                    [
                      this.state.top10Exportadores[7].Nome,
                      this.state.top10Exportadores[7].Count
                    ],
                    [
                      this.state.top10Exportadores[8].Nome,
                      this.state.top10Exportadores[8].Count
                    ],
                    [
                      this.state.top10Exportadores[9].Nome,
                      this.state.top10Exportadores[9].Count
                    ]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
