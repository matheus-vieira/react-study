import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ModalDetails from './ModalDetails';

const $ = require('jquery');
$.DataTable = require('datatables.net-bs4');
require('datatables.net-responsive-bs4');

const columns = [
    {
        title: '',
        data: 'avatar',
        render: (d) => `<img src="${d}" alt="User avatar" title="User Avatar" width="30" height="30" />`
    },
    {
        title: 'Login',
        data: 'login'
    }
    // },
    // {
    //     title: 'Actions',
    //     data: 'login',
    //     render: function ( data, type, row, settings ) {
    //         var x = new ModalDetails(row);
    //         return ReactDOM.render(x, document.getElementById('root'));
    //     }
    // }
];

function reloadTableData(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    table.clear();
    table.rows.add(names);
    table.draw();
}

function updateTable(names) {
    const table = $('.data-table-wrapper').find('table').DataTable();
    let dataChanged = false;
    table.rows().every(function () {
        const oldNameData = this.data();
        const newNameData = names.find((nameData) => {
            return nameData.name === oldNameData.name;
        });
        if (oldNameData.nickname !== newNameData.nickname) {
            dataChanged = true;
            this.data(newNameData);
        }
       return true;
    });

    if (dataChanged) {
        table.draw();
    }
}

class Table extends Component {
    componentDidMount() {
        $(this.refs.main).DataTable({
            dom: '<"data-table-wrapper"t>',
            data: this.props.names,
            columns,
            ordering: false,
            ajax: {
                dataSrc: "",
                url: 'http://localhost:8000/api/users'
            },
        });
    }

    componentWillUnmount(){
       $('.data-table-wrapper').find('table').DataTable().destroy(true);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.names.length !== this.props.names.length) {
            reloadTableData(nextProps.names);
        } else {
            updateTable(nextProps.names);
        }
        return false;
    }
        

    render() {
        return (
            <div>
                <table ref="main" className="table table-dark table-bordered table-striped table-hover table-sm" />
            </div>);
    }
}

export default Table;