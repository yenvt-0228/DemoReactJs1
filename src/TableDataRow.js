import React from 'react';

class DataTableRow extends React.Component {
  permissionShow = () => {
    
  }

  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  }

  deleteClick = (idUser) => {
    this.props.deleteClick(idUser);
  }

  render(){
    return(
      <tr>
        <th scope="row">{this.props.Stt+1}</th>
        <td>{this.props.UserName}</td>
        <td>{this.props.Tel}</td>
        <td>{this.props.Permission}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-warning" onClick={this.editClick}>Sửa</button>
            <button type="button" className="btn btn-danger" onClick={(idUser) => this.deleteClick(this.props.id)}>Xoá</button>
          </div>
        </td>
      </tr>
    )
  }
}

export default DataTableRow
