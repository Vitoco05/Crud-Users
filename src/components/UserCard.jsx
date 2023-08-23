const UserCard = ({users, deleteUser, handleClickUpdateUser}) => {
    return (
        <article className="user__card">
            <header className="user__card-header">
                <h2 className="card__user-name">{users.first_name} {users.last_name}</h2>
            </header>
            <section className="user__card-section">
                <div>
                    <span className="span">Email:</span>
                    <p>{users.email}</p>
                </div>
                <div>
                    <span className="span">Birthday:</span> 
                    <p>{users.birthday}</p>
                </div>  
            </section>
            <footer className="user__card-footer">
                <button onClick={() => deleteUser(users.id)} className="button-card delete"><i className="fa-solid fa-user-xmark"></i></button>
                <button onClick={() => handleClickUpdateUser(users)} className="button-card update"><i className="fa-solid fa-user-pen"></i></button>
            </footer>
        </article>
    )
}

export default UserCard
