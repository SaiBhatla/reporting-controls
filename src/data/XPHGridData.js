export function getColumnDefs(){
    var cols = [];
    
    cols.push({
        field: "Security.Value",
        title: "Security",
        hidden: false,
        format:""
    });
    cols.push({
        field: "PnL.Value",
        title: "PnL",
        hidden: false,
        format:"{0:c}"
    });
    return cols;
}

export function getPnlStyle(pnl) {
    if (pnl > 0) {
      return "color: green";
    } else if (pnl < 0) {
      return "color: red";
    } else {
      return "color: black";
    }
  }

export function getData(){
    let cols = getColumnDefs();
    let rows = [
        {
            Security:{Value:"GOOG", StyleCode:""},
            PnL:{Value:20, StyleCode:getPnlStyle(20)},
        },
        {
            Security:{Value:"FB", StyleCode:""},
            PnL:{Value:-40000, StyleCode:getPnlStyle(-40000)},
        },
    ];
    return {
        rows:rows,
        columns:cols
    };
}