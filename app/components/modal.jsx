import { useEffect, useState } from "react"

const Modal = ({ show = false, type = "", message = "" }) => {

    const [modalData, setModalData] = useState({
        message: "",
        show: false,
        type: ""
    })
    useEffect(() => {
        if (show) {
            // document.querySelector("#ModalOpenBtn").click()
            const myModal = new bootstrap.Modal(document.querySelector('#messageModal'), {
                // keyboard: false,
            })
            myModal.show()
            setModalData({
                message: message,
                type: type
            })
        }
    }, [show])

    return (
        <>
            <div className="modal fade" id="messageModal" tabIndex="-1" aria-labelledby="messageModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3">
                        <div className="modal-body text-center pb-1">
                            {
                                modalData?.type === "error" ?
                                    <i class="fa-regular fa-circle-xmark text-danger fw-bold modalIcon"></i>
                                    :
                                    modalData?.type == "info" ?
                                        <i class="fa-solid fa-circle-info fw-bold modalIcon"></i>
                                        :
                                        <i class="fa-regular fa-circle-check text-success fw-bold modalIcon"></i>
                            }
                            <h5 className="mt-3">{modalData?.message}</h5>
                        </div>
                        <div className="modal-footer justify-content-center border-0 pt-1">
                            {
                                modalData?.type === "error" ?
                                    <button type="button" className="btn btn-danger px-4" data-bs-dismiss="modal">Ok</button>
                                    :
                                    modalData?.type == "info" ?
                                        <button type="button" className="btn btn-dark px-4" data-bs-dismiss="modal">Ok</button>
                                        : <button type="button" className="btn btn-primary px-4" data-bs-dismiss="modal">Ok</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;