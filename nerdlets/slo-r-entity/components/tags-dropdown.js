import React from 'react';
import PropTypes from 'prop-types';
import { Multiselect } from 'react-widgets';

const TagsDropdown = ({
  entityTags,
  selectedTags,
  handleTagChange,
  disabled
}) => {
  const convertedEntityTags = entityTags.map(
    ({ key, values }) => `${key}=${values}`
  );

  return (
    <>
      <h4 className="dropdown-label">Tags</h4>
      <Multiselect
        data={convertedEntityTags}
        value={selectedTags}
        onChange={value => {
          handleTagChange(value)();
        }}
        disabled={Boolean(disabled)}
      />
    </>
  );
};

TagsDropdown.propTypes = {
  entityTags: PropTypes.array,
  selectedTags: PropTypes.array,
  handleTagChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default TagsDropdown;
