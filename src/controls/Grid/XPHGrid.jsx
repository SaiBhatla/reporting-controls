import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

export class XPHGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            columns: [],
            columnDefs: [],
        };
    }

    componentDidMount(){
        this.setState(prevState => ({
            columnDefs: this.props.ColumnDefs,
            rows: this.props.Rows,
            columns: this.getColumns(this.props.ColumnDefs),
        }));
    }


    getColumns = (columnDefs) => {
        let columns = [];
        for (let i = 0; i < columnDefs.length; i++) {
            let column = columnDefs[i];
            if(column.hidden === true) continue;
            columns.push(<Column key={column.field} field={column.field} title={column.title} />);
        }
        return columns;
    }

    render() {
        const {columns,rows} = this.state;
        return (
            <div>
                <Grid data={rows}>
                    {columns}
                </Grid>
            </div>
        );
    }
}