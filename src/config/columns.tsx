import { EditableComp } from "../components/EditableComp"
import type { IMockData } from "../data/mockData"

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
            render:(value:string,record:IMockData) => {
                return <EditableComp isEditing={isEditing} record={record} />
            }
        },
        {
            title:"value2",
            dataIndex:"value2",
            key:"value2"
        }
    ]
}