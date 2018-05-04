export function getPieChartSeries() {
    
     let series = [{
        type: "pie",
        data: [{
            category: "Asia",
            value: 53.8,
            color: "#9de219"
        },{
            category: "Europe",
            value: 16.1,
            color: "#90cc38"
        },{
            category: "Latin America",
            value: 11.3,
            color: "#068c35"
        },{
            category: "Africa",
            value: 9.6,
            color: "#006634"
        },{
            category: "Middle East",
            value: 5.2,
            color: "#004d38"
        }]
    }];
    return series; 
}

export function getPieChartSeriesDefaults() {
    let seriesDefaults = {
        labels: {
            visible: true,
            background: "transparent",
            template: "#= category #: \n #= value#%"
        }
    }
    return seriesDefaults;
}