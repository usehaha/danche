import React, { Component } from "react";
import { Card, Button, notification } from "antd";
import "./ui.less";
export default class Notification extends Component {
  openNotification = (type, placement) => {
    if (placement) {
      notification.config({
        placement
      });
    }
    notification[type]({
      message: "发工资了",
      description: "哈哈哈哈哈哈哈哈哈"
    });
  };
  render() {
    return (
      <div>
        <Card title="通知提醒框" className="card">
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("success");
            }}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("info");
            }}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("warning");
            }}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("error");
            }}
          >
            Error
          </Button>
        </Card>
        <Card title="通知提醒框" className="card">
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("success", "topLeft");
            }}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("info", "topRight");
            }}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("warning", "bottomLeft");
            }}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.openNotification("error", "bottomRight");
            }}
          >
            Error
          </Button>
        </Card>
      </div>
    );
  }
}
