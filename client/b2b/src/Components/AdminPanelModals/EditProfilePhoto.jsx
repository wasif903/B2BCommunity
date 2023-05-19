import styles from './modal.module.css'

// eslint-disable-next-line react/prop-types
function EditProfilePhoto({ toggleEditProfileModal }) {



    return (
        <>
            <div className={styles.ModalBackground}>
                <div className={styles.ModalWrapper}>
                    <div className={styles.modal}>

                    <h4  className={styles.closeModal} onClick={toggleEditProfileModal}>X</h4>

                        <h4 className={styles.modalTitle}>
                            Change Profile Photo
                        </h4>

                        <label className={styles.fileLabel} htmlFor="file">
                            <input type="file" name="file" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfilePhoto
