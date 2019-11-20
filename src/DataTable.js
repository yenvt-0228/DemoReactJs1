import React from 'react';
import TableDataRow from './TableDataRow'

class DataTable extends React.Component {

  deleteClick = (idUser) => {
    this.props.deleteUser(idUser);
  }

  mapDataUser = () => this.props.dataUserProps.map((value,key) => (
    <TableDataRow
      changeEditUserStatus={() => this.props.changeEditUserStatus()}
      editFunClick={(user) => this.props.editFun(value)}
      key={key}
      Stt={key}
      UserName={value.name}
      Tel={value.tel}
      Permission={value.permission}
      id={value.id}
      deleteClick = {this.deleteClick}
    />
  ))
  
  render(){
    return(
      <div className="col">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên</th>
              <th scope="col">Sđt</th>
              <th scope="col">Quyền</th>
              <th scope="col">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mapDataUser()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DataTable
