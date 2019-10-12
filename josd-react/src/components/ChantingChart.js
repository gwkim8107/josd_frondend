import React, { Component } from 'react'
import Linechart from 'react-apexcharts'
import ApiService from '../services/ApiService';

export default class ChantingChart extends Component {
    constructor(props){
        super(props);
        this.getChantChart.bind(this);
        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: true,
                        type: 'x',  
                        autoScaleYaxis: false,  
                        zoomedArea: {
                            fill: {
                                color: '#90CAF9',
                                opacity: 0.4
                            },
                            stroke: {
                                color: '#0D47A1',
                                opacity: 0.4,
                                width: 1
                            }
                        }
                    }
                },     
                xaxis: {
                    type: "datetime",
                }
            },
            series: [
                {
                    name: "Chanting Point",
                    data: this.getChantChart()
                }
            ],
            chartData: []
        };
        // this.generateDayWiseTimeSeries = this.generateDayWiseTimeSeries.bind(this);
        console.log("init series ="+ this.state);
    }

    getChantChart = () =>{
        
        let user_id = window.localStorage.getItem("local_user_id");
        let values = [];
        var seriesArr = [];
        let x = new Date(window.localStorage.getItem("local_rec_dt")).getTime();
        let i = 0;
        ApiService.retriveChartService('test5')
            .then( res =>{
                res.data.forEach(el => {
                    if(typeof el.CHANT_POINT !== 'undefined'  ){
                        values.push(el.CHANT_POINT)
                    }else{
                        el.CHANT_POINT = 0;
                        values.push(el.CHANT_POINT)
                    }
                    console.log("el values= "+ el.CHANT_POINT)
                    console.log("values = "+values[3]);

                    // this.setState({data: values })   
                    // console.log("size = "+el.CHANT_POINT.length)
                    // console.log("values  = "+values[0])
                    while (i < 4) {
                        seriesArr.push([x, values[i]]);
                        x -= 86400000;
                        i++;
                    }
                    // const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
                    // timeseriesDs.dataSource.data = fusionTable;
                    // const series = Object.assign({name:'testSeries'}, this.state.series);
                    // series.data = seriesArr;
                    // console.log("this state "+ this.state.series.name)
                    // const data = series;
                    // this.setState({ series });
                });
                // console.log("data = "+ this.state.chartData)
            }).catch(console.log);
            
    }

    // generateDayWiseTimeSeries = (s, count) =>{
    //     let user_id = window.localStorage.getItem("local_user_id");
    //     let values = [];
    //     var series = [];
    //     let x = new Date(window.localStorage.getItem("local_rec_dt")).getTime();
    //     let i = 0;
    //     ApiService.retriveChartService('test5')
    //         .then( res =>{
                
    //             res.data.forEach(el => {
    //                 if(typeof el.CHANT_POINT !== 'undefined'){
                        
    //                     values.push(el.CHANT_POINT)
    //                 }else{
    //                     el.CHANT_POINT = 0;
    //                     values.push(el.CHANT_POINT)
    //                 }
    //                 console.log("el values= "+ el.CHANT_POINT)

    //                 // this.setState({data: values })   
    //                 // console.log("size = "+el.CHANT_POINT.length)
    //                 console.log("values  = "+values[0])
    //                 while (i < count) {
    //                     series.push([x, values[s][i]]);
    //                     x -= 86400000;
    //                     i++;
    //                 }
    //                 this.setState({chartData: series});
    //             });
    //         });
    //         // console.log("data = "+ this.state.data)
    //         // console.log("series = "+series)

    //     // console.log("values = "+values)
    //     // var values = [
    //     //     this.state, 
    //     //     [
    //     //         2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2]
    //     //     ];
        
    //     // var i = 0;
    //     // var series = [];
    //     // var x = new Date(window.localStorage.getItem("local_rec_dt")).getTime();
    //     // console.log("x = "+x)
    //     // while (i < count) {
    //     //     series.push([x, values[s][i]]);
    //     //     x -= 86400000;
    //     //     i++;
    //     // }
    //     // console.log("dates= "+ series)
    //     // console.log("dates = "+Object.values(series) )
    //     // return series;
    // }
    
    componentDidMount(){
       this.getChantChart() 
            
    }
    
    render() {
        console.log("init series ="+ this.state);


        return (
            <div className="container">
                <Linechart
                options={this.state.options}
                series={this.state.series}
                type="line"
                width="100%"
                />
            </div>
        )
    }
}
