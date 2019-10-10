import React, { Component } from 'react'
import Linechart from 'react-apexcharts'
import ApiService from '../services/ApiService';

const seriesArr = [];
const readingArr = [];
const hearingArr = [];
const serviceArr = [];
const mmServiceArr = [];




export default class ChartTest extends Component {
    constructor(props){
        super(props)
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
                    name: "Chanting",
                    data: this.chantData()
                },
                {
                    name: "Reading",
                    data: this.readingData()
                },
                {
                    name: "Hearing",
                    data: this.hearingData()
                },
                {
                    name: "Service",
                    data: this.serviceData()
                },
                {
                    name: "Much More Service",
                    data: this.mmServiceData()
                }
            ],
        }
    }

    mmServiceData = () => {
        let x = new Date("2019-10-10").getTime();
        ApiService.retriveChartService('test5')
            .then( res => {
            res.data.forEach( el => {
                let values = [];
                let i = 0;

                if(typeof el.MSEV_POINT !== 'undefined'  ){
                    values.push(el.MSEV_POINT)
                }else{
                    el.HEARING_POINT = -20;
                    values.push(el.SEV_POINT)
                }
                
                mmServiceArr.push([x, values[i]]);
                x -= 86400000;
            })
        })

        return mmServiceArr;
    }

    serviceData = () => {
        let x = new Date("2019-10-10").getTime();
        ApiService.retriveChartService('test5')
            .then( res => {
            res.data.forEach( el => {
                let values = [];
                let i = 0;

                if(typeof el.SEV_POINT !== 'undefined'  ){
                    values.push(el.SEV_POINT)
                }else{
                    el.HEARING_POINT = -20;
                    values.push(el.SEV_POINT)
                }
                
                serviceArr.push([x, values[i]]);
                x -= 86400000;
            })
        })

        return serviceArr;
    }

    hearingData = () => {
        let x = new Date("2019-10-10").getTime();
        ApiService.retriveChartService('test5')
            .then( res => {
            res.data.forEach( el => {
                let values = [];
                let i = 0;

                if(typeof el.HEARING_POINT !== 'undefined'  ){
                    values.push(el.HEARING_POINT)
                }else{
                    el.HEARING_POINT = -20;
                    values.push(el.HEARING_POINT)
                }
                
                hearingArr.push([x, values[i]]);
                x -= 86400000;
            })
        })

        return hearingArr;
    }

    readingData = () =>{
        let x = new Date("2019-10-10").getTime();
        ApiService.retriveChartService('test5')
            .then( res => {
            res.data.forEach( el => {
                let values = [];
                let i = 0;

                if(typeof el.READING_POINT !== 'undefined'  ){
                    values.push(el.READING_POINT)
                }else{
                    el.READING_POINT = -20;
                    values.push(el.READING_POINT)
                }
                
                readingArr.push([x, values[i]]);
                x -= 86400000;
            })
        })
        // console.log("seriesArr data = "+ seriesArr[0])
        return readingArr;
    }


    chantData = () => {
        let x = new Date("2019-10-10").getTime();
        ApiService.retriveChartService('test5')
            .then( res => {
            res.data.forEach( el => {
                let values = [];
                let i = 0;

                if(typeof el.CHANT_POINT !== 'undefined'  ){
                    values.push(el.CHANT_POINT)
                }else{
                    el.CHANT_POINT = 0;
                    values.push(el.CHANT_POINT)
                }
                
                console.log("x = "+x)
                seriesArr.push([x, values[i]]);
                x -= 86400000;
            })
        })
        // console.log("seriesArr data = "+ seriesArr[0])
        return seriesArr;
    }


    render() {
        // console.log("this state series = "+this.state.series);
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
