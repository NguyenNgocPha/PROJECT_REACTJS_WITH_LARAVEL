import React from 'react';
class CommentTable extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>List Users</h1>
            <hr />
            <table className="table table-bordered">
              <thead>
                <tr className="table-warning">
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Full name</th>
                  <th>Email</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentTable;
