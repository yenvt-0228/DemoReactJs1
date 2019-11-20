import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      tel: '',
      permission: '',
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  checkStatus = () => {
    if(this.props.showForm) {
      return (
        <div className="card border-info">
          <div className="card-body">
            <p>Thêm mới user</p>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="Tên user" onChange={(event) => this.isChange(event)} />
              </div>
              <div className="form-group">
                <input type="text" name="tel" className="form-control" placeholder="Điện thoại" onChange={(event) => this.isChange(event)} />
              </div>
              <div className="form-group">
                <select className="form-control" name="permission" onChange={(event) => this.isChange(event)} >
                  <option>Chọn quyền mặc định</option>
                  <option>Admin</option>
                  <option>User</option>
                  <option>Moderator</option>
                </select>
              </div>
              <button type="reset" className="btn btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission) }>Thêm mới</button>
            </form> 
          </div>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        { this.checkStatus() }
      </div>
    )
  }
}

export default User
