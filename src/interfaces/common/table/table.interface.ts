import { ReactNode } from "react"

export interface TablePropsI<T> {
    headItems: HeadItemsI[]
    bodyItems: T[] | null | undefined
}


export interface HeadItemsI {
    title?: string
    headRender?: ReactNode
    key?: string
    render?: Function
}

