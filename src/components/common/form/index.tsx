import { FormEvent, ReactNode, useMemo } from 'react'
import formValidation from '../../../helpers/form/form-validation'
import { inputFormToJSON } from '../../../helpers/form/form.helper'
import useForm from '../../../hooks/useForm'
import { InputPropsI } from '../../../interfaces/common/input/input.interface'

import Input from '../input'
import Dropdown from "../dropdown/Index"
interface FormPropsI {
    inputsData: Function
    handleSubmit: Function
    footerSection: ReactNode
    initialState?: { [key: string]: string | number } | any
    keyForm?: string
    dataRules?: Function
    setLeaveForm?: Function
    actions?: {
        [key: string]: Function | string | boolean | Array<any> | number | any;
    };
}

const Form = ({ inputsData, handleSubmit, footerSection, keyForm, initialState, dataRules, actions }: FormPropsI) => {

    const { form, handleChange, setForm } = useForm(initialState || {})

    let items = useMemo(() => {
        const { errors } = formValidation?.(form, dataRules?.({ form, actions }) || {});
        return inputsData?.({ form, actions, handleChange, setForm })?.map((item: any) => {
            item.errorMessage = errors?.[item?.props?.name] ? errors?.[item?.props?.name][0] : '';
            return item;
        });
    }, [actions, dataRules, form, handleChange, inputsData, setForm]);

    const handleSubmitAction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = inputFormToJSON(e.target as HTMLFormElement);
        setForm(data)
        const { isValid } = formValidation(data, dataRules?.({ form }) || {});
        if (!isValid) return
        handleSubmit(form)
    }

    return (
        <>
            <form onSubmit={handleSubmitAction} style={{ margin: "auto" }}>
                <div className="row mt-3">
                    {items?.map((item: InputPropsI, index: number) => (
                        <div
                            key={`${keyForm}-${index}`}
                            className={`mt-3 ${item.cols}`}>
                            {item.props.type === "dropdown" && item.options ? (
                                <Dropdown
                                    title={item.props.title}
                                    value={item.props.value?.toString()}
                                    name={item.props.name}
                                    options={item.options}
                                    onChange={handleChange}
                                />
                            ) : (
                                <Input
                                    {...item.props}
                                    {...item}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    {footerSection}
                </div>
            </form>
        </>
    )
}

export default Form