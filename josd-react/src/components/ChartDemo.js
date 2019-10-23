// Step 1 - Including react
import React from 'react';

// Step 2 - Including the react-fusioncharts component
import FusionCharts from 'fusioncharts';

// Step 3 - Including the fusiontime file
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import ReactFC from '../lib/ReactFC';

// Step 4 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

// Step 5 - Creating the JSON object to store the chart configurations
const jsonify = res => res.json();
const dataFetch = fetch(
'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/data.json'
).then(jsonify);
const schemaFetch = fetch( 'https://raw.githubusercontent.com/fusioncharts/dev_centre_docs/master/assets/datasources/fusiontime/online-sales-single-series-area-data-plot/schema.json'
).then(jsonify);

class SimpleTimeSeries extends React.Component {
    constructor(props) {
        super(props);
        // In this method we are fetching our data and schema from remote URLs and creating our DataTable
        this.onFetchData = this.onFetchData.bind(this);
        this.state = {
            timeseriesDs: {
                type: 'timeseries',
                renderAt: 'container',
                width: '600',
                height: '400',
                dataSource: {
                    caption: { text: 'Online Sales of a SuperStore in the US' },
                    data: null,
                    yAxis: [{
                        plot: [{
                            value: 'Sales ($)'
                        }]
                    }]
                }
            }
        };
    }
    // We are creating our DataStore immediately after a component is mounted
    componentDidMount() {
        this.onFetchData();
    }
    onFetchData() {
        Promise.all([dataFetch, schemaFetch]).then(res => {
            const data = res[0];
            const schema = res[1];
            // Here we are creating our DataTable
            const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
            const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
            timeseriesDs.dataSource.data = fusionTable;
            this.setState({
                timeseriesDs
            });
        });
    }
    render() {
        return (
            <div></div>

        // {this.state.timeseriesDs.dataSource.data ? (        ) : (
        //   'loading'
        // )}

        // );
    }
}