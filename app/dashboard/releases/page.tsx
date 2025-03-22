import OptionsRealeses from "@/components/releases/optionsReleases";
import { CompetenceSelect } from "@/components/releases/selectMonther";
import TableReleases from "@/components/releases/tableReleases";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Releases(){
    return (
        <Card>
            <CardHeader className="flex justify-between">
                <CardTitle className="text-xl">Lançamentos</CardTitle>
                <CompetenceSelect />
                <OptionsRealeses/>

            </CardHeader>
            <CardContent className="flex justify-between w-full h-100">
                {/* <p className="m-auto opacity-40">No momento você não tem nenhum lançamento</p> */}
                <TableReleases />
            </CardContent>
        </Card>
    )
}