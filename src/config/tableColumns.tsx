import { EditableComp } from "../components/EditableComp"

export const createTableColumns = (isEditing:boolean) => {
    return [
        {
            title:"Name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"value1",
            dataIndex:"value1",
            key:"value1",
            onCell:() => {
                return {}
            },
            render:(value:string, record:any) => {
                return <EditableComp value={value} isEditing={isEditing} record={record} />
            }
        },
        {
            title:"value2",
            dataIndex:"value2",
            key:"value2"
        }
    ]
}