
import React, { useState, Fragment } from 'react';
import MyComponent from '../components/my_component';
import {
  EuiBasicTable,
  EuiButton,
  EuiButtonIcon,
  EuiCode,
  EuiDescriptionList,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiIcon,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPanel,
  EuiSpacer,
  EuiStat,
  EuiSwitch,
  EuiText,
  EuiTitle,
  EuiCard,
} from '@elastic/eui';

import { RIGHT_ALIGNMENT } from '@elastic/eui/lib/services';

const items = [{
  name: 'data-stream-1',
  indices: 125,
  tiers: {
    hot: { indices: 100, error: true },
    warm: { indices: 20, error: true, },
    cold: { indices: 5, error: true },
    frozen: { indices: 0, isDisabled: true },
  },
  errors: 19,
}, {
  name: 'data-stream-2',
  indices: 2922,
  tiers: {
    hot: { indices: 2901, },
    warm: { indices: 0, isDisabled: true },
    cold: { indices: 0, isDisabled: true  },
    frozen: { indices: 21, },
  },
  errors: 0,
}, {
  name: 'data-stream-3',
  indices: 56,
  tiers: {
    hot: { indices: 4, },
    warm: { indices: 2, },
    cold: { indices: 50, error: true },
    frozen: { indices: 0, isDisabled: true },
  },
  errors: 3,
}, {
  name: 'data-stream-4',
  indices: 0,
  tiers: {
    hot: { indices: 0, },
    warm: { indices: 0, },
    cold: { indices: 0, },
    frozen: { indices: 0, },
  },
  errors: 0,
}, {
  name: 'data-stream-5',
  indices: 438,
  tiers: {
    hot: { indices: 18, },
    warm: { indices: 0, },
    cold: { indices: 412, },
    frozen: { indices: 8, },
  },
  errors: 0,
}];

const Error = ({ error }) => {
  if (error) {
    return <EuiIcon type="alert" color="danger" />;
  }
  
  return <EuiIcon type="empty" />;
}

export const DataStreams = () => {
  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState({});

  const toggleDetails = item => {
    const itemIdToExpandedRowMapValues = { ...itemIdToExpandedRowMap };
    if (itemIdToExpandedRowMapValues[item.name]) {
      delete itemIdToExpandedRowMapValues[item.name];
    } else {
      const {
        tiers: {
          hot, warm, cold, frozen
        },
      } = item;
     
      itemIdToExpandedRowMapValues[item.name] = (
        <div style={{ 'width': '100%' }}>
          <EuiTitle>
            <h2><a href="#">Hot-warm policy</a></h2>
          </EuiTitle>

          <EuiSpacer size="s" />

          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiCard>
                <EuiStat
                  title={hot.indices || 'Inactive'}
                  description="Hot tier"
                  titleColor={hot.isDisabled ? 'subdued' : 'danger'}
                  textAlign="right"
                >
                  <Error error={hot.error} />
                </EuiStat>
              </EuiCard>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard isDisabled={warm.isDisabled}>
                <EuiStat
                  title={warm.indices || 'Inactive'}
                  description="Warm tier"
                  titleColor={warm.isDisabled ? 'subdued' : 'accent'}
                  textAlign="right"
                >
                  <Error error={warm.error} />
                </EuiStat>
              </EuiCard>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard isDisabled={cold.isDisabled}>
                <EuiStat
                  title={cold.indices || 'Inactive'}
                  description="Cold tier"
                  titleColor={cold.isDisabled ? 'subdued' : 'primary'}
                  textAlign="right"
                >
                  <Error error={cold.error} />
                </EuiStat>
              </EuiCard>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard isDisabled={frozen.isDisabled}>
                <EuiStat
                  title={frozen.indices || 'Inactive'}
                  description="Frozen tier"
                  titleColor={frozen.isDisabled ? 'subdued' : 'default'}
                  textAlign="right"
                >
                  <Error error={frozen.error} />
                </EuiStat>
              </EuiCard>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      );
    }
    setItemIdToExpandedRowMap(itemIdToExpandedRowMapValues);
  };

  const columns = [
    {
      width: '40px',
      isExpander: true,
      render: item => (
        <EuiButtonIcon
          onClick={() => toggleDetails(item)}
          aria-label={itemIdToExpandedRowMap[item.name] ? 'Collapse' : 'Expand'}
          iconType={itemIdToExpandedRowMap[item.name] ? 'arrowUp' : 'arrowDown'}
        />
      ),
    },
    {
      field: 'name',
      name: 'Name',
    },
    {
      field: 'indices',
      name: 'Indices',
    },
    {
      field: 'errors',
      name: 'Errors',
    },
  ];

  return (
    <>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Data streams</h2>
          </EuiTitle>

          <EuiText>
            <p>
              What do data tiers look like in the context of data streams? What would users find
              useful about this?
            </p>
          </EuiText>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection />
      </EuiPageContentHeader>

      <EuiPageContentBody>
        <EuiBasicTable
          items={items}
          itemId="name"
          itemIdToExpandedRowMap={itemIdToExpandedRowMap}
          isExpandable={true}
          columns={columns}
        />
      </EuiPageContentBody>
    </>
  );
};

