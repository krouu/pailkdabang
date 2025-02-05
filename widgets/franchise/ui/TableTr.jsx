const TableTr = ({title, text}) => {
    return (  
        <tr className="border-b-2 border-gray-100">
            <th className="w-56 py-7 px-4 text-white bg-blue-950">{title}</th>
            <td className="pl-6 bg-white">{text}</td>
        </tr>
    );
}
 
export default TableTr;
