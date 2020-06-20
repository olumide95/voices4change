import React, { Component } from "react";
import { ApiService } from "../Services/Api.service";
export default class ExportReport extends Component {
  componentDidMount() {
    ApiService.export()
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "submissions.xlsx");
        document.body.appendChild(link);
        link.click();
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div></div>;
  }
}
