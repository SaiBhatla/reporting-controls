import React from 'react';
import kendo from '@progress/kendo-ui';
import { Chart} from '@progress/kendo-charts-react-wrapper';
export class XPHPieChart extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.series.length > 0){
            return (
                <div>
                    <Chart series={this.props.series} seriesDefaults={this.props.seriesDefaults} />
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
        
    }
}
