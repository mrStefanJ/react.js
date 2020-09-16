import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../action/useAction'

import '../../styles/user.scss'

class User extends Component {
    constructor() {
        super();
        this.state ={
            search: ''
        };
    }
    

    updateSearch = event => {
        this.setState({ search: event.target.value.substr(0, 20) })
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
         const { users } = this.props.users

        return (
            <div className="user">
                <input type="text" 
                    values={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
                <div >
                    {users.map(user => 
                    <a href="#">
                        <div className="user-card" key={user.id}>
                            <img src={user.avatar_url} className="user-img"/>
                            <p>{user.login}</p>
                            <p className="user-text">{user.node_id}</p>
                        </div>
                    </a>)}
                </div>
            </div>
        )
    }
}

const mapStateInProps = (state) => ({ users: state.users })

export default connect(mapStateInProps, { getUsers })(User)