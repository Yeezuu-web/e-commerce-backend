import prismadb from "@/lib/prismadb";
import { format } from "date-fns";

import { SizeClient } from "./components/client";
import { SizeColumn } from "./components/columns";

const Sizes = async ({
    params
}: { 
    params: { sizeId:string }
}) => {
    const sizes = await prismadb.size.findMany({
        where: {
            id: params.sizeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formartedSizes: SizeColumn[] = sizes.map((item) => ({
        id: item.id,
        name: item.name,
        value: item.value,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeClient data={formartedSizes} />
            </div>
        </div>
    )
}

export default Sizes;