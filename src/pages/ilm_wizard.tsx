
import React, { useState, Fragment } from 'react';
import MyComponent from '../components/my_component';
import {
  EuiBadge,
  EuiBasicTable,
  EuiButton,
  EuiButtonEmpty,
  EuiButtonIcon,
  EuiCard,
  EuiCode,
  EuiDescriptionList,
  EuiDescriptionListDescription,
  EuiDescriptionListTitle,
  EuiEmptyPrompt,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiIcon,
  EuiIconTip,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPanel,
  EuiProgress,
  EuiSpacer,
  EuiStat,
  EuiSteps,
  EuiSwitch,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import { EuiCommentTimeline } from '@elastic/eui/lib/components/comment_list';

const DetailsList = ({ details }) => {
  const groups: any[] = [];
  let items: any[];

  details.forEach((detail, index) => {
    const { name, toolTip, content } = detail;

    if (index % 3 === 0) {
      items = [];

      groups.push(<EuiFlexGroup key={groups.length}>{items}</EuiFlexGroup>);
    }

    items.push(
      <EuiFlexItem key={name}>
        <EuiDescriptionListTitle>
          <EuiFlexGroup alignItems="center" gutterSize="s">
            <EuiFlexItem grow={false}>{name}</EuiFlexItem>

            <EuiFlexItem grow={false}>
              {toolTip && <EuiIconTip content={toolTip} position="top" />}
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiDescriptionListTitle>

        <EuiDescriptionListDescription>{content}</EuiDescriptionListDescription>
      </EuiFlexItem>
    );
  });

  return <EuiDescriptionList>{groups}</EuiDescriptionList>;
};

const Tier = ({ icon, color, title, performance, cost, duration, nodes, indices, isInactive }) => {
  const [isActive, setIsActive] = useState(!isInactive);

  const details = [
    {
      name: 'Rollover',
      toolTip: 'Something that explains this thing',
      content: (
        <EuiFlexGroup alignItems="center" gutterSize="xs">
          <EuiFlexItem grow={false}>
            <EuiIcon type="check" color="secondary" />
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            Enabled
          </EuiFlexItem>
        </EuiFlexGroup>
      ),
    },
    {
      name: 'Maximum index size',
      toolTip: 'Something that explains this thing',
      content: '50gb',
    },
    {
      name: 'Maximum age',
      toolTip: 'Something that explains this thing',
      content: '30 days',
    },
    {
      name: 'Index priority',
      toolTip: 'Something that explains this thing',
      content: 1,
    },
    {
      name: 'Actions',
      toolTip: 'Something that explains this thing',
      content: (
        <>
          <div>Shrink</div>
          <div>Force merge</div>
        </>
      ),
    },
    {
      name: '',
      toolTip: '',
      content: '',
    },
  ];

  return (
    <div className="euiCommentEvent euiCommentEvent--regular">
      <div className="euiCommentEvent__header">
        <div className="euiCommentEvent__headerData">
          <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiHealth color={color}>
                    <strong>{title}</strong>
                  </EuiHealth>
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                  <EuiIconTip content={`${performance} performance, ${cost} cost, duration of ${duration}`} />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiFlexItem grow={false}>
                  <EuiSwitch
                    label="Active"
                    checked={isActive}
                    onChange={e => setIsActive(e.target.checked)}
                  />
                </EuiFlexItem>

                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty isDisabled={!isActive} color="primary">Edit</EuiButtonEmpty>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
        <div className="euiCommentEvent__headerActions">
        </div>
      </div>
        <div className="euiCommentEvent__body">
          {!isActive && (
            <EuiEmptyPrompt
              iconType={icon}
              title={<h3>{title} not active</h3>}
              actions={
                <EuiButton onClick={() => setIsActive(true)} color="primary">
                  Activate
                </EuiButton>
              }
            />
          )}

          {isActive && (
            <DetailsList details={details} />
          )}
        </div>
    </div>
  );
};

export const IlmWizard = () => {
  return (
    <>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Create index lifecycle policy</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection />
      </EuiPageContentHeader>

      <EuiPageContentBody>
        <EuiTitle size="s">
          <h3>Timing comparison</h3>
        </EuiTitle>
        <EuiProgress value={40} max={100} color="danger" size="m" />

        <EuiSpacer size="xl" />
        
        <div className="euiCommentList">
          <div className="euiComment euiComment--hasBody">
            <EuiCommentTimeline type="regular" timelineIcon="temperature" />
            <Tier
              icon="temperature"
              color="danger"
              title="Hot tier"
              performance="Fastest"
              cost="highest"
              duration="weeks"
              nodes={4}
              indices={12182}
            />
          </div>

          <div className="euiComment euiComment--hasBody">
            <EuiCommentTimeline type="regular" timelineIcon="cloudSunny" />
            <Tier
              icon="cloudSunny"
              color="warning"
              title="Warm tier"
              performance="Medium to fast"
              cost="moderate"
              duration="weeks"
              nodes={2}
              indices={34552}
            />
          </div>

          <div className="euiComment euiComment--hasBody">
            <EuiCommentTimeline type="regular" timelineIcon="cloudDrizzle" />
            <Tier
              icon="cloudDrizzle"
              color="primary"
              title="Cold tier"
              performance="Slow to fast"
              cost="low"
              duration="months"
              nodes={0}
              indices={0}
              isInactive={true}
            />
          </div>

          <div className="euiComment euiComment--hasBody">
            <EuiCommentTimeline type="regular" timelineIcon="snowflake" />
            <Tier
              icon="snowflake"
              color="default"
              title="Frozen tier"
              performance="Very slow"
              cost="lowest"
              duration="eternity"
              nodes={1}
              indices={786323}
            />
          </div>
        </div>
      </EuiPageContentBody>
    </>
  );
};

