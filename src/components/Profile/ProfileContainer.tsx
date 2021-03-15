import React from "react";

import {Profile} from "./Profile";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId){
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
               this.props.setUserProfile({
                   ...response.data,
                   photos: {
                       small: response.data.photos.small ? response.data.photos.small : '',
                       large: response.data.photos.large ? response.data.photos.large : ''
                   }
               })
            })

    }

    render() {
        return (
            <Profile  profile = { this.props.profile }/>
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

const connector = connect(mapStateToProps, {setUserProfile})

export type ProfilePropsType = ConnectedProps<typeof connector>

export default connector(withUrlDataContainerComponent)