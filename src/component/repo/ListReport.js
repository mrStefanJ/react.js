import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../action/useAction'
import '../../styles/listreport.scss'

 class ListReport extends Component {
    constructor() {
        super();
        this.state ={
            users: []
        };
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { users } = this.props.users

       console.log(users);

       return (
        <div>
            <a href="#">Go Back</a>
            <p className="text-right">List of repos</p>
            <div className="list-reports">
                    {users.map(user => 
                    <div className="user-card" key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <a href="#" target="_blank">Read More</a>
                    </div>)}
                </div>
        </div>
    )
    }
}
const mapStateInProps = (state) => ({ users: state.users })

export default connect(mapStateInProps, { getUsers })(ListReport)