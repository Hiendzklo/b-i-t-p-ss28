import React, { Component } from 'react';

interface State {
  fullName: string;
}

class Exercises01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      fullName: 'Nguyễn Minh Sơn'
    };
  }

  render() {
    // Truy cập vào state và lấy giá trị tên
    const { fullName } = this.state;

    return (
      <div>
        <h2>Họ và Tên: {fullName}</h2>
      </div>
    );
  }
}

export default Exercises01;
