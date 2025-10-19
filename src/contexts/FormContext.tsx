/*
 * @Author: hxf hongxin.feng@transwarp.io
 * @Date: 2025-10-19 14:39:04
 * @LastEditors: hxf hongxin.feng@transwarp.io
 * @LastEditTime: 2025-10-19 19:01:30
 * @FilePath: \my-app-self-code\src\contexts\FormContext.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useContext, useState } from "react"
import { createContext } from "react"

interface FormSelfProps {
    children: React.ReactNode
}

interface FormContextType {
    getValues: (id:number)=>string,
    updateValues:(id:number,value:string)=>void,
}

const FormContext = createContext<FormContextType|null>(null)

export const useForm = () => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error('useForm must be used within a FormSelf')
    }
    return context
}

export const FormSelf = ({children }:FormSelfProps)=>{
    const [formValues,setFormValues] = useState<Record<number,string>>({})
    const getValues = (id:number)=>{
        console.log('getValues',id)
        return formValues[id]
    }
    const updateValues = (id:number,value:string)=>{
        console.log('updateValues',id,value)
        setFormValues({...formValues,[id]:value})
    }
    const contextValue= {getValues,updateValues}
    return (
        <FormContext.Provider value={contextValue}>
            {children}
        </FormContext.Provider>
    )
}