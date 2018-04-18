export function getColumnDefs(){
    var cols = [];
    
    cols.push({
        field: "Security",
        title: "Security",
        hidden: false
    });
    cols.push({
        field: "PnL",
        title: "PnL",
        hidden: false
    });
    return cols;
}

export function getData(){
    let cols = getColumnDefs();
    let rows = [
        {
            Security:"GOOG",
            PnL:20
        },
        {
            Security:"FB",
            PnL:-40
        },
        {
            Security:"AAPL",
            PnL:0
        }
    ];
    return {
        rows:rows,
        columns:cols
    };
}