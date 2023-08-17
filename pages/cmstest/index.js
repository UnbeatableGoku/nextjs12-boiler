import React from 'react';
import client from '../../config/cmsConfig/client';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const CMS = ({ items }) => {
  const value = items[0].fields.navigationTabs;
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri}>{children}</Link>
      ),
    },
  };
  const anotherValue = value?.map((item) => {
    const lastValue = item?.fields?.tabCols?.map((data) => {
      return data?.fields?.col;
    });

    return lastValue;
  });

  console.log(anotherValue);
  return (
    <div>
      {anotherValue &&
        anotherValue.map((item) => {
          console.log(item);
          return item?.map((items) =>
            documentToReactComponents(items, options)
          );
        })}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { items } = await client.getEntries({
    content_type: 'mainNavigation',
    select: 'fields',
    include: 3,
  });
  return {
    props: {
      items,
    },
  };
};
export default CMS;
