export interface IMockData {
    id:number,
    name:string,
    value1:number,
    value2:number,
    children?:IMockData[]
}

export const mockData:IMockData[] = [
    {    
        id:1,
        name:"John Doe",
        value1:100,
        value2:200,
        children:[
            {
                id:2,
                name:"Jane Doe",
                value1:1300,
                value2:2300,
                children: [
                    { id: 3, name: 'Jim Doe', value1: 11200, value2: 21200 },
                ],
            },
        ],
    },
    {
        id:4,
        name:"Tom Doe",
        value1:1400,
        value2:2400,
        children: [
            { id: 5, name: 'Jim Doe', value1: 1200, value2: 2020 },
        ],
    }
]
