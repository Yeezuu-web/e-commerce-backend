"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface SizeClientProps {
    data: SizeColumn[]
}

export const SizeClient: React.FC<SizeClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between"> 
                <Heading 
                    title={`Sizes (${data.length})`}
                    description="Manage sizes for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
                    <Plus className="h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable data={data} columns={columns} searchKey="Name"/>
            <Heading title="API" description="API called for Sizes" />
            <Separator />
            <ApiList entityName="sizes" entityIdName="sizeId"/>
        </>
    ) 
}