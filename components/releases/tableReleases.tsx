'use client';

import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Shield, TrendingDown, TrendingUp } from "lucide-react"; // Importando ícones

const data = [
  { valor: "R$ 250,00", descricao: "Compra de material de escritório", categoria: "Trabalho", tipo: "Despesa" },
  { valor: "R$ 1.500,00", descricao: "Salário", categoria: "Renda", tipo: "Receita" },
  { valor: "R$ 500,00", descricao: "Poupança mensal", categoria: "Investimentos", tipo: "Reserva" },
];

const columns: ColumnDef<typeof data[number]>[] = [
  { accessorKey: "valor", header: "Valor" },
  { accessorKey: "descricao", header: "Descrição" },
  { accessorKey: "categoria", header: "Categoria" },
  {
    accessorKey: "tipo",
    header: "Tipo",
    cell: ({ getValue }) => {
      const tipo = getValue() as keyof typeof tipoInfo;

      
      const tipoInfo = {
        "Despesa": { icon: <TrendingDown className="w-4 h-4 mr-2" />, color: "text-red-500" },
        "Receita": { icon: <TrendingUp className="w-4 h-4 mr-2" />, color: "text-green-500" },
        "Reserva": { icon: <Shield className="w-4 h-4 mr-2" />, color: "text-blue-500" },
      };

      return (
        <span className={`flex items-center  py-1 rounded-md text-xs font-medium ${tipoInfo[tipo]?.color}`}>
          {tipoInfo[tipo]?.icon} {tipo}
        </span>
      );
    },
  },
];

export default function TableReleases() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="w-full  border-gray-200 rounded-lg">
      <TableHeader className="bg-gray-100">
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableHead key={header.id} className="px-4 py-2 text-left font-medium">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id} className="border-b last:border-0 hover:bg-gray-50">
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id} className="px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
