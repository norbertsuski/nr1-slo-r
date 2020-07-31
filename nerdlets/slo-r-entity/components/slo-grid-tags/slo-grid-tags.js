import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, GridItem, Icon, Button, Tooltip } from 'nr1';
import SettingsMenu from '../settings-menu';
import { sloIndicatorLabelLookup } from '../../../shared/helpers';

const SloGridTags = ({
  data,
  toggleViewModal,
  toggleUpdateModal,
  deleteCallback
}) => {
  const sloGridItems = data.map((document, index) => {
    const sevenDaysWrapperClasses = classNames('wrapper', {
      'wrapper--not-good': document['7_day'] < document.target
    });
    const sevenDaysLabelClasses = classNames('label', {
      'label--not-good': document['7_day'] < document.target
    });
    const sevenDaysValueClasses = classNames('value', {
      'value--not-good': document['7_day'] < document.target
    });

    const thirtyDaysWrapperClasses = classNames('wrapper', {
      'wrapper--not-good': document['30_day'] < document.target
    });
    const thirtyDaysLabelClasses = classNames('label', {
      'label--not-good': document['30_day'] < document.target
    });
    const thirtyDaysValueClasses = classNames('value', {
      'value--not-good': document['30_day'] < document.target
    });

    const currentWrapperClasses = classNames('wrapper', {
      'wrapper--not-good': document.current < document.target,
      'wrapper--all-good': !(document.current < document.target)
    });
    const currentLabelClasses = classNames('label', {
      'label--not-good': document.current < document.target,
      'label--all-good': !(document.current < document.target)
    });
    const currentValueClasses = classNames('value', {
      'value--not-good': document.current < document.target,
      'value--all-good': !(document.current < document.target)
    });

    const tags =
      document.tags &&
      document.tags.map(tag => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ));

    return (
      <GridItem className="slo-grid-item-tag" key={index} columnSpan={3}>
        <header className="slo-grid-item-tag__header">
          <h4 className="name">{document.name}</h4>
          <p className="indicator">
            {sloIndicatorLabelLookup({ value: document.indicator })}
          </p>
          {/* {document.description !== undefined && (
            <Tooltip
              className="document-description-button"
              text={document.description}
            >
              <Button
                sizeType={Button.SIZE_TYPE.SMALL}
                type={Button.TYPE.PLAIN_NEUTRAL}
                iconType={Button.ICON_TYPE.INTERFACE__INFO__HELP}
              />
            </Tooltip>
          )} */}

          {/* <SettingsMenu>
            <li
              className="service-settings-dropdown-item"
              onClick={() => {
                console.log('View detail');
              }}
            >
              <Icon type={Icon.TYPE.INTERFACE__INFO__INFO} />
              View details
            </li>
            <li
              className="service-settings-dropdown-item"
              onClick={() => {
                console.log('edit');
              }}
            >
              <Icon type={Icon.TYPE.INTERFACE__OPERATIONS__EDIT} />
              Edit
            </li>
            <li
              className="service-settings-dropdown-item destructive"
              onClick={() => console.log('delete')}
            >
              <Icon
                type={Icon.TYPE.INTERFACE__OPERATIONS__TRASH}
                color="#BF0016"
              />
              Delete
            </li>
          </SettingsMenu> */}
        </header>
        <div className="slo-grid-item-tag__current">
          <div className={currentWrapperClasses}>
            <p className={currentValueClasses}>{document.current}</p>
            <p className={currentLabelClasses}>Current</p>
          </div>
        </div>
        <div className="slo-grid-item-tag__sevendays">
          <div className={sevenDaysWrapperClasses}>
            <p className={sevenDaysValueClasses}>{document['7_day']}</p>
            <p className={sevenDaysLabelClasses}>7 day</p>
          </div>
        </div>
        <div className="slo-grid-item-tag__thirtydays">
          <div className={thirtyDaysWrapperClasses}>
            <p className={thirtyDaysValueClasses}>{document['30_day']}</p>
            <p className={thirtyDaysLabelClasses}>30 day</p>
          </div>
        </div>
        <div className="slo-grid-item-tag__target">
          <div className="wrapper">
            <p className="value">{document.target}</p>
            <p className="label">target</p>
          </div>
        </div>
        <div className="slo-grid-item-tag__tags">{tags}</div>
      </GridItem>
    );
  });
  return <Grid>{sloGridItems}</Grid>;
};

export default SloGridTags;

SloGridTags.propTypes = {
  data: PropTypes.array,
  toggleViewModal: PropTypes.func,
  toggleUpdateModal: PropTypes.func,
  deleteCallback: PropTypes.func
};
