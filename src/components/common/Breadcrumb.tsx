import React from 'react'
import {
    Breadcrumb as BCComponent,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Breadcrumb({ data }: { data: any }) {
    const lastIndex = data.length - 1;

    return (
        <BCComponent>
            <BreadcrumbList>
                {data && data.map((breadcrumb: any, index: number) => (
                    <>
                        {breadcrumb.url ? (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={breadcrumb.url}>{ breadcrumb.title }</BreadcrumbLink>
                            </BreadcrumbItem>
                        ) : (
                            <BreadcrumbPage>{ breadcrumb.title }</BreadcrumbPage>
                        )}

                        {lastIndex !== index ? <BreadcrumbSeparator /> : ''}
                    </>
                ))}
            </BreadcrumbList>
        </BCComponent>
    )
}
