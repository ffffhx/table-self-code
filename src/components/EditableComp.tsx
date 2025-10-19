/*
 * @Author: hxf hongxin.feng@transwarp.io
 * @Date: 2025-10-18 20:53:34
 * @LastEditors: hxf hongxin.feng@transwarp.io
 * @LastEditTime: 2025-10-19 18:55:04
 * @FilePath: \my-app-self-code\src\components\EditableComp.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Input } from "antd"
import { useForm } from "../contexts/FormContext"
import type { IMockData } from "../data/mockData"

interface EditableCompProps {
    isEditing: boolean,
    record: IMockData
}

// 父组件传过来的props会被包裹成一个对象，这里可以默认解构
export const EditableComp = ({isEditing, record}: EditableCompProps) => {
    const { getValues,updateValues } = useForm()
    const currentValue = getValues(record.id)
    console.log(currentValue,'currentValue')
    return (
        isEditing ? (
            <Input value={currentValue||record.value1} onChange={(e)=>updateValues(record?.id,e.target.value)}/>
        ) : (
            <span>{currentValue||record.value1}</span>
        )
    )
}