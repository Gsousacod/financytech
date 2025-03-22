import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  
  export default function TableReleases() {
    return (
      <Table>
        <TableCaption>Lista das suas transações recentes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Valor</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Tipo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">R$ 250,00</TableCell>
            <TableCell>Compra de material de escritório</TableCell>
            <TableCell>Trabalho</TableCell>
            <TableCell>Despesa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">R$ 1.500,00</TableCell>
            <TableCell>Salário</TableCell>
            <TableCell>Renda</TableCell>
            <TableCell>Receita</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">R$ 500,00</TableCell>
            <TableCell>Poupança mensal</TableCell>
            <TableCell>Investimentos</TableCell>
            <TableCell>Reserva</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
