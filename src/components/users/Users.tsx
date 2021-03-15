import React from 'react'
import userPhoto from "../../assets/images/585e4bcdcb11b227491c3396.png";
import s from './Users.module.css'
import {UsersType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";

type UserPropsType2 = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: UsersType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFolowingProgress: (isFetching: boolean, id: string) => void
    followingInProgress: Array<string>
}


export let Users = (props: UserPropsType2) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                    className={props.currentPage === p ? s.selectedPage : ''}> {p} </span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to = {'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'image'}
                                     className={s.photo}/>
                                  </NavLink>
                            </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                    props.toggleFolowingProgress(true, u.id)
                                    userAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFolowingProgress(false, u.id)
                                        })
                                }}>Unfollow</button>

                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                    props.toggleFolowingProgress(true, u.id)
                                    userAPI.follow(u.id)
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFolowingProgress(false, u.id)
                                        })
                                }}>Follow</button>}

                        </div>
                    </span>
                <span>
                        <span>

                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
            }
            </div>
        }