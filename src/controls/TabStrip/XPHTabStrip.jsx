import React from 'react';
import kendo from '@progress/kendo-ui';
import { TabStrip, Tab } from '@progress/kendo-layout-react-wrapper';

export class XPHTabStrip extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        
        return (
            <div>
              <TabStrip value="Tab1"
                  dataTextField="Name" dataContentField="Content"
                  dataSource = {this.props.data}
                  >
              </TabStrip>   
            </div>
          );
    }
}