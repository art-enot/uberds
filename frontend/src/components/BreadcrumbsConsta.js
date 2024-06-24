import React from 'react';
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';

const BreadcrumbsConsta = ({ breadcrumbs }) => {
    const items = breadcrumbs.map((breadcrumb, index) => ({
        label: breadcrumb.title,
        href: breadcrumb.url || undefined,
    }));

    return (
        <Breadcrumbs
            items={items}
            getItemLabel={(item) => item.label}
            getItemHref={(item) => item.href}
            renderItem={(item, index, isLast) => 
                item.href && !isLast ? <a href={item.href}>{item.label}</a> : item.label
            }
        />
    );
};

export default BreadcrumbsConsta;