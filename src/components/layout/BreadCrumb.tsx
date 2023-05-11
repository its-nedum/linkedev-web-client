import { useBreadcrumb } from "@refinedev/core";
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
  } from '@chakra-ui/react'
import { AiOutlineRight } from "react-icons/ai";

export const Breadcrumblist = () => {
    const { breadcrumbs } = useBreadcrumb();

    return (
        <Breadcrumb spacing={"8px"} separator={<AiOutlineRight color='gray.500' />}>
            {breadcrumbs.map((breadcrumb) => (
                <BreadcrumbItem 
                    key={`breadcrumb-${breadcrumb.label}`}
                    fontWeight={"600"}
                    fontSize={"19px"}
                    lineHeight={"48px"}
                >
                    {breadcrumb.href ? (
                        <Link to={breadcrumb.href}>{breadcrumb.label}</Link>
                    ) : (
                        <span>{breadcrumb.label}</span>
                    )}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};