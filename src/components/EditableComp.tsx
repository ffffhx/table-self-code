import { Form, Input } from "antd"

// 父组件传过来的props会被包裹成一个对象，这里可以默认解构
export const EditableComp = ({value, isEditing, record}: {value: string, isEditing: boolean, record?: {id: number}}) => {
    return (
        isEditing ? (
            <Form.Item name={`value1_${record?.id}`} initialValue={value}>
                <Input />
            </Form.Item>
        ) : (
            <span>{value}</span>
        )
    )
}