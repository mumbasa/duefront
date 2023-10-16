import DataTable from "react-data-table-component";

const StaffTable = () =>{

  const customStyles = {
    rows: {
        style: {
          color: '#ced4da',
          fontSize: '0.875rem',
          background: '#343a40'    },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            fontSize:'14px',
            background: '#343a40'  
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            background: '#343a40'  
        },
    },

    pagination: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
          color: '#ced4da',
          marginTop:'4px',
          background: '#343a40'  
      },
  },
};
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
        sortable: true,
    }, 
    {
      name: 'Action',
      selector: row => <button className="btn btn-primary">View Sections</button>,
      sortable: true,
  },
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
]




    return (
        <div className="row my-4">
        <div className="col-md-12">
            <DataTable
 customStyles={customStyles}
            columns={columns}
            data={data}
            pagination
        />

            </div>
          </div>
        )
}
export default StaffTable