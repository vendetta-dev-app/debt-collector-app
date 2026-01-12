import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from "flowbite-react"
import type { FC } from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useMutation } from "@apollo/client"
import NiceModal, { type NiceModalHocProps, useModal } from "@ebay/nice-modal-react"
import { formErrors } from "@/constants"
import FormField from "@/components/forms/FormField"
import AddAdminToRouteMutation from "@/modules/routes/mutattions/addAdminToRouteMutation"

export interface Props extends NiceModalHocProps {
    routeId: string
}

interface Values {
    email: string
}

const AddAdminToRouteModal: FC<Props> = NiceModal.create(({ routeId }) => {
    const modal = useModal()

    const [addAdminToRoute, { loading, error }] = useMutation(AddAdminToRouteMutation, {
        onCompleted: () => {
            modal.remove()
        },
    })

    const initialValues: Values = {
        email: '',
    }

    const validationSchema = Yup.object({
        email: Yup.string().required(formErrors.required)
    })

    const onSubmit = async (values: Values) => {
        console.log(values)

        await addAdminToRoute({
            variables: {
                input: {
                    routeId: routeId,
                    adminEmail: values.email
                },
            },
        })
    }

    return (
        <Modal
            size="3xl"
            show={modal.visible}
            onClose={() => modal.remove()}>
            <ModalHeader>
                Agregar administrador
            </ModalHeader>
            <ModalBody>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form id="addAdminToRouteForm">
                        {
                            error &&
                            <Alert color="failure" className="mb-4">
                                {error?.message}
                            </Alert>
                        }
                        <FormField label="Correo del administrador" name="email" />
                    </Form>
                </Formik>
            </ModalBody>
            <ModalFooter className="flex justify-end">
                <Button color="light" onClick={() => modal.remove()}>
                    Cancelar
                </Button>
                <Button
                    type="submit"
                    disabled={loading}
                    form="addAdminToRouteForm"
                    className="flex items-center gap-2"
                >
                    {
                        loading ?
                            <>
                                <Spinner size="sm" aria-label="Info spinner example" light />
                                Agregando...
                            </>
                            :
                            'Agregar'
                    }
                </Button>
            </ModalFooter>
        </Modal>
    )
})

export default AddAdminToRouteModal