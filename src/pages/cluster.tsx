
import React, { useState, Fragment } from 'react';
import MyComponent from '../components/my_component';
import {
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiButtonIcon,
  EuiCard,
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
} from '@elastic/eui';

const Tier = ({ icon, color, title, performance, cost, duration, nodes, indices, isInactive }) => {
  const summaryList = [{
    title: 'Performance',
    description: performance,
  }, {
    title: 'Cost',
    description: cost,
  }, {
    title: 'Duration',
    description: duration,
  }];

  const statsList = [{
    title: 'Nodes',
    description: nodes,
  }, {
    title: 'Indices',
    description: indices,
  }];

  return (
    <EuiPanel paddingSize="m">
      <EuiFlexGroup>
        <EuiFlexItem grow={false}>
          <EuiIcon type={icon} size="xl" color={color} />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiTitle size="s">
                    <h3>{title}</h3>
                  </EuiTitle>
                </EuiFlexItem>

                {isInactive && (
                  <EuiFlexItem grow={false}>
                    <EuiBadge color="default">Inactive</EuiBadge>
                  </EuiFlexItem>
                )}
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              {isInactive ? (
                <EuiButton fill size="s" href="#">
                  Activate
                </EuiButton>
              ) : (
                <EuiButton size="s" href="#">
                  Configure
                </EuiButton>
              )}
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiDescriptionList
                style={{ maxWidth: '280px' }}
                compressed
                type="column"
                listItems={summaryList}
              />
            </EuiFlexItem>

            <EuiFlexItem>
              {!isInactive && (
                <EuiDescriptionList
                  style={{ maxWidth: '280px' }}
                  compressed
                  type="column"
                  listItems={statsList}
                />
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>  
  );
};

export const Cluster = () => {
  return (
    <>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Cluster supervisor</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection />
      </EuiPageContentHeader>

      <EuiPageContentBody>
        <Tier
          icon="temperature"
          color="danger"
          title="Hot tier"
          performance="Fast"
          cost="Highest"
          duration="Weeks"
          nodes={4}
          indices={12182}
        />

        <EuiSpacer />

        <Tier
          icon="cloudSunny"
          color="warning"
          title="Warm tier"
          performance="Medium to fast"
          cost="Moderate"
          duration="Weeks"
          nodes={2}
          indices={34552}
        />

        <EuiSpacer />

        <Tier
          icon="cloudDrizzle"
          color="primary"
          title="Cold tier"
          performance="Slow to fast"
          cost="Low"
          duration="Months"
          nodes={0}
          indices={0}
          isInactive={true}
        />

        <EuiSpacer />

        <Tier
          icon="snowflake"
          color="default"
          title="Frozen tier"
          performance="Very slow"
          cost="Lowest"
          duration="Years"
          nodes={1}
          indices={786323}
        />  
      </EuiPageContentBody>
    </>
  );
};

