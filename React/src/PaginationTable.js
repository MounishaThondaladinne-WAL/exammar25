import DataTable from 'react-data-table-component';
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
        
    },
    {
        name:'id',
        selector:row =>row.id,
    }
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 3,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 5,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 6,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 7,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 8,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 9,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 10,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 11,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 12,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 13,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 14,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function PaginationTable() {
    return (
        <div>
        <h1>Pagination Table</h1>
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
        </div>
    );
};
export default PaginationTable;