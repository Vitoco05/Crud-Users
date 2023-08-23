import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { EMPTY_VALUES_FORM } from "../shared/contents"

const UsersForm = ({isShowModal, createUser, isUserToUpdate, updateUser, setIsShowModal, setIsUserToUpdate}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = (data) => {
        if (isUserToUpdate) {
            updateUser(data, reset)
        } else {
            createUser(data, reset) 
        }      
    }

    const handleClickCloseModal = () => {
        setIsShowModal(false)
        reset(EMPTY_VALUES_FORM)
        setIsUserToUpdate(null)
    }

    useEffect(() => {
        if (isUserToUpdate) {
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])


    return (
        <section className={`section__form ${isShowModal ? "visible" : "invisible"}`}>
            <form onSubmit={handleSubmit(submit)} className="form">
                <button onClick={handleClickCloseModal} type="button" className="text-red-500 absolute top-7 right-6">
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </button>
                <h2 className="form__title">{isUserToUpdate ? "Editing User" : "Create User"}</h2>

                <div className="form__div">
                    First Name:
                    <input type="text" placeholder="first name" required {...register("first_name")} />
                </div>

                <div className="form__div">
                    Last Name:
                    <input type="text" placeholder="last name" required {...register("last_name")} />
                </div>

                <div className="form__div">
                    Email:
                    <input type="email" placeholder="Email" required {...register("email")} />
                </div>

                <div className="form__div">
                    Password:
                    <input type="password" placeholder="Password" required {...register("password")}/>
                </div>

                <div className="form__div">
                    Birthday:
                    <input type="date" {...register("birthday")}/>
                </div>

                <div className="form__div">
                <button className="submit"> <i className="fa-solid fa-user-plus"></i> {isUserToUpdate ? "Save Data" : "Create User"}</button>
                </div>
            </form>
        </section>
    )
}

export default UsersForm
