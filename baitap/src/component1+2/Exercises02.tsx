import React, { Component } from 'react';

interface State {
  id: number;
  name: string;
  dateOfBirth: string;
  address: string;
}

class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state
    this.state = {
      id: 1,
      name: 'Nguyễn Văn Sơn',
      dateOfBirth: '20/12/2023',
      address: 'Thanh Xuân, Hà Nội'
    };
  }

  render() {
    // Truy cập vào state để lấy thông tin cá nhân
    const { id, name, dateOfBirth, address } = this.state;

    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <p>id: {id}</p>
        <p>Tên: {name}</p>
        <p>Ngày sinh: {dateOfBirth}</p>
        <p>Địa chỉ: {address}</p>
      </div>
    );
  }
}

export default Exercise02;
