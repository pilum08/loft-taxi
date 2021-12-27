import React, {Component} from 'react'
import {withAuth} from '../Context'

export class Profile extends Component {

    render() {
        return (
            <>
            <div>
                Профиль
            </div>
            </>
            
        )
    }
}
export const ProfileWithAuth = withAuth(Profile)