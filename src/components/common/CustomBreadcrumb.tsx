import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function CustomBreadcrumb({ data }: { data: any }) {
    const lastIndex = data.length - 1;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {data && data.map((breadcrumb: any, index: number) => (
                    <GroupWrapper key={index}>
                        {breadcrumb.url ? (
                            <BreadcrumbItem>
                                <BreadcrumbLink href={breadcrumb.url}>{ breadcrumb.title }</BreadcrumbLink>
                            </BreadcrumbItem>
                        ) : (
                            <BreadcrumbPage>{ breadcrumb.title }</BreadcrumbPage>
                        )}

                        {lastIndex !== index ? <BreadcrumbSeparator /> : ''}
                    </GroupWrapper>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export function GroupWrapper({ children } : { children : any }) {
    return <>
        { children }
    </>
}


