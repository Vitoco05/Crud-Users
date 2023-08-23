import UserCard from "./UserCard"

const UsersList = ({users, deleteUser, handleClickUpdateUser}) => {
    return (
        <section className="users-container">
            {
                users.map((user) => 
                <UserCard 
                users={user} 
                key={user.id} 
                deleteUser={deleteUser}
                handleClickUpdateUser={handleClickUpdateUser}
                />)
            }
        </section>
    )
}

export default UsersList
