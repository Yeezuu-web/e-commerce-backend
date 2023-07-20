import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import { ColorClient } from "./components/client";
import { ColorColumn } from "./components/columns";

const Colors = async ({
    params
}: { 
    params: { colorId:string }
}) => {
    const colors = await prismadb.color.findMany({
        where: {
            id: params.colorId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formartedColors: ColorColumn[] = colors.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorClient data={formartedColors} />
            </div>
        </div>
    )
}

export default Colors;