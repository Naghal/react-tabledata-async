import React, { Component } from 'react';
import axios from 'axios';
import { Tabledata } from 'react-tabledata';

export default class Tableasync extends Component {
    constructor(props) {
        super(props);
        this.method = (this.props.method) ? this.props.method : 'get';
        this.rowsToDisplay = 10;
        this.currentPage = 1;
        this.state = {
            datas: []
        };
    }

    getSkip() {
        return ((this.currentPage - 1) * this.rowsToDisplay);
    }

    getTake() {
        return this.rowsToDisplay;
    }

    getRequestHeaders() {
        let headers = {};
        if (this.props.requestHeaders) {
            headers = this.props.requestHeaders(headers);
        }
        return headers;
    }

    getRequestData() {
        let data = {
            skip: this.getSkip(),
            take: this.getTake(),
        };
        if (this.props.requestData) {
            data = this.props.requestData(data);
        }
        return data;
    }

    bindDatas() {
        this.fetchDatas().then((datas) => {
            this.setState({ datas });
        });
    }

    fetchDatas() {
        return new Promise((resolve, reject) => {
            axios.request({
                url: this.props.url,
                method: this.method,
                data: this.getRequestData(),
                headers: this.getRequestHeaders()
            }).then(response => resolve(response.data, response))
            .catch((response) => reject(response));
        });
    }

    componentDidMount() {
        this.bindDatas();
    }

    render() {
        return (
            <div>
                <Tabledata
                    datas={this.state.datas}
                    tr={this.props.tr}
                    th={this.props.th}
                    td={this.props.td}
                    thead={this.props.thead}
                    table={this.props.table}
                    tbody={this.props.tbody}>
                    {this.props.children}
                </Tabledata>
            </div>
        );
    }
}
