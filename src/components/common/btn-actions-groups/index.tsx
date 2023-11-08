import { faEdit, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'
import ButtonGroup, { ButtonGroupI } from '../button/button-group'

export interface CustomBtnGroupsPropsI { onEdit: Function, onDelete: Function }

const CustomBtnGroups: FC<CustomBtnGroupsPropsI> = ({ onEdit, onDelete }) => {
    return (
        <React.Fragment>
            <ButtonGroup buttonsGroupsData={ButtonGroupData({ onEdit, onDelete })} />
        </React.Fragment>
    )
}

export default CustomBtnGroups

const ButtonGroupData = ({ onEdit, onDelete }: CustomBtnGroupsPropsI): ButtonGroupI[] => [
    {
        bgClass: 'light',
        icon: faEdit,
        action: () => { onEdit?.() }
    },
    {
        bgClass: 'danger',
        icon: faTrashAlt,
        action: () => { onDelete?.() }
    }
]