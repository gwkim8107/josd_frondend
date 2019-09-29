import React, { Component, createContext, useState } from 'react'

export const CommonContext = createContext();
//  const CommonConsumer = CommonContext.Consumer

class CommonContextProvider extends Component {
    state = {
        user_id: "",
        rec_dt: "",
        updateAccount: updateAccount => 
            this.updateAccount(updateAccount)
    }

    updateAccount = (user_id) => {
        console.log("provider----"+user_id);

        this.setState({ user_id: user_id}) 
    }

    render(){
        return (
            <CommonContext.Provider value={{...this.state, updateAccount: this.updateAccount}}>
                { this.props.children }
            </CommonContext.Provider>
        )
    }
}

export default CommonContextProvider;


