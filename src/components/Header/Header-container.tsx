import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth.reducer";
import {AppStateType} from "../../redux/redux-store";



class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.1/auth/me',
            {withCredentials: true})
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data
                    this.props.setAuthUserDataAC(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = ( state: AppStateType ) => {
    return{
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const connector = connect(mapStateToProps, {setAuthUserDataAC})

export type HeaderPropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)