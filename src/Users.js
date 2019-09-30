import React, { Component } from 'react'


const User=(props)=>{
    return(
        <div>
            <h1>{props.user.name}</h1>
            <p>{props.user.phone}</p>
        </div>
    )
}

class Users extends Component{
    constructor(){
        super();

        this.state={
            users:[],
            loading:true,
            error:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((users)=>{
            this.setState({
                users,
                loading:false
            })
        })
        .catch((err)=>{
            this.setState({
                loading:false,
                error:true
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Loading..Please wait</p>
                </div>
            )
        }

        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry. Failed to get users. Try again</p>
                </div>
            )
        }

        return(
            <React.Fragment>
                <h1>Users</h1>
                {
                    this.state.users.map((user)=>{
                        return <User key={user.id} user={user}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Users;