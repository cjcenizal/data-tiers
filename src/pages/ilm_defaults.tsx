
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
  EuiTabs,
  EuiTab,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

const Policy = ({ title, tiers, indices }) => {
  const hasTier = (tier, color) => {
    if (tiers.includes(tier)) {
      console.log('has', tier, color)
      return color;
    }
    return 'hollow';
  };

  const tierBadges = (
    <EuiFlexGroup gutterSize="xs">
      <EuiFlexItem grow={false}>
        <EuiBadge color={hasTier('hot', 'danger')}>Hot</EuiBadge>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiBadge color={hasTier('warm', 'warning')}>Warm</EuiBadge>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiBadge color={hasTier('cold', 'primary')}>Cold</EuiBadge>
      </EuiFlexItem>

      <EuiFlexItem grow={false}>
        <EuiBadge color={hasTier('frozen', 'default')}>Frozen</EuiBadge>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
  const statsList = [{
    title: 'Tiers',
    description: tierBadges,
  }, {
    title: 'Used by',
    description: indices,
  }];

  return (
    <EuiPanel paddingSize="m">
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiTitle size="s">
                    <h3>{title}</h3>
                  </EuiTitle>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiButton size="s" href="#">
                    Details
                  </EuiButton>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                  <EuiButtonIcon
                    href="#"
                    iconType="gear"
                    aria-label="Actions"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiFlexGroup>
            <EuiFlexItem>
              <EuiDescriptionList
                style={{ maxWidth: '280px' }}
                compressed
                type="column"
                listItems={statsList}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPanel>  
  );
};

export const IlmDefaults = () => {
  return (
    <>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Index lifecycle policies</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection />
      </EuiPageContentHeader>

      <EuiPageContentBody>
        <EuiTabs display="condensed">
          <EuiTab isSelected={true}> 
            Defaults
          </EuiTab>

          <EuiTab isSelected={false}> 
            Custom
          </EuiTab>
        </EuiTabs>

        <EuiSpacer size="s" />

        <Policy
          title="Full spectrum"
          tiers={['hot', 'warm', 'cold', 'frozen']}
          indices={5}
        />

        <EuiSpacer size="s" />

        <Policy
          title="Hot-warm"
          tiers={['hot', 'warm']}
          indices={38}
        />

        <EuiSpacer size="s" />

        <Policy
          title="Deep-freeze"
          tiers={['hot', 'frozen']}
          indices={11}
        />
      </EuiPageContentBody>
    </>
  );
};

