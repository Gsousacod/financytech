import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Button } from "../ui/button";

export function CompetenceSelect() {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const anos = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="flex gap-4">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Selecione o mês" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Competência (Mês)</SelectLabel>
            {meses.map((mes, index) => (
              <SelectItem key={index} value={mes.toLowerCase()}>
                {mes}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      
      <Select>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Selecione o ano" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ano</SelectLabel>
            {anos.map((ano) => (
              <SelectItem key={ano} value={ano.toString()}>
                {ano}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
     <Button variant={"ghost"} className="bg-gray-100">
     <Search className="w-6 h-6 text-gray-400" />
     </Button>
    </div>
  );
}
