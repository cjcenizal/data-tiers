
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

import { DataStreams } from './data_streams';
import { Cluster } from './cluster';
import { IlmDefaults } from './ilm_defaults';
import { IlmWizard } from './ilm_wizard';

export default () => {
  return (
    <EuiPage restrictWidth>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Data Tiers prototypes</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>

        <EuiPageContent>
          <DataStreams />
        </EuiPageContent>

        <EuiSpacer />

        <EuiPageContent>
          <Cluster />
        </EuiPageContent>

        <EuiSpacer />

        <EuiPageContent>
          <IlmDefaults />
        </EuiPageContent>

        <EuiSpacer />

        <EuiPageContent>
          <IlmWizard />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

