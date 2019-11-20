import React from 'react';
import './App.css';
import User from './User';
import Search from './Search';
import DataTable from './DataTable';
import DataUser from './Data.json';
import EditUser from './EditUser';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {},
      userObj: {}
    }
  }

  componentWillMount () {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', []);
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      })
    }
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }

  getNewUserData = (name, tel, permission) => {
    var item ={};
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items= this.state.data;
    items.push(item)
    this.setState({
      data: items
    })
  }

  changeStatus = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
  }

  getUserEditInfo = (info) => {
    var usernew = [...this.state.data]
    usernew.map((value, key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    this.setState({
      userObj: info,
      data: usernew
    })
  }

  deleteUser = (idUser) => {
    let temp = [...this.state.data]
    temp = temp.filter(item => item.id !== idUser)
    this.setState({
      data: temp,
    })
  }

  render() {
    localStorage.setItem('userData', JSON.stringify(DataUser));
    const ketqua = this.state.data.filter(item => item.name.indexOf(this.state.searchText) !== -1)
    return (
      <div className="App">
        <header>
          <h1 className="mt-5">Quản lý dữ liệu bằng ReactJs</h1>
        </header>
        <div className="container">
          <div className="row">
            <Search
              checkConnectprops={this.getTextSearch}
              connectSearch={this.changeStatus}
              showForm={this.state.showForm}
            />
          </div>
          <div className="row">
            <EditUser
              getUserEditInfo= {this.getUserEditInfo}
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus={this.changeEditUserStatus}
              userEditObject={this.state.userEditObject}
            />
          </div>
          <div className="row">
            <DataTable
              editFun={this.editUser}
              dataUserProps={ketqua}
              changeEditUserStatus={this.changeEditUserStatus}
              deleteUser={this.deleteUser}
            />
            <User
              add={this.getNewUserData}
              showForm={this.state.showForm}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
