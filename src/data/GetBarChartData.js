export function getBarChartSeries() {
    let series = [];
    let series_1_obj = {};
    let series_2_obj = {};
    series_1_obj = {
        name: "MktValueGross",
        type: "column",
        data: []
    };
    series_2_obj = {
        name: "MktValueNet",
        type: "column",
        data: []
    };
    for (let i = 1; i < 5; i++) {
        series_1_obj.data.push(i*10);
        series_2_obj.data.push(i*5);
    }
    series.push(series_1_obj);
    series.push(series_2_obj);
    return series;
}

export function getBarChartCategories() {
    let categories = [];
    categories.push("USD");
    categories.push("EUR");
    categories.push("GBP");
    categories.push("INR");
    return categories;
}