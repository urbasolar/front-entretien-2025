import { createColumnHelper, ColumnDef } from '@tanstack/react-table';

import { Table, TTable } from '@components/table';

const columnHelper = createColumnHelper<{
  name: string;
  age: number;
  job: string;
  uuid: string;
}>();
const columns: ColumnDef<
  { name: string; age: number; job: string; uuid: string },
  any
>[] = [
  columnHelper.accessor('name', {
    header: () => <p className='text-white'>Name</p>,
    cell: (cell) => <p className='text-white text-center'>{cell.getValue()}</p>,
  }),
  columnHelper.accessor('age', {
    header: () => <p className='text-white'>Age</p>,
    cell: (cell) => <p className='text-white text-center'>{cell.getValue()}</p>,
  }),
  columnHelper.accessor('job', {
    header: () => <p className='text-white'>Job</p>,
    cell: (cell) => <p className='text-white text-center'>{cell.getValue()}</p>,
  }),
];

const data = [
  {
    name: 'John Doe',
    age: 25,
    job: 'Software Engineer',
    uuid: '1',
  },
  {
    name: 'Jane Doe',
    age: 23,
    job: 'Designer',
    uuid: '2',
  },
  {
    name: 'James Doe',
    age: 24,
    job: 'Product Manager',
    uuid: '3',
  },
];

const TablePlayground = <T,>(props: Partial<TTable<T>>): JSX.Element => {
  return (
    <Table
      {...props}
      columns={columns}
      data={data}
      loading={{
        isActive: false,
        text: 'Loading...',
      }}
      options={{
        pagination: {
          isActive: true,
        },
      }}
      handleClick={(cell) => console.log(cell)}
    />
  );
};

export default TablePlayground;
