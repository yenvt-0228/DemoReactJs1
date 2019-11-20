import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: ''
    }
  }
  showBtn = () => {
    if(this.props.showForm) {
      return <div className="btn btn-outline-secondary mb-2 btn-block" onClick={this.props.connectSearch}>Đóng lại</div>
    } else {
      return <div className="btn btn-outline-info mb-2 btn-block" onClick={this.props.connectSearch}>Thêm mới</div>
    }
  }

  isChange = async (event) => {
    await this.setState({
      tempValue: event.target.value
    })
    this.props.checkConnectprops(this.state.tempValue);
  }
  render(){
    return(
      <div className="col-md-4">
        <div className="input-group mb-3 mt-5">
          <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(event) => this.isChange(event)} />
          <div className="input-group-append">
            <button type="button" className="btn btn-info" onClick={(dl) => this.props.checkConnectprops(this.state.tempValue)}>Search</button>
          </div>
        </div>
        {this.showBtn()}
      </div>
    )
  }
}

export default Search
