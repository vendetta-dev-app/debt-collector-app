/*
import {FC, useState} from "react";
import {GraphQLFormattedError} from "graphql/error";
import {useModal} from "@ebay/nice-modal-react";
import {useMutation} from "@apollo/client";
import CollectorByAdminQuery from "@/modules/collectors/queries/collectorByAdminQuery";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {FormGrid, GraphqlErrorsRenderer} from "@components";
import FormField from "@/components/forms/FormField";
import {Button, Checkbox} from "flowbite-react";
import {ManagerNode} from "@types";
import EditCollectorMutation from "@/modules/collectors/mutations/editCollectorMutation";

interface CollectorValues {
    email: string;
    fullName: string;
    phoneNumber1: string;
    phoneNumber2?: string;  // optional
    isActive: boolean;
}

interface Props {
    node: ManagerNode
}

const EditManagerForm: FC<Props> = ({node}) => {
    const [errors, setErrors] = useState<readonly GraphQLFormattedError[] | null>(null);
    const modal = useModal()

    const [editCollector, {loading}] = useMutation(EditCollectorMutation, {
        onCompleted: () => {
            modal.remove()
        },
        onError: (error) => {
            setErrors([...error.graphQLErrors]);
            console.log(error.graphQLErrors);
        },
        refetchQueries: [CollectorByAdminQuery]
    })

    const initialValues = {
        email: node.user.email,
        fullName: node.user.fullName,
        phoneNumber1: node.user.phoneNumber1,
        phoneNumber2: node.user.phoneNumber2 ? node.user.phoneNumber2 : "",
        isActive: node.isActive
    }

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Correo inválido")
            .required("El correo es obligatorio"),
        fullName: Yup.string()
            .required("El nombre es obligatorio"),
        phoneNumber1: Yup.string()
            .matches(/^[0-9]+$/, "Solo números permitidos")
            .required("El número de teléfono es obligatorio"),
        phoneNumber2: Yup.string()
            .matches(/^[0-9]+$/, "Solo números permitidos")
            .nullable()
    });

    const onSubmit = (values: CollectorValues) => {
        console.log(values);
        editCollector({
            variables: {
                userId: node.user.id,
                email: values.email,
                fullName: values.fullName,
                phoneNumber1: values.phoneNumber1,
                phoneNumber2: values.phoneNumber2,
                isActive: values.isActive
            }
        })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                () => (
                    <Form>
                        <FormGrid>
                            <FormGrid cols={2}>
                                <FormField label="Nombre Completo" name="fullName"/>
                                <FormField label="Correo" name="email" type="email"/>
                            </FormGrid>
                            <FormGrid cols={2}>
                                <FormField label="Numero de telefono" name="phoneNumber1"/>
                                <FormField label="Numero de telefono 2 (opcional)" name="phoneNumber2"/>
                            </FormGrid>
                            <FormGrid>
                                <FormField label="Estado" name="isActive" type="checkbox" as={Checkbox}/>
                            </FormGrid>
                            <GraphqlErrorsRenderer errors={errors?.map((e) => e.message) ?? null}/>
                            <div className="w-full flex justify-end pt-2">
                                <Button disabled={loading} type="submit">
                                    {loading ? "...Actualizando" : "Actualizar Cobrador"}
                                </Button>
                            </div>
                        </FormGrid>
                    </Form>
                )
            }
        </Formik>
    )
}

export default EditManagerForm*/
