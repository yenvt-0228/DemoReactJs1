import React from 'react';

class EditUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission,
      userObj: {}
    }
  }

  isChange = (event) => {
    const newState = {...this.props.userEditObject}
    const name = event.target.name;
    newState[name] = event.target.value;
    // const name = event.target.name;
    // const value = event.target.value;
    this.setState({...newState})
  }

  saveButton = () => {
    const { id, name, tel, permission } = this.state
    const info = { id, name, tel, permission }
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }

  isShowEditForm = () => {
    if(this.props.editUserStatus) {
      return(
        <div className="card border-info">
          <div className="card-body">
            <p className="text-center">Sửa user</p>
            <form>
              <div className="form-group">
                <input type="text" onChange={this.isChange} value={this.state.name} className="form-control" name="name" placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input type="text" name="tel" onChange={this.isChange} value={this.state.tel} className="form-control" placeholder="Điện thoại" />
              </div>
              <div className="form-group">
                <select className="form-control" onChange={this.isChange} name="permission" value={this.state.permission}>
                  <option>Chọn quyền mặc định</option>
                  <option>Admin</option>
                  <option>User</option>
                  <option>Moderator</option>
                </select>
              </div>
              <button type="reset" className="btn btn-warning" onClick={this.saveButton}>Lưu</button>
            </form> 
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="col-md-4 mb-2">
        {this.isShowEditForm()}
      </div>
    )
  }
}
export default EditUser
