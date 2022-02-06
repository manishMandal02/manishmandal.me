import React from 'react';

interface Props {
  ms?: boolean;
}

const NewLine: React.FC<Props> = ({ ms }) => {
  return (
    <span className={`${ms ? 'hidden ms:block' : 'ms:hidden'}`}>
      <br />
    </span>
  );
};

export default NewLine;
