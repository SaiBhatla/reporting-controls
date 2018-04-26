import React from 'react';
import kendo from '@progress/kendo-ui';
import { Chart} from '@progress/kendo-charts-react-wrapper';
export class XPHLineChart extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.series.length > 0){
            return (
                <div>
                    <Chart series={this.props.series} />
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
