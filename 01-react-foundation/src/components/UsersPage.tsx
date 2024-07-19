import axios from "axios";
import { useEffect, useRef } from "react"
import type { ReqResUserListResponse, User } from "../interfaces";
import { useState } from "react";

const loadUsers = async(page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;

    } catch (error) {
        console.log(error);
        return [];
    }
}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>( [] );
    const currentPageRef = useRef(1);

    useEffect(() => {
        
        loadUsers(currentPageRef.current)
        .then( setUsers );
        
        // fetch('https://reqres.in/api/users?page=2')
        //     .then( resp => resp.json() )
        //     .then( data => console.log(data) );
    }, [] );

    const nextPage = async() => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if ( users.length > 0 ) {
            setUsers( users );
        } else {
            currentPageRef.current--;

        }
    }

    const prevPage = async() => {
        if ( currentPageRef.current < 1 ) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

  return (
    <>
    <h3>Usuarios:</h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map( user => (
                    <tr key={ user.id}>
                        <td style={{padding: '50px'}}><img style={{width: '50px'}} src={ user.avatar} alt="User avatar" /></td>
                        <td>{ user.first_name } { user.last_name }</td>
                        <td>{ user.email }</td>
                    </tr>

                ))
            }
        </tbody>
    </table>
            <div>
            <button onClick={ prevPage }>Prev</button>
            <button onClick={ nextPage }>Next</button>
            </div>
    </>
  )
}
